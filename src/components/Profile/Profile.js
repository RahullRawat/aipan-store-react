import React from "react";

export const Profile = ({ userData, signOut }) => {
	return (
		<div className="profile-container">
			<div className="username-container">
				<h5>Name - </h5>
				{userData && (
					<h6 className="username">
						{userData.firstName + " " + userData.lastName}
					</h6>
				)}
			</div>
			<div className="user-email-container">
				<h5>Email - </h5>
				{userData && <h6 className="email">{userData.email}</h6>}
			</div>
			<button className="btn-primary btn btn-logout" onClick={signOut}>
				LogOut
			</button>
		</div>
	);
};
