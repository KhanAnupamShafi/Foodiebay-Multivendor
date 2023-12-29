import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MerchantStatus = ({ restaurantInfo, refetch }) => {
  const navigate = useNavigate();

  const handleReApply = () => {
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
        fetch(
          `https://foodiebay-multivendor-server-production.up.railway.app/restaurant?restaurantId=${restaurantInfo?.email}`,
          {
            method: 'DELETE',
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              console.log(`${restaurantInfo?.email} can repply`);

              refetch();
              navigate(0);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        Swal.fire('Application canceled');
      }
    });
  };

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="w-24">
                <label>
                  <span>Applied On</span>
                </label>
              </th>
              <th>Company Info</th>
              <th>Owner Info</th>
              <th>Vendor Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr className="hover">
              <td>
                <div className="flex items-center space-x-3">
                  <label>
                    <span>{restaurantInfo?.apply_date}</span>
                  </label>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="mask">
                    <div className="rounded-xl">
                      <img
                        src={
                          restaurantInfo?.restaurantLogo ||
                          'https://i.ibb.co/PhkSzrr/Wendys-Emblem.png'
                        }
                        alt="Avatar Tailwind CSS Component"
                        className="object-contain h-16 w-24"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      {restaurantInfo?.restaurantName}
                    </div>
                    <div className="text-sm opacity-50">
                      {restaurantInfo?.restaurantAddress}
                    </div>
                  </div>
                </div>
              </td>
              <td className="capitalize ">
                {restaurantInfo?.ownerName}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {restaurantInfo?.email}
                </span>
              </td>
              <td>
                <span
                  className={`badge badge-outline ${
                    restaurantInfo?.applicationStatus === 'pending'
                      ? 'badge-warning'
                      : 'badge-primary'
                  } gap-2 badge-lg font-bold`}>
                  {restaurantInfo?.applicationStatus === 'pending'
                    ? 'On Hold'
                    : 'approved'}
                </span>
              </td>
              <td>
                <div
                  className="tooltip tooltip-top tooltip-primary"
                  data-tip={
                    restaurantInfo?.applicationStatus === 'pending'
                      ? `Update Info`
                      : `Ask Admin to re-apply`
                  }>
                  <button
                    onClick={() => handleReApply()}
                    className="btn btn-outline btn-xs"
                    disabled={restaurantInfo?.role === 'vendor'}>
                    Re-Apply
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MerchantStatus;
