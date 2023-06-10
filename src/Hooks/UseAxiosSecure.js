

import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create();

const UseAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.defaults.baseURL = "http://localhost:4000";
  }, []);

  return null; // or return any JSX content if needed
};

export default UseAxiosSecure;

// const axiosSecure = axios.create({
//     baseURL: `http://localhost:5000`,
    
// })

















// import axios from "axios";
// import { toast } from "react-hot-toast";

// export const axiosSecure = axios.create({
//     baseURL: `http://localhost:4000`,
    
// })

// // axios.get()
// const UseAxiosSecure = () => {
//     // useEffect(()=>{
//         axiosSecure.interceptors.request.use((req)=>{
//             // try{

//             // }catch
//             const token = localStorage.getItem("access-token");
//             if(token){
//                 req.headers.Authorization = `Bearer ${token}`
//             }
//             return req;
//         });

//         axiosSecure.interceptors.response.use(
//             response => response,
//             error =>{
//                 if(error.response && (error?.response.status === 403 || error?.response.status === 401)){
//                     toast.error(error?.response?.data.error)
//                 }
//             }
//         )
//     // },[])
//     return axiosSecure;
// };

// export default UseAxiosSecure;