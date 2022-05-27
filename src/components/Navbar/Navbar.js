import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context";
import { useWishlist } from "../../context";
import "./Navbar.css";

export const Navbar = () => {
	const { userData, signOut } = useAuth();
	const { cartState } = useCart();
	const { wishlistState } = useWishlist();
	const { wishlistItems } = wishlistState;
	const navigate = useNavigate();

	const [mobileSidebar, setMobileSidebar] = useState(false);

	const toggleSidebar = () => {
		setMobileSidebar(!mobileSidebar);
	};

	return (
		<>
			<div className="nav-bar">
				<div className="nav-brand-title">
					<Link to="/">The Aipan Store</Link>
				</div>
				<div className="nav-center sm-text">
					<Link to="/">Home</Link>
					<Link to="/product">Products</Link>
				</div>
				<div className="nav-links sm-text">
					<Link to={userData ? "/wishlist" : "/login"}>
						<div className="badge-container">
							<div className="badge">
								<i className="far fa-heart"></i>
								{wishlistItems.length === 0 ? (
									""
								) : (
									<span className="wishlist-badge">{wishlistItems.length}</span>
								)}
							</div>
						</div>
					</Link>
					<Link to={userData ? "/cart" : "/login"}>
						<div className="badge-container">
							<div className="badge">
								<i className="fas fa-shopping-cart "></i>
								{cartState.cartItems.length === 0 ? (
									""
								) : (
									<span className="cart-badge">
										{cartState.cartItems.length}
									</span>
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
						<Link to="/user">
							<span className="firstName btn-na">{userData.firstName}</span>
						</Link>
					)}
				</div>
				<div className="hamburger-icon md-text">
					<i className="fas fa-bars" onClick={toggleSidebar}></i>
				</div>
			</div>
			<aside
				className={
					mobileSidebar ? `${"mobile-sidebar show-sidebar"}` : "mobile-sidebar"
				}
			>
				<ul>
					<Link to="/">
						<li onClick={toggleSidebar}>Home</li>
					</Link>
					<Link to="/product">
						<li onClick={toggleSidebar}>Products</li>
					</Link>
					<Link to="/cart">
						<li onClick={toggleSidebar}>Cart</li>
					</Link>
					<Link to="/wishlist">
						<li onClick={toggleSidebar}>Wishlist</li>
					</Link>
					<Link to="/user">
						<li onClick={toggleSidebar}>User</li>
					</Link>
					<Link to="/login">
						<li onClick={toggleSidebar}>Login</li>
					</Link>
					<Link to="/signup">
						<li onClick={toggleSidebar}>Signup</li>
					</Link>
				</ul>
			</aside>
		</>
	);
};
