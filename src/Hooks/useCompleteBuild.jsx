import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCompleteBuild = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: buildProducts = [], refetch: combuildRefetch } = useQuery({
    queryKey: ["createBuild"],
    queryFn: async () => {
      const res = await axiosSecure.get("/createBuild");
      console.log(res.data);
      return res.data;
    },
  });

  return [buildProducts, combuildRefetch];
};

export default useCompleteBuild;
