import { Link } from "react-router-dom";
import useWishList from "../../Hooks/useWishList";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileNavber from "./ProfileHeader/ProfileNavber";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseCart from "../../Hooks/UseCart";
import theRig from "../../assets/logo/theRig.png";
const WishList = () => {
  const [wishList, wishListRefetch] = useWishList();
  const [, refetch] = UseCart();
  const [axiosSecure] = useAxiosSecure();
  const { user } = UseAuth();

  const userInfo = wishList.filter((item) => item.email === user?.email);

  const handleCart = async (item) => {
    if (user && user.email) {
      const cartItem = {
        email: user?.email,
        cartItemId: item?._id,
        category: item?.category,
        model: item?.model,
        name: item?.productName,
        img: item?.productImg,
        shoplogo: item?.shoplogo,
        price: item?.price,
      };

      const res = await axiosSecure.post("/cart", cartItem);
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
      });
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/wishlist/${id}`);
        if (res?.data?.deletedCount > 0) {
          console.log(res.data);
          wishListRefetch();
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: `product is deleted!`,
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
        }
      }
    });
  };
  return (
    <div className="max-w-screen-lg mx-auto mt-20">
      <div className="max-w-screen-md mx-auto">
        <ProfileHeader></ProfileHeader>
      </div>
      <div className="mt-5">
        <ProfileNavber />
      </div>
      <h1 className="mt-5 mb-5 text-blue-600 text-2xl font-semibold">
        My Wish List
      </h1>

      <table className="table w-full max-w-screen-xl mx-auto ">
        <thead className="ltr:text-left rtl:text-right bg-[#00b16a]  h-12">
          <tr>
            <th>#</th>
            <th>Merchant</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody className="bg-re">
          {userInfo.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>
                {item.shoplogo ? (
                  <div className="avatar">
                    <div className="w-24 h-5">
                      <img
                        src={item.shoplogo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="avatar">
                    <div className="w-24 h-12">
                      <img src={theRig} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                )}
              </td>
              <td>
                <div className="avatar">
                  <div className="w-12 h-12">
                    <img
                      src={item.productImg}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>{item.productName}</td>

              <td>
                <div className="mr-10 font-semibold text-lg text-[#ef4a23]">
                  {item?.price}
                </div>
              </td>
              <td>
                <button
                  onClick={() => handleCart(item)}
                  className="btn btn-sm btn-success "
                  style={{ textTransform: "capitalize" }}
                >
                  Add
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-ghost bg-red-600  text-white"
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;
