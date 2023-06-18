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

	return (
		<div className="w-full h-screen mt-10">
			<p className="text-center my-5">
				<Link
					className="text-green-400 font-semibold text-2xl font-sherif"
					to="/dashboard/addclass"
				>
					Instructor Class
				</Link>
			</p>

			<div className="">
				<table className="table">
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
									{instructor.status == "pending" ||
									instructor.status == "denied" ? (
										<p>Still now {instructor.status} </p>
									) : (
										<p>{instructor.totalEnrolled}</p>
									)}
								</td>
								<td>
									<p>{instructor.available_seats}</p>
								</td>
								<td>
									<p>{instructor.status}</p>
								</td>
								<td>
									<p>
										{" "}
										<FaAccessibleIcon></FaAccessibleIcon> {instructor.feedback}
									</p>
								</td>

								<td>
									<button
										onClick={() => handleDelete(instructor?._id)}
										className="btn"
									>
										<FaTrashAlt></FaTrashAlt>
									</button>
								</td>
								<td>
									<Link
										to={`/dashboard/update/${instructor?._id}`}
										className="btn"
									>
										{" "}
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
