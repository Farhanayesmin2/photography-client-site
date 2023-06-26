

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "../UseAxiosSecure";
import { AuthContext } from "../../Context/AuthContext";
import useAuth from "../useAuth";

const useAdmin = () => {
	const {loading } = useContext(AuthContext);
	const { user } = useAuth();
	console.log(user);
	// console.log("file: useAdmin.js:29 ~ useAdmin ~ user, loading:", user, loading, )
	const [axiosSecure] = useAxiosSecure();

	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
		queryKey: ["isAdmin"],
		enabled: !loading,
		// !loading && !!user,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/admin/${user?.email}`);
			return res.data.admin;
		},
	});

	return [isAdmin, isAdminLoading];
};

export default useAdmin;

// ['isAdmin', user?.email],
//     async () => {
//       if (!user?.email) {
//         throw new Error("User email is not available");
//       }

//       const res = await axiosSecure.get(`/users/admin/${user.email}`);
//       return res.data;
//     },
//     {
//       enabled: !loading && !!user,
//       retry: false,
//     }
