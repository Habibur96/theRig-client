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
import ManageProducts from "../Pages/Dashboard/ManageProducts/ManageProducts";

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
import AllOrders from "../Pages/Dashboard/Orders/AllOrders";
import ShopwiseOrders from "../Pages/Dashboard/Orders/ShopwiseOrders";

import OrderHistory from "../Pages/Dashboard/Orders/OrdersHistory";
import CreateItem from "../Pages/Dashboard/CreateItem/CreateMemory";
import CreateCpu from "../Pages/Dashboard/CreateItem/CreateCpu";
import CreateMotherboard from "../Pages/Dashboard/CreateItem/CreateMotherboard";
import CreateMonitor from "../Pages/Dashboard/CreateItem/CreateMonitor";
import CreateMemory from "../Pages/Dashboard/CreateItem/CreateMemory";
import CreateStorage from "../Pages/Dashboard/CreateItem/CreateStorage";
import Createpsu from "../Pages/Dashboard/CreateItem/Createpsu";
import CreateGpu from "../Pages/Dashboard/CreateItem/CreateGpu";
import CreateKeyboard from "../Pages/Dashboard/CreateItem/CreateKeyboard";
import CreateCasingCooler from "../Pages/Dashboard/CreateItem/CreateCasingCooler";
import CreateCpucooler from "../Pages/Dashboard/CreateItem/CreateCpucooler";
import CreateUps from "../Pages/Dashboard/CreateItem/CreateUps";
import CreateMice from "../Pages/Dashboard/CreateItem/CreateMice";
import Guides from "../Pages/Home/Guides/Guides";
import WishList from "../Pages/Profile/WishList";
import CreateBuild from "../Pages/Dashboard/CreateBuild";
import GuidesDetails from "../Pages/Home/Guides/GuidesDetails";
import EditReadyBuild from "../Pages/Dashboard/Inventory/EditReadyBuild";
import RigReadyBuildInventory from "../Pages/Dashboard/Inventory/RigReadyBuildInventory";
import AddCoupon from "../Pages/Dashboard/Coupons/AddCoupon";
import ManageCoupon from "../Pages/Dashboard/Coupons/ManageCoupon";
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
      {
        path: "guides",
        element: <Guides></Guides>,
      },

      {
        path: "wishlist",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
      {
        path: "wishlist/:tabName",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
      {
        path: "guideDetails/:buildName",
        element: <GuidesDetails></GuidesDetails>,
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
        path: "orderHistory/:email",
        element: <OrderHistory></OrderHistory>,
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
        path: "allorders",
        element: (
          <AdminRoute>
            <AllOrders></AllOrders>
          </AdminRoute>
        ),
      },
      {
        path: "shopwiseorders",
        element: (
          <AdminRoute>
            <ShopwiseOrders></ShopwiseOrders>
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
        path: "createItem",
        element: (
          <AdminRoute>
            <CreateItem></CreateItem>
          </AdminRoute>
        ),
      },
      {
        path: "createBuild",
        element: (
          <AdminRoute>
            <CreateBuild></CreateBuild>
          </AdminRoute>
        ),
      },
      {
        path: "manageProducts",
        element: (
          <AdminRoute>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        ),
      },

      // ========================Created Products==============
      {
        path: "createProducts/cpu",
        element: (
          <AdminRoute>
            <CreateCpu></CreateCpu>
          </AdminRoute>
        ),
      },
      {
        path: "createProducts/motherboard",
        element: (
          <AdminRoute>
            <CreateMotherboard />
          </AdminRoute>
        ),
      },
      {
        path: "createProducts/monitor",
        element: (
          <AdminRoute>
            <CreateMonitor></CreateMonitor>
          </AdminRoute>
        ),
      },
      {
        path: "createProducts/memory",
        element: (
          <AdminRoute>
            <CreateMemory></CreateMemory>
          </AdminRoute>
        ),
      },
      {
        path: "createProducts/storage",
        element: (
          <AdminRoute>
            <CreateStorage></CreateStorage>
          </AdminRoute>
        ),
      },
      {
        path: "createProducts/psu",
        element: (
          <AdminRoute>
            <Createpsu></Createpsu>
          </AdminRoute>
        ),
      },
      {
        path: "createProducts/gpu",
        element: (
          <AdminRoute>
            <CreateGpu></CreateGpu>
          </AdminRoute>
        ),
      },
      {
        path: "createProducts/keyboard",
        element: (
          <AdminRoute>
            <CreateKeyboard></CreateKeyboard>
          </AdminRoute>
        ),
      },
      {
        path: "createProducts/monitor",
        element: (
          <AdminRoute>
            <CreateMonitor></CreateMonitor>
          </AdminRoute>
        ),
      },
      {
        path: "createProducts/casingcooler",
        element: (
          <AdminRoute>
            <CreateCasingCooler></CreateCasingCooler>
          </AdminRoute>
        ),
      },
      {
        path: "createProducts/cpucooler",
        element: (
          <AdminRoute>
            <CreateCpucooler></CreateCpucooler>
          </AdminRoute>
        ),
      },
      {
        path: "createProducts/ups",
        element: (
          <AdminRoute>
            <CreateUps></CreateUps>
          </AdminRoute>
        ),
      },
      {
        path: "createProducts/mice",
        element: (
          <AdminRoute>
            <CreateMice></CreateMice>
          </AdminRoute>
        ),
      },

      // ===================Coupons=============
      {
        path: "/dashboard/addcoupon",
        element: (
          <AdminRoute>
            <AddCoupon />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managecoupon",
        element: (
          <AdminRoute>
            <ManageCoupon />
          </AdminRoute>
        ),
      },
      // =====================Inventory================
      {
        path: "inventory/readyBuild",
        element: (
          <AdminRoute>
            <RigReadyBuildInventory></RigReadyBuildInventory>
          </AdminRoute>
        ),
      },
      {
        path: "editReadyBuild/:id",
        element: (
          <AdminRoute>
            <EditReadyBuild></EditReadyBuild>
          </AdminRoute>
        ),
      },
    ],
  },
]);
