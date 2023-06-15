import { createContext, useEffect, useState } from "react";

import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import axios from "axios";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const userProfile = (name, photo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};
	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signInWithGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			if (user) {
				axios
					.post("http://localhost:4000/jwt", {
						email: user.email,
					})
					.then((res) => {
						localStorage.setItem("access_token", res.data.token);
						setLoading(false);
					});
			} else {
				localStorage.removeItem("access_token");
			}
		});

		return unsubscribe;
	}, []);
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

	const authInfo = {
		user,
		loading,
		createUser,
		userProfile,
		signInWithGoogle,
		signIn,
		logOut,
		Spinner,
		setUser,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
