import { Outlet } from 'react-router-dom';

import Test from './NewFooter/Test';

function Layout() {
  return (
    <>
      {/* An <Outlet> renders whatever child route is currently active in App.js */}
      <Outlet />

      {/* <Footer /> */}
      <Test />
    </>
  );
}

export default Layout;
