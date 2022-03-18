import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

export const Navbar = () => {
	const { userData, signOut } = useAuth();
	return (
		<div className="nav-bar">
			<div className="nav-brand-title">
				<Link to="/">The Aipan Store</Link>
			</div>
			<div className="nav-center sm-text">
				<Link to="/">Home</Link>
				<Link to="/product">Products</Link>
			</div>
			<div className="nav-links sm-text">
				<Link to="/">
					<i className="fas fa-search"></i>
				</Link>
				<Link to="/wishlist">
					<i className="far fa-heart"></i>
				</Link>
				<Link to="/cart">
					<i className="fas fa-shopping-cart"></i>
				</Link>
				{!userData && (
					<Link to="/login">
						<button className="btn-nav">LogIn</button>
					</Link>
				)}

				{userData && (
					<Link to="/">
						<button className="btn-nav" onClick={signOut}>
							LogOut
						</button>
						<span className="firstName">{userData.firstName}</span>
					</Link>
				)}
			</div>
			<div className="hamburger-icon md-text">
				<i className="fas fa-bars"></i>
			</div>
		</div>
	);
};
