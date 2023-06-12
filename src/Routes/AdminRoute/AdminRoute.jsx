import { Navigate, useLocation } from "react-router";

import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import useAdmin from "../../Hooks/dashHooks/useAdmin";

const AdminRoute = ({ children }) => {
	const { user, loading, Spinner } = useContext(AuthContext);
	const [isAdmin, isAdminLoading] = useAdmin();
	const location = useLocation();

	if (loading || isAdminLoading) {
		return Spinner();
	}

	if (user && isAdmin) {
		return children;
	}
	return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
