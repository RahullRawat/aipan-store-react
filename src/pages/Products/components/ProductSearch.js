import React from "react";

export const ProductSearch = () => {
	return (
		<>
			<div className="product-search">
				<button className="btn-primary btn-filters">Filters</button>
				<input type="text" placeholder="Enter Product........" />
				<i class="fa fa-search btn-search" aria-hidden="true"></i>
			</div>
		</>
	);
};
