import React, { useState } from "react";
import { toast } from 'react-toastify';

const UsersRow = ({ user, index, refetch }) => {
  const { _id, email, role } = user;

  // Make (Admin)...
  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'content-type': 'application/json'
      },

    })
      .then(res => res.json())


      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          refetch()
          toast.success('Successfully Make an Admin')
        }
      })
  }

  // Delete Users.....
  const [users, setUsers] = useState([])
  console.log(users)
  const handleDeleteUser = id => {
      const proceed = window.confirm('Are you sure to Delete Device')
      if (proceed) {
          fetch(`http://localhost:5000/deleteUsers/${id}`, {
              method: 'DELETE',
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data)
                  const remaining = users.filter(user => user._id !== id)
                  console.log(remaining)
                  refetch()
                  setUsers(remaining)
              })
      }
  }

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            {/* <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div> */}
          </div>
          <div>
            <div className="font-bold">{email}</div>
          </div>
        </div>
      </td>
      <td className="font-bold">
        <div>
          {
            (role !== 'admin')
              ?
              <button onClick={makeAdmin} class="btn btn-xs text-warning">Make Admin</button>
              : "ADMIN"
          }
        </div>
      </td>
      <td>
        <button onClick={() => handleDeleteUser(_id)} class="btn btn-xs text-warning">Delete user</button>
      </td>
    </tr>
  );
};

export default UsersRow;
