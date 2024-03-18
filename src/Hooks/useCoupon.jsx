import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCoupon = () => {
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: coupon = [] } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      const res = await axiosSecure.get("/coupon");

      return res.data;
    },
  });
  return [coupon, refetch];
};

export default useCoupon;
