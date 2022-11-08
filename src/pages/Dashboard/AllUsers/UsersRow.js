import React from "react";

const UsersRow = ({ user, index }) => {
  const { _id, email } = user;

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
      <td>Zemlak, Daniel and Leannon</td>
      <td>Purple</td>
    </tr>
  );
};

export default UsersRow;
