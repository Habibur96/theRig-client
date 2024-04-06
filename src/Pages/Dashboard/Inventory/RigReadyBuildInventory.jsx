import useCompleteBuild from "../../../Hooks/useCompleteBuild";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import usePayment from "../../../Hooks/usePayment";

const RigReadyBuildInventory = () => {
  const [buildProducts, combuildRefetch] = useCompleteBuild();
  const [axiosSecure] = useAxiosSecure();
  const [payments] = usePayment();

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
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/createBuild/${id}`);
        if (res?.data?.deletedCount > 0) {
          console.log(res.data);
          combuildRefetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `product is deleted!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="  border-gray-200 mt-2 ml-2">
        <div className="overflow-x-auto ">
          <table className="min-w-full divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right bg-[#00b16a]  h-12">
              <tr>
                <th className="pl-3">#</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Image
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Build Name
                </th>

                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Qty
                </th>

                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Price
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="">
              {buildProducts.map((item, index) => (
                <tr key={item._id}>
                  <th className="pl-3">{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-20 h-14">
                        <img
                          src={item?.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                    {item?.buildName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                    {item?.buildQty}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                    {item.totalPrice}tk
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                    <div className="flex gap-2">
                      <Link to={`/dashboard/editReadyBuild/${item._id}`}>
                        <ModeEditOutlinedIcon />
                      </Link>
                      <button onClick={() => handleDelete(item._id)}>
                        <DeleteForeverIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RigReadyBuildInventory;
