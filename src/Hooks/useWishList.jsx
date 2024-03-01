import UseAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useWishList = () => {
    const { user } = UseAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: wishList = [] } = useQuery({
        queryKey: ["wishlist"],
        
        queryFn: async () => {
          const res = await axiosSecure.get("/wishlist");
          console.log(res.data)
          return res.data;
        },
      });
      return [wishList, refetch];
};

export default useWishList;