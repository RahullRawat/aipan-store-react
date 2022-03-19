import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../reducer/AuthReducer";

const AuthContext = createContext(null);

const initialState = {
	firstName: "",
	email: "",
	password: "",
	error: "",
	userData: "",
	token: "",
};

const AuthProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, initialState);
	const { firstName, email, password, userData, token, error } = authState;
	const navigate = useNavigate();

	const logIn = async () => {
		try {
			const response = await axios.post("/api/auth/login", {
				email,
				password,
			});
			if (response.status === 200) {
				localStorage.setItem("token", response.data.encodedToken);
				localStorage.setItem(
					"userData",
					JSON.stringify(response.data.foundUser)
				);

				authDispatch({
					type: "LOG-IN",
					payload: {
						userData: response.data.foundUser,
						token: response.data.encodedToken,
					},
				});
				navigate("/product");
			}
		} catch (err) {
			authDispatch({
				type: "ERROR",
				payload: "Please try again later!!",
			});
		}
	};

	const signUp = async () => {
		try {
			const response = await axios.post("/api/auth/signup", {
				firstName,
				email,
				password,
			});
			if (response.status === 200 || 201) {
				localStorage.setItem("token", response.data.encodedToken);
				localStorage.setItem(
					"userData",
					JSON.stringify(response.data.createdUser)
				);
				authDispatch({
					type: "SIGN-UP",
					payload: {
						userData: response.data.createdUser,
						token: response.data.encodedToken,
					},
				});
				navigate("/");
			}
		} catch (err) {
			authDispatch({ type: "ERROR", payload: "Please try again later!!" });
		}
	};

	const signOut = () => {
		authDispatch({ type: "TOKEN-REMOVED" });
		localStorage.removeItem("token");
		localStorage.removeItem("userData");
	};

	useEffect(() => {
		const loadToken = localStorage.getItem("token");
		const loadUser = JSON.parse(localStorage.getItem("userData"));
		if (loadUser) {
			authDispatch({
				type: "LOAD-USER-DATA",
				payload: { loadToken, loadUser },
			});
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				firstName,
				email,
				password,
				userData,
				token,
				error,
				authDispatch,
				logIn,
				signUp,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
