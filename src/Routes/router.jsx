import { createBrowserRouter } from "react-router-dom";

import NotFound from "../Pages/NotFound/NotFound";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			// {
			// 	path: "/login",
			// 	element: <Login></Login>,
			// },
			// {
			// 	path: "/register",
			// 	element: <Register></Register>,
			// },
			// {
			// 	path: "/blog",
			// 	element: <Blog></Blog>,
			// },
			// {
			// 	path: "/alltoys",
			// 	element: <AllToys></AllToys>,
			// },
			// {
			// 	path: "/addtoys",
			// 	element: <AddToys></AddToys>,
			// },
			// {
			// 	path: "/mytoys",
			// 	element: <MyToys></MyToys>,
			// },
		],
	},
	{
		path: "*",
		element: <NotFound></NotFound>,
	},
]);
export default router;
