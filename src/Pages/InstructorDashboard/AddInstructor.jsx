//import axios from "axios";

import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const AddInstructor = () => {
	const [axiosSecure] = useAxiosSecure();
	const { user } = useAuth();
	// const { displayName, email } = user;
	console.log(user);
	const [className, setClassName] = useState("");
	const [photoURL, setPhotoURL] = useState(""); // Initialize with an empty string
	const [availableSeats, setAvailableSeats] = useState("");
	const [price, setPrice] = useState("");
	const [errors, setErrors] = useState({});

	const onSubmit = (e) => {
		e.preventDefault();

		const data = {
			name: user.displayName,
			email: user.email,
			class_name: className,
			feedback: "",
			totalEnrolled: 0,
			status: "pending",
			rating: 4.5,
			price: parseInt(price),
			available_seats: parseInt(availableSeats),
			picture: photoURL,
		};

		let formErrors = {};

		// Perform form validation and update errors
		if (!className) {
			formErrors.class_name = "Class Name is required";
		}
		if (!photoURL) {
			formErrors.picture = "Picture is required";
		}
		if (!availableSeats) {
			formErrors.available_seats = "Available Seats is required";
		}
		if (!price) {
			formErrors.price = "Price is required";
		}

		if (Object.keys(formErrors).length === 0) {
			axiosSecure.post("/addInstructor", data).then((res) => {
				if (res.data.insertedId) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Add Class success",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
		} else {
			setErrors(formErrors);
		}
	};

	return (
		<div className="w-full h-full my-12">
			<div className="max-w-lg mx-auto border shadow-xl shadow-slate-400 border-green-600 p-6 m-6">
				<h1 className="text-green-400  bg-white font-serif font-semibold text-2xl  text-center mb-4">
					Add a Instructor Class
				</h1>
				<form onSubmit={onSubmit}>
					<div className="mb-4">
						<label htmlFor="class_name" className="block mb-1">
							Class Name
						</label>
						<input
							type="text"
							id="class_name"
							placeholder="Class Name"
							className="shadow-md shadow-lime-900 focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
							value={className}
							onChange={(e) => setClassName(e.target.value)}
						/>
						{errors.class_name && (
							<span className="text-red-500">{errors.class_name}</span>
						)}
					</div>

					<div className="mb-4">
						<label htmlFor="picture" className="block mb-1">
							Picture URL
						</label>
						<input
							className="shadow-md shadow-lime-900 focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
							name="photoURL"
							type="text"
							value={photoURL}
							onChange={(e) => setPhotoURL(e.target.value)}
							placeholder="Photo URL"
						/>
						{errors.picture && (
							<span className="text-red-500">{errors.picture}</span>
						)}
					</div>

					<div className="mb-4">
						<label htmlFor="instructor" className="block mb-1">
							Instructor
						</label>
						<input
							type="text"
							id="instructor"
							className="shadow-md shadow-lime-900 focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
							value={user.displayName}
							readOnly
						/>
					</div>

					<div className="mb-4">
						<label htmlFor="instructor_email" className="block mb-1">
							Instructor Email
						</label>
						<input
							type="email"
							id="instructor_email"
							className="shadow-md shadow-lime-900 focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
							value={user.email}
							readOnly
						/>
					</div>

					<div className="mb-4">
						<label htmlFor="available_seats" className="block mb-1">
							Available Seats
						</label>
						<input
							type="number"
							id="available_seats"
							placeholder="Available Seats"
							className="shadow-md shadow-lime-900 focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
							value={availableSeats}
							onChange={(e) => setAvailableSeats(e.target.value)}
						/>
						{errors.available_seats && (
							<span className="text-red-500">{errors.available_seats}</span>
						)}
					</div>

					<div className="mb-4">
						<label htmlFor="price" className="block mb-1">
							Price
						</label>
						<input
							type="number"
							id="price"
							className="shadow-md shadow-lime-900 focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
							value={price}
							placeholder="Price"
							onChange={(e) => setPrice(e.target.value)}
						/>
						{errors.price && (
							<span className="text-red-500">{errors.price}</span>
						)}
					</div>

					<button
						type="submit"
						className=" rounded-full shadow-slate-400 shadow-lg    bg-green-400 text-white h-12 w-full font-serif font-semibold text-lg "
					>
						Add Instructor
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddInstructor;
