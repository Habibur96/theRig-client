import React from "react";
import useUsers from "../../../Hooks/useUsers";
import { useParams } from "react-router-dom";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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
    <div className="max-w-screen-3xl mx-auto border-gray-200 mt-4 pl-2">
      <div className="overflow-x-auto ">
        <table className="min-w-full divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right bg-[#65B741] h-12">
            <tr>
              <th className="pl-3">#</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Order Id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Quantity
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
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

          <tbody className="divide-y divide-gray-200">
            {orderHistories.map((orderHistory, index) => (
              <tr key={orderHistory._id}>
                <th className="pl-3">{index + 1}</th>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {orderHistory.itemName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {orderHistory._id}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {orderHistory.quantity}
                </td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {orderHistory.date}
                </td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {orderHistory.orderStatus}
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
