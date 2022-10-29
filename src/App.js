import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import SignUp from "./pages/Register/SignUp";
// xxx;
function App() {
  return (
    <RootContainer>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RootContainer>
  );
}

export default App;

const RootContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
`;
