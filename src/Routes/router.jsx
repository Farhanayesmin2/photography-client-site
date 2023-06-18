import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Shared/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Register from "../Shared/Register/Register";
import Login from "../Shared/Login/Login";

import Instructors from "../Component/Instructors/Instructors";
import Classes from "../Component/Classes/Classes";
import DashboardLayout from "../Layout/DashboardLayout";
import MyClass from "../Pages/Dashboard/StudentDashboard/MyClass/MyClass";
import MyEnroll from "../Pages/Dashboard/StudentDashboard/MyEnroll/MyEnroll";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment/Payment";
import ManageClass from "../Pages/Dashboard/AdminDashboard/AdminManage/ManageClass";
import ManageUser from "../Pages/Dashboard/AdminDashboard/AdminManage/ManageUser";
import Dashboard from "../Pages/Dashboard/AdminDashboard/AdminManage/Dashboard";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddInstructor from "../Pages/Dashboard/InstructorDashboard/AddInstructor/AddInstructor";
import InstructorClass from "../Pages/Dashboard/InstructorDashboard/InstructorClass/InstructorClass";

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
				path: "instructors",
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
				path: "myenroll",
				element: <MyEnroll></MyEnroll>,
			},
			{
				path: "mypayment",
				element: <PaymentHistory></PaymentHistory>,
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
				element: (
					<AdminRoute>
						<ManageUser></ManageUser>{" "}
					</AdminRoute>
				),
			},
			{
				path: "addclass",
				element: <AddInstructor></AddInstructor>,
			},
			{
				path: "instructorclass",
				element: <InstructorClass></InstructorClass>,
			},
		],
	},
]);
export default router;
