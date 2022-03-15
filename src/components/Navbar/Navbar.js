import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
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
				<Link to="/login" className="btn btn-nav">
					Login
				</Link>
			</div>
			<div className="hamburger-icon md-text">
				<i className="fas fa-bars"></i>
			</div>
		</div>
	);
};
