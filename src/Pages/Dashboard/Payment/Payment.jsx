import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useLoaderData, useNavigation } from "react-router-dom";
import CheckOutPayment from "./CheckOutPayment";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
	const payment = useLoaderData();
	console.log(payment);
	const navigation = useNavigation();

	const { price, className } = payment;

	if (navigation.state === "loading") {
		return <h1>Loading...</h1>;
	}
	return (
		<div className="container mx-auto">
			<h2 className="text-3xl">Payment for {className}</h2>
			<p className="text-xl">
				<i>
					please pay <strong>${price}</strong> for this {className} mobile phone
				</i>
			</p>

			<div className="w-96 my-12 shadow-lg border-r-slate-300 border p-4 rounded-md">
				<Elements stripe={stripePromise}>
					<CheckOutPayment payment={payment} />
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
