import UseAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useQuestion = () => {
    const [axiosSecure] = useAxiosSecure();
    const { refetch: wishListRefetch, data: wishList = [] } = useQuery({
        queryKey: ["question"],
        
        queryFn: async () => {
          const res = await axiosSecure.get("/question");
          console.log(res.data)
          return res.data;
        },
      });
      return [wishList, wishListRefetch];
};

export default useQuestion;