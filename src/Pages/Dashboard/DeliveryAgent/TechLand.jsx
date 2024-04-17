import usePayment from "../../../Hooks/usePayment";
import Dropdown from "react-bootstrap/Dropdown";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useOrders from "../../../Hooks/useOrders";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { Link } from "react-router-dom";

const TechLand = () => {
  const [payments] = usePayment();
  const [, refetch] = useOrders();
  const [axiosSecure] = useAxiosSecure();
  console.log(payments);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const orderStatus = "collected";
  // Filter payments based on orderStatus
  const processingPayments = payments.filter(
    (payment) =>
      payment.orderStatus === "processing" ||
      payment.orderStatus === "collected"
  );
  console.log(processingPayments);

  // Filter startechPayments based on shopName
  const startechPayments = processingPayments.filter(
    (payment) =>
      Array.isArray(payment.shopName) && payment.shopName.includes("techland")
  );

  console.log(startechPayments);

  const startechData = [];
  startechPayments.forEach((payment) => {
    // Find all occurrences of "startech" in shopName
    const indices = payment.shopName.reduce((acc, shopName, index) => {
      if (shopName === "techland") {
        acc.push(index);
      }
      return acc;
    }, []);

    // Iterate through all occurrences of "startech" in shopName
    indices.forEach((index) => {
      if (
        Array.isArray(payment.itemPhoto) &&
        Array.isArray(payment.itemName) &&
        index < payment.itemPhoto.length && // Make sure index is within bounds
        index < payment.itemName.length // Make sure index is within bounds
      ) {
        startechData.push({
          itemPhoto: payment.itemPhoto[index],
          itemName: payment.itemName[index],
          itemQty: payment.menuItemQuantity[index], // Assuming menuItemQuantity is an array
          category: payment.category[index],
          model: payment.model[index],
          orderStatus: payment.orderStatus,
          plcedOn: payment.date,
          _id: payment._id,
        });
      }
    });
  });

  console.log(startechData);

  const handleUpdate = async (_id, orderStatus) => {
    console.log(_id, orderStatus);
    const res = await axiosSecure.put(`/payments/${_id}`, { orderStatus });
    console.log("Order Status updated", res.data);
    if (res?.data?.modifiedCount > 0) {
      refetch();
    }
  };

  const formattedDate = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
  });
  return (
    <div>
      <div ref={componentRef}>
        <img
          className="h-10 items-center mt-5 mx-auto mb-3"
          src="https://www.techlandbd.com/image/cache/wp/lp/techland/logo/techland-logo.webp"
          alt=""
        />
        <p className="text-black text-center mb-4">
          Phone: 09613828201 <br /> Email: sales@techlandbd.com <br /> Website:
          https://www.techlandbd.com/
        </p>{" "}
        <div className=" max-w-screen-3xl mx-auto border-gray-200 mt-2">
          <div className="overflow-x-auto ">
            <table className="min-w-full divide-gray-200 bg-white text-sm font-medium">
              <thead className="ltr:text-left rtl:text-right bg-[#5daee4] h-12 ">
                <tr>
                  <th className="pl-3 px-2">#</th>

                  <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    Img
                  </th>
                  <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    Product Name
                  </th>
                  <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    Model
                  </th>
                  <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    Category
                  </th>
                  <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    Quantity
                  </th>

                  <th className="whitespace-nowrap px-3 py-2 font-medium text-gray-900">
                    Order Status
                  </th>
                  <th className="whitespace-nowrap px-3 py-2 font-medium text-gray-900">
                    Action
                  </th>
                  <th className="whitespace-nowrap px-3 py-2 font-medium text-gray-900">
                    Details
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-300">
                {startechData.map((item, index) => (
                  <tr className="divide-x divide-gray-110" key={item._id}>
                    <th className="pl-3 px-2">{index + 1}</th>
                    <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                      <img className="h-12 w-12" src={item.itemPhoto} alt="" />
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                      {item.itemName}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                      {item.model}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                      {item.category}
                    </td>

                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.itemQty}
                    </td>

                    <td
                      className={`whitespace-nowrap px-4 py-2 font-semibold text-lg ${
                        item.orderStatus === "collected"
                          ? "text-green-600"
                          : "text-blue-600"
                      }`}
                    >
                      {item.orderStatus}
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
                              onClick={() =>
                                handleUpdate(item._id, orderStatus)
                              }
                            >
                              collected
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <Link to={`/dashboard/ordersToDeliver/${item._id}`} className="text-blue-700 font-semibold">
                        See Details
                      </Link>
                    </td>
                  </tr>
                ))}
                <tr></tr>
              </tbody>
            </table>
            <h1 className="ml-10 mt-5 font-semibold">
              All information generated from TheRIG at {formattedDate}
            </h1>
          </div>
        </div>
      </div>
      <button
        style={{ textTransform: "capitalize" }}
        onClick={handlePrint}
        className="btn btn-wide bg-[#5daee4] text-lg mt-10"
      >
        Print
      </button>
    </div>
  );
};

export default TechLand;
