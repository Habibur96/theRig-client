import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navber = () => {
  const navOptions = (
    <>
      <li>
        <div className="ml-auto flex items-center">
          <div className=" lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <Link to="/login" className="text-sm font-medium text-gray-200 ">
              Sign in
            </Link>

            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
            <div>
              <Link to="signUp" className="text-sm font-medium text-gray-200 ">
                Create account
              </Link>
            </div>
          </div>

          <div className="hidden lg:ml-8 lg:flex">
            <Link to='pcbuild'>
              <button className="btn btn-secondary">Pc Builder</button>
            </Link>
          </div>

          {/* Cart */}
          <div className="ml-4 flow-root lg:ml-6">
            <a href="#" className="group -m-2 flex items-center p-2">
              <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                0
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </a>
          </div>
        </div>
      </li>
    </>
  );
  return (
    <div className="navber navbar bg-sky-950 text-slate-200 h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-950 text-slate-200 w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl mx-auto">TheRig</a>

        <div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
      </div>

      <div className=" mx-auto hidden  lg:flex">
        <ul className="">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navber;
