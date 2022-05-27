import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddress } from "../../context/AddressContext";
import { useAuth } from "../../context";
import { useCart } from "../../context";
import { AddressModal } from "../../components/Address/AddressModal";
import { removeFromCart } from "../Cart/services/removeFromCart";
import { addNewOrder } from "../../services/addNewOrder";
import "./Checkout.css";

export const Checkout = () => {
	const [openAddressModal, setOpenAddressModal] = useState(false);
	const [editAddress, setEditAddress] = useState(null);
	const [selectedAddress, setSelectedAddress] = useState();
	const [addressInput, setAddressInput] = useState({
		name: "",
		street: "",
		city: "",
		state: "",
		zipCode: "",
		mobile: "",
	});

	const navigate = useNavigate();
	const { token, userData, orders, authDispatch } = useAuth();

	const {
		addressState: { address },
		addressDispatch,
	} = useAddress();

	const {
		cartState: { cartItems },
		cartDispatch,
	} = useCart();

	const itemPrice = cartItems.reduce(
		(acc, curr) => acc + curr.price * curr.qty,
		0
	);
	const totalAmount = itemPrice - 99 + 40;

	const checkAddressSelected = () =>
		selectedAddress
			? completePayment()
			: toast.warning("Please select address");

	const completePayment = async () => {
		const response = await loadSdk();
		if (response) {
			const options = {
				key: "rzp_test_czUM1yRETVmi69",
				key_id: "rzp_test_czUM1yRETVmi69",
				key_secret: "GtcBQJd3rV6uQmcDimVkVLtk",
				amount: totalAmount * 100,
				currency: "INR",
				name: "Aipan Store",
				description: "Thank you for shopping with us",
				callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
				prefill: {
					name: userData.firstName,
					email: userData.email,
					contact: "9999999999",
				},
				notes: { address: "Razorpay Corporate Office" },
				theme: { color: "#202528" },
				handler: function (response) {
					const order = {
						orderId: response.razorpay_payment_id,
						deliveryAddress: selectedAddress,
						totalPrice: totalAmount,
					};
					addNewOrder(order, token, authDispatch);
					cartItems.map((item) =>
						removeFromCart(item._id, token, cartDispatch)
					);
					navigate("/user/orders");
					toast.success("Order Placed Successfully");
				},
			};
			const rzp1 = new window.Razorpay(options);
			rzp1.open();
			rzp1.on("payment.failed", function (response) {
				toast.error("Something went wrong", response.error.code);
			});
		} else {
			toast.error("Something went wrong");
		}
	};

	const loadSdk = async () => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = "https://checkout.razorpay.com/v1/checkout.js";
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	};

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
										<input
											type="radio"
											id={item._id}
											name="delivery-address"
											onChange={() => setSelectedAddress(item)}
										/>
										<label htmlFor={item._id}>
											<h6>{item.name}</h6>
											<p>{item.street}</p>
											<p>{`${item.city} ${item.state}`}</p>
											<p>{item.zipCode}</p>
											<p>{item.mobile}</p>
										</label>
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
						<div className="text-center">
							{selectedAddress ? (
								<>
									<h6>{selectedAddress.name}</h6>
									<p>{selectedAddress.street}</p>
									<p>{`${selectedAddress.city} ${selectedAddress.state}`}</p>
									<p>{selectedAddress.zipCode}</p>
									<p>{selectedAddress.mobile}</p>
								</>
							) : null}
						</div>
						<button
							className="btn btn-primary place-order"
							onClick={checkAddressSelected}
						>
							Pay
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
