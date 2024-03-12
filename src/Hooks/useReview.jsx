import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReview = () => {
  const [axiosSecure] = useAxiosSecure();
  const { refetch: reviewRefetch, data: review = [] } = useQuery({
    queryKey: ["review"],

    queryFn: async () => {
      const res = await axiosSecure.get("/review");
      console.log(res.data);
      return res.data;
    },
  });
  return [review,reviewRefetch ];
};

export default useReview;
