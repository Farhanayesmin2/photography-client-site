// import { useEffect, useState } from "react"

// const useAdmin = email => {
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [isAdminLoading, setIsAdminLoading] = useState(true);
//     useEffect(() => {
//         if (email) {
//             fetch(`https://school-photography-server.vercel.app/users/admin/${email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     setIsAdmin(data.isAdmin);
//                     setIsAdminLoading(false);
//                 })
//         }
//     }, [email])
//     return [isAdmin, isAdminLoading]
// }

// export default useAdmin;

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import useAxiosSecure from "../UseAxiosSecure";

const useAdmin = () => {
	const auth = useContext(AuthContext);
  const { user, loading } = auth;
	console.log("file: useAdmin.js:29 ~ useAdmin ~ user, loading:", user, loading, auth)
	const [axiosSecure] = useAxiosSecure();

	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
		queryKey: ["isAdmin"],
		enabled: !loading && !!user,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/admin/${user?.email}`);

			return res.data.role;
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
