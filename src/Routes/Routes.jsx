import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Pcbuild from "../Pages/Home/Pcbuild/Pcbuild";
import Navber2 from "../Pages/Shared/Navber/Navber2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "navber2",
        element: <Navber2></Navber2>,
      },
      {
        path: "pcbuild",
        element: <Pcbuild></Pcbuild>,
      },
    ],
  },
]);
