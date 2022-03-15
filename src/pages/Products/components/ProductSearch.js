import React from "react";

export const ProductSearch = () => {
	return (
		<>
			<div className="product-search">
				<input type="text" placeholder="Enter Product........" />
				<button className=" btn-search">Search</button>
			</div>

			<div className="show-products">
				Showing All Products <span>(Showing 20 products)</span>
			</div>
		</>
	);
};
