import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaAccessibleIcon } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";

const InstructorClass = () => {
	const [axiosSecure] = useAxiosSecure();
	const { user, loading } = useAuth();
	const { refetch, data: InstructorClass = [] } = useQuery({
		queryKey: ["myClass", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(
				`/instructor-class?email=${user?.email}`
			);
			return res.data;
		},
	});

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "Do you want to Delete",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/instructor-class/${id}`).then((res) => {
					if (res.data.deletedCount > 0) {
						Swal.fire("Deleted!", "Your class has been deleted.", "success");
					}
					refetch();
				});
			}
		});
	};

	const getStatusColor = (status) => {
		switch (status) {
			case "pending":
				return "text-yellow-500";
			case "denied":
				return "text-red-500";
			case "approved":
				return "text-green-500";
			default:
				return "";
		}
	};

	return (
		<div className="w-full text-gray-600 h-screen my-12">
			<p className="text-center my-5">
				<Link
					className="text-cyan-400 font-semibold text-2xl font-mono"
					to="/dashboard/addclass"
				>
					Instructor Class
				</Link>
			</p>

			<div className="">
				<table className="table text-gray-600">
					{/* head of the table */}
					<thead>
						<tr>
							<th>Avatar</th>
							<th>Class Name</th>
							<th>Instructor</th>
							<th>Price</th>
							<th>Total Enrolled</th>
							<th>Available seats</th>
							<th>Status</th>
							<th>Feedback</th>
							<th>Action</th>
							<th>Update</th>
						</tr>
					</thead>
					<tbody>
						{InstructorClass.map((instructor) => (
							<tr key={instructor._id}>
								<td>
									<div className="avatar">
										<div className="mask mask-squircle w-12 h-12">
											<img src={instructor.picture} alt={instructor.name} />
										</div>
									</div>
								</td>
								<td>
									<p>{instructor.class_name}</p>
								</td>
								<td>
									<p>{instructor.name}</p>
								</td>
								<td>
									<p>${instructor.price}</p>
								</td>
								<td>
									{instructor.status === "pending" ||
									instructor.status === "denied" ? (
										<p>Still now {instructor.status} </p>
									) : (
										<p>{instructor.totalEnrolled}</p>
									)}
								</td>
								<td>
									<p>{instructor.available_seats}</p>
								</td>
								<td>
									<p className={getStatusColor(instructor.status)}>
										{instructor.status}
									</p>
								</td>
								<td>
									<p>
										<FaAccessibleIcon></FaAccessibleIcon> {instructor.feedback}
									</p>
								</td>

								<td>
									<button
										onClick={() => handleDelete(instructor?._id)}
										className="btn text-red-500 hover:text-red-700"
									>
										<FaTrashAlt></FaTrashAlt>
									</button>
								</td>
								<td>
									<Link
										to={`/dashboard/update/${instructor?._id}`}
										className="btn text-white bg-gray-600 hover:bg-cyan-400 hover:text-gray-600"
									>
										Update
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default InstructorClass;
