import { BsFillCameraFill } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { GiCandleLight, GiLoveMystery } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Provide = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return (
		<div className="my-12  font-mono overflow-y-hidden overflow-x-hidden  ">
			<div className="mb-12 text-center">
				<h1 className="text-4xl font-mono font-bold text-gray-600">
					What we are provide?
				</h1>

				<p className="text-gray-400">
					Our students have won awards. Our top instructors are here waiting to
					teach you.
				</p>
			</div>

			<div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
				<div className="w-full  h-64 lg:w-1/2 lg:h-auto">
					<img
						data-aos="slide-left"
						className="h-full brightness-125 w-ful object-fill"
						src="https://images.pexels.com/photos/2007191/pexels-photo-2007191.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="Winding mountain road"
					/>
				</div>

				<div
					data-aos="slide-right"
					className="max-w-lg border-cyan-400 border-l-4 lg:shadow-cyan-400 lg:shadow-2xl bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12"
				>
					<div className="flex flex-col p-12  md:px-16">
						<h2 className="text-2xl font-medium uppercase text-cyan-500 lg:text-4xl">
							Our Main Key Point
						</h2>

						<ul className="mt-4">
							<span className="flex items-center">
								<GiCandleLight className="text-purple-500  w-8 h-7"></GiCandleLight>
								Lighting can significantly impact the mood.
							</span>{" "}
							<span className="flex items-center">
								<GiLoveMystery className="text-rose-500  w-8 h-6"></GiLoveMystery>{" "}
								Post-processing allows you to enhance and refine.
							</span>
							<span className="flex items-center">
								<IoDiamond className="text-blue-400 w-8 h-6"></IoDiamond>
								Changing perspectives can add depth and creativity.
							</span>
							<span className="flex items-center">
								<BsFillCameraFill className=" text-gray-500 w-8 h-5"></BsFillCameraFill>
								Focus and depth of field help guide viewers attention.
							</span>
						</ul>
						<div className="mt-8">
							<a
								href="#"
								className=" translate hover:translate-y-1 duration-1000 inline-block shadow-cyan-400 shadow-lg rounded-md w-full text-center text-lg font-medium text-gray-100 bg-gray-600 border-solid border-2  py-4 px-10 hover:bg-cyan-400 hover:text-gray-500 hover:shadow-md md:w-48"
							>
								Read More
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Provide;
