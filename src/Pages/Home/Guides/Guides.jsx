import useCompleteBuild from "../../../Hooks/useCompleteBuild";

import Card from "react-bootstrap/Card";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useWishList from "../../../Hooks/useWishList";
import Swal from "sweetalert2";
import UseCart from "../../../Hooks/UseCart";

const Guides = () => {
  const { user } = useContext(AuthContext);
  const [viewHovered, setViewHovered] = useState(false);
  const [wishHovered, setWishHovered] = useState(false);
  const [cartHovered, setCartHovered] = useState(false);
  const [buildProducts] = useCompleteBuild();
  const [axiosSecure] = useAxiosSecure();
  const [, refetch] = UseCart();
  const [, wishListRefetch] = useWishList();
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(null);
  console.log(buildProducts);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  const totalPrice =
    buildProducts[0]?.cpuPrice +
    buildProducts[0]?.cpuCoolerPrice +
    buildProducts[0]?.mbPrice +
    buildProducts[0]?.memoryPrice +
    buildProducts[0]?.monitorPrice +
    buildProducts[0]?.storagePrice +
    buildProducts[0]?.gpuPrice +
    buildProducts[0]?.casePrice +
    buildProducts[0]?.psuPrice;

  console.log(totalPrice);

  const handleCart = async (item) => {
    if (user && user.email) {
      const cartItem = {
        email: user?.email,
        cartItemId: item?._id,
        productName: item?.buildName,
        productImg: item?.img,
        price: item.totalPrice,
      };

      const res = await axiosSecure.post("cart", cartItem);
      console.log(res.data);
      if (res.data?.insertedId) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product added to the cart",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        title: "Please login to add product",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location }, replace: true });
        }
      });
    }
  };

  const handleWishList = async (item) => {
    if (user && user.email) {
      const wishlistItem = {
        productId: item?._id,
        email: user?.email,
        productName: item?.buildName,
        productImg: item?.img,
        price: item.totalPrice,
      };

      const res = await axiosSecure.post(`/wishlist`, wishlistItem);
      if (res.data?.insertedId) {
        wishListRefetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Added to the wishlist",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        title: "Please login to add wishlist",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location }, replace: true });
        }
      });
    }
  };
  return (
    <div className="bg-[#f4f4f3]">
      <h1 className="text-[#ffffff] text-3xl text-center font-bold bg-[#545578] h-28 pt-4">
        Build Guides
      </h1>
      <div className=" max-w-screen-xl mx-auto grid md:grid-cols-4 gap-x-28 gap-y-8 mt-10 ">
        {buildProducts.map((item, index) => (
          <div
            key={item._id}
            item={item}
            className="card w-80 rounded-1 "
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <figure className="bg-slate-800 relative">
              <img
                className="transition-transform duration-300 transform hover:scale-150"
                src={item.img}
                alt=""
              />
              {isHovered === index && (
                <div className="absolute top-0 right-0 flex flex-col items-end gap-3 px-2 pt-4 transition-all duration-500 ease">
                  {/* Your icon elements, you can replace the icons with whatever you prefer */}
                  <button className=" text-white cursor-pointer border-black bg-[#527853]  border rounded-5 p-1 ">
                    <span
                      className={`${viewHovered ? "transform scale-110" : ""}`}
                      onMouseEnter={() => setViewHovered(true)}
                      onMouseLeave={() => setViewHovered(false)}
                    >
                      {viewHovered && (
                        <div className="absolute right-1 transform -translate-x-1/2 bg-black text-white py-1  px-2 truncate border-round-2">
                          Quick View
                        </div>
                      )}
                      <VisibilityTwoToneIcon />
                    </span>
                  </button>
                  <button
                    className=" text-white cursor-pointer border-black bg-[#B80000]  border rounded-5 p-1 "
                    onClick={() => handleWishList(item)}
                  >
                    <span
                      className={`${wishHovered ? "transform scale-110" : ""}`}
                      onMouseEnter={() => setWishHovered(true)}
                      onMouseLeave={() => setWishHovered(false)}
                    >
                      {wishHovered && (
                        <div className="absolute right-1 transform -translate-x-1/2 bg-black text-white py-1  px-2 truncate border-round-2">
                          Add to wishlist
                        </div>
                      )}
                      <FavoriteTwoToneIcon />
                    </span>
                  </button>

                  <button
                    className="text-white cursor-pointer border-black bg-[#6420AA]  border rounded-5 p-1"
                    onClick={() => handleCart(item)}
                  >
                    <span
                      className={`${cartHovered ? "transform scale-110" : ""}`}
                      onMouseEnter={() => setCartHovered(true)}
                      onMouseLeave={() => setCartHovered(false)}
                    >
                      {cartHovered && (
                        <div className="absolute right-1 transform -translate-x-1/2 bg-black text-white py-1  px-2 truncate border-round-2">
                          Add to cart
                        </div>
                      )}
                      <ShoppingCartTwoToneIcon />
                    </span>
                  </button>
                </div>
              )}
            </figure>
            {/* <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
              {item?.totalPrice} tk
            </p> */}
            <div className="card-body flex flex-col items-center shadow-2xl">
              <Link to={`/guideDetails/${item.buildName}`}>
                <h4 className="card-title text-lg text-blue-600">
                  {item.buildName}
                </h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;
