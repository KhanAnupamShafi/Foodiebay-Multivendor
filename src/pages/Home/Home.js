import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Video from '../../assets/Banner/FoodVideo.mp4';
import HeroImg from '../../assets/Banner/hero_image.png';
import About from '../../components/About/About';
import Banner from '../../components/Banner/Banner';
import BusinessBanner from '../../components/BusinessBanner/BusinessBanner';
import TopSection from '../../components/TopSection/TopSection';
import VendorList from '../../components/VendorList/VendorList';
import Header from '../../layouts/Header/Header';
const Home = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth >= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <BusinessBanner />
      <Container>
        <BackgroundVideo />
        {isLargeScreen && (
          <BackgroundVideo
            autoPlay
            loop
            muted
            playsInline
            src={Video}></BackgroundVideo>
        )}
        <Header />
        <Banner />
      </Container>
      <TopSection />
      <VendorList />
      <About />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 105vh;
  background-image: linear-gradient(
    rgba(12, 3, 51, 0.3),
    rgba(12, 3, 51, 0.3)
  );
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media (max-aspect-ratio: 16/9) {
    height: 150vh;
  }
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
