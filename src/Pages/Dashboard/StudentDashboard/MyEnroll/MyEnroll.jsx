import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";

const MyEnroll = () => {
	const [axiosSecure] = useAxiosSecure();
	const { user } = useAuth();
	const [enrollClass, setEnrolClass] = useState([]);
	useEffect(() => {
		axiosSecure.get(`/paymentHistory?email=${user?.email}`).then((res) => {
			setEnrolClass(res.data);
		});
	}, []);

	return (
		<div className="w-full">
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Class Image</th>
							<th>Class Name</th>
							<th>Instructor</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{enrollClass.map((enroll, index) => (
							<tr
								key={enroll._id}
								className="hover:bg-green-300 hover:border-green-500"
							>
								<th>{index + 1}</th>
								<td>
									<div className="avatar">
										<div className="mask mask-squircle w-12 h-12">
											<img src={enroll.classImage} alt={enroll.className} />
										</div>
									</div>
								</td>
								<td>
									<p>{enroll.className}</p>
								</td>
								<td>
									<p className="text-sm opacity-50">{enroll.instructorName}</p>
								</td>
								<td>
									<p>${enroll.price}</p>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyEnroll;
