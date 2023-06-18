

import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../../Context/AuthContext";
import useAxiosSecure from "../UseAxiosSecure";
import useAuth from "../useAuth";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const useInstructor = () => {
	const { user }  = useAuth();
  const {  loading } = useContext(AuthContext);
	console.log("file: useAdmin.js:29 ~ useAdmin ~ user, loading:", user, loading)
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
