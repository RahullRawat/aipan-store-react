import React, { useState } from "react";
import { useAuth } from "../../context";
import { Address, Orders, Profile } from "../../components";
import "./User.css";

export const User = () => {
	const [activeTab, setActiveTab] = useState("profile");
	const { userData, signOut } = useAuth();

	return (
		<section className="user-profile-container ">
			<div className="user-details">
				<button
					className={
						activeTab === "profile" ? "active-tab tab-button" : "tab-button"
					}
					onClick={() => setActiveTab("profile")}
				>
					Profile
				</button>
				<button
					className={
						activeTab === "address" ? "active-tab tab-button" : "tab-button"
					}
					onClick={() => setActiveTab("address")}
				>
					Address
				</button>
				<button
					className={
						activeTab === "orders" ? "active-tab tab-button" : "tab-button"
					}
					onClick={() => setActiveTab("orders")}
				>
					Orders
				</button>
				{activeTab === "profile" ? (
					<Profile userData={userData} signOut={signOut} />
				) : activeTab === "address" ? (
					<Address />
				) : (
					<Orders />
				)}
			</div>
		</section>
	);
};
