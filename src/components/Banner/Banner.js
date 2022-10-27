import React from "react";
import styled from "styled-components";
import slider_img from "../../assets/Banner/slider_content_pattern1.png";
import menu1 from "../../assets/Banner/menu_pattern_5.png";
import menu2 from "../../assets/Banner/menu_pattern_6.png";

const Banner = () => {
  return (
    <Content>
      <Widget>
        <img src={slider_img} alt="" />
      </Widget>
      <BannerHeading>
        <h1>Foodiebay</h1>
      </BannerHeading>
      <BannderContent>
        <img src={menu1} alt="" />
        <Tagline>
          <p> Restaurants and more, delivered to your door</p>
        </Tagline>
        <img src={menu2} alt="" />
      </BannderContent>
      <ButtonContainer>
        <ButtonBannerGroup>
          <BookBtn>Book Now</BookBtn>
          <OrderBtn>Order Online</OrderBtn>
        </ButtonBannerGroup>
      </ButtonContainer>
    </Content>
  );
};

export default Banner;

const Content = styled.div`
  text-align: center;
  h1 {
    font-size: 140px;
  }
`;

const Widget = styled.div`
  margin-bottom: 50px;
  img {
    max-width: 100%;
    height: auto;
  }
`;
const BannerHeading = styled.div`
  margin-bottom: 20px;
  h1 {
    color: #ffffff;
    margin: 0px 0px 37px 0px;
    font-size: 115px;
    font-weight: 800;
  }
`;
const BannderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
const Tagline = styled.div`
  border-style: solid;
  border-width: 0px 0px 2px 0px;
  border-color: #ffffff;
  margin: 0 16px;
  p {
    padding-bottom: 18px;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    color: #fff;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
`;

const ButtonBannerGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
`;
const BookBtn = styled.button`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: #e7272d;
  background-color: #e7272d;
  padding: 21px 0px 21px 0px;
  width: 100%;
  margin-right: 30px;
  transition: all 0.4s ease;
  text-align: center;
  z-index: 1;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #e7272d;
  }
`;
const OrderBtn = styled.button`
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 21px;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: #fff;
  background-color: #02010100;
  padding: 21px 0px 21px 0px;
  transition: all 0.4s ease;
  text-align: center;
  z-index: 1;
  cursor: pointer;
  &:hover {
    background-color: #e7272d;
    border-color: transparent;
  }
`;
