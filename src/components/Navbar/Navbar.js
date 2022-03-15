import React from "react";
import "./Navbar.css";

export const Navbar = () => {
	return (
		<div className="nav-bar">
			<div className="nav-brand-title">
				<a href="https://aipan-store.netlify.app/">The Aipan Store</a>
			</div>
			<div className="nav-center sm-text">
				<a href="https://aipan-store.netlify.app/">Home</a>
				<a href="https://aipan-store.netlify.app/">Products</a>
			</div>
			<div className="nav-links sm-text">
				<a href="https://aipan-store.netlify.app/">
					<i className="fas fa-search"></i>
				</a>
				<a href="https://aipan-store.netlify.app/">
					<i className="far fa-heart"></i>
				</a>
				<a href="https://aipan-store.netlify.app/">
					<i className="fas fa-shopping-cart"></i>
				</a>
				<a href="https://aipan-store.netlify.app/" className="btn btn-nav">
					Login
				</a>
			</div>
			<div className="hamburger-icon md-text">
				<i className="fas fa-bars"></i>
			</div>
		</div>
	);
};
