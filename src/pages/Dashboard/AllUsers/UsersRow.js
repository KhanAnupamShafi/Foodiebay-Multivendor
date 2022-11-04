import React from 'react';

const UsersRow = ({user,index}) => {
    const {_id,email}=user

    return (
        <tr>
        <th>{index+1}</th>
        <td>
            <div class="flex items-center space-x-3">
                <div class="avatar">
                    {/* <div class="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div> */}
                </div>
                <div>
                    <div class="font-bold">{email}</div>
                </div>
            </div>
        </td>
        <td>
            Zemlak, Daniel and Leannon
        </td>
        <td>Purple</td>
    </tr>
    );
};

export default UsersRow;