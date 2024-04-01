import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUsers from "./useUsers";
const usePayment = () => {
     const [user] = useUsers();

    console.log(user)

    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: payments = [] } = useQuery({
      queryKey: ["payments"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/payments`);
        console.log(res.data);
        return res.data;
      },
    });
    return [payments, refetch];
};

export default usePayment;

// const { data: orderHistories = [] } = useQuery({
//   queryKey: ["payments", userInfo[0]?.email],
//   queryFn: async () => {
//     const res = await axiosSecure.get(`/payments/${userInfo[0]?.email}`);
//     console.log(res.data);
//     return res.data;
//   },
// });
