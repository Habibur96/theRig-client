import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useOrders = () => {
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      console.log(res.data);
      return res.data;
    },
  });
  return [orders, refetch];
};

export default useOrders;
