import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber/Navber";
import Footer from "../Pages/Shared/Footer/Footer";
import Navber2 from "../Pages/Shared/Navber/Navber2";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Navber2></Navber2>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Main;
