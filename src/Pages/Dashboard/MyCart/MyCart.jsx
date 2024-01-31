import { Link } from "react-router-dom";
import UseCart from "../../../Hooks/UseCart";
import ClearIcon from "@mui/icons-material/Clear";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Swal from "sweetalert2";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useContext } from "react";
import { CartContext } from "../../../Provider/CartProvider";

const MyCart = () => {
  const [cart, refetch] = UseCart();
  const { quantities, updateQuantity } = useContext(CartContext);

  // Calculate the total based on the quantities and item prices
  const total = cart.reduce(
    (sum, item, index) => parseFloat(item.price) * quantities[index] + sum,
    0
  );

  const handleQuantity = (index, newQuantity) => {
    if (isNaN(newQuantity)) {
      newQuantity = 1; // or any default value you want
    }
    newQuantity = Math.max(0, Math.floor(newQuantity));
    console.log(newQuantity)
    updateQuantity(index, newQuantity);
    refetch(); // Call refetch to update the cart data
  };

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
                  <button
                    onClick={() => handleQuantity(index, quantities[index] - 1)}
                  >
                    <RemoveIcon />
                  </button>
                  <input
                    type="text"
                    value={quantities[index]}
                    className="input input-bordered input-info w-1/6 max-w-xs rounded-sm"
                  />
                  <button
                    onClick={() => handleQuantity(index, quantities[index] + 1)}
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

                    <Link to="">
                      <AutorenewIcon></AutorenewIcon>
                    </Link>
                  </div>
                </div>
              </td>

              <td className="">{item.price}</td>
              {/* Display the total for the current item */}
              <td className="text-end">
                {(parseFloat(item.price) * quantities[index]).toFixed(2)}
              </td>
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
            <div className="font-bold">Total :{total.toFixed(2)}tk</div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MyCart;
