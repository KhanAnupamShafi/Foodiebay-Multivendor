import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import EmptyHeader from "../../../components/Shared/EmptyHeader/EmptyHeader";
import Loading from "../../../components/Shared/Loading/Loading";

const AllVendors = () => {
  const {
    data: vendors,
    isLoading,
    refetch,
  } = useQuery([`restaurants`], () =>
    fetch(`http://localhost:5000/restaurants/vendor`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleRemove = (email) => {
    fetch(`http://localhost:5000/restaurant/vendor/${email}`, {
      method: "DELETE",
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
          toast.success(`${email} removed from Vendors!`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {vendors.length === 0 ? (
        <EmptyHeader
          title="No Vendors Yet"
          subtitle="When you approve vendors request, it will appear here"
        />
      ) : (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Company Info
                </th>
                <th scope="col" className="py-3 px-6">
                  Owner Info
                </th>
                <th scope="col" className="py-3 px-6 w-28">
                  Vendor Status
                </th>
                <th scope="col" className="py-3 px-6 w-28">
                  Date Applied
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((data) => (
                <tr
                  key={data._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="py-1 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="mask bg-accent">
                        <div className="rounded-xl">
                          <img
                            src={
                              data.restaurantLogo ||
                              "https://i.ibb.co/PhkSzrr/Wendys-Emblem.png"
                            }
                            alt="Avatar Tailwind CSS Component"
                            className="object-contain h-16 w-24"
                          />
                        </div>
                      </div>
                      {data.restaurantName}
                    </div>
                  </th>
                  <td className="py-1 px-3">
                    <span className="dark:text-white">Name: </span>
                    {data.ownerName}
                    <br />
                    <span className="badge badge-ghost badge-sm mt-2">
                      {data.email}
                    </span>
                  </td>
                  <td className="py-1 px-3 ">
                    <span className="badge badge-primary gap-2 badge-md">
                      {data.applicationStatus === "pending"
                        ? "On Hold"
                        : "approved"}
                    </span>
                  </td>
                  <td className="py-1 px-3 ">{data.date}</td>
                  <td className="py-1 px-3  text-center">
                    <button
                      onClick={() => handleRemove(data?.email)}
                      className="btn btn-sm bg-warning btn-outline rounded-full"
                    >
                      Remove Access?
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AllVendors;
