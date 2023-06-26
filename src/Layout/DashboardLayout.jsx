import { Outlet } from "react-router-dom";

import DashboardNavbar from "../Shared/DashNav/DashboardNavbar";

import useAdmin from "../Hooks/dashHooks/useAdmin";

import useAuth from "../Hooks/useAuth";
import AdminSideBar from "../Pages/SideBar/AdminSideBar/AdminSideBar";
import InstructorSideBar from "../Pages/SideBar/InstructorSideBar/InstructorSideBar";
import UserSideBar from "../Pages/SideBar/UserSideBar/UserSideBar";
import useInstructor from "../Hooks/dashHooks/useInstructor";

const DashboardLayout = () => {
	const [isAdmin] = useAdmin();
	const [isInstructor] = useInstructor();
	const { user } = useAuth();
	console.log(user);
	return (
		<div>
			<DashboardNavbar></DashboardNavbar>
			<div className="drawer  ">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					<Outlet></Outlet>
				</div>
				{isAdmin && user && (
					<>
						{" "}
						<AdminSideBar></AdminSideBar>{" "}
					</>
				)}
				{isInstructor && user && (
					<>
						<InstructorSideBar></InstructorSideBar>
					</>
				)}
				{!isAdmin && !isInstructor && user && (
					<>
						<UserSideBar></UserSideBar>
					</>
				)}
				{/* <Sidebar></Sidebar> */}
			</div>
			{/* 
			<DashboardNavbar></DashboardNavbar>
			<div className="drawer  drawer-mobile">
				<input
					id="dashboard-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content">
					<Outlet></Outlet>
				</div>
				<>
					<li>
						<Link to="/dashboard/add-class">Add Class</Link>
					</li>
					<li>
						<Link to="/dashboard/my-class">My Class</Link>
					</li>
				</> */}
			{/* <div className="drawer-side">
					<label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 bg-base-100 text-base-content">
						<li>
							<Link to="/dashboard">My Orders</Link>
						</li>

						{isSeller && (
							<>
								<li>
									<Link to="/dashboard/add-product">Add Product</Link>
								</li>
								<li>
									<Link to="/dashboard/my-products">My Products</Link>
								</li>
								<li>
									<Link to="/dashboard/req-order">My Buyers</Link>
								</li>
							</>
						)}
						{isAdmin && (
							<>
								<li>
									<Link to="/dashboard/allusers">All users</Link>
								</li>
								<li>
									<Link to="/dashboard/all-products">All Products</Link>
								</li>
								<li>
									<Link to="/dashboard/report-to-admin">Report to admin</Link>
								</li>
							</>
						)}
					</ul>
				</div> */}
		</div>
	);
};

export default DashboardLayout;
