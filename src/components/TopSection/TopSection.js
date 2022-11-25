import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowRight } from "styled-icons/fa-solid";
import Pattern1 from "../../assets/Banner/category_pattern4.png";
import Layer1 from "../../assets/Banner/category_pattern2.png";
import WelcomeImage from "../../assets/Banner/welcome_image.png";

const TopSection = () => {
  return (
    <Section>
      <Pattern>
        <img src={Pattern1} alt="" />
      </Pattern>
      <LayerImage>
        <img src={Layer1} alt="" />
      </LayerImage>
      <SectionImage>
        <img src={WelcomeImage} alt="" />
      </SectionImage>
      <Container>
        <Col></Col>
        <Col2>
          <Wrap>
            <Content>
              <h3>Welcome</h3>
              <h2>Discover Cuisines</h2>
              <Description>
                <p>
                  It’s about the journey, not the destination. It's the food{" "}
                  <br /> and groceries you love, delivered. You prepare the
                  food,
                  <br /> we handle the rest
                </p>
                <ButtonAction>
                  <Link to="/">
                    <Button>
                      <span> About us</span>{" "}
                      <ArrowRight className="font-bold" width={20} />
                    </Button>
                  </Link>
                  <InfoBox>
                    <Box>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                        >
                          <path
                            fill="#e7272d"
                            d="M22.444 17.694a11.991 11.991 0 01-3.768-.6 1.077 1.077 0 00-1.077.253l-2.322 2.322a15.912 15.912 0 01-6.956-6.946l2.322-2.333a1.036 1.036 0 00.264-1.066 11.991 11.991 0 01-.6-3.768A1.059 1.059 0 009.25 4.5H5.556A1.059 1.059 0 004.5 5.556a18.055 18.055 0 006.968 14.2A17.662 17.662 0 0022.444 23.5a1.059 1.059 0 001.056-1.056V18.75a1.059 1.059 0 00-1.056-1.056zM14 4.5v10.556l3.167-3.167H23.5V4.5z"
                            data-name="Icon material-perm-phone-msg"
                            transform="translate(-4.5 -4.5)"
                          ></path>
                        </svg>
                      </div>
                    </Box>
                    <Info>
                      <h4>Call Us For More Info</h4>
                      <p>+880 17654321</p>
                    </Info>
                  </InfoBox>
                </ButtonAction>
              </Description>
            </Content>
          </Wrap>
        </Col2>
      </Container>
    </Section>
  );
};

export default TopSection;
const Section = styled.section`
  width: 100%;
  padding: 0px 0px 100px 0px;
  overflow: visible;
  position: relative;
`;
const Container = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
const Col = styled.div`
  @media only screen and (min-width: 768px) {
    width: 20%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Col2 = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  @media only screen and (min-width: 1025px) {
    width: 80%;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: #222222;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  margin: -100px 0px 0px 0px;
  padding: 150px 200px 100px 145px;
  @media only screen and (max-width: 1624px) {
    padding: 150px 200px 100px 180px;
  }
  @media only screen and (max-width: 1460px) {
    padding: 150px 120px 100px 200px;
  }
  @media only screen and (max-width: 1370px) {
    padding: 150px 100px 100px 220px;
  }
  @media only screen and (max-width: 1240px) {
    padding: 150px 100px 100px 260px;
  }
  @media only screen and (max-width: 1180px) {
    padding: 150px 60px 100px 260px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 100px 15px 100px 15px;
  }
`;
const Content = styled.div`
  z-index: 2;
  margin-bottom: 20px;
  position: relative;
  text-align: left;
  @media only screen and (max-width: 660px) {
    text-align: center;
  }
  h3 {
    color: #e7272d;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0.32px;
    margin: 0px 0px 15px 0px;
    font-style: italic;
    &:before {
      content: "";
      background-color: #e7272d;
      width: 80px;
      height: 2px;
      margin-right: 15px;
      display: inline-block;
      vertical-align: middle;
      z-index: 2;
    }
    &:after {
      content: "";
      height: 2px;
      background-color: #e7272d;
      width: 0px;
      z-index: 2;
    }
  }

  h2 {
    font-family: "Uber", sans-serif;
    color: #ffffff;
    font-size: 81px;
    font-weight: 900;
    line-height: 90px;
    margin-bottom: 20px;
    @media only screen and (max-width: 1240px) {
      font-size: 48px;
    }
  }
`;

const Description = styled.div`
  display: inline-block;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  p {
    color: #cccccc;
    font-size: 22px;
    line-height: 35px;
    margin: 10px 0px 30px 100px;
    @media only screen and (max-width: 1240px) {
      font-size: 16px;
      margin: 10px 0px 30px 0px;
    }
    @media only screen and (max-width: 640px) {
      font-size: 14px;
    }
  }
`;
const ButtonAction = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 660px) {
    flex-direction: column;
  }
`;
const Button = styled.button`
  cursor: pointer;
  padding: 21px 38px 21px 38px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #918a8a00;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: #e7272d;
  border-radius: 0px 0px 0px 0px;
  text-decoration: none;
  outline: 0;
  font-size: 15px;
  color: #fff;
  position: relative;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  text-align: center;
  transition: all 0.4s ease;
  span {
    vertical-align: middle;
    margin-right: 5px;
  }
  &:hover {
    color: #ffffff;
    background-color: #e7272d;
    border-color: #e7272d;
  }
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  border-style: solid;
  border-width: 0px;
  border-color: #f5f5f5;
  border-radius: 5px 5px 5px 5px;
  h4 {
    margin: 0px;
    padding: 0px;
    color: #cccccc;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
  }
`;
const Box = styled.div`
  flex: 0 0 auto;
  div {
    margin: 10px 20px 15px 15px;
    padding: 16px 16px 16px 16px;
    transform: rotate(0deg);
    display: inline-block;
    border-style: solid;
    border-width: 1px;
    border-color: #e5e5e533;
    border-radius: 5px 50px 50px 50px;
    text-align: center;
    svg {
      max-width: 40px;
      height: auto;
      transition: fill 120ms ease-in-out;
      fill: currentColor;
    }
  }
`;
const Info = styled.div`
  p {
    margin: 0;
  }
`;
const Pattern = styled.div`
  z-index: 2;
  transform: translateY(81px);
  left: 87%;
  top: 46%;
  position: absolute;
  pointer-events: none;
  img {
    width: 100%;
    height: auto;
    overflow: visible;
  }
`;
const LayerImage = styled.div`
  transform: translateY(120.75px);
  left: 1%;
  top: 15%;
  position: absolute;
  pointer-events: none;
  img {
    width: 100%;
    height: auto;
    overflow: visible;
  }
`;
const SectionImage = styled.div`
  z-index: 2;
  transform: translateY(96.75px);
  left: 3%;
  top: 11%;
  position: absolute;
  pointer-events: none;
  img {
    max-width: 100%;
    height: auto;
    overflow: visible;
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
