import { createContext, useEffect, useState } from "react";

import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
	const [user, setUser] = useState(null);

	const [loading, setLoading] = useState(true);
	const currentUser = auth.currentUser;

	// create user email/pass
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// update user profile
	const userProfile = (name, photo) => {
		return updateProfile(currentUser, { displayName: name, photoURL: photo });
	};

	// sign is with email/pass
	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	//sign in with google
	const signInWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	//sign in with github
	const signInWithGitHub = () => {
		setLoading(true);
		return signInWithPopup(auth, githubProvider);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};
	const Spinner = () => {
		return (
			<div className="text-center w-52">
				<div>
					<div className=" top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
						<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
					</div>
				</div>
			</div>
		);
	};

	// auth state changed
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (c) => {
			console.log("current user", c);

			// get and set token
			if (c) {
				axios
					.post("http://localhost:4000/jwt", {
						email: c.email,
					})
					.then((data) => {
						console.log(data.data.token);
						localStorage.setItem("access-token", data.data.token);
						setLoading(false);
						setUser(c);
					});
			} else {
				localStorage.removeItem("access-token");
				setLoading(false);
				setUser(c);
			}
		});
		return () => {
			return unsubscribe();
		};
	}, []);

	// auth information
	const authInfo = {
		user,
		setUser,
		loading,
		createUser,
		signIn,
		signInWithGoogle,
		signInWithGitHub,
		logOut,
		userProfile,
		Spinner,
		currentUser,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProviders;
