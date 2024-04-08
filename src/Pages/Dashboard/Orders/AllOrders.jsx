import useOrders from "../../../Hooks/useOrders";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Dropdown from "react-bootstrap/Dropdown";

import Swal from "sweetalert2";

const AllOrders = () => {
  const [orders, refetch] = useOrders();
  const [axiosSecure] = useAxiosSecure();
  console.log(orders);
  const orderStatus = ["processing", "cancelled", "shipped", "delivered"];
  const handleUpdate = async (_id, orderStatus) => {
    console.log(_id, orderStatus);
    const res = await axiosSecure.put(`/payments/${_id}`, { orderStatus });
    console.log("Order Status updated", res.data);
    if (res?.data?.modifiedCount > 0) {
      refetch();
    }
  };

  const handleDelete = async (_id) => {
    console.log(_id);
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
        const res = await axiosSecure.delete(`/payments/${_id}`);

        console.log("Order cancelled", res.data);
        if (res?.data?.deletedCount > 0) {
          refetch();
        }
      }
    });
  };

  return (
    <div>
      {/* <h1 className="text-center font-bold text-2xl mt-3">All Orderes</h1> */}

      <div className="max-w-screen-3xl mx-auto border-gray-200 mt-2">
        <div className="overflow-x-auto ">
          <table className="min-w-full divide-gray-200 bg-white text-sm font-medium ml-2">
            <thead className="ltr:text-left rtl:text-right bg-[#00b16a] h-12">
              <tr>
                <th className="pl-3 px-2">#</th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-center">
                  Customer Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  Order Id
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-center">
                  Email
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-center">
                  Phone
                </th>
                {/* <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  Address
                </th> */}

                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  Placed On
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  Payment Status
                </th>
                <th className="whitespace-nowrap px-3 py-2 font-medium text-gray-900">
                  Order Status
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  Price
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-300">
              {orders.map((order, index) => (
                <tr className="divide-x divide-gray-110" key={order._id}>
                  <th className="pl-3 px-2">{index + 1}</th>
                  <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    {order.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {order._id}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                    {order.email}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                    {order.phone}
                  </td>
                  {/* <td className="whitespace-nowrap  px-4 py-2 text-gray-700">
                    {order.address}
                  </td> */}
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {order.date}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-gray-700 text-center">
                    {order.paymentStatus}
                  </td>

                  <td
                    className={`whitespace-nowrap px-4 py-2 font-semibold text-lg ${
                      order.orderStatus === "cancelled"
                        ? "text-red-600"
                        : order.orderStatus === "processing"
                        ? "text-sky-600"
                        : order.orderStatus === "shipped"
                        ? "text-yellow-600"
                        : order.orderStatus === "delivered"
                        ? "text-green-600"
                        : ""
                    }`}
                  >
                    {order.orderStatus}
                  </td>

                  <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                    {order.price}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <div className="flex gap-2">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          id="dropdown-basic"
                          style={{ textTransform: "capitalize" }}
                        >
                          <ModeEditOutlinedIcon /> Edit
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="font-medium text-gray-900"
                            onClick={() =>
                              handleUpdate(order._id, orderStatus[0])
                            }
                          >
                            Processing
                          </Dropdown.Item>

                          <Dropdown.Item className="font-medium text-gray-900">
                            {order.paymentStatus === "success" ? null : (
                              <div>
                                <button
                                  className="font-medium text-gray-900"
                                  onClick={() =>
                                    handleUpdate(order._id, orderStatus[1])
                                  }
                                >
                                  Cancelled
                                </button>
                              </div>
                            )}
                          </Dropdown.Item>

                          <Dropdown.Item
                            className="font-medium text-gray-900"
                            onClick={() =>
                              handleUpdate(order._id, orderStatus[2])
                            }
                          >
                            Shipped
                          </Dropdown.Item>

                          <Dropdown.Item
                            className="font-medium text-gray-900"
                            onClick={() =>
                              handleUpdate(order._id, orderStatus[3])
                            }
                          >
                            Delivered
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <button onClick={() => handleDelete(order._id)}>
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

export default AllOrders;
