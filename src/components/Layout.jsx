import { Outlet } from 'react-router-dom';
// import { ToastContainer, Zoom } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import NavBar from './NavBar';

const Layout = () => {
  return (
    <main>
      <NavBar />

      <Outlet />

      {/* <ToastContainer transition={Zoom} /> */}
    </main>
  );
};

export default Layout;
