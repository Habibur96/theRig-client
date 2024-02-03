import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";



const useAdmin = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = UseAuth();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("isAdmin", res.data);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
