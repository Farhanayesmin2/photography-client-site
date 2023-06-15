import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";
import profile from "../../assets/images (1) (1).jpeg";
const NavMenu = () => {
	const { user, logOut } = useContext(AuthContext);
	console.log("file: NavMenu.jsx:8 ~ NavMenu ~ user:", user);
	const [isOpen, setIsOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	useEffect(() => {
		const root = window.document.documentElement;
		const body = window.document.body;
		if (isDarkMode) {
			root.classList.add("dark");
			body.style.backgroundColor = "#1f2937";
		} else {
			root.classList.remove("dark");
			body.style.backgroundColor = "#fff";
		}
	}, [isDarkMode]);

	const handleToggle = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div>
			<nav className="  shadow-md font-sans w-full">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<div className="text-2xl  text-[#57D657] hidden lg:block from-current font-poppins ">
								<span className="flex justify-center h-8  items-center font-bold">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhvtSBGg7erRpwPLpUSZcO6P5XOekHttUNA&usqp=CAU"
										className="flex justify-center h-16   items-center font-bold"
									/>
									School Photography{" "}
								</span>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline font-bold space-x-4 font-poppins">
								{user ? (
									<>
										<NavLink
											style={({ isActive }) => {
												return {
													borderBottom: isActive ? "5px solid red" : "none",
													color: isActive ? "#c09da9" : "#57D657",
												};
											}}
											to="/"
											className="text-[#57D657] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
											activeClassName="border-current text-red-700"
										>
											Home
										</NavLink>
										<NavLink
											style={({ isActive }) => {
												return {
													borderBottom: isActive ? "5px solid red" : "none",
													color: isActive ? "#c09da9" : "#57D657",
												};
											}}
											to="/instructors"
											className="text-[#57D657] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
											activeClassName="border-current text-red-700"
										>
											Instructors
										</NavLink>

										<NavLink
											style={({ isActive }) => {
												return {
													borderBottom: isActive ? "5px solid red" : "none",
													color: isActive ? "#c09da9" : "#57D657",
												};
											}}
											to="/classes"
											className="text-[#57D657] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-[#c09da9] active:text-[#c09da9]"
											activeClassName="border-current text-red-700"
										>
											Classes
										</NavLink>
										<NavLink
											style={({ isActive }) => {
												return {
													borderBottom: isActive ? "5px solid red" : "none",
													color: isActive ? "#c09da9" : "#57D657",
												};
											}}
											to="/blog"
											className="text-[#57D657] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
											activeClassName="border-current text-red-700"
										>
											Blog
										</NavLink>
										<NavLink
											style={({ isActive }) => {
												return {
													borderBottom: isActive ? "5px solid red" : "none",
													color: isActive ? "#c09da9" : "#57D657",
												};
											}}
											to="/dashboard"
											className="text-[#57D657] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
											activeClassName="border-current text-red-700"
										>
											Dashboard
										</NavLink>
									</>
								) : (
									<>
										<NavLink
											style={({ isActive }) => {
												return {
													borderBottom: isActive ? "5px solid red" : "none",
													color: isActive ? "#c09da9" : "#57D657",
												};
											}}
											to="/"
											className="text-[#57D657] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-[#c09da9] active:text-[#c09da9]"
											activeClassName="border-current text-red-700"
										>
											Home
										</NavLink>
										<NavLink
											style={({ isActive }) => {
												return {
													borderBottom: isActive ? "5px solid red" : "none",
													color: isActive ? "#c09da9" : "#57D657",
												};
											}}
											to="/blog"
											className="text-[#57D657] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
											activeClassName="border-current text-red-700"
										>
											Blog
										</NavLink>
										<NavLink
											style={({ isActive }) => {
												return {
													borderBottom: isActive ? "5px solid red" : "none",
													color: isActive ? "#c09da9" : "#57D657",
												};
											}}
											to="/alltoys"
											className="text-[#57D657] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
											activeClassName="border-current text-red-700"
										>
											All Toys
										</NavLink>
									</>
								)}
								<div className="dark-theme-toggle">
									<button
										className={`toggle-button ${
											isDarkMode ? "text-yellow-300" : "text-gray-700"
										}`}
										onClick={handleToggle}
									>
										{isDarkMode ? <FaSun /> : <FaMoon />}
									</button>
								</div>
							</div>
						</div>

						<div className="hidden md:block font-poppins">
							<div className="flex items-center">
								{user ? (
									<div className="flex justify-center items-center">
										<button className=" btn btn-ghost btn-circle">
											<Link to="/profile">
												<abbr
													title={
														user.displayName ? user.displayName : user.email
													}
												>
													{" "}
													<div className="avatar online  btn btn-ghost btn-circle ">
														<img
															src={`${user.photoURL ? user.photoURL : profile}`}
															alt=""
															className="w-14 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
														/>
														{/* <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border rounded-full dark:text-gray-100 dark:border-gray-900"></span> */}
													</div>
												</abbr>
											</Link>
										</button>
										<Link
											onClick={logOut}
											className="py-2  mx-1 px-4 bg-gradient-to-r from-lime-700 via-lime-50 to-lime-700 text-black font-semibold rounded-lg shadow-md hover:bg-[#c09da9] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
										>
											<button className="">LogOut</button>
										</Link>
									</div>
								) : (
									<Link
										className="py-2 mx-1 px-4 bg-gradient-to-r from-lime-700 via-lime-50 to-lime-700 text-black font-semibold rounded-lg shadow-md hover:bg--gradient-to-t  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
										to="/login"
									>
										<button>Login</button>
									</Link>
								)}
							</div>
						</div>

						{/* <div className="-mr-2 flex md:hidden"> */}
						<div className="flex items-center lg:hidden max-h-10">
							<div
								className="flex h-screen w-full items-center justify-center"
								onClick={() => setIsOpen(!isOpen)}
							>
								<div className="group flex h-10 w-18 cursor-pointer items-center justify-center rounded-3xl bg-white p-2 hover:bg-slate-200">
									{/* Hamburger menu icon */}
									<div className="space-y-2">
										<span
											className={`block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out ${
												isOpen ? "translate-y-1.5 rotate-45" : ""
											}`}
										></span>
										<span
											className={`block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out ${
												isOpen ? "w-10 -translate-y-1.5 -rotate-45" : ""
											}`}
										></span>
									</div>
								</div>
							</div>

							{/* <button
								onClick={() => setIsOpen(!isOpen)}
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:text-gray-900"
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button> */}
						</div>
					</div>
				</div>
				<div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
					<div className="px-2 font-bold text-xl  pt-2 pb-3 space-y-1 ">
						<div className="flex h-screen flex-col justify-between border-e bg-white ">
							<div className="px-4 py-6">
								<span className="grid h-10 w-[100%] place-content-center rounded-lg bg-gray-100 text-xl text-gray-600">
									<span className="flex justify-center h-8  items-center font-bold">
										<img
											src="https://img.freepik.com/premium-vector/logo-desaign-baby-doll-vector_727263-3.jpg?w=2000"
											className="flex justify-center h-16 animate-pulse  items-center font-bold"
										/>
										Baby Doll{" "}
									</span>
								</span>

								<nav aria-label="Main Nav" className=" flex flex-col">
									<NavLink
										style={({ isActive }) => {
											return {
												borderBottom: isActive ? "5px solid red" : "none",
												color: isActive ? "#c09da9" : "#57D657",
											};
										}}
										to="/"
										className="text-[#57D657] border-b-4 border-transparent leading-[3rem] hover:border-current hover:text-red-700 active:text-red-700"
										activeClassName="border-current text-red-700"
									>
										Home
									</NavLink>
									<NavLink
										style={({ isActive }) => {
											return {
												borderBottom: isActive ? "5px solid red" : "none",
												color: isActive ? "#c09da9" : "#57D657",
											};
										}}
										to="/chef"
										className="text-[#57D657] border-b-4 border-transparent leading-[3rem]  hover:border-current hover:text-red-700 active:text-red-700"
										activeClassName="border-current text-red-700"
									>
										All Chef
									</NavLink>
									<NavLink
										style={({ isActive }) => {
											return {
												borderBottom: isActive ? "5px solid red" : "none",
												color: isActive ? "#c09da9" : "#57D657",
											};
										}}
										to="/restaurant"
										className="text-[#57D657] border-b-4 border-transparent leading-[3rem]  hover:border-current hover:text-red-700 active:text-red-700"
										activeClassName="border-current text-red-700"
									>
										Restaurant
									</NavLink>
									<NavLink
										style={({ isActive }) => {
											return {
												borderBottom: isActive ? "5px solid red" : "none",
												color: isActive ? "#c09da9" : "#57D657",
											};
										}}
										to="/blog"
										className="text-[#57D657] border-b-4 border-transparent leading-[3rem] hover:border-current hover:text-red-700 active:text-red-700"
										activeClassName="border-current text-red-700"
									>
										Blog
									</NavLink>

									<div className="flex items-center">
										{/* {user ? ( */}
										<div className="flex justify-center items-center">
											<button className="btn btn-ghost btn-circle">
												<Link to="/profile">
													<div className="avatar online">
														<div className="w-12 h-12 rounded-full ">
															{/* <abbr
																title={
																	user.displayName
																		? user.displayName
																		: user.email
																}
															>
																<div className="relative flex-shrink-0">
																	<span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
																	<img
																		alt=""
																		className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
																	/>
																</div>
															</abbr> */}
														</div>
													</div>
												</Link>
											</button>
											<Link className="py-2  mx-1 px-4 bg-[#57D657] text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
												<button className="">LogOut</button>
											</Link>
										</div>
										{/* ) : ( */}
										<Link
											className="py-2 mx-1 px-4 bg-[#57D657] text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
											to="/login"
										>
											<button>Login</button>
										</Link>
										{/* )} */}
									</div>
								</nav>
							</div>

							<div className=" inset-x-0 bottom-0 border-t border-gray-100">
								<a
									href="#"
									className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
								>
									<div className="hidden md:block">
										<div className="flex items-center">
											<div className="flex justify-center items-center">
												<button className="btn btn-ghost btn-circle">
													<Link to="/profile">
														<div className="avatar online">
															<div className="w-12 h-12 rounded-full ">
																<abbr>
																	<div className="relative flex-shrink-0">
																		<span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
																		<img
																			src=""
																			alt=""
																			className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
																		/>
																	</div>
																</abbr>
															</div>
														</div>
													</Link>
												</button>
												<Link className="py-2  mx-1 px-4 bg-[#57D657] text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
													<button className="">LogOut</button>
												</Link>
											</div>

											<Link
												className="py-2 mx-1 px-4 bg-[#57D657] text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
												to="/login"
											>
												<button>Login</button>
											</Link>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavMenu;

{
	/* <header>
	<div classNameNameName="mx-auto flex max-w-7xl items-center justify-between p-4">
		<div classNameNameName="flex items-center space-x-2">
			<button classNameNameName="flex appearance-none p-1 text-gray-500 md:hidden"></button>
			<a href="#">
				<svg classNameNameName="h-6" viewBox="0 0 111 21">
					<path
						classNameNameName="fill-rose-600"
						d="M9.45569.11334C9.33771.0392836 9.20123.0 9.06194.0c-.1393.0-.27577.0392836-.39375.11334-.94292.60914-1.81132 1.32652-2.5875 2.1375-1.725 1.79062-2.64375 3.74062-2.64375 5.625.0 1.49184.59263 2.92256 1.64752 3.97746s3.97748 1.6475 3.97748 1.6475 2.92256-.5926 3.97746-1.6475 1.6475-2.48562 1.6475-3.97746c0-4.49063-5.01559-7.63125-5.23121-7.7625zM9.06194 12.0008c-.29582.0013-.58896-.0561-.86251-.1687-.27354-.1126-.52207-.2783-.73125-.4875-.20918-.2092-.37486-.4577-.4875-.7313-.11263-.2735-.16998-.5666-.16874-.86246.0-2.25 2.25-3.75 2.25-3.75s2.24996 1.5 2.24996 3.75c.0013.29586-.0561.58896-.1687.86246-.1126.2736-.2783.5221-.4875.7313-.2092.2092-.4577.3749-.73126.4875-.27354.1126-.56668.17-.8625.1687zm8.96246 6.975c-.0477.1518-.1424.2845-.2705.3788-.1281.0944-.2829.1456-.442.1462-.0766.0014-.1529-.0113-.225-.0375l-8.02496-2.55-8.025 2.55c-.072085.0262-.148343.0389-.225003.0375-.159092-6e-4-.313864-.0518-.441943-.1462-.128079-.0943-.22283-.227-.2705568-.3788-.0304549-.0935-.0419719-.1922-.0338781-.2902.0080939-.098.0356359-.1935.0810189-.2807.045383-.0873.107697-.1647.183304-.2276s.162993-.1102.257055-.139l6.000003-1.9125-6.000003-1.9125c-.101479-.0226-.197151-.066-.280941-.1276-.08379-.0615-.153868-.1398-.205786-.2299-.0519183-.0901-.0845418-.19-.09579985-.2933-.01125803-.1034-90453e-8-.2079.03040305-.3071.0313075-.0991.0828848-.1907.1514588-.2688.068574-.0781.152646-.1412.246879-.1851s.196569-.0678.30051-.07c.103942-.0023.20722.0171.303279.0568l8.025 2.55 8.02496-2.55c.0961-.0397.1994-.0591.3033-.0568.104.0022.2063.0261.3005.07.0943.0439.1783.107.2469.1851.0686.0781.1202.1697.1515.2688.0313.0992.0416.2037.0304.3071-.0113.1033-.0439.2032-.0958.2933-.052.0901-.122.1684-.2058.2299-.0838.0616-.1795.105-.281.1276l-6 1.9125 6 1.9125c.0941.0288.1815.0761.2571.139s.1379.1403.1833.2276c.0454.0872.0729.1827.081.2807s-.0034.1967-.0339.2902z"
					></path>
					<path
						classNameNameName="fill-gray-900"
						d="M30.3039 17.24c-.9467.0-1.8-.1467-2.56-.44-.76-.3067-1.4067-.7533-1.94-1.34-.5334-.6-.9467-1.34-1.24-2.22-.2934-.8933-.44-1.9333-.44-3.12.0-1.17334.1466-2.21334.44-3.12.2933-.92.7066-1.68667 1.24-2.3.5333-.62667 1.18-1.1 1.94-1.42s1.6133-.48 2.56-.48c1.2933.0 2.36.26666 3.2.8.84.52 1.5133 1.34666 2.02 2.48l-2.62 1.36c-.1867-.58667-.48-1.05334-.88-1.4-.3867-.36-.96-.54-1.72-.54-.8934.0-1.6134.29333-2.16.88-.5334.57333-.8 1.41333-.8 2.52v2.24c0 1.1067.2666 1.9533.8 2.54.5466.5733 1.2666.86 2.16.86.7466.0 1.34-.2 1.78-.6.4533-.4133.7866-.9067 1-1.48l2.48 1.44c-.52 1.0667-1.2067 1.8933-2.06 2.48-.84.5733-1.9067.86-3.2.86zm13.0673-2c-.08.28-.3067.5467-.48.8-.1733.24-.3867.4533-.64.64-.24.1733-.52.3067-.84.4-.3067.1067-.6267.16-.96.16-1.3333.0-2.34-.4667-3.02-1.4-.68-.9467-1.02-2.3133-1.02-4.1.0-1.78667.34-3.14667 1.02-4.08.68-.93334 1.6867-1.4 3.02-1.4.68.0 1.28.18666 1.8.56.5333.37333.9733.85333 1.12 1.44V6.5h2.96V17h-2.96v-1.76zm-1.94-.4c.56.0 1.02-.1333 1.38-.4.3733-.28.56-.66.56-1.14v-3.1c0-.48-.1867-.85334-.56-1.12-.36-.28-.82-.42-1.38-.42s-1.0267.2-1.4.6c-.36.38666-.54.9133-.54 1.58v1.82c0 .6667.18 1.2.54 1.6.3733.3867.84.58 1.4.58zM48.4992 17V6.5h2.96v1.78c.1866-.56.6266-1.03334 1.08-1.42.4533-.4 1.0733-.6 1.86-.6.72.0 1.3333.18 1.84.54.5066.36.8733.88666 1.1 1.58.0933-.29334.2933-.56667.48-.82.2-.26667.44-.49334.72-.68.28-.18667.5933-.33334.94-.44.3467-.12.72-.18 1.12-.18 1.0133.0 1.7866.36 2.32 1.08.5466.72.82 1.74666.82 3.08V17h-2.96v-6.34c0-1.33334-.48-2-1.44-2-.44.0-.84.12666-1.2.38-.36.25333-.54.64-.54 1.16V17h-2.96v-6.34c0-1.33334-.48-2-1.44-2-.2134.0-.4267.03333-.64.1-.2.05333-.3867.14666-.56.28-.16.13333-.2934.3-.4.5-.0934.18666-.14.40666-.14.66V17h-2.96zM65.7703 6.5h2.96v1.76c.1466-.58667.58-1.06667 1.1-1.44.5333-.37334 1.14-.56 1.82-.56 1.3333.0 2.34.46666 3.02 1.4.68.93333 1.02 2.29333 1.02 4.08.0 1.7867-.34 3.1533-1.02 4.1-.68.9333-1.6867 1.4-3.02 1.4-.3467.0-.6734-.0533-.98-.16-.3067-.0933-.5867-.2267-.84-.4-.24-.1867-.4467-.4-.62-.64-.1734-.2533-.4-.52-.48-.8V21h-2.96V6.5zm4.9 8.34c.56.0 1.02-.1933 1.38-.58.3733-.4.56-.9333.56-1.6v-1.82c0-.6667-.1867-1.19334-.56-1.58-.36-.4-.82-.6-1.38-.6s-1.0267.14-1.4.42c-.36.26666-.54.64-.54 1.12v3.1c0 .48.18.86.54 1.14.3733.2667.84.4 1.4.4zM77.4982 17V3.04h9.26v2.7h-6.22V8.6h5.3v2.68h-5.3V17h-3.04zM89.9175 5.38c-.6.0-1.04-.13334-1.32-.4-.2667-.28-.4-.63334-.4-1.06v-.44c0-.42667.1333-.77334.4-1.04.28-.28.72-.42 1.32-.42s1.0333.14 1.3.42c.28.26666.42.61333.42 1.04v.44c0 .42666-.14.78-.42 1.06-.2667.26666-.7.4-1.3.4zm-1.48 1.12h2.96V17h-2.96V6.5zM93.5601 17V6.5h2.96v2.28c.0534-.29334.2467-.57334.38-.84.1334-.28.3067-.52667.52-.74.2267-.21334.4934-.38.8-.5.3067-.13334.6667-.2 1.08-.2h.52v2.76h-.74c-.8666.0-1.5133.11333-1.94.34-.4133.22666-.62.6467-.62 1.26V17h-2.96zM105.328 17.24c-.8.0-1.513-.1267-2.14-.38-.626-.2667-1.16-.6333-1.6-1.1-.426-.48-.753-1.06-.98-1.74-.213-.68-.32-1.44-.32-2.28.0-.8267.107-1.5733.32-2.24.214-.68.527-1.26.94-1.74.427-.48.947-.84667 1.56-1.1.614-.26667 1.314-.4 2.1-.4.867.0 1.607.14666 2.22.44.627.29333 1.134.68666 1.52 1.18.4.49333.687 1.06666.86 1.72.187.64.28 1.3133.28 2.02v.88h-6.74v.16c0 .6933.187 1.2467.56 1.66.374.4.96.6 1.76.6.614.0 1.114-.12 1.5-.36.387-.2533.747-.5533 1.08-.9l1.48 1.84c-.466.5467-1.08.9733-1.84 1.28-.746.3067-1.6.46-2.56.46zm-.06-8.8c-.6.0-1.073.2-1.42.6-.333.38666-.5.90666-.5 1.56v.16h3.68v-.18c0-.64-.146-1.15334-.44-1.54-.28-.4-.72-.6-1.32-.6z"
					></path>
				</svg>
			</a>
		</div>
		<nav classNameNameName="hidden items-center space-x-2 text-sm font-medium text-gray-800 md:flex">
			<a
				href="#"
				classNameNameName="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
			>
				Features
			</a>
			<a
				href="#"
				classNameNameName="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
			>
				Pricing
			</a>
			<a
				href="#"
				classNameNameName="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
			>
				About
			</a>
			<a
				href="#"
				classNameNameName="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
			>
				Changelog
			</a>
			<a
				href="#"
				classNameNameName="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
			>
				Blog
			</a>
		</nav>
		<nav classNameNameName="flex items-center space-x-1 text-sm font-medium text-gray-800">
			<a
				href="#"
				classNameNameName="hidden rounded bg-white px-3 py-2 transition hover:bg-gray-100 sm:inline"
			>
				Login
			</a>
			<a
				href="#"
				classNameNameName="rounded bg-rose-600 px-3 py-2 text-white transition hover:bg-rose-700"
			>
				Sign Up
			</a>
		</nav>
	</div>
</header>; */
}
