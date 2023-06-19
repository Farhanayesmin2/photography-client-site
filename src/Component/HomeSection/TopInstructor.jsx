import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const TopInstructor = () => {
	const { Spinner } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();
	const { data: instructors = [], isLoading } = useQuery({
		queryKey: ["instructors"],
		queryFn: async () => {
			try {
				const res = await axiosSecure("/instructors");
				return res.data;
			} catch (error) {
				console.error("Error fetching instructors:", error);
				return []; // Return an empty array as a default value in case of error
			}
		},
	});

	if (isLoading) {
		return Spinner(); // Assuming Spinner is a function that returns JSX
	}

	return (
		<div className="my-12  font-mono   ">
			<div className="mb-12 text-center ">
				<h1 className="text-4xl  font-mono font-bold text-gray-600">
					Our Top Instructors
				</h1>
				<p className="text-gray-400">
					{" "}
					Our top instructors are here wait for you to teach you..
				</p>
			</div>

			<div className="grid grid-cols-6 gap-2">
				{instructors.map((instructor) => (
					<div
						key={instructor.id}
						className="max-w-md py-4 px-8 bg-white shadow-lg shadow-cyan-200 border-t-2 border-cyan-400 rounded-lg my-4"
					>
						<div className="flex justify-center md:justify-end -mt-16">
							<img
								className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
								src={instructor.image}
								alt={instructor.name}
							/>
						</div>
						<div>
							<h2 className="text-gray-800 text-2xl font-semibold">
								{instructor.name}
							</h2>
							<p className="mt-2 text-gray-600">{instructor.description}</p>
						</div>
						<div className="flex justify-end mt-4">
							<a href="#" className="text-sm font-medium text-indigo-500">
								{instructor.className}
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TopInstructor;
