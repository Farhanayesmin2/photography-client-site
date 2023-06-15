import { createBrowserRouter } from "react-router-dom";

import NotFound from "../Pages/NotFound/NotFound";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Component/Instructors/Instructors";
import Classes from "../Component/Classes/Classes";
import DashboardLayout from "../Layout/DashboardLayout";
import MyClass from "../Component/MyClass/MyClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";
// import AdminRoute from "./AdminRoute/AdminRoute";
import Dashboard from "../Pages/Dashboard/Payment/Dashboard";
import ManageClass from "../Component/AdminManage/ManageClass";
import ManageUser from "../Component/AdminManage/ManageUser";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "instructor",
				element: <Instructors></Instructors>,
			},
			{
				path: "classes",
				element: <Classes></Classes>,
			},
		],
	},
	{
		path: "dashboard",
		element: (
			// <PrivetRoutes>
			<DashboardLayout></DashboardLayout>
			// </PrivetRoutes>
		),
		children: [
			{
				path: "dashboard",
				element: <Dashboard></Dashboard>,
			},

			{
				path: "myclass",
				element: <MyClass></MyClass>,
			},
			{
				path: "myclass/:id",
				element: <Payment></Payment>,
				loader: ({ params }) =>
					fetch(
						`https://school-photography-server.vercel.app/dashboard/myclass/${params.id}`
					),
			},
			{
				path: "manage-classes",
				element: <ManageClass></ManageClass>,
			},
			{
				path: "manage-users",
				element: <ManageUser></ManageUser>,
			},
		],
	},
]);
export default router;
