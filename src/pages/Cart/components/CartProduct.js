import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context";
import { removeFromCart } from "../services/removeFromCart";
import { quantityHandler } from "../services/quantityHandler";
import { useAuth } from "../../../context";

const CartProduct = () => {
	const { cartState, cartDispatch } = useCart();
	const { cartItems } = cartState;
	const { token } = useAuth();

	const removeFromCartHandler = (_id) => {
		removeFromCart(_id, token, cartDispatch);
	};

	const updateQuantityHandler = (_id, type) => {
		quantityHandler(_id, token, cartDispatch, type);
	};
	return (
		<>
			{cartItems.map((item) => {
				return (
					<div className="card-horizontal" key={item._id}>
						<img src={item.img} alt="card-example" />
						<div className="card-content">
							<h1>{item.title}</h1>
							<h6>Rs {item.price}</h6>
							<div className="product-quantity-container">
								<span>Quantity:</span>
								<div className="product-quantity">
									<button
										className="product-quantity-decrease"
										onClick={() => {
											item.qty <= 1
												? removeFromCartHandler(item._id)
												: updateQuantityHandler(item._id, "decrement");
										}}
									>
										-
									</button>
									<input
										type="text"
										className="product-quantity-input"
										placeholder={item.qty}
									/>
									<button
										className="product-quantity-increase"
										onClick={() => updateQuantityHandler(item._id, "increment")}
									>
										+
									</button>
								</div>
							</div>
							<button
								className="btn btn-cart"
								onClick={() => removeFromCartHandler(item._id)}
							>
								Remove from cart
							</button>
							<Link to="">
								<button className="btn btn-wishlist">Move to Wishlist</button>
							</Link>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default CartProduct;
