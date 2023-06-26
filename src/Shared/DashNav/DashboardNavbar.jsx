import { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import useAuth from "../../Hooks/useAuth";
import { BsFillCameraFill } from "react-icons/bs";
const DashboardNavbar = () => {
	const { logOut } = useContext(AuthContext);
	const { user } = useAuth();
	const location = useLocation();
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((err) => console.log(err));
		return <Navigate to="/home" state={{ from: location }} replace></Navigate>;
	};
	const menuItems = (
		<>
			<li>
				<Link to={"/"}>Home</Link>
			</li>
			<li>
				<Link to={"/about"}>About</Link>
			</li>
			<li>
				<Link to={"/blog"}>Blog</Link>
			</li>

			{user?.uid ? (
				<>
					<li>
						<Link to={"/dashboard"}>Dashboard</Link>
					</li>
					<li>
						<button onClick={handleLogOut}>LogOut</button>
					</li>
				</>
			) : (
				<li>
					<Link to={"/login"}>Login</Link>
				</li>
			)}
		</>
	);
	return (
		<div className="navbar bg-white shadow-sm shadow-cyan-400 border-b-1 border-gray-300 text-gray-600 text-xl font-serif font-semibold  ">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{menuItems}
					</ul>
				</div>
				<Link
					to={"/"}
					className="btn flex items-center btn-ghost normal-case text-xl"
				>
					<BsFillCameraFill></BsFillCameraFill> School Photography
				</Link>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal p-0">{menuItems}</ul>
			</div>
			<div className="navbar-end lg:hidden">
				<label
					htmlFor="dashboard-drawer"
					tabIndex={0}
					className="btn btn-ghost lg:hidden"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</label>
			</div>
		</div>
	);
};

export default DashboardNavbar;
