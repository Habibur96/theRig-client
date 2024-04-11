import { useParams } from "react-router-dom";
import usePayment from "../../../Hooks/usePayment";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
const OrdersToDeliver = () => {
  const { id } = useParams();
  const [payments, refetch] = usePayment();
  const [axiosSecure] = useAxiosSecure();
  const orders = payments.filter((payment) => payment._id === id);
  const orderStatus = "delivered";
  const handleUpdate = async (_id, orderStatus) => {
    console.log(_id, orderStatus);
    const res = await axiosSecure.put(`/payments/${_id}`, { orderStatus });
    console.log("Order Status updated", res.data);
    if (res?.data?.modifiedCount > 0) {
      refetch();
    }
  };
  console.log(id);
  console.log(orders);
  return (
    <div className="">
      <div className="overflow-x-auto max-w-screen-3xl mx-auto border-gray-200 mt-2 ">
        <table className="min-w-full divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right bg-[#5daee4] h-12">
            <tr>
              <th className="pl-3">#</th>
              <div className="">
                <th className="whitespace-nowrap px-12 py-2 font-medium text-gray-900">
                  Image
                </th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  Product Name
                </th>
              </div>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Quantity
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-center text-gray-900">
                Phone
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Address
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Order Status
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 ">
            {orders.map((order, index) => (
              <tr className="divide-x divide-gray-200" key={order._id}>
                <th className=" pl-3 pr-3 font-medium">{index + 1}</th>
                <td className=" whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {order.itemPhoto.map((photo, index) => (
                    <tr key={order._id + index}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        <img
                          src={photo}
                          alt="Product Image"
                          className="h-12 w-12"
                        />
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {order.itemName ? (
                          <span>{order.itemName[index]}</span>
                        ) : (
                          <>{order.productName[index]}</>
                        )}
                      </td>
                    </tr>
                  ))}
                </td>

                <td className="whitespace-nowrap text-center py-2 text-gray-700">
                  {order.quantity}
                </td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {order.phone}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {order.address}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {order.orderStatus}
                </td>

                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
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
                          onClick={() => handleUpdate(order._id, orderStatus)}
                        >
                          delivered
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
        
      </div>
      <div className="w-50 mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="phone" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </div>
    </div>
    
  );
};

export default OrdersToDeliver;
