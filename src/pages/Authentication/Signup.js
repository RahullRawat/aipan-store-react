import React from "react";

export const Signup = () => {
	return (
		<section class="login-container">
			<div class="login">
				<h1 class="login-title md-text">Signup</h1>
				<form class="login-form sm-text">
					<label for="name">Name</label>
					<input id="name" type="text" placeholder="Enter Name" />
					<label for="email">Username or Email </label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Enter Email"
					/>

					<label for="password">Password </label>
					<input id="password" type="password" placeholder="Enter password" />

					<label for="password">Confirm Password </label>
					<input id="password" type="password" placeholder="Enter password" />
				</form>

				<div class="term-condition">
					<input id="term-condition" type="checkbox" />
					<label for="term-condition"> I accept all terms & conditions</label>
				</div>

				<button class="btn btn-login">Signup</button>

				<div class="no-account">
					Already have an account ? <a href="../login/login.html">Login </a>
				</div>
			</div>
		</section>
	);
};
