import { Navigate, useLocation } from "react-router";

import useDeliveryAgent from "../Hooks/useDeliveryAgent";
import UseAuth from "../Hooks/UseAuth";
const DeliveryAgentRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const [isDeliveryAgent] = useDeliveryAgent();
  const location = useLocation();

  if (user && isDeliveryAgent) {
    return children;
  }

  // if (loading || isAdminLoading) {
  //   return <progress className="progress w-56"></progress>;
  // }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default DeliveryAgentRoute;
