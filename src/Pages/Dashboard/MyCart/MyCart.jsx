import { Link } from "react-router-dom";
import UseCart from "../../../Hooks/UseCart";
import ClearIcon from "@mui/icons-material/Clear";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = UseCart();
  const total = cart.reduce((sum, item) => parseFloat(item.price) + sum, 0);
  console.log(total);
  const handleDelete = (id) => {
    console.log(id);
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
              console.log(data.deletedCount);
              refetch();
              // Swal.fire(
              //   "Deleted!",
              //   "Your product has been deleted.",
              //   "success"
              // );
            }
          });
      }
    });
  };
  return (
    <div className=" max-w-screen-xl mx-auto">
      <h3 className="text-3xl mt-5 mb-4">Shopping Cart</h3>
      <table className="table w-full   max-w-screen-xl mx-auto">
        {/* head */}
        <thead className="">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Model</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item, index) => (
            
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>
                <div className="avatar">
                  <div className="w-12 h-12">
                    <img src={item.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>{item.name}</td>
              <td>{item.model}</td>
              <td>
                <div className="flex space-x-6 items-center">
                  <input
                    type="text"
                    className="input input-bordered input-info w-1/6 max-w-xs rounded-sm"
                  />
                  <div>
                    <button type="button" title="Remove">
                      
                      <ClearIcon
                 
                        onClick={() => handleDelete(item._id)}
                        className="mr-4"
                      ></ClearIcon>
                    </button>

                    <Link to="">
                      <AutorenewIcon></AutorenewIcon>
                    </Link>

                    {/* <button ></button> */}
                  </div>
                </div>
              </td>

              <td className="">{item.price}</td>
              {/* TODO: 
               Total Price
              */}
              <td className="text-end"></td>
            </tr>
          ))}
        </tbody>

        <tr>
          <td colSpan="5"></td>
          <td className="text-center">
            <div className="font-bold">Sub Total :</div>
          </td>
        </tr>
        <tr>
          <td colSpan="5"></td>
          <td className="text-center">
            <div className="font-bold">Total :{total}tk</div>
          </td>
        </tr>
      </table>
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
          <button className="btn btn-secondary">Apply Coupon</button>
        </div>
        <div className="flex ml-16">
          <input
            type="text"
            placeholder="Enter your gift voucher code here"
            className="input input-bordered input-secondary md:w-40 lg:w-[400px] mr-4"
          />
          <button className="btn btn-secondary">Apply Voucher</button>
        </div>
      </div>
      <div className="flex mt-5">
        <Link to="/" className="btn btn-success mr-[900px]">
          Continue Shopping
        </Link>
        <Link className="btn btn-error">Confirm Order</Link>
      </div>
    </div>
  );
};

export default MyCart;
