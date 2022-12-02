import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../../components/Shared/Loading/Loading";
import auth from "../../../firebase.init";

const AllOrders = () => {
  const [user] = useAuthState(auth);
  const { data: restaurantInfo } = useQuery(["Restaurant", user.email], () =>
    fetch(`http://localhost:5000/restaurant?restaurantId=${user.email}`).then(
      (res) => res.json()
    )
  );

  const {
    data: allOrders,
    isLoading,
    refetch,
  } = useQuery([`orders`, restaurantInfo?.restaurant_id], () =>
    fetch(`http://localhost:5000/order/${restaurantInfo?.restaurant_id}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleDelivery = (id) => {
    console.log(id);

    fetch(`http://localhost:5000/deliver/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Forbidden Request`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Delivered Item !!`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="font-sans">
      <div className="py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Ordered at
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Sub Total
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Order Status
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Delivery Status
                </th>
              </tr>
            </thead>
            <tbody>
              {allOrders?.map((order, index = 0) => (
                <tr key={order?._id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="bg-sky-300 text-zinc-50 font-bold flex-shrink-0 w-10 h-10 border rounded-full flex items-center justify-center">
                        {index + 1}.
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium leading-none text-gray-700 mr-2 font-sans">
                          {order?.user}
                        </p>
                        <p className="text-gray-500 font-light whitespace-no-wrap font-bold text-left mt-1">
                          email:
                          <span className="text-xs"> {order?.email}</span>
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex flex-col">
                      {order.cartItems.map((item) => (
                        <div key={item._id} className="text-left">
                          <p className="text-slate-600 whitespace-no-wrap font-bold">
                            {item.name}{" "}
                          </p>
                          <span className="text-gray-900 text-xs opacity-50">
                            (Qty: {item.quantity})
                          </span>
                          <span className="text-gray-500 font-light whitespace-no-wrap font-bold text-left">
                            {/* ৳ {item.value}{" "} */}
                            <span className="text-xs">
                              {/* ({item.price} per item) */}
                            </span>
                          </span>
                          {order?.cartItems?.length > 1 && (
                            <div className="divider m-0"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {order?.orderDate}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-slate-700 font-bold whitespace-no-wrap">
                      ৳ {order.amount_subtotal}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className={`absolute inset-0 opacity-50 rounded-full ${
                          order?.delivered ? "bg-green-200" : "bg-yellow-200"
                        }`}
                      ></span>
                      {order?.delivered ? (
                        <span className="relative">Delivered</span>
                      ) : (
                        <span className="relative">Pending</span>
                      )}
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-2 py-2 font-semibold text-pink-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-slate-300 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">
                        <button
                          onClick={() => handleDelivery(order?.order_id)}
                          className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-3 bg-gray-100 rounded-full hover:bg-green-200 focus:outline-none"
                        >
                          Deliver Now
                        </button>
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
