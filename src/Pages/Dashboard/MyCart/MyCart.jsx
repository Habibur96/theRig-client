import { Link, useNavigate } from "react-router-dom";
import UseCart from "../../../Hooks/UseCart";
import ClearIcon from "@mui/icons-material/Clear";
import Swal from "sweetalert2";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import UseAuth from "../../../Hooks/UseAuth";
import theRig from "../../../assets/logo/theRig.png";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useCompleteBuild from "../../../Hooks/useCompleteBuild";
import { useState } from "react";
const MyCart = () => {
  const [cart, refetch] = UseCart();
  const { user } = UseAuth();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const [buildProducts] = useCompleteBuild();
  const [additionalSentence, setAdditionalSentence] = useState("");
  // Calculate the total based on the quantities and item prices
  if (cart.length === 0) {
    navigate("/emptyCart");
  }
  const total = cart.reduce(
    (sum, item) => parseFloat(item.price) * item.quantity + sum,
    0
  );

  const handleIncrementQuantity = (id, cartItemId) => {
    const isItemInCart = cart.find((cartitem) => cartitem._id === id);
    //build products ar inventory check kortasi.....
    const build = buildProducts.find((build) => build._id === cartItemId);
    console.log(build);
    if (isItemInCart) {
      const newQuantity = isItemInCart.quantity + 1;
      if (newQuantity > build.buildQty) {
        setAdditionalSentence("Maximum quantity reached.");
      } else {
        axiosSecure
          .put(`/cart/${id}`, { quantity: newQuantity })
          .then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data?.modifiedCount > 0) {
              refetch();
            }
          });
      }
    }
  };
  const handledecrementQuantity = (id) => {
    const isItemInCart = cart.find((cartitem) => cartitem._id === id);

    if (isItemInCart) {
      const newQuantity = isItemInCart.quantity - 1;

      if (newQuantity === 0) {
        handleDelete(id);
        return;
      }

      axiosSecure.put(`/cart/${id}`, { quantity: newQuantity }).then((data) => {
        console.log("after posting new menu item", data.data);
        if (data.data?.modifiedCount > 0) {
          refetch();
        }
      });
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto ">
      <h3 className="text-3xl mt-5 mb-4">Shopping Cart</h3>
      <table className="table w-full max-w-screen-xl mx-auto">
        {/* head */}
        <thead className="">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Model</th>
            <th>
              <div className="ml-10">Quantity</div>
            </th>

            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>
                {item.img ? (
                  <div className="avatar">
                    <div className="w-12 h-12">
                      <img
                        src={item?.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="avatar">
                    <div className="w-16 h-12">
                      <img
                        src={item?.productImg}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                )}
              </td>
              <td>
                {item.name ? (
                  <span>{item.name}</span>
                ) : (
                  <span>{item.productName}</span>
                )}{" "}
                <br />
                {additionalSentence && (
                  <span className="text-red-300 font-semibold">
                    {additionalSentence}
                  </span>
                )}
              </td>
              {/* <td>
                {item.name ? (
                  <span>{item.name}</span>
                ) : (
                  <span>{item.productName}</span>
                )}
              </td> */}
              <td>
                {item.model ? <spanp>{item.model}</spanp> : <span>-----</span>}
              </td>
              <td>
                <div className="flex space-x-4  items-center">
                  <button onClick={() => handledecrementQuantity(item._id)}>
                    <RemoveIcon />
                  </button>

                  <input
                    // type="text"
                    value={item.quantity}
                    className="input input-bordered input-info w-1/6 max-w-xs text-center rounded-sm"
                  />
                  <button
                    onClick={() =>
                      handleIncrementQuantity(item._id, item.cartItemId)
                    }
                  >
                    <AddIcon />
                  </button>
                  <div>
                    <button type="button" title="Remove">
                      <ClearIcon
                        onClick={() => handleDelete(item._id)}
                        className="mr-4"
                      ></ClearIcon>
                    </button>
                  </div>
                </div>
              </td>

              <td className="">{item.price}</td>
              {/* Display the total for the current item */}

              <td className=" text-start">
                {parseFloat(item.price) * item.quantity}{" "}
              </td>
            </tr>
          ))}
        </tbody>

        {/* <tr>
          <td colSpan="5"></td>
          <td className="text-center">
            <div className="font-bold">Sub Total :</div>
          </td>
        </tr> */}
      </table>
      <div className="ml-96 pl-64">
        <tr>
          <div className="flex  text-lg font-semibold ml-96 pl-32 ">
            <td>Total :{total}</td>
            <FaBangladeshiTakaSign />
          </div>
        </tr>
      </div>
      <h1 className="text-2xl font-semibold">
        What would you like to do next?
      </h1>{" "}
      <br />
      <p className="text-md font-semibold">
        Choose if you have a discount code or reward points you watnt to use or
        would like to estimate your delivery cost
      </p>{" "}
      <br />
      <div className="flex ">
        <div className="flex mr-12">
          <input
            type="text"
            placeholder="Promo / Coupon Code"
            className="input input-bordered input-secondary md:w-40 lg:w-[400px] mr-4"
          />

          <button
            className="btn btn-secondary"
            style={{ textTransform: "capitalize" }}
          >
            Apply Coupon
          </button>
        </div>
        <div className="flex ml-16">
          <input
            type="text"
            placeholder="Enter your gift voucher code here"
            className="input input-bordered input-secondary md:w-40 lg:w-[400px] mr-4"
          />
          <button
            className="btn btn-secondary"
            style={{ textTransform: "capitalize" }}
          >
            Apply Voucher
          </button>
        </div>
      </div>
      <div className="flex mt-5">
        <Link
          to="/"
          className="btn btn-success mr-[902px]"
          style={{ textTransform: "capitalize" }}
        >
          Continue Shopping
        </Link>
        <Link
          to={`/dashboard/payment/${user.email}`}
          disabled={!cart.length}
          className="btn btn-error mr-5"
          style={{ textTransform: "capitalize" }}
        >
          Confirm Order
        </Link>
      </div>
    </div>
  );
};

export default MyCart;
{
  /* <div className="flex-[2] mt-36 ml-3">
        <div className="card w-80 bg-[#C1F2B0]   text-primary-content">
          <div className="card-body">
            <h2 className="font-semibold text-black text-center">
              Order Details
            </h2>
            <h2 className="text-start text-black font-bold mt-3">
              Sub Total : {total.toFixed(2)}tk
            </h2>{" "}
            <br /> <br />
            <h2 className="text-start text-black font-bold mt-3">
              Total : {total.toFixed(2)}tk
            </h2>
            <div className="card-actions justify-center mt-5">
              <Link to={`/dashboard/order/${user.email}`}>
              
              <button className="btn bg-[#D04848]    text-white">
                {" "}
                Pay : {total.toFixed(2)}tk
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */
}
