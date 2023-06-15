import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";

// import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const Instructors = () => {
	// const axiosSecure = UseAxiosSecure();
	const [axiosSecure] = useAxiosSecure();
	const { Spinner } = useContext(AuthContext);
	const { data: instructors = [], isLoading } = useQuery({
		queryKey: ["instructors"],
		queryFn: async () => {
			const res = await axiosSecure.get("/instructors");
			// const data = await res.json();
			// console.log(data?.data);
			return res.data.data;
		},
	});
	console.log(instructors);
	if (isLoading) {
		return Spinner();
	}

	return (
		<div>
			<div className="text-center my-4 ">
				<h2 className="text-gray-600 mb-2 text-4xl tracking-tighter font-bold">
					Our Instructors
				</h2>
				<p className="text-xl font-serif font-semibold text-green-400 my-2">
					Our Famous instructors, just for you.
				</p>
				<h1 className="text-gray-600 text-sm my-2">Are you Ready?</h1>
			</div>

			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
					{instructors.map((instructor) => (
						<div
							key={instructor._id}
							className="bg-white  border-green-400 border-b-2 shadow-gray-300 shadow-xl rounded-lg overflow-hidden"
						>
							<img
								className="w-full h-48 object-cover"
								src={instructor.image}
								alt={instructor.name}
							/>
							<div className="p-4">
								<h2 className="text-xl font-semibold mb-2">
									{instructor.name}
								</h2>
								<p className="text-gray-600 mb-2">Email: {instructor.email}</p>
								{instructor.classesTaken && (
									<p>Number of Classes taken: {instructor.classesTaken}</p>
								)}
								{instructor.classNames && (
									<p>
										Name of Classes taken: {instructor.classNames.join(", ")}
									</p>
								)}
								{instructor.classesTaken && (
									<div className="mt-4">
										<Link
											to={`/instructors/${instructor._id}`}
											className="inline-block bg-lime-500 hover:bg-green-400 text-white px-4 py-2 rounded"
										>
											See Classes
										</Link>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Instructors;
