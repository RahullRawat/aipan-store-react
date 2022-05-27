import React, { useEffect } from "react";
import { useAuth } from "../../context";
import { getOrder } from "../../services/getOrder";
import "./Orders.css";

export const Orders = () => {
	const { token, orders, authDispatch } = useAuth();

	useEffect(() => {
		getOrder(token, authDispatch);
	}, []);

	return (
		<div className="orders-container">
			<h5 className="text-center">My orders</h5>
			{orders ? (
				orders.map((item) => {
					return (
						<div className="orders">
							<hr />
							<h6>Order Confirmed</h6>
							<p>
								Order Id : <span>{item.order.orderId}</span>
							</p>
							{item.order.deliveryAddress ? (
								<>
									<h6>Delivery Address</h6>
									<p>{item.order.deliveryAddress.name}</p>
									<p>{item.order.deliveryAddress.street}</p>
									<p>{`${item.order.deliveryAddress.city} ${item.order.deliveryAddress.state}`}</p>
									<p>{item.order.deliveryAddress.zipCode}</p>
									<p>{item.order.deliveryAddress.mobile}</p>
								</>
							) : null}
							<h6>
								Total Amount : <span>Rs {item.order.totalPrice}</span>
							</h6>
						</div>
					);
				})
			) : (
				<h6>No orders</h6>
			)}
		</div>
	);
};
