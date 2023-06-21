import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner from "./banner.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import BigButton from "../Button/BigButton/BigButton";
import { Link } from "react-router-dom";
import SmallButton from "../Button/SmallButton/SmallButton";

const Banner = () => {
	return (
		<div>
			<div className="border-b dark:border-gray-700">
				<div className="container m-auto px-6 pt-24 md:px-12  lg:pt-[4.8rem] lg:px-7">
					<div className="grid lg:grid-cols-2 items-center gap-12 px-2 md:px-0">
						<div className="col-span-1">
							<div className="relative lg:w-full">
								<Swiper
									spaceBetween={30}
									centeredSlides={true}
									autoplay={{
										delay: 2500,
										disableOnInteraction: false,
									}}
									pagination={{
										clickable: true,
									}}
									navigation={true}
									modules={[Autoplay, Pagination, Navigation]}
									className="mySwiper"
								>
									<SwiperSlide>
										<img
											src="https://i.ibb.co/bHF0z4J/pexels-ike-louie-natividad-6121164.jpg"
											alt="shoes"
											loading="lazy"
											className="lg:w-[100%] sm:w-[70%] md:w-[70%]"
											height="640"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											src="https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=600"
											alt="shoes"
											loading="lazy"
											className="lg:w-[100%] sm:w-[70%] md:w-[70%]"
											height="640"
										/>
									</SwiperSlide>

									<SwiperSlide>
										<img
											src="https://images.pexels.com/photos/2244330/pexels-photo-2244330.jpeg?auto=compress&cs=tinysrgb&w=600"
											alt="shoes"
											loading="lazy"
											className="lg:w-[100%] sm:w-[70%] md:w-[70%]"
											height="640"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600"
											alt="shoes"
											loading="lazy"
											className="lg:w-[100%] sm:w-[70%] md:w-[70%]"
											height="640"
										/>
									</SwiperSlide>
								</Swiper>
								<div className="absolute bottom-2 right-2 bg-white dark:bg-gray-800">
									<div className="flex p-1">
										<button
											aria-label="button-left"
											className="p-3 border-r dark:border-gray-600"
										>
											<svg
												className="fill-gray-800 dark:fill-white bi bi-chevron-right rotate-180"
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												viewBox="0 0 16 16"
											>
												<path
													fillRule="evenodd"
													d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
												/>
											</svg>
										</button>
										<button aria-label="button-right" className="p-3">
											<svg
												className="fill-gray-800 dark:fill-white bi bi-chevron-right"
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												viewBox="0 0 16 16"
											>
												<path
													fillRule="evenodd"
													d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="relative col-span-1">
							<h1 className="font-bold text-gray-600 text-5xl sm:text-6xl md:text-7xl xl:text-8xl dark:text-white">
								A Look for every{" "}
								<span className="text-cyan-400 dark:text-cyan-400">mood</span>.
							</h1>
							<div className="mt-8 lg:mt-16 space-y-8">
								<p className="text-gray-400 dark:text-gray-300">
									Photography as a hobby can bring more excitement to your life.
									You will be more active, more creative, and more knowledgeable
									about photography.
								</p>
								<div className="flex items-center  space-x-4 mt-6">
									<Link to="/">
										<BigButton></BigButton>
									</Link>
									<Link to="/">
										<SmallButton></SmallButton>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
