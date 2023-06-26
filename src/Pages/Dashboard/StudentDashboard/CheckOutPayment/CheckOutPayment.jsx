import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Context/AuthContext";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";

const CheckOutPayment = ({ payment }) => {
	const { user } = useContext(AuthContext);

	const stripe = useStripe();
	const elements = useElements();
	const {
		email,
		price,
		image,
		availableSeats,
		_id,
		class_id,
		className,
		classImage,
		instructorName,
	} = payment || {};
	const [axiosSecure] = useAxiosSecure();
	const [cardError, setCardError] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState("");
	console.log(payment, price);
	useEffect(() => {
		if (price > 0) {
			axiosSecure.post("/create-payment-intent", { price }).then((res) => {
				console.log(res.data.clientSecret);
				setClientSecret(res.data.clientSecret);
			});
		}
	}, [price, axiosSecure]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card === null) {
			return;
		}

		const { error } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			console.log("error", error);
			setCardError(error.message);
		} else {
			setCardError("");
			// console.log('payment method', paymentMethod)
		}

		setProcessing(true);

		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						email: user?.email || "unknown",
						name: user?.displayName || "anonymous",
					},
				},
			});

		if (confirmError) {
			console.log(confirmError);
		}

		setProcessing(false);
		if (paymentIntent.status === "succeeded") {
			setTransactionId(paymentIntent.id);
			// save payment information to the server
			const payment = {
				transactionId: paymentIntent.id,
				date: new Date(),
				selectId: _id,
				class_id,
				useremail: user?.email,
				instructorEmail: email,
				availableSeats,
				className,
				image,
				price,
				classImage,
				studentName: user?.displayName,
				instructorName,
			};
			console.log(payment);
			axiosSecure
				.post(`/payments?class_id=${class_id}`, payment)
				.then((res) => {
					console.log(res.data.insertedId);
					if (res.data.insertedId) {
						Swal.fire({
							position: "top-center",
							icon: "success",
							title: "Your order has been successful",
							showConfirmButton: false,
							timer: 1500,
						});
					}
				});
		}
	};

	return (
		<div>
			<>
				<form className="w-2/3 m-8" onSubmit={handleSubmit}>
					<CardElement
						options={{
							style: {
								base: {
									fontSize: "16px",
									color: "#424770",
									"::placeholder": {
										color: "#aab7c4",
									},
								},
								invalid: {
									color: "#9e2146",
								},
							},
						}}
					/>
					<button
						className="btn btn-primary btn-sm mt-4"
						type="submit"
						disabled={!stripe || !clientSecret || processing}
					>
						Pay
					</button>
				</form>
				{cardError && <p className="text-red-600 ml-8">{cardError}</p>}
				{transactionId && (
					<p className="text-green-500">
						Transaction complete with transactionId: {transactionId}
					</p>
				)}
			</>
		</div>
	);
};
export default CheckOutPayment;
