import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";

const CheckOutPayment = ({ payment }) => {
	const { user } = useContext(AuthContext);
	console.log(payment.user);
	const stripe = useStripe();
	const elements = useElements();
	const { price, availableSeats, _id, className, classImage, instructorName } =
		payment;
	const [axiosSecure] = useAxiosSecure();
	const [cardError, setCardError] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState("");

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
			await stripe.confirmCardPayment(
				`${clientSecret}_secret_${paymentIntent?.id}`, // Use paymentIntent?.id instead of paymentIntent.id
				{
					payment_method: {
						card: card,
						billing_details: {
							email: user?.email || "unknown",
							name: user?.displayName || "anonymous",
						},
					},
				}
			);

		if (confirmError) {
			console.log(confirmError);
		}
		console.log(user);
		console.log("payment intent", paymentIntent);
		setProcessing(false);

		if (paymentIntent.status === "succeeded") {
			setTransactionId(paymentIntent.id);
			// save payment information to the server
			const payment = {
				transactionId: paymentIntent.id,

				date: new Date(),
				email: user?.email,
				price,

				availableSeats,
				quantity: payment.length,
				className,
				instructorName,
				classImage,
				selectId: _id,
			};
			axiosSecure.post("/payments", payment).then((res) => {
				console.log(res.data);
				if (res.data.result.insertedId) {
					// display confirm
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
						// disabled={!stripe || !clientSecret || processing}
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

			{/* <form onSubmit={handleSubmit}>
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
					className="btn btn-sm bg-lime-400 my-12"
					type="submit"
					// disabled={!stripe || !clientSecret || processing}
				>
					Pay
				</button>
			</form>
			<p className="text-red-700">{cardError}</p>
			{success && (
				<div>
					<p className="text-green-500">{success}</p>
					<p>
						Your transactionId:{" "}
						<span className="font-bold">{transactionId}</span>
					</p>
				</div>
			)} */}
		</div>
	);
};
export default CheckOutPayment;
// export default CheckOutPayment;
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../Context/AuthContext";
// import useAxiosSecure from "../../../Hooks/UseAxiosSecure";

// const CheckOutPayment = ({ payment }) => {
// 	const { user } = useContext(AuthContext);
// 	console.log(payment);
// 	const { price, availableSeats, _id, className, classImage, instructorName } =
// 		payment;
// 	const [clientSecret, setClientSecret] = useState("");

// 	const [cardError, setCardError] = useState();
// 	const [processing, setProcessing] = useState(false);
// 	const [success, setSuccess] = useState();
// 	const [transactionId, setTransactionId] = useState();
// 	const [axiosSecure] = useAxiosSecure();
// 	// useEffect(() => {
// 	// 	// Create PaymentIntent as soon as the page loads
// 	// 	fetch("http://localhost:4000/create-payment-intent", {
// 	// 		method: "POST",
// 	// 		headers: {
// 	// 			"Content-Type": "application/json",
// 	// 			authorization: `bearer ${localStorage.getItem("accessToken")}`,
// 	// 		},
// 	// 		body: JSON.stringify({ price }),
// 	// 	})
// 	// 		.then((res) => res.json()) // ...

// 	// 		.then((data) => setClientSecret(data.clientSecret));
// 	// }, [price]);
// 	useEffect(() => {
// 		if (price > 0) {
// 			axiosSecure.post("/create-payment-intent", { price }).then((res) => {
// 				console.log(res.data.clientSecret);
// 				setClientSecret(res.data.clientSecret);
// 			});
// 		}
// 	}, [price, axiosSecure]);
// 	const stripe = useStripe();
// 	const elements = useElements();

// 	const handleSubmit = async (event) => {
// 		event.preventDefault();

// 		if (!stripe || !elements) {
// 			return;
// 		}

// 		const card = elements.getElement(CardElement);

// 		if (card == null) {
// 			return;
// 		}

// 		const { error, paymentMethod } = await stripe.createPaymentMethod({
// 			type: "card",
// 			card,
// 		});

// 		if (error) {
// 			console.log("[error]", error);
// 			setCardError(error.message);
// 		} else {
// 			setCardError("");
// 		}
// 		setSuccess("");
// 		setProcessing(true);

// 		const { paymentIntent, error: confirmError } =
// 			await stripe.confirmCardPayment(clientSecret, {
// 				payment_method: {
// 					card: card,
// 					billing_details: {
// 						name: user?.displayName || "anonymous",
// 						email: user?.email || "unknown",
// 					},
// 				},
// 			});

// 		if (confirmError) {
// 			setCardError(confirmError.message);
// 			return;
// 		}

// 		console.log("payment intent", paymentIntent);

// 		console.log("paymentIntent", paymentIntent);
// 		if (paymentIntent.status === "succeeded") {
// 			setTransactionId(paymentIntent.id);
// 			console.log("card info", card);
// 			// store payment info in the database
// 			const payment = {
// 				email: user?.email,
// 				price,
// 				transactionId: paymentIntent.id,
// 				availableSeats,
// 				quantity: payment.length,
// 				className,
// 				instructorName,
// 				classImage,
// 				selectId: _id,
// 			};
// 			fetch("https://assignment-12-server-site-eight.vercel.app/payments", {
// 				method: "POST",
// 				headers: {
// 					"content-type": "application/json",
// 					// authorization: `bearer ${localStorage.getItem("accessToken")}`,
// 				},
// 				body: JSON.stringify(payment),
// 			})
// 				.then((res) => res.json())
// 				.then((data) => {
// 					console.log(data);
// 					if (data.insertedId) {
// 						setSuccess("Congrats! your payment completed");
// 						setTransactionId(paymentIntent.id);
// 					}
// 				});
// 		}
// 		setProcessing(false);
// 	};
