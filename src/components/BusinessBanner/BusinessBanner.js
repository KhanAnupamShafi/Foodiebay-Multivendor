import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Restaurant } from "styled-icons/ionicons-outline";

const BusinessBanner = () => {
  return (
    <BusinessContainer>
      <Restaurant width={30} height={30} />
      <p>Do You want to be our partner restaurant?</p>
      <Link to="/merchants">
        <BusinessBtn>Apply Here</BusinessBtn>
      </Link>
    </BusinessContainer>
  );
};

export default BusinessBanner;

const BusinessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  min-height: 3rem;
  width: 100%;
  background-color: #da4100;
  color: #fff;
  gap: 10px;
  p {
    font-family: "Uber", sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
  }
  @media screen and (max-width: 624px) {
    display: none;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

const BusinessBtn = styled.div`
  position: relative;
  display: inline-block;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  text-transform: none;
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 0 12px;
  line-height: 36px;
  vertical-align: middle;
  touch-action: manipulation;
  user-select: none;
  transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  word-wrap: normal;

  &:hover {
    text-decoration: underline;
    height: 100%;
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    height: 0%;
    width: 100%;
    background-color: rgb(28, 31, 30);
    transition: 0.3s ease-out;
  }
`;
