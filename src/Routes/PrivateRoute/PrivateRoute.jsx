import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user} = useContext(AuthContext);
  // if (loading) {
  //   return <Spinner animation="border" variant="info"></Spinner>;
  // }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
