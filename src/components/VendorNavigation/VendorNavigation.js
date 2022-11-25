import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const VendorNavigation = ({ store }) => {
  console.log(store);
  return (
    <VendorNav>
      <NavContainer>
        <DishMenu>
          <ul className="nav-menu">
            {store?.menu.map((label) => (
              <CategoryName key={label}>
                <Link
                  to={label}
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                >
                  {label}
                </Link>
              </CategoryName>
            ))}
          </ul>
        </DishMenu>
      </NavContainer>
    </VendorNav>
  );
};

export default VendorNavigation;

const VendorNav = styled.section`
  background-color: #ffffff;
  box-shadow: 0 0.2rem 1rem rgb(0 0 0 / 12%);
  overflow: hidden;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
`;
const NavContainer = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  align-items: center;
`;
const DishMenu = styled.div`
  /* flex: 1 1 auto; */
  overflow-x: auto;
  position: relative;
  vertical-align: baseline;
  ul {
    display: inline-flex;
    gap: 15px;
    flex-wrap: nowrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
    transition: transform 0.2s;
  }
`;
const CategoryName = styled.li`
  /* flex: 1 0 auto; */
  text-transform: uppercase;
  white-space: nowrap;
  padding: 6px 2px;

  a {
    display: inline-block;
    align-items: center;
    color: #333333;
    display: flex;
    font-size: 1rem;
    font-weight: 300;
    height: 64px;
    justify-content: center;
    letter-spacing: 0.1px;
    line-height: 64px;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transform: translateZ(0);
    cursor: pointer;
    transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:before {
      display: block;
      /* content: attr(title); */
      font-weight: 700;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }

    &:after {
      background-color: #e21b70;
      bottom: 0;
      content: "";
      height: 2px;
      left: 0;
      position: absolute;
      right: 0;
      transform: translateY(2px);
      transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    &:hover {
      text-shadow: 0 0 0.01px #333333;

      &:after {
        transform: translateY(0);
      }
    }
  }
`;
