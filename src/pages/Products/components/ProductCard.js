import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context";

export const ProductCard = ({ product, addToCartHandler }) => {
	const navigate = useNavigate();
	const { cartState } = useCart();
	const [itemInCart, setItemInCart] = useState(false);

	useEffect(() => {
		cartState.cartItems.find((item) => item._id === product._id)
			? setItemInCart(true)
			: setItemInCart(false);
	}, [cartState.cartItems]);

	return (
		<div className="featured-items">
			<Link to="#">
				<img src={product.img} alt="paintings" />
			</Link>

			<Link to="/wishlist">
				<i className="far fa-heart"></i>
			</Link>

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
			>
				{itemInCart ? "Go to cart" : "Add to cart"}
			</button>
		</div>
	);
};
