import styled from "styled-components";
import { UserNavContainer } from "../../layouts/Header/Header.elements";

export const Container = styled.div`
  nav {
    position: relative !important;
    background-image: url(https://demo.themewinter.com/wpsite/cafesio/wp-content/uploads/2020/11/banner.jpg);
    background-size: cover;
    padding-top: 15px;
  }
  ${UserNavContainer} {
    position: fixed !important;
    top: 30px;
    right: 0px;
    margin-left: auto;
    /* margin-bottom: -102px; */
    /* width: 152px; */
    background-image: none !important;
    padding-top: 0 !important;
    /* z-index: 100; */
    @media only screen and (max-width: 960px) {
      right: 0;
    }
  }
`;

export const RestaurantContainer = styled.section`
  width: 100%;
  flex: 1 1 auto;
  @media only screen and (min-width: 1184px) {
    width: calc(100% - 352px);
  }
`;
export const Box = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 64px 16px 0px;
  text-align: left;
`;

export const BoxContainer = styled.div`
  @media only screen and (max-width: 1184px) {
    width: 100%;
  }
  min-height: 100vh;
  width: calc(100vw - 352px);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;
export const BannerBox = styled.div`
  /* max-width: 1060px; */
  height: 300px;
  position: relative;
  /* overflow: hidden; */
  margin-top: 16px;
`;
export const VendorBanner = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  height: 250px;

  img {
    width: 100%;
    height: 250px;
    /* max-width: 960px; */
    object-fit: cover;
    object-position: 100% 60%;
  }
`;

export const VendorLogo = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 12px;
  left: 16px;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 8px;
  div {
    height: 76px;
    position: absolute;
    left: 0px;
    top: 0px;
    border-radius: 50%;
    overflow: hidden;
    img {
      object-fit: contain;
      object-position: 50% 50%;
      width: 100%;
      height: 100%;
    }
  }
`;

export const VendorInfo = styled.div`
  position: relative;
  margin: 0px auto;
  padding-bottom: 24px;
  h1 {
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.04ch;
    text-transform: none;
    color: rgb(25, 25, 25);
    margin: 0px;
    padding: 0px;
    display: block;
    font-variant-ligatures: no-common-ligatures;
  }
`;
export const VendorButton = styled.div`
  button {
    position: relative;
    max-width: 100%;
    margin: 0px;
    padding: 0px;
    display: inline-flex;
    min-height: 32px;
    width: auto;
    align-items: center;
    justify-content: flex-start;
    border-radius: 1000px;
    border: none;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out 0s,
      box-shadow 0.15s ease-in-out 0s;
    user-select: none;
    text-decoration: none;
    text-align: center;
    background-color: rgb(231, 231, 231);
    box-shadow: rgb(231 231 231) 0px 0px 0px 1px inset;
    color: rgb(25, 25, 25);
    &:hover {
      background-color: rgb(214, 214, 214);
      box-shadow: rgb(214 214 214) 0px 0px 0px 1px inset;
      color: rgb(25, 25, 25);
    }
    span {
      display: block;
      flex-grow: 1;
      max-width: 100%;
      transition: opacity 0.15s ease-in-out 0s;
      opacity: 1;
      padding: 0px 8px;
      span {
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
      }
    }
  }
`;
export const VendorDetails = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 8px;
  p {
    font-weight: 600;
    font-size: 1rem;
    color: #ffb413;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
export const Adressbar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;

  p {
    font-weight: 300;
    font-size: 1.1rem;
    color: rgb(118, 118, 118);
    vertical-align: baseline;
  }
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0ch;
    text-transform: none;
    color: rgb(118, 118, 118);
    margin: 0px;
    padding: 0px 5px;
    display: block;
    font-variant-ligatures: no-common-ligatures;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
export const VendorOpen = styled.div`
  background-color: #fcc54c;
  color: #2b3035;
  border-radius: 8px;
  height: 24px;
  margin: 0 4px;
  min-width: 70px;
  padding: 0 2px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Uber", sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
  }
`;
export const VendorTags = styled.div`
  background: #e03000;
  border-radius: 9999px;
  padding: 0.1rem 0.4rem;
  color: #fff;
  span {
    font-size: 14px;
    line-height: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
  }
`;

export const Seperator = styled.div`
  vertical-align: center;
  background-color: #767676;
  border-radius: 50%;
  height: 4px;
  margin-left: 4px;
  margin-right: 4px;
  width: 4px;
`;

export const Aside = styled.aside`
  /* margin-top: 102px; */
  margin-bottom: -102px;
  top: 110px;
  width: 352px;
  box-shadow: 0 0.3rem 2rem rgb(0 0 0 / 10%);
  z-index: 300;
  @media screen and (max-width: 1184px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 110px;

    left: ${({ click }) => (click ? 0 : "-100%")};

    justify-content: center;
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
  }
`;
export const CartBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: sticky;
  top: 64px;
`;

export const DrawerSide = styled.div`
  /* @media only screen and (max-width: 1184px) {
    width: 0%;
  } */
`;
export const DrawerContent = styled.div`
  width: 0;
  @media (min-width: 1184px) {
    position: relative;
    width: 352px;
    z-index: 13;
  }
`;
export const Grid = styled.div`
  width: 100%;
  display: flex;
`;
