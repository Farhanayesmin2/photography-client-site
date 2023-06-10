import { createBrowserRouter } from "react-router-dom";

import NotFound from "../Pages/NotFound/NotFound";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Component/Instructors/Instructors";
import Classes from "../Component/Classes/Classes";
import DashboardLayout from "../Layout/DashboardLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},

			{
				path: "/instructors",
				element: <Instructors></Instructors>,
			},
			{
				path: "/classes",
				element: <Classes></Classes>,
			},
			{
				path: "/dashbroad",
				element: <DashboardLayout> </DashboardLayout>,
			},
			// {
			// 	path: "/blog",
			// 	element: <Blog></Blog>,
			// },
		],
	},
	{
		path: "*",
		element: <NotFound></NotFound>,
	},
]);
export default router;
