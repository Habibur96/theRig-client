import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Pcbuild from "../Pages/Home/Pcbuild/Pcbuild";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import UserProfile from "../Pages/Profile/UserProfile";

import Motherboard from "../Pages/Home/Pcbuild/Motherboard";
import Cpu from "../Pages/Home/Pcbuild/Cpu";
import AvailableProduct from "../Pages/Home/Pcbuild/AvailableProduct";
// import Navber2 from "../Pages/Shared/Navber/Navber2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "navber2",
      //   element: <Navber2></Navber2>,
      // },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "pcbuild",
        element: <Pcbuild></Pcbuild>,
      },
      {
        path: "cpu/:pcbuilderProductName/:category",
        element: <Cpu></Cpu>,
      },
      {
        path: "motherboard/:pcbuilderProductName/:category",
        element: <Motherboard></Motherboard>,
      },
      {
        path: "availableProduct/:collectionName/:name",
        element: <AvailableProduct></AvailableProduct>,
      },

      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);
