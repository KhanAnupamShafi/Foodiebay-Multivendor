import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer/Footer";

function Layout() {
  return (
    <>
      {/* An <Outlet> renders whatever child route is currently active in App.js */}
      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
