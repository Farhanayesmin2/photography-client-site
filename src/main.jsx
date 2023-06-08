import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router";
import AuthProviders from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProviders>
			<RouterProvider router={router}></RouterProvider>
		</AuthProviders>
	</React.StrictMode>
);
