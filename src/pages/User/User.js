import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context";
import { Address, Orders, Profile } from "../../components";
import "./User.css";

export const User = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { userData, signOut } = useAuth();

	useEffect(() => {
		document.title = "Aipan Store | User";
	}, []);

	return (
		<section className="user-profile-container ">
			<div className="user-details">
				<button
					className={
						location.pathname === "/user"
							? "active-tab tab-button"
							: "tab-button"
					}
					onClick={() => navigate("/user")}
				>
					Profile
				</button>
				<button
					className={
						location.pathname === "/user/address"
							? "active-tab tab-button"
							: "tab-button"
					}
					onClick={() => navigate("/user/address")}
				>
					Address
				</button>
				<button
					className={
						location.pathname === "/user/orders"
							? "active-tab tab-button"
							: "tab-button"
					}
					onClick={() => navigate("/user/orders")}
				>
					Orders
				</button>
				{location.pathname === "/user" ? (
					<Profile userData={userData} signOut={signOut} />
				) : location.pathname === "/user/address" ? (
					<Address />
				) : (
					<Orders />
				)}
			</div>
		</section>
	);
};
