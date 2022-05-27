import React, { useState } from "react";
import { useAddress } from "../../context/AddressContext";
import { useAuth } from "../../context";
import { useCart } from "../../context";
import { AddressModal } from "../../components/Address/AddressModal";
import "./Checkout.css";

export const Checkout = () => {
	const [openAddressModal, setOpenAddressModal] = useState(false);
	const [editAddress, setEditAddress] = useState(null);
	const [addressInput, setAddressInput] = useState({
		name: "",
		street: "",
		city: "",
		state: "",
		zipCode: "",
		mobile: "",
	});
	const { token } = useAuth();
	const {
		addressState: { address },
		addressDispatch,
	} = useAddress();

	const {
		cartState: { cartItems },
	} = useCart();
	const itemPrice = cartItems.reduce(
		(acc, curr) => acc + curr.price * curr.qty,
		0
	);
	const totalAmount = itemPrice - 99 + 40;

	return (
		<div className="checkout-container">
			<h2 className="text-center">Checkout</h2>
			<div className="checkout">
				<div className="checkout-left">
					<h5>Shipping Address</h5>
					{address
						? address.map((item) => {
								return (
									<div key={item._id} className="checkout-address">
										<h6>{item.name}</h6>
										<p>{item.street}</p>
										<p>{`${item.city} ${item.state}`}</p>
										<p>{item.zipCode}</p>
										<p>{item.mobile}</p>
									</div>
								);
						  })
						: null}
					<button onClick={() => setOpenAddressModal((prev) => !prev)}>
						Add New Address
					</button>
					<div className="checkout-address-modal">
						{openAddressModal && (
							<AddressModal
								setOpenAddressModal={setOpenAddressModal}
								token={token}
								addressDispatch={addressDispatch}
								editAddress={editAddress}
								setEditAddress={setEditAddress}
								addressInput={addressInput}
								setAddressInput={setAddressInput}
							/>
						)}
					</div>
				</div>

				<div className="checkout-right">
					<div className="price-details-container">
						<h1 className="md-text">Order Details</h1>
						<hr />
						{cartItems
							? cartItems.map((item) => {
									return (
										<div className="price-detail" key={item._id}>
											<span>
												{item.title}
												<span className="ml">({item.qty} qty)</span>
											</span>
											<span className="currency">
												Rs {item.qty * item.price}
											</span>
										</div>
									);
							  })
							: null}
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
						{/* <Link to="/checkout"> */}
						<button className="btn btn-primary place-order">Pay</button>
						{/* </Link> */}
					</div>
				</div>
			</div>
		</div>
	);
};
