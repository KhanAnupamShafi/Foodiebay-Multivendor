import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import headerLogo from "../../assets/Header/Logo1.png";
import nav_pattern from "../../assets/Header/nav_pattern.png";

const Header = () => {
  return (
    <>
      <NavContainer>
        <Logo src={headerLogo} alt="Company Logo" />

        <LeftNav>
          <ul>
            <ListItem>
              <NavLink to="/home">Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/home">Menu</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/home"> Restaurants</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/home">Contact</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/home">Blog</NavLink>
            </ListItem>
          </ul>
        </LeftNav>
        <RightNav>
          <BookingBtn>Book A table</BookingBtn>
          <RegisterBtn>Sign Up</RegisterBtn>
        </RightNav>
      </NavContainer>
      <NavOverlay></NavOverlay>
    </>
  );
};

export default Header;

const NavContainer = styled.nav`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15%;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: #10101058;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #7070708a;
  z-index: 2;
`;
const ListItem = styled.li`
  list-style: none;
  display: inline-block;
  margin-left: 40px;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      bottom: -5px;
      right: 0;
      width: 0;
      height: 2px;
      background-color: #e7272d;
      transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover::before {
        left: 0;
        right: auto;
        width: 100%;
      }
    }
  }
`;
const NavOverlay = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 3;
  background-image: url(${nav_pattern});
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  /* height: 92px; */
  width: 100%;
  height: 35px;
`;

const Logo = styled.img`
  height: 100px;
`;
const LeftNav = styled.div`
  margin-left: 2rem;
`;
const RightNav = styled.div`
  margin-left: auto;
`;

const BookingBtn = styled.button`
  padding: 12px 20px 12px 20px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #e7272d;
  border-style: none;
  border-radius: 0px 0px 0px 0px;
  vertical-align: middle;
  text-align: center;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em #e7272d;
    transform: translateY(-0.25em);
  }
`;
const RegisterBtn = styled.button`
  padding: 10px 18px 10px 18px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  border: 2px solid #ffffff;
  background-color: transparent;
  background-repeat: no-repeat;
  outline: none;
  border-radius: 0px 0px 0px 0px;
  vertical-align: middle;
  text-align: center;
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
  &:before,
  &:after {
    border: 0 solid transparent;
    transition: all 0.3s;
    content: "";
    height: 0;
    position: absolute;
    width: 24px;
  }

  &:before {
    border-top: 2px solid #fff;
    right: 0;
    top: -4px;
  }
  &:after {
    border-bottom: 2px solid #fff;
    bottom: -4px;
    left: 0;
  }

  &:hover {
    &:before,
    &:after {
      width: 100%;
    }
  }
`;
