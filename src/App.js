import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import RequireAuth from "./pages/Register/RequireAuth";
import SignIn from "./pages/Register/SignIn";
import SignUp from "./pages/Register/SignUp";

function App() {
  return (
    <RootContainer>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="home" element={<Home />} />

        <Route path="blog" element={
          <RequireAuth>
            <Blogs></Blogs>
          </RequireAuth>
        }></Route>

        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
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
