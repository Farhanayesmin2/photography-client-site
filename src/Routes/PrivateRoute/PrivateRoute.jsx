import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const PrivateRoute = ({ children }) => {
	const { user, loading, Spinner } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return Spinner();
	}

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
