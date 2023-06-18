import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserCog, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { AuthContext } from "../../../../Context/AuthContext";

const AllUsers = () => {
	const [axiosSecure] = useAxiosSecure();
	const { Spinner } = useContext(AuthContext);

	const {
		data: users = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			try {
				const res = await axiosSecure("/users");
				return res.data;
			} catch (error) {
				console.error("Error fetching users:", error);
				return []; // Return an empty array as a default value in case of error
			}
		},
	});
	console.log(users);

	const handleMakeAdmin = (user) => {
		// // Check if the logged-in user is an admin
		// const loggedInUserIsAdmin = user.role === "admin";

		// if (loggedInUserIsAdmin) {
		fetch(`http://localhost:4000/users/admin/${user._id}`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					refetch();
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: `${user.name} is an Admin Now!`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
		// } else {
		// 	// Display a message or take appropriate action for non-admin users
		// 	console.log("Only admins can change user roles.");
		// }
	};

	const handleMakeInstructor = (user) => {
		// // Check if the logged-in user is an admin
		// const loggedInUserIsAdmin = user.role === "admin";

		// if (loggedInUserIsAdmin) {
		fetch(`http://localhost:4000/users/instructor/${user._id}`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					refetch();
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: `${user.name} is an Instructor Now!`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
		// } else {
		// 	// Display a message or take appropriate action for non-admin users
		// 	console.log("Only admins can change user roles.");
		// }
	};
	const handleDeletemyclass = async (myuserId) => {
		try {
			// Ask for confirmation
			const result = await Swal.fire({
				title: "Confirmation",
				text: "Are you sure you want to delete this User?",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes",
				cancelButtonText: "No",
			});

			if (result.isConfirmed) {
				// Send DELETE request to the server
				await fetch(`http://localhost:4000/users/${myuserId}`, {
					method: "DELETE",
				});

				// Show success alert using SweetAlert
				Swal.fire("Success", "User deleted successfully", "success");

				// Fetch updated data from the server
				refetch();
			}
		} catch (error) {
			console.log(error);
			// Show error toast using react-toastify or any other notification library
			error("An error occurred while deleting the User");
		}
	};

	if (isLoading) {
		return Spinner();
	}
	return (
		<div className="w-full">
			<h3 className="text-3xl font-semibold my-4">
				Total Users: {users.length}
			</h3>
			<div className="overflow-x-auto">
				<table className="table table-zebra w-full">
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={user._id}>
								<th>{index + 1}</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.role ? user.role : "student"}</td>
								<td>
									{user.role === "admin" ? (
										"admin"
									) : (
										<>
											<button
												onClick={() => handleMakeAdmin(user)}
												className="btn btn-ghost bg-green-200 text-black"
											>
												<FaUserShield></FaUserShield>Make Admin
											</button>
											<button
												onClick={() => handleMakeInstructor(user)}
												className="btn btn-ghost bg-purple-200 text-black"
											>
												<FaUserCog />
												Make Instructor
											</button>
										</>
									)}
								</td>
								<td>
									<button
										onClick={() => handleDeletemyclass(user._id)}
										className="btn btn-ghost bg-red-600  text-white"
									>
										<FaTrashAlt></FaTrashAlt>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllUsers;
