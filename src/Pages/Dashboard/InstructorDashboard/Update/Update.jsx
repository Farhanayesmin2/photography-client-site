import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Update = () => {
	const { id } = useParams();
	const [axiosSecure] = useAxiosSecure();
	const { user } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { data: instructor = {} } = useQuery({
		queryKey: ["classData"],
		queryFn: async () => {
			const res = await axiosSecure(`/instructor-class?email=${user?.email}`);
			return res.data;
		},
	});

	const onSubmit = async (data) => {
		const { class_name, picture, available_seats, price } = data;

		try {
			const res = await axiosSecure.patch(`/update/${id}`, data);
			if (res.data.insertedId) {
				Swal.fire({
					position: "top-center",
					icon: "success",
					title: "Update successful",
					showConfirmButton: false,
					timer: 1500,
				});
			}
			console.log("Update successful");
			// You can perform additional actions after the update is successful
		} catch (error) {
			console.error("Error updating class:", error);
			// You can handle the error appropriately, such as displaying an error message
		}
	};

	return (
		<div className="w-full h-full my-12">
			<div className="max-w-lg mx-auto border shadow-lg shadow-cyan-400 border-gray-600 p-6 m-6 ">
				<h1 className="text-cyan-400  bg-white font-serif font-semibold text-2xl  text-center mb-4">
					You can Update
				</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-4">
						<label htmlFor="class_name" className="block mb-1">
							Class Name
						</label>
						<input
							type="text"
							id="class_name"
							placeholder="Class Name"
							defaultValue={instructor?.class_name}
							className="shadow-md shadow-cyan-400 focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
							{...register("class_name", { required: true })}
						/>
						{errors.class_name && (
							<span className="text-red-500">Class Name is required</span>
						)}
					</div>

					<div className="mb-4">
						<label htmlFor="picture" className="block mb-1">
							Picture
						</label>
						<input
							type="text"
							placeholder="Picture"
							defaultValue={instructor?.picture}
							id="picture"
							className="shadow-md shadow-cyan-400 focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
							{...register("picture", { required: true })}
						/>
						{errors.picture && (
							<span className="text-red-500">Picture is required</span>
						)}
					</div>

					<div className="mb-4">
						<label htmlFor="instructor" className="block mb-1">
							Instructor
						</label>
						<input
							type="text"
							id="instructor"
							className="shadow-md shadow-cyan-400 focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
							value={user.displayName}
							readOnly
							{...register("instructor", { required: true })}
						/>
					</div>

					<div className="mb-4">
						<label htmlFor="instructor_email" className="block mb-1">
							Instructor Email
						</label>
						<input
							type="email"
							id="instructor_email"
							className="shadow-md shadow-cyan-400 focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
							value={user?.email}
							readOnly
							{...register("instructor_email", { required: true })}
						/>
					</div>

					<div className="mb-4">
						<label htmlFor="available_seats" className="block mb-1">
							Available Seats
						</label>
						<input
							type="number"
							placeholder="Available Seats"
							id="available_seats"
							defaultValue={instructor?.available_seats}
							className="shadow-md shadow-cyan-400 focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
							{...register("available_seats", { required: true })}
						/>
						{errors.available_seats && (
							<span className="text-red-500">Available Seats is required</span>
						)}
					</div>

					<div className="mb-4">
						<label htmlFor="price" className="block mb-1">
							Price
						</label>
						<input
							type="number"
							placeholder="Price"
							defaultValue={instructor?.price}
							id="price"
							className="shadow-md shadow-cyan-400 focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
							{...register("price", { required: true })}
						/>
						{errors.price && (
							<span className="text-red-500">Price is required</span>
						)}
					</div>

					<button
						type="submit"
						className=" rounded-full shadow-gray-400 shadow-lg bg-gray-600 text-white h-12 w-full font-serif font-semibold text-lg "
					>
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default Update;
