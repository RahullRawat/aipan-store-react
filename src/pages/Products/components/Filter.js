import React from "react";

export const Filter = () => {
	return (
		<aside className="filter-product">
			<div className="filter-heading">
				<h1>Filters</h1>
			</div>

			<div className="filters mt-4 slider">
				<input
					type="range"
					min="0"
					name="slider"
					id="slider"
					className="range"
					max="100"
				/>
			</div>

			<div className="filters mt-4 sm-text">
				<h2>Price</h2>
				<div>
					<input type="radio" name="price" id="price1" />
					<label htmlFor="price1">Under ₹1000</label>
				</div>
				<div>
					<input type="radio" name="price" id="price2" />
					<label htmlFor="price2">Under ₹2000</label>
				</div>
				<div>
					<input type="radio" name="price" id="price3" />
					<label htmlFor="price3">Under ₹3000</label>
				</div>
				<div>
					<input type="radio" name="price" id="price4" />
					<label htmlFor="price4">Under ₹4000</label>
				</div>
			</div>

			<div className="filters sm-text mt-4">
				<h2>Category</h2>

				<div>
					<input type="checkbox" />
					<label htmlFor="checkbox">Paintings</label>
				</div>

				<div>
					<input type="checkbox" />
					<label htmlFor="checkbox">Bags</label>
				</div>

				<div>
					<input type="checkbox" />
					<label htmlFor="checkbox">Diary</label>
				</div>

				<div>
					<input type="checkbox" />
					<label htmlFor="checkbox">Coaster</label>
				</div>
			</div>

			<div className="filters sm-text mt-4">
				<h2>Rating</h2>

				<div>
					<input type="radio" name="rating" id="rating-4" />
					<label htmlFor="rating-4">4 Stars & above</label>
				</div>

				<div>
					<input type="radio" name="rating" id="rating-3" />
					<label htmlFor="rating-3">3 Stars & above</label>
				</div>

				<div>
					<input type="radio" name="rating" id="rating-2" />
					<label htmlFor="rating-2">2 Stars & above</label>
				</div>

				<div>
					<input type="radio" name="rating" id="rating-1" />
					<label htmlFor="rating-1">1 Stars & above</label>
				</div>
			</div>

			<div className="filters sm-text mt-4">
				<h2>Sort By</h2>

				<div>
					<input type="radio" name="sort" id="low-to-high" />
					<label htmlFor="low-to-high">Low to High</label>
				</div>

				<div>
					<input type="radio" name="sort" id="high-to-low" />
					<label htmlFor="high-to-low">High to Low</label>
				</div>
			</div>

			<button className="btn btn-link">Clear Filters</button>
		</aside>
	);
};
