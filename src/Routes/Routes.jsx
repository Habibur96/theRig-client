import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Pcbuild from "../Pages/Home/Pcbuild/Pcbuild";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import UserProfile from "../Pages/Profile/UserProfile";

import Motherboard from "../Pages/Home/Pcbuild/Motherboard";
import Cpu from "../Pages/Home/Pcbuild/Cpu";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

import AvailableProduct from "../Pages/Home/Pcbuild/AvailableProduct";
import AdminRoute from "./AdminRoutes";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AllUsers from "../Layout/AllUsers/AllUsers";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Dashboard from "../Layout/Dashboard";

import Monitor from "../Pages/Home/Pcbuild/monitor";
import Memory from "../Pages/Home/Pcbuild/Memory";

// import ReplaceProduct from "../Pages/Home/Pcbuild/ReplaceProduct";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SearchCpu from "../Pages/Home/Pcbuild/SearchCpu";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
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
        path: "pcbuild/:_id",
        element: <Pcbuild></Pcbuild>,
      },
      // {
      //   path: "replaceProduct/:_id",
      //   element: <ReplaceProduct></ReplaceProduct>,
      //   loader: ({ params }) => fetch(`http://localhost:3000/products/${params._id}`),
      // },
      {
        path: "searchCpu",
        element: <SearchCpu></SearchCpu>,
        //  loader:({params}) =>fetch(`http://localhost:3000/products?search=${search}`)
      },
      // {
      //   path: "cpu/:pcbuilderProductName/:category",
      //   element: <Cpu></Cpu>,
      // },
      {
        path: "cpus",
        element: <Cpu></Cpu>,
      },

      // {
      //   path: "motherboard/:pcbuilderProductName/:category",
      //   element: <Motherboard></Motherboard>,
      // },
      {
        path: "motherboards",
        element: <Motherboard></Motherboard>,
      },
      {
        path: "monitors",
        element: <Monitor></Monitor>,
      },
      {
        path: "memoryes",
        element: <Memory></Memory>,
      },

      {
        path: "product/cpu",
        element: <Cpu></Cpu>,
      },
      {
        path: "product/motherboard",
        element: <Motherboard></Motherboard>,
      },
      {
        path: "product/monitor",
        element: <Monitor></Monitor>,
      },
      {
        path: "product/memory",
        element: <Memory></Memory>,
      },

      {
        path: "availableProduct/:collectionName/:name",
        element: (
          // <PrivateRoute>
          <AvailableProduct></AvailableProduct>

          // </PrivateRoute>
        ),
      },

      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },

      {
        path: "payment/:email",
        element: <Payment></Payment>,
      },
      {
        path: "PaymentHistory/:email",
        element: <PaymentHistory></PaymentHistory>,
      },

      // =================admin===============
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
    ],
  },
]);
