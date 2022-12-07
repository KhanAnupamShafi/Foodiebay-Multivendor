import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import EmptyHeader from "../../components/Shared/EmptyHeader/EmptyHeader";
import auth from "../../firebase.init";
import MyOrders from "./MyOrders/MyOrders";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (user) {
      fetch(`https://foodiebay.onrender.com/order?email=${user.email}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => setOrders(data));
    }
  }, [user]);

  //get spent total

  useEffect(() => {
    const spentTotal = orders?.reduce(
      (r, { amount_subtotal }) => (r += amount_subtotal),
      0
    );

    setTotal(spentTotal);
  }, [orders]);
  return (
    <>
      <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">Items Order</h2>
            <span className="text-xs">All food item</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex bg-gray-50 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="bg-gray-50 outline-none ml-1 block "
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
            <div className="lg:ml-40 ml-10 space-x-8">
              <button className="bg-sky-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                Total Orders: {orders.length}
              </button>
              <button className="bg-orange-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                Spent Total: {total} ৳৳
              </button>
            </div>
          </div>
        </div>
        {orders.length < 1 ? (
          <EmptyHeader
            title="No Orders Yet !"
            subtitle="All successful orders will appear here"
          />
        ) : (
          <MyOrders orders={orders} />
        )}
      </div>
    </>
  );
};

export default MyProfile;
