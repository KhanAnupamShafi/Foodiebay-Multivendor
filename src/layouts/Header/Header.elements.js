import { Link } from "react-router-dom";
import styled from "styled-components";
import nav_pattern from "../../assets/Header/nav_pattern.png";

export const NavContainer = styled.nav`
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
export const NavMenu = styled.ul`
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 110px;

    left: ${({ click }) => (click ? 0 : "-100%")};

    justify-content: center;
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const UserNavContainer = styled.nav`
  position: absolute;
  top: 100px;
  right: 2px;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: #e2e8f0;
  color: gray;
  padding: 4px;
  border-radius: 5px;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li`
  list-style: none;
  display: inline-block;
  margin-left: 40px;

  @media screen and (max-width: 960px) {
    /* margin-left: 40px; */
    /* width: 100%; */
    margin: 0;

    height: 80px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    position: relative;
    transition: all 0.3s ease-out;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    &.active {
      color: #ffffff;
      border-bottom: 2px solid #e7272d;
      padding-bottom: 4px;
    }

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
        animation: fadeIn 700ms ease-out forwards;
      }
    }
  }
`;

export const NavOverlay = styled.div`
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

export const Logo = styled.img`
  height: 100px;
`;
export const LogoImage = styled.img`
  height: 100px;
`;
export const LeftNav = styled.div`
  margin-left: 2rem;
`;
export const RightNav = styled.div`
  margin-left: auto;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItemBtn = styled.div`
  /* display: none; */
`;

export const BookingBtn = styled.button`
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
export const RegisterBtn = styled.button`
  padding: 10px 18px 10px 18px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  border: ${(props) =>
    props.user ? "2px solid #e7272d" : "2px solid #ffffff"};
  background-color: transparent;
  background-repeat: no-repeat;
  outline: none;
  border-radius: 0px 0px 0px 0px;
  vertical-align: middle;
  text-align: center;
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
  a {
    text-decoration: none;
    color: #ffffff;
  }
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
    border-top: ${(props) =>
      props.user ? "2px solid #e7272d" : "2px solid #ffffff"};
    right: 0;
    top: -4px;
  }
  &:after {
    border-bottom: ${(props) =>
      props.user ? "2px solid #e7272d" : "2px solid #ffffff"};
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

export const MobileIcon = styled.div`
  display: none;
  color: #fff;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const CartBtn = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  display: block;
  min-width: 64px;
  padding: 0 5px;
  position: relative;
  z-index: 2;
  color: red;
  transition: background-color 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    color 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;
export const UserProfile = styled.div`
  display: flex;
  place-items: center;
  cursor: pointer;
`;
export const ProfileImage = styled.div`
  width: 42px;
  height: 42px;
  margin: 0 5px;
`;
