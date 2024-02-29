import { Navigate, useLocation } from "react-router";

import useAdmin from "../Hooks/useAdmin";
import UseAuth from "../Hooks/UseAuth";
const AdminRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (user && isAdmin) {
        return children;
    }

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;