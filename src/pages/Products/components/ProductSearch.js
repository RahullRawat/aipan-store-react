import React, { useState } from "react";
import { MobileFilters } from "./MobileFilters/MobileFilters";

export const ProductSearch = ({ searchHandler }) => {
	const [mobileFilters, setMobileFilters] = useState(false);
	const showMobileFIlters = () => {
		setMobileFilters(!mobileFilters);
	};
	return (
		<>
			<div className="product-search">
				<button className="btn-filters" onClick={showMobileFIlters}>
					Filters
				</button>
				<input
					type="text"
					placeholder="Enter Product........"
					onChange={(e) => searchHandler(e)}
				/>
				<i class="fa fa-search btn-search" aria-hidden="true"></i>
			</div>
			<MobileFilters mobileFilters={mobileFilters} />
		</>
	);
};
