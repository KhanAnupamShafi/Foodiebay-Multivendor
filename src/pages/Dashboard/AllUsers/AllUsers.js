import React from "react";
import Loading from "../../../components/Shared/Loading/Loading";
import { useQuery } from "react-query";
import UsersRow from "./UsersRow";

const AllUsers = () => {
  // React Query....
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://foodiebay.onrender.com/allUsers").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-2xl">All USERS Are Displayed Below</h1>
      <p className="text-2xl">all users:{users.length}</p>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Create (Super Admin) & (Reataurant Vendor) </th>
              <th>Delete Users</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UsersRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              ></UsersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
