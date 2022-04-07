import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authReducer } from "../reducer/AuthReducer";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

const initialState = {
	firstName: "",
	email: "",
	password: "",
	error: false,
	userData: "",
	token: "",
};

const AuthProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, initialState);
	const { firstName, email, password, userData, token, error } = authState;
	const navigate = useNavigate();
	const location = useLocation();

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
				toast.success("Successfully Logged In");
				navigate(location?.state?.pathname || -1, { replace: true });
			}
		} catch (err) {
			authDispatch({
				type: "ERROR",
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
				toast.success("Your account has been created");
			}
		} catch (err) {
			authDispatch({ type: "ERROR" });
		}
	};

	const signOut = () => {
		authDispatch({ type: "LOGOUT" });
		localStorage.removeItem("token");
		localStorage.removeItem("userData");
		toast.success("Successfully Logged Out");
		navigate("/");
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
