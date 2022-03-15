import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
	return (
		<section className="login-container">
			<div className="login">
				<h1 className="login-title md-text">Signup</h1>
				<form className="login-form sm-text">
					<label htmlFor="name">Name</label>
					<input id="name" type="text" placeholder="Enter Name" />
					<label htmlFor="email">Username or Email </label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Enter Email"
					/>

					<label htmlFor="password">Password </label>
					<input id="password" type="password" placeholder="Enter password" />

					<label htmlFor="password">Confirm Password </label>
					<input id="password" type="password" placeholder="Enter password" />
				</form>

				<div className="term-condition">
					<input id="term-condition" type="checkbox" />
					<label htmlFor="term-condition">
						I accept all terms & conditions
					</label>
				</div>

				<button className="btn btn-login">Signup</button>

				<div className="no-account">
					Already have an account ? <Link to="/login">Login </Link>
				</div>
			</div>
		</section>
	);
};
