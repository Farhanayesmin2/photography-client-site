import { useEffect, useState } from "react";
import moment from "moment/moment";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";

const PaymentHistory = () => {
	const [axiosSecure] = useAxiosSecure();
	const [payments, setPayment] = useState([]);
	const { user } = useAuth();

	console.log(user);
	useEffect(() => {
		axiosSecure.get(`/paymentHistory?email=${user?.email}`).then((res) => {
			setPayment(res.data);
		});
	}, []);

	//?email=${user?.email}
	return (
		<div className="w-full my-5">
			<h1 className="text-center text-2xl font-serif font-bold my-5 text-gray-800">
				My Payment History
			</h1>
			<div className="overflow-x-auto">
				<table className="table w-full border border-cyan-300">
					<thead>
						<tr>
							<th className="py-3 px-4 bg-cyan-200 text-gray-600">No.</th>
							<th className="py-3 px-4 bg-cyan-200 text-gray-600">
								Transaction Id
							</th>
							<th className="py-3 px-4 bg-cyan-200 text-gray-600">
								Class Name
							</th>
							<th className="py-3 px-4 bg-cyan-200 text-gray-600">Price</th>
							<th className="py-3 px-4 bg-cyan-200 text-gray-600">Date</th>
						</tr>
					</thead>
					<tbody>
						{payments.map((payment, index) => (
							<tr
								key={payment._id}
								className={`${
									index % 2 === 0 ? "bg-gray-100" : ""
								} hover:bg-cyan-200 transition-colors duration-200`}
							>
								<td className="py-2 px-4">{index + 1}</td>
								<td className="py-2 px-4">{payment.transactionId}</td>
								<td className="py-2 px-4">{payment.className}</td>
								<td className="py-2 px-4">${payment.price}</td>
								<td className="py-2 px-4">
									{moment(payment.date).format("MMMM Do YYYY, h:mm:ss a")}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PaymentHistory;
