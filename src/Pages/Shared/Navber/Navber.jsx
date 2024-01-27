import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { Category } from "@mui/icons-material";
// import SearchCpu from "../../Home/Pcbuild/SearchCpu";
// import SearchMotherboard from "../../Home/Pcbuild/SearchMotherboard";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  // console.log(user.displayName)
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        localStorage.removeItem("theRig-access-token");
      })
      .catch((error) => {
        console.error();
      });
  };

  useEffect(() => {
    fetch(`http://localhost:3000/products?search=${search}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setSearchProduct(data);
        console.log({ data });
        if (data?.[0]?.category === "cpu") {
          console.log("cpu");
        }
      });
  }, [search]);

  // Check if any product has a category of 'motherboard'
  // const hasCpu = searchProduct.some((product) => product.category === "cpu");

  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
    // Clear the search bar.
    setSearchTerm("");
  };

  const handleKeyPress = (e) => {
    // Check if the Enter key is pressed.
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // if (searchProduct.some(product => product.category === 'motherboard')) {
  //   // Navigate to the '/searchCpu' route
  //   history.push('/searchCpu');
  //   // Return null or a loading state/component if needed
  //   return null;
  // }
  //  color: #191b2a;
  const navOptions = (
    <>
      <li>
        <div className="ml-auto flex items-center">
          <div className=" lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            {user ? (
              <Link
                onClick={handleLogOut}
                className="text-sm font-medium text-gray-200 "
              >
                Signout
              </Link>
            ) : (
              <Link to="/login" className="text-sm font-medium text-gray-200 ">
                Sign in
              </Link>
            )}

            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

            <div>
              {user ? (
                <Link to="userProfile">
                  <FaUserAlt style={{ fontSize: "1.25rem" }}></FaUserAlt>
                </Link>
              ) : (
                <Link
                  to="signUp"
                  className="text-sm font-medium text-gray-200 "
                >
                  Create account
                </Link>
              )}
            </div>
            {user && (
              //  <small className="text-sm font-medium text-gray-200"> {user.displayName}</small> &&
              <Link
                to="userProfile"
                className="text-sm font-medium text-gray-200"
              >
                Profile
              </Link>
            )}
          </div>

          <div className="hidden lg:ml-8 lg:flex">
            <Link to="pcbuild">
              <button className="btn btn-secondary">Pc Builder</button>
            </Link>
          </div>

          {/* Cart */}
          <div className="ml-4 flow-root lg:ml-6">
            <Link to="/mycart" className="group -m-2 flex items-center p-2">
              <ShoppingCartOutlinedIcon
                className="h-6 w-6 flex-shrink-0 text-gray-00 group-hover:text-gray-600"
                aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-gray-400 group-hover:text-gray-600">
                0
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </Link>
          </div>
        </div>
      </li>
    </>
  );
  return (
    <div
      className="navber navbar  text-slate-200 h-20 pl-32"
      style={{ backgroundColor: "#11131d" }}
    >
      <div className="navbar-start ">
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

        <Link to="/" className="btn btn-ghost normal-case text-xl mx-auto ">
          TheRig
        </Link>

        <div className="flex items-start border-3 pr-3  rounded-lg mx-auto bg-cyan-700">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-30 h-10 md:w-40 lg:w-[400px] mr-1 input  input-white text-black rounded-lg border-none"
          />

          <button
            onClick={handleSearch}
            className="p-1 md:px-4 px-2  text-white hover:text-gray-500 font-semibold text-lg "
          >
            <div className="flex justify-items-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className=" mx-auto hidden  lg:flex">
        <ul className="">{navOptions}</ul>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchProduct.map((searchedProduct) => (
       

          <SearchCpu
            key={searchedProduct._id}
            searchedProduct={searchedProduct}
          ></SearchCpu>
        ))}
      </div> */}

      {/* <div>
        {searchProduct
          .filter((searchedProduct) => searchedProduct.category === "cpu")
          .map((filteredProduct) => (
            <SearchCpu
              key={filteredProduct._id}
              searchedProduct={filteredProduct}
            />
          ))}

        {hasCpu && <Link to="/searchCpu">Go to Search CPU</Link>}

        {searchProduct
          .filter(
            (searchedProduct) => searchedProduct.category === "motherboard"
          )
          .map((filteredProduct) => (
            <SearchMotherboard
              key={filteredProduct._id}
              searchedProduct={filteredProduct}
            />
          ))}
      </div> */}
    </div>
  );
};

export default Navber;

// } else if ('b'==='b') {
//     return (
//     <p>Hello</p>
//     )
// } else {
//     return (
//         <p>Bye</p>
//     )
// }
