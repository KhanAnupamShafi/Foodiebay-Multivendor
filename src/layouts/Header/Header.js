import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import headerLogo from "../../assets/Header/Logo1.png";
import {
  NavContainer,
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
} from "./Header.elements";

import { Menu3, Close } from "styled-icons/remix-line";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {

  const [user] = useAuthState(auth);
  console.log(user)
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
            <ListItem>
              {
                user ?
                  <button onClick={logout} className='btn btn-warning'>SignOut</button>
                  :
                  <NavLink to="/signin" onClick={closeMobileMenu}>
                    Signin
                  </NavLink>
              }
              {/* <NavLink to="/signin" onClick={closeMobileMenu}>
                Signin
              </NavLink> */}
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
                    <Link to="/signup">
                      <RegisterBtn>Sign Up</RegisterBtn>
                    </Link>
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
          <Link to="/signup">
            <RegisterBtn>Sign Up</RegisterBtn>
          </Link>
        </RightNav>
        <MobileIcon onClick={handleClick}>
          {!click ? <Menu3 size="48" /> : <Close size="48" />}
        </MobileIcon>
      </NavContainer>
      <NavOverlay></NavOverlay>
    </>
  );
};

export default Header;
