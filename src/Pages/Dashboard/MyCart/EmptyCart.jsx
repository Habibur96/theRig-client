import { Link } from "react-router-dom";
import empty from "../../../assets/icon/empty.gif";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center  pb-5">
      <img className="h-80 mt-20 bg-[#f4f4f3]" src={empty} alt="" />
      <div className="text-center mt-10">
        <h1 className="text-4xl font-semibold text-blue-700">Oops!</h1>
        <p className="text-2xl font-semibold">Your shopping cart is empty!</p>
        <Link
          to="/"
          className="btn btn-wide mt-4 text-white text-lg  bg-[#3749bb]"
          style={{ textTransform: "capitalize" }}
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
