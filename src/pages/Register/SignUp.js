import React from "react";
import styled from "styled-components";
import Header from "../../layouts/Header/Header";

const SignUp = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Sign Up</h1>
      </Container>
      <Detail>
        <h1>Title</h1>
        <h2>Sub Title</h2>
      </Detail>
    </>
  );
};

export default SignUp;
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Detail = styled.div`
  /* position: relative; */
  height: 100vh;
  text-align: left;
`;
