import React from "react";

const CartSummary = ({ cartState }) => {
	const { cartItems } = cartState;
	const itemPrice = cartItems.reduce(
		(acc, curr) => acc + curr.price * curr.qty,
		0
	);
	const totalAmount = itemPrice - 99 + 40;
	return (
		<div className="price-details-container">
			<h1 className="md-text">Price Details ({cartItems.length})</h1>
			<hr />
			<div className="price-detail">
				<span>Price </span>
				<span className="currency">Rs {itemPrice}</span>
			</div>
			<div className="price-detail">
				<span>Discount </span>
				<span className="currency">-Rs 99</span>
			</div>
			<div className="price-detail">
				<span>Delivery Charges</span>
				<span className="currency">Rs 40</span>
			</div>
			<hr />
			<div className="price-detail">
				<span className="total-amount-title">Total Amount</span>
				<span className="currency">Rs {totalAmount}</span>
			</div>

			<hr />
			<p className="text-center">You will save Rs 99 on this order.</p>
			<button className="btn btn-primary place-order">Place Order</button>
		</div>
	);
};

export default CartSummary;
