import useOrders from "../../../Hooks/useOrders";
import startech from "../../../assets/logo/startech.png";
import Ultratech from "../../../assets/logo/Ultratech.png";

import Ryans from "../../../assets/logo/Ryans.png";
import skyland from "../../../assets/logo/skyland.png";
import React from "react";

const ShopwiseOrders = () => {
  const [orders] = useOrders();
  console.log(orders);
 
  return (
    <div className="max-w-screen-3xl mx-auto border-gray-200 mt-2 ">
      <div className="overflow-x-auto ">
        {/* <table className="min-w-full divide-gray-200 bg-white text-sm ml-1">
          <thead className="ltr:text-left rtl:text-right bg-[#00b16a] h-12">
            <tr>
              <th className="pl-3">Shop</th>
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

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Order Satus
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 ">
            <tr>
              <td>
                <img src={startech} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={Ultratech} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={Ryans} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={skyland} alt="" />
              </td>
            </tr>

            {orders.map((order, index) => (
              <tr className="divide-x divide-gray-200" key={order._id}>
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
                        {order.itemName[index]}
                      </td>
                    </tr>
                  ))}
                </td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700 ">
                  {order._id}
                </td>
                <td className="whitespace-nowrap text-center py-2 text-gray-700">
                  {order.quantity}
                </td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {order.date}
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
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {order.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <table className="min-w-full divide-gray-200 bg-white text-sm ml-1">
          <thead className="ltr:text-left rtl:text-right bg-[#00b16a] h-12">
            <tr>
              <th className="pl-3">Shop</th>
              <th className="whitespace-nowrap px-12 py-2 font-medium text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                Product Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Quantity
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Order Status
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {Object.entries(
              orders.reduce((acc, order) => {
                if (!acc[order.shoplogo]) {
                  acc[order.shoplogo] = [];
                }
                acc[order.shoplogo].push(order);
                return acc;
              }, {})
            ).map(([shoplogo, ordersForShop], index) => (
              <React.Fragment key={index}>
                <tr className="bg-gray-200"></tr>
                {ordersForShop.map((order, orderIndex) => (
                  <tr
                    className="divide-x divide-gray-200"
                    key={order._id + "-" + orderIndex}
                  >
                    {/* Render shoplogo for the first order of each shop */}
                    {orderIndex === 0 && (
                      <td rowSpan={ordersForShop.length}>
                        <img
                          src={shoplogo}
                          alt="Shop Logo"
                          className="h-14 w-24"
                        />
                      </td>
                    )}
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <img
                        src={order.itemPhoto}
                        alt="Product Image"
                        className="h-12 w-12"
                      />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {order.itemName}
                    </td>
                    <td className="whitespace-nowrap text-center py-2 text-gray-700">
                      {order.quantity}
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
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {order.price}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShopwiseOrders;
