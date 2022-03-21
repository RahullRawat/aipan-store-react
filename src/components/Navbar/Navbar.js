import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { userData, signOut } = useAuth();
	const { cartState } = useCart();
	const navigate = useNavigate();
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
				<Link to="/wishlist">
					<i className="far fa-heart"></i>
				</Link>
				<Link to={userData ? "/cart" : "/login"}>
					<div className="badge-container">
						<div className="badge">
							<i className="fas fa-shopping-cart "></i>
							{cartState.cartItems.length === 0 ? (
								""
							) : (
								<span className="cart-badge">{cartState.cartItems.length}</span>
							)}
						</div>
					</div>
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
