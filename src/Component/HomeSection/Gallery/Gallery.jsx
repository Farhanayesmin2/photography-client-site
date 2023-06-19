import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<div className="my-12  font-mono overflow-y-hidden overflow-x-hidden  ">
			<div className="mb-12 text-center">
				<h1 className="text-4xl font-mono font-bold text-gray-600">
					Our Student Photography
				</h1>
				<p className="text-gray-400">
					Our students have won awards. Our top instructors are here waiting to
					teach you.
				</p>
			</div>
			<div className="p-5 sm:p-8">
				<div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
					<div data-aos="slide-left">
						<img
							src="https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="Gallery Image 1"
						/>
					</div>
					<div data-aos="slide-right">
						<img
							src="https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="Gallery Image 2"
						/>
					</div>
					<div data-aos="slide-up">
						<img
							src="https://images.pexels.com/photos/735987/pexels-photo-735987.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="Gallery Image 3"
						/>
					</div>
					<div data-aos="slide-down">
						<img
							src="https://images.pexels.com/photos/1114880/pexels-photo-1114880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="Gallery Image 4"
						/>
					</div>
					<div data-aos="slide-left">
						<img
							src="https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="Gallery Image 5"
						/>
					</div>
					<div data-aos="slide-right">
						<img
							src="https://images.pexels.com/photos/1459549/pexels-photo-1459549.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="Gallery Image 6"
						/>
					</div>
					<div data-aos="slide-up">
						<img
							src="https://images.pexels.com/photos/4946765/pexels-photo-4946765.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="Gallery Image 7"
						/>
					</div>
					<div data-aos="slide-down">
						<img
							src="https://images.pexels.com/photos/4482679/pexels-photo-4482679.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="Gallery Image 8"
						/>
					</div>
					<div data-aos="slide-left">
						<img
							src="https://images.pexels.com/photos/5052131/pexels-photo-5052131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="Gallery Image 9"
						/>
					</div>
					<div data-aos="slide-right">
						<img
							src="https://images.pexels.com/photos/11116394/pexels-photo-11116394.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="Gallery Image 10"
						/>
					</div>
					{/* Add more images here */}
					<div data-aos="slide-down">
						<img
							src="https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="Gallery Image 11"
						/>
					</div>
					<div data-aos="slide-up">
						<img
							src="https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="Gallery Image 12"
						/>
					</div>
					<div data-aos="slide-right">
						<img
							src="https://images.pexels.com/photos/2477300/pexels-photo-2477300.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="Gallery Image 13"
						/>
					</div>
					<div data-aos="slide-left">
						<img
							src="https://images.pexels.com/photos/747126/pexels-photo-747126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="Gallery Image 14"
						/>
					</div>
					<div data-aos="slide-down">
						<img
							src="https://images.pexels.com/photos/414268/pexels-photo-414268.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="Gallery Image 15"
						/>
					</div>
					<div data-aos="slide-up">
						<img
							src="https://images.pexels.com/photos/7524272/pexels-photo-7524272.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="Gallery Image 16"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
