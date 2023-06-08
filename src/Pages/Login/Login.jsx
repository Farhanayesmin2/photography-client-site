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
	const { signIn, setUser, signInWithGoogle } = useContext(AuthContext);

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

	const handleGoogleSignIn = () => {
		// Sign in with Google
		signInWithGoogle()
			.then((result) => {
				// Reset error message and set user context
				setErrorMessage("");
				const loggedUser = result.user;
				setUser(loggedUser);

				// Navigate to previous page
				navigate(from, { replace: true });
			})
			.catch((error) => {
				// Display error message
				setErrorMessage(error.message);
			});
	};

	return (
		<div>
			<div className="relative py-16">
				<div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
					<div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
						<div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-xl shadow-lime-900/40 backdrop-blur-2xl">
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
											className="text-gray-600 dark:text-gray-300 "
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
											className="shadow-md shadow-lime-900    focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
										/>
									</div>

									<div>
										<div className="flex items-center justify-between">
											<div>
												<label
													htmlFor="password"
													className="text-gray-600 dark:text-gray-300"
													name="password"
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
												placeholder="******"
												autoComplete="current-password"
												className=" shadow-md shadow-lime-900  focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
											/>
											<svg
												onClick={() => setShow(!show)}
												xmlns="http://www.w3.org/2000/svg"
												width={16}
												height={16}
												fill="gray"
												className="bi bi-eye  absolute top-1/2 right-3 -translate-y-1/2"
												viewBox="0 0 16 16"
											>
												<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
												<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
											</svg>
										</div>
									</div>
									<button
										type="submit"
										className="relative   flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-lime-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
									>
										<span className="relative text-black font-semibold  dark:text-dark">
											Submit
										</span>
									</button>
									<button
										onClick={handleGoogleSignIn}
										className="bg-white shadow-md shadow-lime-900 border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
									>
										<svg
											className="mr-3"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 48 48"
											width="25px"
										>
											<path
												fill="#FFC107"
												d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
											/>
											<path
												fill="#FF3D00"
												d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
											/>
											<path
												fill="#4CAF50"
												d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
											/>
											<path
												fill="#1976D2"
												d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
											/>
										</svg>
										Continue with Google
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
