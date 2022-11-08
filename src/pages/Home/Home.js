import React from "react";
import styled from "styled-components";
import Header from "../../layouts/Header/Header";
import video from "../../assets/Banner/FoodVideo.mp4";
import Banner from "../../components/Banner/Banner";
import HeroImg from "../../assets/Banner/hero_image.png";
import BusinessBanner from "../../components/BusinessBanner/BusinessBanner";
const Home = () => {
  return (
    <>
      <BusinessBanner />
      <Container>
        <BackgroundVideo autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </BackgroundVideo>
        <Header />
        <Banner />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(12, 3, 51, 0.3), rgba(12, 3, 51, 0.3));
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media (min-aspect-ratio: 16/9) {
    height: auto;
    width: 100%;
  }
  @media (max-aspect-ratio: 16/9) {
    height: 100%;
    width: auto;
    background-image: url(${HeroImg});
    background-size: cover;
  }
`;
export default Home;
