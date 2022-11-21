import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Blogs from "./pages/Blogs/Blogs";
import AllUsers from "./pages/Dashboard/AllUsers/AllUsers";
import AllVendors from "./pages/Dashboard/AllVendors/AllVendors";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfile from "./pages/Dashboard/MyProfile";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import RequireAuth from "./pages/Register/RequireAuth";
import SignIn from "./pages/Register/SignIn";
import SignUp from "./pages/Register/SignUp";
import Payment from "./pages/Dashboard/Payment";
import Merchant from "./pages/Merchant/Merchant";

// Toastify...
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import RequireAdmin from "./pages/Register/RequireAdmin";
import MakeVendor from "./pages/Dashboard/MakeVendor/MakeVendor";
import RequireVendor from "./pages/Register/RequireVendor";
import MenuList from "./pages/Dashboard/MenuList/MenuList";
import AddMenu from "./pages/Dashboard/AddMenu/AddMenu";
import Restaurant from "./pages/Restaurant/Restaurant";

function App() {
  return (
    <RootContainer>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="home" element={<Home />} />

        <Route
          path="blog"
          element={
            <RequireAuth>
              <Blogs></Blogs>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="merchants"
          element={
            <RequireAuth>
              <Merchant></Merchant>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="restaurant/:restaurantId"
          element={<Restaurant></Restaurant>}
        ></Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />

        {/* Dashboard.... */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route
            path="make_vendor"
            element={
              <RequireAdmin>
                <MakeVendor />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="all_vendor"
            element={
              <RequireAdmin>
                <AllVendors />
              </RequireAdmin>
            }
          ></Route>

          <Route
            path="all_user"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="menu_list"
            element={
              <RequireVendor>
                <MenuList></MenuList>
              </RequireVendor>
            }
          ></Route>
          <Route
            path="add_menu"
            element={
              <RequireVendor>
                <AddMenu></AddMenu>
              </RequireVendor>
            }
          ></Route>

          <Route
            path="payment/:paymentId"
            element={<Payment></Payment>}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
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
