import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUsers from "../../../Hooks/useUsers";

import { useParams } from "react-router-dom";

const PaymentHistory = () => {
  const [user] = useUsers();
  console.log(user)
  const { email } = useParams();

  const userInfo = user.filter((item) => item.email === email);

  const [axiosSecure] = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", userInfo[0]?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${userInfo[0]?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      <div className="  border-gray-200 mt-2">
        <div className="overflow-x-auto ">
          <table className="min-w-full divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right bg-[#00b16a]  h-12">
              <tr>
                <th className="pl-3">#</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  TransactionId
                </th>

                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Date & Time
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Price
                </th>
              </tr>
            </thead>

            <tbody className="">
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th className="pl-3">{index + 1}</th>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {payment.email}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                    {payment.transactionId}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                    {payment.date}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                    {payment.paymentStatus}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                    {payment.price}tk
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
