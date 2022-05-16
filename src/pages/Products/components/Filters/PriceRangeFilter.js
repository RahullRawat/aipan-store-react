import React from "react";

export const PriceRangeFilter = ({ state, dispatch }) => {
	const { priceRange } = state;
	return (
		<div className="filters mt-4 sm-text">
			<h2>Price</h2>
			<div>
				<input
					type="radio"
					name="price1"
					id="price1"
					checked={priceRange === "UNDER_600"}
					onChange={() =>
						dispatch({ type: "PRICE_RANGE", payload: "UNDER_600" })
					}
				/>
				<label htmlFor="price1">Under ₹600</label>
			</div>
			<div>
				<input
					type="radio"
					name="price2"
					id="price2"
					checked={priceRange === "UNDER_1000"}
					onChange={() =>
						dispatch({ type: "PRICE_RANGE", payload: "UNDER_1000" })
					}
				/>
				<label htmlFor="price2">Under ₹1000</label>
			</div>
			<div>
				<input
					type="radio"
					name="price3"
					id="price3"
					checked={priceRange === "UNDER_2000"}
					onChange={() =>
						dispatch({ type: "PRICE_RANGE", payload: "UNDER_2000" })
					}
				/>
				<label htmlFor="price3">Under ₹2000</label>
			</div>
			<div>
				<input
					type="radio"
					name="price4"
					id="price4"
					checked={priceRange === "UNDER_4000"}
					onChange={() =>
						dispatch({ type: "PRICE_RANGE", payload: "UNDER_4000" })
					}
				/>
				<label htmlFor="price4">Under ₹4000</label>
			</div>
		</div>
	);
};
