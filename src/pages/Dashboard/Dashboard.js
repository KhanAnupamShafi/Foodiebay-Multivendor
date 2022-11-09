import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import {
  LogoImage,
  NavLogo,
  ProfileImage,
} from "../../layouts/Header/Header.elements";
import DefaultPic from "../../assets/Login/default_pic.jpg";
import { Menu } from "@styled-icons/zondicons/Menu";
import { AdminPanelSettings } from "@styled-icons/material/AdminPanelSettings";
import headerLogo from "../../assets/Header/Logo2.png";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  const [admin] = useAdmin(user)
  return (
    <>
      <div className="drawer drawer-mobile  bg-lightOrange pt-2 md:pt-1 pb-1 px-1 mt-0 font-uber">
        <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-1 md:p-4 z-20">
          {/* <!-- Page content here --> */}
          <nav
            aria-label="menu nav"
            className="border-2 border-softOrange mb-6 pt-2 md:pt-1 pb-1 px-1 rounded mt-0 w-full h-auto "
          >
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                <label
                  htmlFor="dashboard-menu"
                  className="btn btn-ghost color-softOrange drawer-button lg:hidden"
                >
                  <Menu width={45} className="text-orange-400" />
                </label>
              </div>

              <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                  <li className="flex-1 md:flex-none md:mr-3">
                    <Link
                      className="inline-block py-2 px-4 text-orange-900 hover:text-orange-700 no-underline"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="flex-1 md:flex-none md:mr-3">
                    <a
                      className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                      href="/"
                    >
                      Restaurants
                    </a>
                  </li>
                  <li className="flex-2  md:flex-none md:mr-3 ">
                    <div className="relative inline-block ">
                      <button className="drop-button text-red-800 rounded py-2 px-2 bg-softOrange">
                        <span className="pr-2">
                          <i className="em em-robot_face"></i>
                        </span>{" "}
                        Hi, {user?.displayName ? user?.displayName : "user"}
                        <svg
                          className="h-3 fill-current inline"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-end">
                      <AdminPanelSettings width={24} />
                      <p className="text-right text-xs">Admin</p>
                    </div>
                  </li>
                  <li className="flex-1 md:flex-none hidden md:block md:mr-3">
                    {" "}
                    <ProfileImage>
                      <img
                        src={user?.photoURL ? user.photoURL : DefaultPic}
                        alt="..."
                        className="shadow rounded-full max-w-full h-auto align-middle border-none"
                      />
                    </ProfileImage>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-menu" className="drawer-overlay"></label>

          <ul className="menu p-4 gap-5 overflow-y-auto w-40 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <NavLogo to="/" className="pb-5">
              <LogoImage src={headerLogo} alt="Company Logo" />
            </NavLogo>
            <li>
              {" "}
              <Link to="/dashboard">My Profile</Link>{" "}
            </li>
            <li>
              {" "}

              {admin && <Link to="/dashboard/allUsers">All Users</Link>}

              {" "}

            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
