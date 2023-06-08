import { createContext, useEffect, useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

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

	//log out
	const logOut = () => {
		return signOut(auth);
	};

	const Spinner = () => {
		return (
			<div className="text-center">
				<div className="w-full lg:w-4/5 lg:ml-auto">
					<Player
						autoplay
						loop
						src="/890-loading-animation.json"
						className=" w-full h-full "
					>
						<Controls
							visible={true}
							buttons={["play", "repeat", "frame", "debug"]}
						/>
					</Player>
				</div>
			</div>
		);
	};

	// auth state changed
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, [user]);

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
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProviders;
