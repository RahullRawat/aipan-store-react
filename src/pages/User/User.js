import React from "react";
import { useAuth } from "../../context";
import "./User.css";

export const User = () => {
	const { userData, signOut } = useAuth();
	return (
		<section className="user-profile-container ">
			<div className="profile-details">
				<div className="username-container">
					<h5>Name - </h5>
					{userData && (
						<h6 className="username">
							{userData.firstName + userData.lastName}
						</h6>
					)}
				</div>
				<div className="user-email-container">
					<h5>Email - </h5>
					{userData && <h6 className="email">{userData.email}</h6>}
				</div>
			</div>
			<button className="btn-primary btn btn-logout" onClick={signOut}>
				LogOut
			</button>
		</section>
	);
};
