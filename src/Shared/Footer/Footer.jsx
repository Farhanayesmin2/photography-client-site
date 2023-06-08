import {
	FaAddressCard,
	FaFacebookMessenger,
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedinIn,
	FaPhoneVolume,
	FaTwitterSquare,
	FaYoutubeSquare,
} from "react-icons/fa";
const Footer = () => {
	return (
		<div>
			<footer className="">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="-mb-0.5 w-full"
					viewBox="0 0 1367.743 181.155"
				>
					<path
						className="fill-current text-[#8BE3DC] dark:text-gray-800"
						id="wave"
						data-name="wave"
						d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
						transform="translate(1.743 66.155)"
					></path>
				</svg>
				<div className="bg-gradient-to-b from-[#8BE3DC] to-transparent dark:from-[#0C6170] dark:to-transparent pt-1">
					<div className="container m-auto space-y-8 px-6  dark:text-white text-[#0C6170]  md:px-12 lg:px-20">
						<div className="grid grid-cols-8 gap-6 md:gap-0">
							<div className="col-span-8 border-r border-gray-500 dark:border-gray-800 md:col-span-2 lg:col-span-3">
								<div className="flex items-center justify-between gap-6 border-b border-white dark:border-gray-800 py-6 md:block md:space-y-6 md:border-none md:py-0">
									<img
										src="images/logo.svg"
										alt="logo tailus"
										width="100"
										height="42"
										className="w-32 dark:brightness-200 dark:grayscale"
									/>
									<div className="flex gap-6">
										<FaFacebookSquare className="w-8 h-8   text-blue-700 bg-white"></FaFacebookSquare>
										<FaFacebookMessenger className="w-8 h-8  rounded-3xl text-sky-700 bg-white"></FaFacebookMessenger>
										<FaYoutubeSquare className="w-8 h-8    text-red-700 bg-white"></FaYoutubeSquare>
										<FaLinkedinIn className="w-8 h-8  rounded-lg text-white bg-blue-800"></FaLinkedinIn>
										<FaTwitterSquare className="w-8 h-8  rounded-xl text-sky-500 bg-white"></FaTwitterSquare>
										<FaInstagramSquare className="w-8 h-8 rounded-xl white text-rose-700 bg-white"></FaInstagramSquare>
									</div>
								</div>
							</div>
							<div className="col-span-8 md:col-span-6 lg:col-span-5">
								<div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
									<div>
										<h6 className="text-lg font-medium text-gray-800 dark:text-gray-200">
											Our Mission
										</h6>
										<h1 className="  items-justify ">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Magnam dicta, officiis dignissimos nulla, perspiciatis
											dolorum obcaecati ea ab omnis error blanditiis. Rem
											voluptas, qui doloremque quaerat ullam quae id nesciunt?
										</h1>
									</div>
									<div>
										<h6 className="text-lg font-medium text-gray-800 dark:text-gray-200">
											Products
										</h6>
										<ul className="mt-4 list-inside space-y-4">
											<li>
												<a href="#" className="transition hover:text-cyan-600">
													About
												</a>
											</li>
											<li>
												<a href="#" className="transition hover:text-cyan-600">
													Customers
												</a>
											</li>
											<li>
												<a href="#" className="transition hover:text-cyan-600">
													Enterprise
												</a>
											</li>
											<li>
												<a href="#" className="transition hover:text-cyan-600">
													Partners
												</a>
											</li>
											<li>
												<a href="#" className="transition hover:text-cyan-600">
													Jobs
												</a>
											</li>
										</ul>
									</div>
									<div>
										<h6 className="text-lg font-medium text-gray-800 dark:text-gray-200">
											Our Address
										</h6>
										<p>
											<span className="text-xs tracking-wide uppercase">
												Call us
											</span>

											<a
												href="#"
												className="flex items-center  text-lg font-medium text-gray-900 hover:opacity-75 sm:text-xl"
											>
												<FaPhoneVolume className="text-rose-500"></FaPhoneVolume>{" "}
												+88-0170457395
											</a>
										</p>

										<ul className="mt-8 space-y-1 text-md  font-semibold ">
											<li>
												<span className="font-bold text-lg flex items-center ">
													{" "}
													<FaAddressCard className=" mr-2"></FaAddressCard>{" "}
													Present Address:
												</span>{" "}
												Dhaka,Bangladesh.
											</li>
											<li>
												<span className="font-bold text-lg flex items-center  ">
													{" "}
													<FaAddressCard className=" mr-2"></FaAddressCard>{" "}
													Permanent Address:
												</span>{" "}
												Canada, torento.
											</li>
										</ul>
									</div>
								</div>
								<div className="flex justify-between border-t border-gray-700 dark:border-gray-800 py-4 pb-8 md:pl-16">
									<span>
										&copy; School Photography 2023 <span id="year"></span>{" "}
									</span>
									<span>All right reserved by Farhana Yesmin</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;

{
	/* <svg
	xmlns="http://www.w3.org/2000/svg"
	className="-mb-0.5 w-full"
	viewBox="0 0 1367.743 181.155"
>
	<path
		className="fill-current text-[#8BE3DC] dark:text-gray-800"
		id="wave"
		data-name="wave"
		d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
		transform="translate(1.743 66.155)"
	></path>
</svg>; */
}
