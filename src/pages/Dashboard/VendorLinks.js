import React from "react";
import { NavLink } from "react-router-dom";
import { FoodMenu } from "styled-icons/boxicons-regular";
import { Dish } from "styled-icons/boxicons-solid";
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
    </>
  );
};

export default VendorLinks;
