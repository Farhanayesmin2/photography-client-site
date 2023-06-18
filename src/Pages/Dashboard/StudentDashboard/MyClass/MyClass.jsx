import { useContext, useEffect, useState } from "react";
import {
	FaTrashAlt,
	FaEye,
	FaStar,
	FaStarHalfAlt,
	FaCcAmazonPay,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { MdClose, MdShoppingCart } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Context/AuthContext";

const MyClass = () => {
	const [myclassData, setmyclassData] = useState([]);
	const [setLoading] = useState(true);

	const [selectedItem, setSelectedItem] = useState(null);
	const [isLoading] = useState(false);

	const { user, Spinner } = useContext(AuthContext);

	// how does reduce work!!!
	const total = myclassData.reduce((sum, item) => sum + Number(item.price), 0);
	console.log("TOTAL PRICE:", total);

	useEffect(() => {
		if (user && user.email) {
			const email = user.email;
			fetch(
				`https://school-photography-server.vercel.app/dashboard/myclass?email=${email}`
			)
				.then((res) => res.json())
				.then((data) => {
					setmyclassData(data);
					setLoading(false);
				})
				.catch((error) => console.log(error));
		}
	}, [user]);

	const openModal = (item) => {
		setSelectedItem(item);
	};

	const closeModal = () => {
		setSelectedItem(null);
	};
	// for alert

	const handleDeletemyclass = (myclassId) => {
		// Ask for confirmation
		Swal.fire({
			title: "Confirmation",
			text: "Are you sure you want to delete this myclass?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes",
			cancelButtonText: "No",
		}).then((result) => {
			if (result.isConfirmed) {
				// Send DELETE request to the server
				fetch(
					`https://school-photography-server.vercel.app/dashboard/myclass/${myclassId}`,
					{
						method: "DELETE",
					}
				)
					.then((res) => {
						if (res.ok) {
							// If the deletion was successful, update the myclass list by removing the deleted myclass
							setmyclassData(
								myclassData.filter((myclass) => myclass._id !== myclassId)
							);

							// Show success alert using SweetAlert
							Swal.fire("Success", "myclass deleted successfully", "success");
						} else {
							throw new Error("An error occurred while deleting the myclass");
						}
					})
					.catch((error) => {
						console.log(error);
						// Show error toast using react-toastify or any other notification library
						toast.error("An error occurred while deleting the myclass");
					});
			}
		});
	};
	if (isLoading) {
		return Spinner();
	}

	return (
		<div className="container mx-auto py-5">
			<h1 className="text-2xl font-bold mb-4">My Classs</h1>
			<div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
				<h3 className="text-3xl">Total Items: {myclassData.length}</h3>
				<h3 className="text-3xl">Total Price: ${total}</h3>
				<Link to="/dashboard/payment">
					<button className="btn btn-warning btn-sm">PAY</button>
				</Link>
			</div>
			<table className="w-[100%] border">
				<thead>
					<tr>
						<th className="border px-4 py-2">Number</th>
						<th className="border px-4 py-2">Class Name</th>
						<th className="border px-4 py-2">instructor Name</th>
						<th className="border px-4 py-2">Price</th>
						<th className="border px-4 py-2">Available Quantity</th>
						<th className="border px-4 py-2">Image</th>
						<th className="border px-4 py-2">Actions</th>
					</tr>
				</thead>
				<tbody>
					{myclassData.map((myclass, index) => (
						<tr key={myclass.id} className="hover:bg-gray-100  ">
							<td className="border  text-sm px-4 py-2">{index + 1}</td>
							<td className="border  text-sm px-4 py-2">{myclass.className}</td>
							<td className="border  text-sm px-4 py-2">
								{myclass.instructorName}
							</td>
							<td className="border px-4 py-2">${myclass.price}</td>
							<td className="border px-4 py-2">{myclass.availableSeats}</td>
							<td className="border px-4 py-2">
								<img
									src={myclass.classImage}
									alt={myclass.className}
									className="w-10 h-10 object-cover rounded"
								/>
							</td>
							<td className="border px-4 py-2">
								{/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <FaEye className="inline-block mr-1" />
                 Details
                      </button> */}
								{/* 
									<Link
										to=""
										//   to={`/allmyclasss/${myclass._id}`}
										type="button"
										className="w-auto bg-gradient-to-r from-[#56d3c4] via-pink-100 to-[#56d3c4] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 text-center mr-2 mb-2 rounded-xl py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300"
										onClick={() => openModal(myclass)}
									>
										<FaEye className="inline-block mr-1" />
										Details
									</Link> */}

								<Link
									onClick={() => openModal(myclass)}
									type="button"
									className="w-[29%] bg-gradient-to-r from-green-300 via-pink-100 to-green-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 text-center mr-2 mb-2 rounded-xl py-2 hover:scale-105 duration-300 rounded-xl text-black py-2 hover:scale-105 duration-300"
								>
									<FaEye className="inline-block mr-1" /> Details
								</Link>

								<Link
									to={`/dashboard/myclass/${myclass._id}`}
									className="bg-green-300 text-black hover:bg-lime-400  font-bold py-2 px-4 rounded ml-2"
								>
									<FaCcAmazonPay className="inline-block mr-1" />
									Pay Money
								</Link>
								<button
									onClick={() => handleDeletemyclass(myclass._id)}
									className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
								>
									<FaTrashAlt className="inline-block mr-1" />
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{selectedItem && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4 overflow-x-hidden overflow-y-auto">
					<div className="card w-full md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] bg-base-100 shadow-xl">
						{/* Close Button */}
						<div className="flex justify-end">
							<span
								onClick={closeModal}
								className="bg-red-700 cursor-pointer p-2 text-white rounded-full hover:bg-purple-700"
							>
								<MdClose size={24} />
							</span>
						</div>

						<div className="card-body">
							<div className="md:flex">
								{/* Image */}
								<div className="md:w-1/2">
									<img
										src={selectedItem.classImage}
										alt={selectedItem.className}
										className="object-cover h-64 w-full md:h-auto"
									/>
								</div>
								{/* Details */}
								<div className="md:w-1/2 p-4 md:p-6">
									<h2 className="text-xl font-semibold mb-2">
										{selectedItem.className}
									</h2>
									<p className="text-gray-600 mb-2">
										Seller:{" "}
										{user.displayName ? user.displayName : selectedItem.seller}
									</p>
									<p className="text-gray-600 mb-2">
										Email: {user.email ? user.email : selectedItem.email}
									</p>
									<p className="text-gray-600 mb-2">
										Price: ${selectedItem.price}
									</p>
									<div className="flex items-center mb-2">
										<div className="flex items-center mb-2">
											<p className="text-gray-600">
												Rating: {selectedItem.rating}
											</p>
											{[1, 2, 3, 4, 5].map((i) => (
												<FaStar
													key={i}
													className={`text-yellow-500 ${
														selectedItem.rating >= i
															? "fill-current"
															: "fill-current text-gray-300 hidden"
													}`}
												/>
											))}
											{selectedItem.rating % 1 !== 0 && (
												<FaStarHalfAlt className="text-yellow-500 fill-current" />
											)}
										</div>
									</div>
									<p className="text-gray-600 mb-2">
										Available Quantity: {selectedItem.availableQuantity}
									</p>
									<p className="text-gray-600">{selectedItem.description}</p>
									<div className="mt-4">
										<button className="btn btn-primary">
											Shop Now <MdShoppingCart size={24} />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				containerClassName=""
				containerStyle={{}}
				toastOptions={{
					// Define default options
					className: "",
					duration: 5000,
					style: {
						background: "#363636",
						color: "#fff",
					},

					// Default options for specific types
					success: {
						duration: 3000,
						theme: {
							primary: "green",
							secondary: "black",
						},
					},
				}}
			/>
		</div>
	);
};

export default MyClass;
// const [myclassData, setmyclassData] = useState([]);
// const [loading, setLoading] = useState(true);

// const [selectedItem, setSelectedItem] = useState(null);
// const [isLoading, setIsLoading] = useState(false);

// const { user, Spinner } = useContext(AuthContext);

// useEffect(() => {
// 	if (user && user.email) {
// 		const email = user.email;
// 		fetch(`http://localhost:4000/myclass?email=${email}`)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setmyclassData(data);
// 				setLoading(false);
// 			})
// 			.catch((error) => console.log(error));
// 	}
// }, [user]);

// const closeModal = () => {
// 	setSelectedItem(null);
// };
// // for alert

// const handleDeletemyclass = (myclassId) => {
// 	// Ask for confirmation
// 	Swal.fire({
// 		title: "Confirmation",
// 		text: "Are you sure you want to delete this myclass?",
// 		icon: "warning",
// 		showCancelButton: true,
// 		confirmButtonColor: "#3085d6",
// 		cancelButtonColor: "#d33",
// 		confirmButtonText: "Yes",
// 		cancelButtonText: "No",
// 	}).then((result) => {
// 		if (result.isConfirmed) {
// 			// Send DELETE request to the server
// 			fetch(`http://localhost:4000/myclass/${myclassId}`, {
// 				method: "DELETE",
// 			})
// 				.then((res) => {
// 					if (res.ok) {
// 						// If the deletion was successful, update the myclass list by removing the deleted myclass
// 						setmyclassData(
// 							myclassData.filter((myclass) => myclass._id !== myclassId)
// 						);

// 						// Show success alert using SweetAlert
// 						Swal.fire("Success", "myclass deleted successfully", "success");
// 					} else {
// 						throw new Error("An error occurred while deleting the myclass");
// 					}
// 				})
// 				.catch((error) => {
// 					console.log(error);
// 					// Show error toast using react-toastify or any other notification library
// 					toast.error("An error occurred while deleting the myclass");
// 				});
// 		}
// 	});
// };
