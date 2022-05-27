import React from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

export const Profile = ({ userData, signOut }) => {
	const { cartDispatch } = useCart();
	const { wishlistDispatch } = useWishlist();
	const signOutHandler = () => {
		cartDispatch({ type: "RESET" });
		wishlistDispatch({ type: "RESET" });
		signOut();
	};
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
			<button className="btn-primary btn btn-logout" onClick={signOutHandler}>
				LogOut
			</button>
		</div>
	);
};
