import React from "react";
import useCoupon from "../../../Hooks/useCoupon";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const ManageCoupon = () => {
  const [coupon, refetch] = useCoupon();
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete him!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/coupon/${_id}`);

        console.log("Order cancelled", res.data);
        if (res?.data?.deletedCount > 0) {
          refetch();
        }
      }
    });
  };
  return (
    <div className="bg-[f4f4f3]">
      <div className="overflow-x-auto ">
        <table className="min-w-[90%] shadow-md bg-[#f0f6f6] border mx-auto   my-6">
          <thead>
            <tr className="bg-[#00b16a] text-black-100">
              <th className="py-3 px-6 text-left border-b">Coupon Code</th>
              <th className="py-3 px-6 text-left border-b">Percentage</th>
              <th className="py-3 px-6 text-left border-b">Start Date</th>
              <th className="py-3 px-6  text-left border-b">End Date</th>
              <th className="py-3 px-6  text-left border-b">Number Of Use </th>
              <th className="py-3 px-6  text-left border-b">Category </th>
              <th className="py-3 px-6  text-left border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {coupon.map((coupon) => (
              <tr key={coupon._id}>
                <td className="py-4 px-6 border-b">{coupon.couponCode}</td>
                <td className="py-4 px-6 border-b">{coupon.percentage}</td>
                <td className="py-4 px-6 border-b text-start">
                  {coupon.startDate}
                </td>

                <td className="py-3 px-6 text-left  border-b">
                  {coupon.endDate}
                </td>
                <td className="py-3 px-6 text-left border-b">
                  {coupon.numberOfUse}
                </td>
                <td className="py-3 px-6 text-left border-b">
                  {coupon.category}
                </td>

                <button
                  onClick={() => handleDelete(coupon._id)}
                  className="py-3 px-6  text-left border-b"
                >
                  {" "}
                  <DeleteForeverIcon />{" "}
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCoupon;
