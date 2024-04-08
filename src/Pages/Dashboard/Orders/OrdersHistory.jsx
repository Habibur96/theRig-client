import React from "react";
import useUsers from "../../../Hooks/useUsers";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import usePayment from "../../../Hooks/usePayment";

const OrderHistory = () => {
  const [user] = useUsers();
  const { email } = useParams();

  const userInfo = user.filter((item) => item.email === email);

  const [axiosSecure] = useAxiosSecure();

  

  const { data: orderHistories = [] } = useQuery({
    queryKey: ["payments", userInfo[0]?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${userInfo[0]?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className="max-w-screen-3xl mx-auto border-gray-200 mt-2 ">
      <div className="overflow-x-auto ">
        <table className="min-w-full divide-gray-200 bg-white text-sm ml-1">
          <thead className="ltr:text-left rtl:text-right bg-[#00b16a] h-12">
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

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                Order Id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Quantity
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-center text-gray-900">
                Placed On
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
            {orderHistories.map((orderHistory, index) => (
              <tr className="divide-x divide-gray-200" key={orderHistory._id}>
                <th className=" pl-3 pr-3 font-medium">{index + 1}</th>
                <td className=" whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {orderHistory.itemPhoto.map((photo, index) => (
                    <tr key={orderHistory._id + index}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        <img
                          src={photo}
                          alt="Product Image"
                          className="h-12 w-12"
                        />
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {orderHistory.itemName ? (
                          <span>{orderHistory.itemName[index]}</span>
                        ) : (
                          <>{orderHistory.productName[index]}</>
                        )}
                      </td>
                    </tr>
                  ))}
                </td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700 ">
                  {orderHistory._id}
                </td>
                <td className="whitespace-nowrap text-center py-2 text-gray-700">
                  {orderHistory.quantity}
                </td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {orderHistory.date}
                </td>

                <td
                  className={`whitespace-nowrap px-4 py-2 font-semibold text-lg ${
                    orderHistory.orderStatus === "cancelled"
                      ? "text-red-600"
                      : orderHistory.orderStatus === "processing"
                      ? "text-sky-600"
                      : orderHistory.orderStatus === "shipped"
                      ? "text-yellow-600"
                      : orderHistory.orderStatus === "delivered"
                      ? "text-green-600"
                      : ""
                  }`}
                >
                  {orderHistory?.orderStatus}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {orderHistory.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
