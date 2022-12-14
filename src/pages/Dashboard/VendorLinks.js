import React from "react";
import { NavLink } from "react-router-dom";
import { FoodMenu } from "styled-icons/boxicons-regular";
import { Dish } from "styled-icons/boxicons-solid";
import { Delete, FoodBank } from "styled-icons/material";
import { DeliveryDining } from "styled-icons/material-rounded";

const VendorLinks = () => {
  return (
    <>
      <div className="divider">Admin</div>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "linkstyle")}
          to="/dashboard/menu_list"
        >
          <FoodMenu width={26} />
          <span>Menu List</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "linkstyle")}
          to="/dashboard/add_menu"
        >
          <Dish width={26} />
          <span>Add Menu Item</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "linkstyle")}
          to="/dashboard/all_order"
        >
          <DeliveryDining width={26} />
          <span>Order Delivery</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "linkstyle")}
          to="/dashboard/table_book"
        >
          <FoodBank width={26} />
          <span>Table Booking</span>
        </NavLink>
      </li>
      <li>
                <NavLink
                    className={(navData) => (navData.isActive ? "active" : "linkstyle")}
                    to="/dashboard/manage_items"
                >
                    <Delete width={26} />
                    <span>Manage Items</span>
                </NavLink>
            </li>
    </>
  );
};

export default VendorLinks;
