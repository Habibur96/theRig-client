import useOrders from "../../../Hooks/useOrders";
// import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// import { Form, Modal, Button, DropdownButton, Dropdown } from "react-bootstrap";

// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllOrders = () => {
  const [orders] = useOrders();
  // const [axiosSecure] = useAxiosSecure();
  console.log(orders);
  // const orderStatus = ["processing", "cancelled"];

  // const handleUpdate = async (_id, orderStatus) => {
  //   console.log(_id, orderStatus);
  //   const res = await axiosSecure.patch(`/payments/${_id}`, { orderStatus });
  //   console.log("Order Status updated", res.data);
  //   if (res?.data?.modifiedCount) {
  //     refetch();
  //   }
  // };

  // const handleDelete = (_id) => {
  //   console.log(_id);
  // };

  return (
    <div>
      {/* <h1 className="text-center font-bold text-2xl mt-3">All Orderes</h1> */}

      <div className="max-w-screen-3xl mx-auto border-gray-200 mt-4 pl-2">
        <div className="overflow-x-auto ">
          <table className="min-w-full divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right bg-[#65B741] h-12">
              <tr>
                <th className="pl-3">#</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Order Id
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Phone
                </th>

                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Date & Time
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Payment Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Order Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Price
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
             {orders.map((order, index) => (
                <tr key={order._id}>
                  <th className="pl-3">{index + 1}</th>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {order.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {order._id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {order.email}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {order.phone}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {order.date}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {order.paymentStatus}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {order.orderStatus}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {order.price}
                  </td>
                  {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <button
                      className="btn btn-sm mr-2 "
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      <ModeEditOutlinedIcon />
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                          <DropdownButton
                            id="dropdown-basic-button"
                            title="Change Order Status"
                          >
                            <Dropdown.Item href="">
                              <button
                                onClick={() =>
                                  handleUpdate(order._id, orderStatus[0])
                                }
                              >
                                Processing
                              </button>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </div>
                    </dialog>

                    <button onClick={() => handleDelete(order._id)}>
                      <DeleteForeverIcon />
                    </button>
                  </td> */}
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
