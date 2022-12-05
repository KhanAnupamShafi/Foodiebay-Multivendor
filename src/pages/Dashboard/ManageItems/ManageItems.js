import { XboxConsoleDimensions } from '@styled-icons/fluentui-system-filled/XboxConsole';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../../components/Shared/Loading/Loading';
import auth from '../../../firebase.init';

const ManageItems = () => {
    const [user] = useAuthState(auth);
    const [menu, setMenus] = useState([]);
    console.log(user)
    console.log("user email", user?.email)
    const {
        data: menus,
        isLoading,
        refetch,
    } = useQuery([`menus`], () =>
        fetch(`http://localhost:5000/menus/${user?.email}`).then((res) => res.json())
    );

    console.log(menus)

    if (isLoading) {
        return <Loading></Loading>;
    }

    // Delete Menus.....
    // console.log(users);
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to Delete this User");
        if (proceed) {
            fetch(`http://localhost:5000/deleteMenus/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = menu.filter((data) => data._id !== id);
                    console.log(remaining);
                    refetch();
                    setMenus(remaining);
                });
        }
    }

    return (
        <>
            {/* {vendors.length === 0 ? (
        <EmptyHeader
          title="No Vendors Yet"
          subtitle="When you approve vendors request, it will appear here"
        />
      ) : ( */}
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Menu Image
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Menu Name
                            </th>
                
                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus?.map((data) => (
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
                                                        data.image ||
                                                        "https://i.ibb.co/PhkSzrr/Wendys-Emblem.png"
                                                    }
                                                    alt="Avatar Tailwind CSS Component"
                                                    className="object-contain h-16 w-24"
                                                />
                                            </div>
                                        </div>
                                        {data?.restaurantInfo?.restaurantName}
                                    </div>
                                </th>
                                <td className="py-1 px-3">
                                    <span className="dark:text-white"></span>
                                    {data.name}
                                    <br />
                                    {/* <span className="badge badge-ghost badge-sm mt-2">
                                        {data.email}
                                    </span> */}
                                </td>
                                {/* <td className="py-1 px-3 "></td> */}
                                <td className="py-1 px-3  text-center">
                                    <button
                                        onClick={() => handleDelete(data?._id)}
                                        className="btn btn-sm bg-warning btn-outline rounded-full"
                                    >
                                        Remove Menu?
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default ManageItems;