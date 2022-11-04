import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile" style={{ "backgroundColor": "#2A8C82" }}>
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl font-extrabold text-center mb-5'>WECOME TO DASHBOARD</h2>
                <Outlet></Outlet>
                {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80  text-base-content font-bold">
                    {/* <!-- Sidebar content here --> */}
                    <li> <Link to='/dashboard'>My Profile</Link> </li>
                    <li> <Link to='/dashboard/allUsers'>All Users</Link> </li>
                    {/* <li> <Link to='/dashboard/payment'>Payment</Link> </li> */}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;