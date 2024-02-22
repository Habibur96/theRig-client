import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseProduct = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: product = [], refetch } = useQuery({
    queryKey: ["cpu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cpu");
      console.log(res.data);
      return res.data;
    },
  });

  return [product, refetch];
};

export default UseProduct;
