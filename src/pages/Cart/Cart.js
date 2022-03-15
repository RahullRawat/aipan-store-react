import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

export const Cart = () => {
	return (
		<>
			<h1 className="text-center lg-text mt-4">My Cart</h1>
			<div className="card-product">
				<div className="card-horizontal">
					<img
						src="https://aipan-store.netlify.app/assets/paintings/folk-dance-painting.jpg"
						alt="card-example"
					/>
					<div className="card-content">
						<h1>Folk Dance Painting</h1>
						<h6>Rs 999.00</h6>
						<div className="product-quantity-container">
							<span>Quantity:</span>
							<div className="product-quantity">
								<button className="product-quantity-decrease">-</button>
								<input type="text" className="product-quantity-input" />
								<button className="product-quantity-increase">+</button>
							</div>
						</div>
						<button className="btn btn-cart">Remove from cart</button>
						<Link to="">
							<button className="btn btn-wishlist">Move to Wishlist</button>
						</Link>
					</div>
				</div>

				<div className="price-details-container">
					<h1 className="md-text">Price Details</h1>
					<hr />
					<div className="price-detail">
						<span>Price (1items)</span>
						<span className="currency">Rs 1999</span>
					</div>
					<div className="price-detail">
						<span>Discount</span>
						<span className="currency">-Rs 1000</span>
					</div>
					<div className="price-detail">
						<span>Delivery Charges</span>
						<span className="currency">Rs 0</span>
					</div>
					<hr />
					<div className="price-detail">
						<span className="total-amount-title">Total Amount</span>
						<span className="currency">Rs 999</span>
					</div>

					<hr />
					<p className="text-center">You will save Rs 1000 on this order.</p>
					<button className="btn btn-primary place-order">Place Order</button>
				</div>
			</div>
		</>
	);
};
