import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { Player } from "@lottiefiles/react-lottie-player";
const Login = () => {
	// State variables
	const [email, setEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);

	// Context variables and functions
	const { signIn, setUser } = useContext(AuthContext);

	// Router variables and functions
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	// Event handlers
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;

		// Sign in with email and password
		signIn(email, password)
			.then((result) => {
				// Reset error message and set user context
				setErrorMessage("");
				const loggedUser = result.user;
				setUser(loggedUser);

				// Navigate to previous page and reset form
				navigate(from, { replace: true });
				form.reset();
			})
			.catch((error) => {
				// Display error message
				toast.error(error.message);

				// Display success message if there's no error
				if (!error) {
					toast.success("Successfully Login!");
				}
			});
	};

	const handleEmail = (e) => {
		const input = e.target.value;
		setEmail(input);
	};

	const handlePassword = (e) => {
		const input = e.target.value;
		setPassword(input);
	};

	// const handleGoogleSignIn = () => {
	// 	// Sign in with Google
	// 	signInWithGoogle()
	// 		.then((result) => {
	// 			// Reset error message and set user context
	// 			setErrorMessage("");
	// 			const loggedUser = result.user;
	// 			setUser(loggedUser);

	// 			// Navigate to previous page
	// 			navigate(from, { replace: true });
	// 		})
	// 		.catch((error) => {
	// 			// Display error message
	// 			setErrorMessage(error.message);
	// 		});
	// };

	return (
		<div>
			<div className="relative py-16">
				<div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
					<div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
						<div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
							<div className="p-8 py-12 sm:p-16">
								<h2 className="mb-8 text-center text-2xl font-bold text-gray-800 dark:text-white">
									Sign in to your account{" "}
									<Player
										autoplay
										speed={1}
										loop
										src="/public/11067-registration-animation.json"
										className="rounded-full w-40 h-32  "
									></Player>
								</h2>
								<form onSubmit={handleSubmit} className="space-y-8">
									<div className="space-y-2">
										<label
											htmlFor="email"
											className="text-gray-600 dark:text-gray-300"
										>
											Email
										</label>
										<input
											type="email"
											name="email"
											placeholder="Email"
											value={email}
											onChange={handleEmail}
											autoComplete="username"
											className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
										/>
									</div>

									<div>
										<div className="flex items-center justify-between">
											<div>
												<label
													htmlFor="password"
													className="text-gray-600 dark:text-gray-300"
													name="password"
													placeholder="Password"
													type={show ? "text" : "password"}
													value={password}
													onChange={handlePassword}
												>
													Password
												</label>
												<p className="text-danger">
													{errorMessage && (
														<span className="text-red-500">{errorMessage}</span>
													)}
													<ToastContainer
														position="top-center"
														autoClose={5000}
														hideProgressBar={false}
														newestOnTop={false}
														closeOnClick
														rtl={false}
														pauseOnFocusLoss
														draggable
														pauseOnHover
														theme="light"
													/>
												</p>
											</div>
											<button className="-mr-2 p-2" type="reset">
												<span className="text-sm text-primary">
													Forgot your password ?
												</span>
											</button>
										</div>
										<div className="relative">
											<input
												type="password"
												name="pwd"
												id="pwd"
												autoComplete="current-password"
												className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
											/>
											<svg
												onClick={() => setShow(!show)}
												xmlns="http://www.w3.org/2000/svg"
												width={16}
												height={16}
												fill="gray"
												className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
												viewBox="0 0 16 16"
											>
												<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
												<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
											</svg>
										</div>
									</div>
									<button
										type="submit"
										className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
									>
										<span className="relative text-base font-semibold text-white dark:text-dark">
											Submit
										</span>
									</button>

									<p className="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
										Do not have an account ?
										<a href="#" className="text-primary">
											Sign up
										</a>
									</p>
								</form>
							</div>
						</div>
						<div className="space-x-4 text-center text-gray-500">
							<span>&copy;photography school</span>
							<a href="#" className="text-sm hover:text-primary">
								Contact
							</a>
							<a href="#" className="text-sm hover:text-primary">
								Privacy & Terms
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
