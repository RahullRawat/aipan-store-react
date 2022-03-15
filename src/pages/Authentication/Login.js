import React from "react";
import { Link } from "react-router-dom";
import "./Authentication.css";

export const Login = () => {
	return (
		<section className="login-container">
			<div className="login">
				<h1 className="login-title md-text">Login</h1>
				<form className="login-form sm-text">
					<label htmlFor="email">Username or Email </label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Enter Email"
					/>

					<label htmlFor="password">Password </label>
					<input id="password" type="password" placeholder="Enter password" />
				</form>
				<Link to="#" className="forgot-password">
					Forgot Your Password ?
				</Link>
				<button className="btn btn-login">Login</button>

				<div className="no-account">
					Don't have an account ? <Link to="/signup">Sign Up </Link>
				</div>
			</div>
		</section>
	);
};
