import UseAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseCart = () => {
  const { user, loading } = UseAuth();
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/cart?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default UseCart;
