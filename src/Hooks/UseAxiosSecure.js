import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
// import { AuthContext } from '../Context/AuthContext';


const axiosSecure = axios.create({
  baseURL: 'http://localhost:4000', 
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        console.log(token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut,navigate]);

  return [axiosSecure];
};
// logOut, navigate
export default useAxiosSecure;
















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