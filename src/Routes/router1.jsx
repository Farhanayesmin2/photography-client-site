// import { createBrowserRouter } from "react-router-dom";

// import NotFound from "../Pages/NotFound/NotFound";
// import Main from "../Layout/Main";
// import Home from "../Pages/Home/Home";
// import Login from "../Pages/Login/Login";
// import Register from "../Pages/Register/Register";
// import Instructors from "../Component/Instructors/Instructors";
// import Classes from "../Component/Classes/Classes";
// import DashboardLayout from "../Layout/DashboardLayout";
// import MyClass from "../Component/MyClass/MyClass";
// import Payment from "../Pages/Dashboard/Payment/Payment";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";
// // import AdminRoute from "./AdminRoute/AdminRoute";
// import Dashboard from "../Pages/Dashboard/Payment/Dashboard";
// import ManageClass from "../Component/AdminManage/ManageClass";
// import ManageUser from "../Component/AdminManage/ManageUser";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Main></Main>,
// 		errorElement: <NotFound></NotFound>,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Home></Home>,
// 			},
// 			{
// 				path: "/login",
// 				element: <Login></Login>,
// 			},
// 			{
// 				path: "/register",
// 				element: <Register></Register>,
// 			},

// 			{
// 				path: "/instructors",
// 				element: <Instructors></Instructors>,
// 			},
// 			{
// 				path: "/classes",
// 				element: <Classes></Classes>,
// 			},
// 			// {
// 			// 	path: "/manage-users",
// 			// 	element: <ManageUser></ManageUser>,
// 			// },

// 			{
// 				path: "/dashboard",
// 				element: (
// 					// <PrivateRoute>
// 					<DashboardLayout></DashboardLayout>
// 					// </PrivateRoute>
// 				),
// 				errorElement: <NotFound></NotFound>,
// 				children: [
// 					{
// 						path: "/a",
// 						element: <Dashboard></Dashboard>,
// 					},
// 					{
// 						path: "myclass",
// 						element: (
// 							<PrivateRoute>
// 								{" "}
// 								<MyClass></MyClass>{" "}
// 							</PrivateRoute>
// 						),
// 					},
// 					{
// 						path: "myclass/:id",
// 						element: <Payment></Payment>,
// 						loader: ({ params }) =>
// 							fetch(
// 								`https://school-photography-server.vercel.app/dashboard/myclass/${params.id}`
// 							),
// 					},
// 					{
// 						path: "manage-classes",
// 						element: <ManageClass></ManageClass>,
// 					},
// 					{
// 						path: "manage-users",
// 						element: <ManageUser></ManageUser>,
// 					},

// 					// {
// 					// 	path: "/dashboard/req-order",
// 					// 	element: (
// 					// 		<SellerRoute>
// 					// 			<MyReqOrders></MyReqOrders>
// 					// 		</SellerRoute>
// 					// 	),
// 					// },
// 					// {
// 					// 	path: "/dashboard/allusers",
// 					// 	element: (
// 					// 		<AdminRoute>
// 					// 			<AllUsers></AllUsers>
// 					// 		</AdminRoute>
// 					// 	),
// 					// },
// 					//Admin Route
// 					// {
// 					// 	path: "/dashboard/manage-classes",
// 					// 	element: (
// 					// 		<AdminRoute>
// 					// 			<AllProducts></AllProducts>
// 					// 		</AdminRoute>
// 					// 	),
// 					// },
// 					// {
// 					// 	path: "/dashboard/manage-user",
// 					// 	element: (
// 					// 		<AdminRoute>
// 					// 			<MyProducts></MyProducts>
// 					// 		</AdminRoute>
// 					// 	),
// 					// },
// 				],
// 			},
// 		],
// 	},
// ]);
// export default router;