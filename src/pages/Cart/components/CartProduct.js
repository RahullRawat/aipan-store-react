import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context";
import { removeFromCart } from "../services/removeFromCart";
import { quantityHandler } from "../services/quantityHandler";
import { addToWishlist } from "../../Wishlist/services/addToWishlist";
import { useAuth } from "../../../context";
import { useWishlist } from "../../../context";

const CartProduct = () => {
	const { cartState, cartDispatch } = useCart();
	const { cartItems } = cartState;
	const { wishlistDispatch } = useWishlist();
	const { token } = useAuth();

	const removeFromCartHandler = (_id) => {
		removeFromCart(_id, token, cartDispatch);
	};

	const updateQuantityHandler = (_id, type) => {
		quantityHandler(_id, token, cartDispatch, type);
	};

	const moveToWishlistHandler = (product) => {
		addToWishlist(product, token, wishlistDispatch);
		removeFromCart(product._id, token, cartDispatch);
	};
	return (
		<div className="cart-wrapper">
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
								<button
									className="btn btn-wishlist"
									onClick={() => moveToWishlistHandler(item)}
								>
									Move to Wishlist
								</button>
							</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CartProduct;
