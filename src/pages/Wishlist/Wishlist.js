import React from "react";
import "./Wishlist.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import { useWishlist } from "../../context";
import { useCart } from "../../context";
import { removeFromWishlist } from "./services/removeFromWishlist";
import { moveToCart } from "./services/moveToCart";

export const Wishlist = () => {
	const { token } = useAuth();
	const { wishlistState, wishlistDispatch } = useWishlist();
	const { wishlistItems } = wishlistState;
	const { cartState, cartDispatch } = useCart();

	const removeFromWishlistHandler = (id) => {
		removeFromWishlist(id, token, wishlistDispatch);
	};

	const moveToCartHandler = (product) => {
		moveToCart(product, token, cartState, cartDispatch);
		removeFromWishlist(product._id, token, wishlistDispatch);
	};

	return (
		<>
			{wishlistItems.length !== 0 ? (
				<>
					<div className="md-text text-center mt-4 heading">
						My Wishlist ({wishlistItems.length})
					</div>
					<div className="featured-categories">
						{wishlistItems.map((item) => {
							return (
								<div className="featured-items" key={item._id}>
									<Link to="#">
										<img src={item.img} alt="diary" />
									</Link>

									<i
										className="far fa-heart fw-900"
										onClick={() => removeFromWishlistHandler(item._id)}
									></i>

									<div className="price-container text-center">
										<p className="item-name">{item.title}</p>
										<span className="currency">Rs {item.price}</span>
									</div>

									<button
										className="btn btn-primary btn-category"
										onClick={() => moveToCartHandler(item)}
									>
										Move to cart
									</button>
								</div>
							);
						})}
					</div>
				</>
			) : (
				<div className="cart-empty-msg">
					<h1 className="lg-text">Your wishlist is empty</h1>
					<Link to="/product">
						<button className="btn btn-primary btn-empty">
							Continue Shopping
						</button>
					</Link>
				</div>
			)}
		</>
	);
};
