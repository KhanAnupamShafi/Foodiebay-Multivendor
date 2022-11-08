import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DefaultPic from "../../assets/Login/default_pic.jpg";
import headerLogo from "../../assets/Header/Logo1.png";
import { ChevronDown } from "@styled-icons/entypo/ChevronDown";
import {
  NavContainer,
  CartBtn,
  Logo,
  LeftNav,
  RightNav,
  ListItem,
  NavOverlay,
  BookingBtn,
  RegisterBtn,
  MobileIcon,
  NavMenu,
  NavItemBtn,
  NavLogo,
  UserNavContainer,
  UserProfile,
  ProfileImage,
} from "./Header.elements";

import { Menu3, Close } from "styled-icons/remix-line";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { ShoppingCartOutline } from "@styled-icons/evaicons-outline/ShoppingCartOutline";

const Header = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  const logout = () => {
    signOut(auth);
  };
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <NavContainer>
        <NavLogo to="/" onClick={closeMobileMenu}>
          <Logo src={headerLogo} alt="Company Logo" />
        </NavLogo>

        <LeftNav>
          <NavMenu onClick={handleClick} click={click}>
            <ListItem>
              <NavLink end to="/" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/menu" onClick={closeMobileMenu}>
                Menu
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/restaurants" onClick={closeMobileMenu}>
                Restaurants
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/contact" onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/blog" onClick={closeMobileMenu}>
                Blog
              </NavLink>
            </ListItem>

            <NavItemBtn>
              {!button && (
                <>
                  <ListItem>
                    <NavLink to="/book">
                      <BookingBtn>Book A table</BookingBtn>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    {user ? (
                      <RegisterBtn user onClick={logout}>
                        Sign Out
                      </RegisterBtn>
                    ) : (
                      <Link to="/signup">
                        <RegisterBtn>Sign Up</RegisterBtn>
                      </Link>
                    )}
                  </ListItem>
                </>
              )}
            </NavItemBtn>
          </NavMenu>
        </LeftNav>
        <RightNav>
          <Link to="/signup">
            <BookingBtn>Book A table</BookingBtn>
          </Link>
          {user ? (
            <RegisterBtn user onClick={logout}>
              Sign Out
            </RegisterBtn>
          ) : (
            <Link to="/signup">
              <RegisterBtn>Sign Up</RegisterBtn>
            </Link>
          )}
        </RightNav>
        <MobileIcon onClick={handleClick}>
          {!click ? <Menu3 size="48" /> : <Close size="48" />}
        </MobileIcon>
      </NavContainer>
      <NavOverlay></NavOverlay>
      {user && (
        <UserNavContainer>
          <div className="grid z-10 flex-grow  bg-slate-200  place-items-center p-1">
            <UserProfile>
              <ProfileImage>
                <img
                  src={user?.photoURL ? user.photoURL : DefaultPic}
                  alt="..."
                  className="shadow rounded-full max-w-full h-auto align-middle border-none"
                />
              </ProfileImage>
              <p className="px-1 font-bold text-slate-600">
                {user?.displayName ? user?.displayName : "user"}
              </p>

              <div className="dropdown dropdown-end">
                <button
                  tabIndex={0}
                  className="btn btn-circle btn-ghost btn-sm"
                >
                  <ChevronDown width={24} height={24} />
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content mt-4 menu p-2 gap-2 shadow bg-slate-100 rounded w-52"
                >
                  <li>
                    <Link to="/dashboard" className="p-0">
                      <button className="btn btn-ghost btn-block">
                        Profile
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders" className="p-0">
                      <button className="btn btn-ghost btn-block">
                        Orders
                      </button>
                    </Link>
                  </li>
                  <li>
                    <button
                      className="btn btn-outline btn-error"
                      onClick={logout}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </UserProfile>
          </div>
          <div className="divider divider-horizontal p-0 m-0"></div>
          <div className="grid z-10 flex-grow  bg-slate-300  place-items-center p-1">
            <CartBtn>
              <ShoppingCartOutline width={42} />
            </CartBtn>
          </div>
        </UserNavContainer>
      )}
    </>
  );
};

export default Header;
