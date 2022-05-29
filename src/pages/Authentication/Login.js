import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Authentication.css";
import { useAuth } from "../../context/index";
import { toast } from "react-toastify";

export const Login = () => {
	const { email, password, error, authDispatch, logIn } = useAuth();

	const guestLoginHandler = () => {
		authDispatch({ type: "LOG-IN-EMAIL", payload: "rahulrawat@gmail.com" });
		authDispatch({ type: "LOG-IN-PASSWORD", payload: "rahulrawat" });
	};

	const logInHandler = (e) => {
		e.preventDefault();
		if (email && password) {
			logIn();
		} else {
			toast.warning("Please fill all fields");
		}
	};

	useEffect(() => {
		document.title = "Aipan Store | Login";
	}, []);
	return (
		<section className="login-container">
			<div className="login">
				{error && (
					<h6 className="text-center login-error-msg">
						"Please try again later"
					</h6>
				)}
				<h1 className="login-title md-text">Login</h1>
				<form className="login-form sm-text" onSubmit={logInHandler}>
					<label htmlFor="email">Email </label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Enter Email"
						value={email}
						onChange={(e) =>
							authDispatch({ type: "LOG-IN-EMAIL", payload: e.target.value })
						}
					/>

					<label htmlFor="password">Password </label>
					<input
						id="password"
						type="password"
						placeholder="Enter password"
						value={password}
						onChange={(e) =>
							authDispatch({ type: "LOG-IN-PASSWORD", payload: e.target.value })
						}
					/>

					<button type="submit" className="btn btn-login">
						Login
					</button>
					<button
						type="submit"
						className="btn btn-guest-login"
						onClick={guestLoginHandler}
					>
						Guest Login
					</button>

					<div className="no-account">
						Don't have an account ? <Link to="/signup">Sign Up </Link>
					</div>
				</form>
			</div>
		</section>
	);
};
