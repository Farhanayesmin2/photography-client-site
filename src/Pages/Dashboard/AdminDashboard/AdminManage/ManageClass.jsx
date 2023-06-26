import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Feedback from "../FeedBack/FeedBack";

const ManageClass = () => {
	const [axiosSecure] = useAxiosSecure();
	const [showModal, setShowModal] = useState(false);
	const [classId, setClassId] = useState(null);
	const { data: allclasses, refetch } = useQuery({
		queryKey: ["allClasses"],
		queryFn: async () => {
			const res = await axiosSecure.get("/allclasses");
			return res.data;
		},
	});

	const handleFeedback = (id) => {
		setClassId(id);
		setShowModal(true);
	};

	const handleApprove = (id) => {
		axiosSecure.patch(`/allclasses/approved/${id}`).then((res) => {
			if (res.data.modifiedCount) {
				Swal.fire({
					position: "top-center",
					icon: "success",
					title: "Approve successfully",
					showConfirmButton: false,
					timer: 1500,
				});
				refetch();
			}
		});
	};

	const FeedbackSuccess = () => {
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Feedback has been send successfully",
			showConfirmButton: false,
			timer: 1500,
		});
	};

	const handleDeny = (id) => {
		axiosSecure.patch(`/allclasses/denied/${id}`).then((res) => {
			if (res.data.modifiedCount) {
				Swal.fire({
					position: "top-center",
					icon: "success",
					title: "Denied has been send successfully",
					showConfirmButton: false,
					timer: 1500,
				});
				refetch();
			}
		});
	};
	return (
		<div className="w-full h-screen text-gray-600 container mx-auto  mt-10  transition-all duration-500">
			<h1 className="text-cyan-400  bg-white font-serif font-semibold text-2xl  text-center mb-4">
				All Instuctor Class
			</h1>

			<div className="fixed bg-white z-50 top-[25%] left-[43%]">
				{showModal && (
					<Feedback
						id={classId}
						FeedbackSuccess={FeedbackSuccess}
						onClose={() => setShowModal(false)}
					/>
				)}
			</div>

			<div
				className={
					showModal ? "hidden" : "max-h-[calc(100vh-100px)]  overflow-x-auto"
				}
			>
				<table className="table text-gray-600">
					{/* head */}
					<thead>
						<tr>
							<th>Image</th>
							<th>Class Name</th>
							<th>Instructor</th>
							<th>Instructor email</th>
							<th>Price</th>
							<th>Total Enrolled</th>
							<th>Status</th>
							<th>Approved</th>
							<th> Deny</th>
							<th>Send Feedback</th>
						</tr>
					</thead>
					<tbody>
						{allclasses &&
							allclasses.map((instructor) => (
								<>
									<tr key={instructor?._id}>
										<td>
											<div className="avatar">
												<div className="mask mask-squircle w-12 h-12">
													<img
														src={instructor?.picture}
														alt={instructor?.class_name}
													/>
												</div>
											</div>
										</td>
										<td>
											<p>{instructor?.class_name}</p>
										</td>
										<td>
											<p>{instructor?.name}</p>
										</td>
										<td>
											<p>{instructor?.email}</p>
										</td>
										<td>
											<p>${instructor?.price}</p>
										</td>
										<td>
											{instructor?.status == "pending" ||
											instructor?.status == "denied" ? (
												<p>Still now {instructor?.status} </p>
											) : (
												<p>{instructor?.totalEnrolled}</p>
											)}
										</td>
										<td>
											<p>{instructor?.status}</p>
										</td>

										<td>
											<button
												onClick={() => handleApprove(instructor?._id)}
												disabled={
													instructor?.status === "approved" ||
													instructor?.status === "denied"
												}
												className={`rounded-sm  shadow-md p-3 font-mono font-semibold text-sm ${
													instructor?.status === "approved" ||
													instructor?.status === "denied"
														? "bg-gray-300 text-gray-500"
														: "bg-gray-600 text-white  border-white border-2 shadow-cyan-400  "
												}`}
											>
												Approved
											</button>
										</td>
										<td>
											<button
												onClick={() => handleDeny(instructor?._id)}
												disabled={
													instructor?.status === "approved" ||
													instructor?.status === "denied"
												}
												className={`rounded-sm  shadow-md p-3 font-mono font-semibold text-sm ${
													instructor?.status === "approved" ||
													instructor?.status === "denied"
														? "bg-gray-300 text-gray-500"
														: "bg-gray-600 text-white  border-white border-2 shadow-cyan-400  "
												}`}
											>
												Deny
											</button>
										</td>
										<td>
											<button
												onClick={() => handleFeedback(instructor?._id)}
												className="rounded-sm border-white border-2 shadow-cyan-400 shadow-md bg-gray-600 text-white p-3 font-mono font-semibold text-sm"
											>
												Feedback
											</button>
										</td>
									</tr>
								</>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageClass;
