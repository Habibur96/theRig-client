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
} from "react-icons/fa";
import theRig from "../assets/logo/theRig.png";

import useAdmin from "../Hooks/useAdmin";
import UseCart from "../Hooks/UseCart";
import useUsers from "../Hooks/useUsers";
import UseAuth from "../Hooks/UseAuth";

const Dashboard = () => {
  const [cart] = UseCart();


const {user} = UseAuth();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile lg:drawer-open md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side bg-[#AAE3E2]  font-semibold">
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
                <NavLink to="/dashboard/addItem">
                  {" "}
                  <FaUtensils></FaUtensils> Add an Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItem">
                  <FaWallet></FaWallet> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaBook></FaBook> Manage Bookings(not implemented)
                </NavLink>
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
                <NavLink to={`/dashboard/paymentHistory/${user?.email}`}>
                  <FaList></FaList>Payment  History
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
