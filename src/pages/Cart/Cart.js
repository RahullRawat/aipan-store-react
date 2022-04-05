import React from "react";
import "./Cart.css";
import CartProduct from "./components/CartProduct";
import CartSummary from "./components/CartSummary";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
	const { cartState } = useCart();
	return (
		<div>
			{cartState.cartItems.length !== 0 ? (
				<>
					<h1 className="text-center lg-text mt-4">
						My Cart ({cartState.cartItems.length})
					</h1>
					<div className="card-product">
						<CartProduct />
						<CartSummary cartState={cartState} />
					</div>
				</>
			) : (
				<div className="cart-empty-msg">
					<h1 className="lg-text">Your cart is empty</h1>
					<Link to="/product">
						<button className="btn btn-primary btn-empty">
							Continue Shopping
						</button>
					</Link>
					<Link to="/wishlist">
						<button className="btn btn-primary btn-empty">
							Go to wishlist
						</button>
					</Link>
				</div>
			)}
		</div>
	);
};
