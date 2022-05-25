import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context";
import { useAuth } from "../../../context";
import { useWishlist } from "../../../context";
import { removeFromWishlist } from "../../Wishlist/services/removeFromWishlist";

export const ProductCard = ({
	product,
	addToCartHandler,
	addToWishlistHandler,
	disabled,
}) => {
	const navigate = useNavigate();
	const { cartState } = useCart();
	const { token } = useAuth();
	const [itemInCart, setItemInCart] = useState(false);
	const [itemInWishlist, setItemInWishlist] = useState(false);
	const { wishlistState, wishlistDispatch } = useWishlist();
	const { wishlistItems } = wishlistState;

	useEffect(() => {
		cartState.cartItems.find((item) => item._id === product._id)
			? setItemInCart(true)
			: setItemInCart(false);
	}, [cartState.cartItems]);

	useEffect(() => {
		wishlistItems.find((item) => item._id === product._id)
			? setItemInWishlist(true)
			: setItemInWishlist(false);
	}, [wishlistItems]);

	const removeFromWishlistHandler = (id) => {
		removeFromWishlist(id, token, wishlistDispatch);
	};

	return (
		<div className="featured-items" key={product._id}>
			<Link to={`/product/${product._id}`}>
				<img src={product.img} alt="paintings" />
			</Link>

			{itemInWishlist ? (
				<button onClick={() => removeFromWishlistHandler(product._id)}>
					<i className="fa fa-heart"></i>
				</button>
			) : (
				<button
					onClick={() => addToWishlistHandler(product)}
					disabled={disabled}
				>
					<i className="far fa-heart"></i>
				</button>
			)}

			<div className="price-container">
				<p className="item-name">{product.title}</p>
				<div className="flex">
					<span className="currency">Rs {product.price}</span>
					<small className="rating">
						{product.rating}
						<i className="fas fa-star"></i>
					</small>
				</div>
			</div>
			<button
				className="btn btn-primary btn-category"
				onClick={
					itemInCart ? () => navigate("/cart") : () => addToCartHandler(product)
				}
				disabled={disabled}
			>
				{itemInCart ? "Go to cart" : "Add to cart"}
			</button>
		</div>
	);
};
