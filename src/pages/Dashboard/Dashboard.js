import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
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

import styled, { keyframes } from "styled-components";
import { DashboardCustomize, Restaurant } from "styled-icons/material";
import { HouseChimneyUser } from "styled-icons/fa-solid";
import { UserGroup } from "styled-icons/heroicons-outline";
import { ClipboardCheck } from "styled-icons/heroicons-solid";
import useVendorAccess from "../../hooks/useVendor";
import { Dish } from "styled-icons/boxicons-regular";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  const [admin] = useAdmin(user);
  const [vendorAdmin] = useVendorAccess(user);
  // console.log(vendorAdmin, "vendor");
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
                  <div className="flex w-full content-center justify-between  md:justify-end">
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                      <li className="flex-1 md:flex-none md:mr-3">
                        <Menu width={45} className="text-orange-400" />
                      </li>
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
                    </ul>
                  </div>
                </label>
              </div>

              <div className="flex pt-2 content-center justify-between md:w-1/3 md:justify-end">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                  <li className="flex-2 md:flex-none md:mr-3 ">
                    <div className="relative inline-block w-full">
                      <button className="drop-button text-base-900 rounded py-2 px-2 bg-softOrange">
                        <Emoji>
                          <span
                            className="pr-1 emoji wave"
                            role="img"
                            aria-label="hand wave"
                          >
                            👋
                          </span>
                          Hi, {user?.displayName ? user?.displayName : "user"}
                          <svg
                            className="h-3 fill-current inline"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </Emoji>
                      </button>
                    </div>
                    {admin && (
                      <div className="flex items-center justify-end pt-1 font-bold">
                        <AdminPanelSettings color="#473125" width={24} />
                        <p className="text-right text-xs">Admin</p>
                      </div>
                    )}
                    {vendorAdmin && (
                      <div className="flex items-center justify-end pt-1 font-bold">
                        <AdminPanelSettings color="#473125" width={24} />
                        <p className="text-right text-xs">Vendor Admin</p>
                      </div>
                    )}
                  </li>
                  <li className="flex-1 md:flex-none hidden md:block md:mr-3">
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

          <DashboarLinks className="menu p-3 overflow-y-auto w-40 content-center text-center bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <div className="text-sm text-center">
              <NavLogo to="/" className="pb-5">
                <LogoImage src={headerLogo} alt="Company Logo" />
              </NavLogo>
              <li>
                <NavLink
                  end
                  className={(navData) =>
                    navData.isActive ? "active" : "linkstyle"
                  }
                  to="/dashboard"
                >
                  <DashboardCustomize width={26} />
                  <span>My Profile</span>
                </NavLink>
              </li>

              {admin && (
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "active" : "linkstyle"
                    }
                    to="/dashboard/make_vendor"
                  >
                    <Restaurant width={26} />
                    <span>Make Vendor</span>
                  </NavLink>
                </li>
              )}

              {admin && (
                <li>
                  <NavLink to="/merchants">
                    <ClipboardCheck width={26} />
                    <span>Vendor Status</span>
                  </NavLink>
                </li>
              )}

              {admin && (
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "active" : "linkstyle"
                    }
                    to="/dashboard/all_vendor"
                  >
                    <HouseChimneyUser width={26} />
                    <span> All Vendors</span>
                  </NavLink>
                </li>
              )}

              {admin && (
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "active" : "linkstyle"
                    }
                    to="/dashboard/all_user"
                  >
                    <UserGroup width={26} />
                    <span>All Users</span>
                  </NavLink>
                </li>
              )}
              {vendorAdmin && (
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "active" : "linkstyle"
                    }
                    to="/dashboard/menu_list"
                  >
                    <Dish width={26} />
                    <span>Menu List</span>
                  </NavLink>
                </li>
              )}
            </div>
          </DashboarLinks>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

const twoFrames = keyframes`
0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Emoji = styled.div`
  display: flex;
  align-items: center;
  .emoji {
    font-size: 20px;
    /* margin: 0.1em 0.2em; */
    text-align: center;
  }
  .emoji::after {
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .wave {
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-name: ${twoFrames};
    display: inline-block;
    transform-origin: 70% 70%;
  }
`;
const DashboarLinks = styled.ul`
  li {
    padding-bottom: 20px;
    .linkstyle {
      text-decoration: none;
      color: black;
      transition: all 0.5s ease;
    }

    .active {
      text-decoration: none;
      color: #473125;
      background-color: #fcdece;
    }
    a {
      gap: 2px;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
