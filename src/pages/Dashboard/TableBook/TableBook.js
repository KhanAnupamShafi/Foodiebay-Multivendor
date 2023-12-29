import { nanoid } from 'nanoid';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import BookedTable from '../../../assets/Restaurant/reserved.jpg';
import EmptyTable from '../../../assets/Restaurant/table.jpg';
import EmptyHeader from '../../../components/Shared/EmptyHeader/EmptyHeader';
import Loading from '../../../components/Shared/Loading/Loading';

import { DeleteOff } from 'styled-icons/fluentui-system-regular';
import { Time } from 'styled-icons/remix-line';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';

const TableBook = () => {
  const [user] = useAuthState(auth);
  const {
    data: restaurantInfo,
    isLoading,
    refetch,
  } = useQuery(['Restaurant', user?.email], () =>
    fetch(
      `https://foodiebay-multivendor-server-production.up.railway.app/restaurant?restaurantId=${user?.email}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  let table = {
    booked: false,
    id: nanoid(),
  };
  const handleAddTable = () => {
    const uri = `https://foodiebay-multivendor-server-production.up.railway.app/table-add/${user.email}`;
    fetch(uri, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(table),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          toast.success(`New Table Added Successfully`);
          refetch();
        } else {
          toast.error(`Failed! Try Again`);
        }
      });
  };
  const uri = `https://foodiebay-multivendor-server-production.up.railway.app/table/${restaurantInfo?.restaurant_id}`;
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      iconColor: '#e7272d',
      background: '#FEF4F7',
      showCancelButton: true,
      confirmButtonColor: '#3084dd',
      cancelButtonColor: '#e7272d',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(uri, {
          method: 'DELETE',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ id }),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.modifiedCount > 0) {
              toast.success(`Table Deleted Successfully`);
              refetch();
            } else {
              toast.warning(`No table data`);
            }
          });
      } else {
        Swal.fire('Process canceled');
      }
    });
  };

  const handleCancelBooking = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      iconColor: '#e7272d',
      background: '#FEF4F7',
      showCancelButton: true,
      confirmButtonColor: '#3084dd',
      cancelButtonColor: '#e7272d',
      confirmButtonText: 'Yes, cancel it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(uri, {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ id }),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.modifiedCount > 0) {
              toast.success(`Booking canceled Successfully`);
              refetch();
            } else {
              toast.warning(`No booking data`);
            }
          });
      } else {
        Swal.fire('Process canceled');
      }
    });
  };
  return (
    // <!-- component -->
    <>
      <div className="flex flex-row  items-center">
        <div className="flex-1 inline-flex justify-center items-center">
          <button
            onClick={handleAddTable}
            className="flex-no-shrink btn btn-wide bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
            Add Table
          </button>
        </div>
      </div>
      {restaurantInfo?.tables?.length < 1 && (
        <EmptyHeader
          title="No Table Exists"
          subtitle="You Can Add table by clicking the 'ADD TABLE' button"
        />
      )}
      <div className="flex flex-wrap items-center justify-center xl:justify-start basis-full bg-center bg-cover mx-auto">
        {/* <!-- tABLE --> */}
        {restaurantInfo?.tables?.map((table) => (
          <div key={table.id} className=" z-10">
            <div className="bg-black opacity-80 inset-0 z-0"></div>
            <div className="flex flex-col">
              <div className="bg-gray-900 border border-gray-900 shadow-lg  rounded-3xl p-4 m-4">
                <div className="flex-none sm:flex">
                  <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                    <img
                      src={table?.customer ? BookedTable : EmptyTable}
                      alt="table available"
                      className=" w-32 h-32 object-cover rounded-2xl"
                    />
                    <button
                      onClick={() => handleDelete(table?.id)}
                      className="absolute -right-2 bottom-2 cursor-pointer -ml-3 text-white p-1 text-xs bg-red-400 hover:bg-red-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                      <DeleteOff size={20} />
                    </button>
                  </div>
                  <div className="flex-auto flex flex-col sm:ml-5 justify-evenly">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-between sm:mt-2">
                        <div className="flex items-center">
                          <div className="flex flex-col">
                            <div className="w-full text-left flex-none text-lg text-gray-200 font-bold leading-none">
                              {table?.customer?.name || 'No customer'}
                            </div>
                            <div className="flex-auto text-gray-400 my-1">
                              <span className="mr-3 ml-1">
                                {table?.customer?.mobile ||
                                  '---mobile no---'}
                              </span>
                              <span className="mr-3 border-r border-gray-600 align-middle max-h-0"></span>
                              <span className="">
                                {table?.customer?.reserveDate ||
                                  'xxxx-xx-xx'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 inline-flex justify-end items-center">
                        {table?.customer ? (
                          <button
                            onClick={() =>
                              handleCancelBooking(table?.id)
                            }
                            className="flex-no-shrink btn btn-primary hover:bg-green-500 px-10 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                            --Reserved--
                          </button>
                        ) : (
                          <button className="flex-no-shrink btn btn-warning hover:bg-yellow-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-orange-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                            Empty Table
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="flex pt-2  text-sm text-gray-400">
                      <div className="flex-1 inline-flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>
                        <p className="">
                          {table?.customer?.guest} Guest
                        </p>
                      </div>
                      <div className="inline-flex items-center">
                        <Time size={20} />
                        <p className="">
                          {table?.customer?.time ||
                            '00:00 am - 00:00 pm'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <!-- defualt theme --> */}
      </div>
    </>
  );
};

export default TableBook;
