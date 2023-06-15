import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import useInstructors from "../../Hooks/dashHooks/useInstructors";

const InstructorRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const [isInstructor, isInstructorLoading] = useInstructors(user?.email);
	const location = useLocation();

	if (loading || isInstructorLoading) {
		return;
	}

	if (user && isInstructor) {
		return children;
	}

	return (
		<Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
	);
};

export default InstructorRoute;
