// import { useEffect, useState } from "react"

// const useAdmin = email => {
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [isAdminLoading, setIsAdminLoading] = useState(true);
//     useEffect(() => {
//         if (email) {
//             fetch(`https://assignment-12-server-site-eight.vercel.app/users/admin/${email}`)
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
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;