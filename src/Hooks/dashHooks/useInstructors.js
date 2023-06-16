

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import useAxiosSecure from "../UseAxiosSecure";

const useInstructor = () => {
	const auth = useContext(AuthContext);
  const { user, loading } = auth;
//	console.log("file: useAdmin.js:29 ~ useAdmin ~ user, loading:", user, loading, auth)
	const [axiosSecure] = useAxiosSecure();

	const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
		queryKey: ["isInstructor"],
		enabled: !loading && !!user,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/instructor/${user?.email}`);

			return res.data.role;
		},
	});

	return [isInstructor, isInstructorLoading];
};

export default useInstructor;
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";

// import useSecure from "./useSecure";

// const useInstructor = () => {
//   const [axiosSecure] = useSecure();
//   const { user, loading } = useAuth();
//   const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
//     queryKey: ["isInstructor"],
//     enabled: !loading,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/user/instructor/${user?.email}`);
//       return res.data.instructor;
//     },
//   });
//   return [isInstructor, isInstructorLoading];
// };

// export default useInstructor;
