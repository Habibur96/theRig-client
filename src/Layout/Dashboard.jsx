import { NavLink, Outlet, useParams } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
  FaList,
  FaCalendarWeek,
  FaCalendarTimes,
} from "react-icons/fa";
import theRig from "../assets/logo/theRig.png";

import useAdmin from "../Hooks/useAdmin";
import UseCart from "../Hooks/UseCart";
import useUsers from "../Hooks/useUsers";
import UseAuth from "../Hooks/UseAuth";
import FilterFramesOutlinedIcon from "@mui/icons-material/FilterFramesOutlined";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

const Dashboard = () => {
  const [cart] = UseCart();

  const { user } = UseAuth();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile lg:drawer-open md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>

      <div className="drawer-side bg-[#00b16a] font-semibold">
        {/* <div>
        <img src={theRig} width="250" height="200" className="pl-20" alt="" />
      </div> */}

        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageProducts">
                  <FaWallet />
                  Manage Products
                </NavLink>
              </li>

              <li>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg py-2">
                    <span>
                      <CreateNewFolderIcon /> Create Product
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4 text-black">
                    <li>
                      <NavLink
                        to="/dashboard/createProducts/cpu"
                        className="block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-700"
                      >
                        Cpu
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/dashboard/createProducts/motherboard"
                        className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-700"
                      >
                        Motherboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/createProducts/cpucooler"
                        className="block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-700"
                      >
                        Cpu Cooler
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/createProducts/monitor"
                        className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-700"
                      >
                        Monitor
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/createProducts/storage"
                        className="block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-700"
                      >
                        Storage
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/createProducts/gpu"
                        className="block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-700"
                      >
                        Gpu
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/createProducts/psu"
                        className="block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-700"
                      >
                        PSU
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/createProducts/mice"
                        className="block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-700"
                      >
                        Mice
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/createProducts/casingcooler"
                        className="block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-700"
                      >
                        Casing Cooler
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/createProducts/keyboard"
                        className="block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-700"
                      >
                        Keyboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/createProducts/ups"
                        className="block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-900"
                      >
                        Ups
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <NavLink to="/">
                  <FaBook></FaBook> Manage Bookings(not implemented)
                </NavLink>
              </li>
              <li>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg py-2">
                    <FaCalendarWeek />
                    <span className="text-sm font-medium mr-28">
                      Orders Details{" "}
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <NavLink
                        to="/dashboard/allorders"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        All Orders
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/dashboard/shopwiseorders"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Shop wise orders
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/PaymentHistory">
                  <FaCalendarAlt></FaCalendarAlt>Payment History
                </NavLink>
              </li> */}

              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                  <span className="badge inl badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/dashboard/orderHistory/${user?.email}`}>
                  <FaCalendarAlt />
                  Orders History
                </NavLink>
              </li>
              <li>
                <NavLink to={`/dashboard/paymentHistory/${user?.email}`}>
                  <FaList></FaList>Payment History
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/menu"> Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Product</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
