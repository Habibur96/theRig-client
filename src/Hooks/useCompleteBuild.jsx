import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCompleteBuild = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: buildProducts = [], refetch } = useQuery({
    queryKey: ["createBuild"],
    queryFn: async () => {
      const res = await axiosSecure.get("/createBuild");
      console.log(res.data);
      return res.data;
    },
  });

  return [buildProducts, refetch];
};

export default useCompleteBuild;
