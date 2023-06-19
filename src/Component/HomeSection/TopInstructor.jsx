import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
const TopInstructor = () => {
	const { Spinner } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

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
		<div className="my-12  font-mono  container mx-auto ">
			<div className="mb-12 text-center ">
				<h1 className="text-4xl  font-mono font-bold text-gray-600">
					Our Top Instructors
				</h1>
				<p className="text-gray-400">
					{" "}
					Our top instructors are here wait for you to teach you..
				</p>
			</div>

			<div className="grid grid-cols-3 gap-5">
				{instructors.map((instructor) => (
					<div
						key={instructor.id}
						data-aos="zoom-in"
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
							<h2 className="text-gray-600 text-2xl font-semibold">
								{instructor.name}
							</h2>
						</div>
						<div className="flex justify-start mt-4">
							<a
								href="#"
								className="text-sm text-start font-semibold text-cyan-500"
							>
								{instructor.className}
							</a>
						</div>
						<ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
							<li className="flex flex-col items-center justify-around">
								<svg
									className="w-4 fill-current text-cyan-500"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
								</svg>
								<div>2k</div>
							</li>
							<li className="flex flex-col items-center justify-between">
								<svg
									className="w-4 fill-current text-cyan-500"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
								</svg>
								<div>10k</div>
							</li>
							<li className="flex flex-col items-center justify-around">
								<svg
									className="w-4 fill-current text-cyan-500"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
								</svg>
								<div>15</div>
							</li>
						</ul>
						<div className="p-4 border-t mx-8 mt-2">
							<button className="w-1/2 block mx-auto rounded-full bg-gray-600 hover:shadow-lg font-semibold text-white px-6 py-2">
								Follow
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TopInstructor;
