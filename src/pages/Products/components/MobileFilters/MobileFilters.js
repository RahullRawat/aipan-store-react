import React from "react";
import { useFilter } from "../../../../context/FilterContext";
import "./MobileFilters.css";

const MobileFilters = ({ mobileFilters }) => {
	const { state, dispatch } = useFilter();
	const {
		sliderRange,
		priceRange,
		paintings,
		bags,
		diary,
		coaster,
		rating,
		sortBy,
	} = state;

	const resetHandler = () => {
		dispatch({ type: "RESET", payload: {} });
	};
	return (
		<div
			className={
				mobileFilters ? "mobile-filters" : `${"display-none mobile-filters"}`
			}
		>
			<div>
				<div className="filters mt-4 slider">
					<input
						type="range"
						min="800"
						max="4000"
						name="slider"
						id="slider"
						className="range"
						value={sliderRange}
						onChange={(e) =>
							dispatch({ type: "SLIDER_RANGE", payload: e.target.value })
						}
					/>
					<span>₹{state.sliderRange}</span>
				</div>
				<div className="filters mt-4 sm-text">
					<h2>Price</h2>
					<div>
						<input
							type="radio"
							name="price"
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
							name="price"
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
							name="price"
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
							name="price"
							id="price4"
							checked={priceRange === "UNDER_4000"}
							onChange={() =>
								dispatch({ type: "PRICE_RANGE", payload: "UNDER_4000" })
							}
						/>
						<label htmlFor="price4">Under ₹4000</label>
					</div>
				</div>
				<div className="filters sm-text mt-4">
					<h2>Rating</h2>

					<div>
						<input
							type="radio"
							name="rating"
							id="rating-4"
							checked={rating === "4_STAR_&_ABOVE"}
							onChange={() =>
								dispatch({ type: "RATING", payload: "4_STAR_&_ABOVE" })
							}
						/>
						<label htmlFor="rating-4">4 Stars & above</label>
					</div>

					<div>
						<input
							type="radio"
							name="rating"
							id="rating-3"
							checked={rating === "3_STAR_&_ABOVE"}
							onChange={() =>
								dispatch({ type: "RATING", payload: "3_STAR_&_ABOVE" })
							}
						/>
						<label htmlFor="rating-3">3 Stars & above</label>
					</div>

					<div>
						<input
							type="radio"
							name="rating"
							id="rating-2"
							checked={rating === "2_STAR_&_ABOVE"}
							onChange={() =>
								dispatch({ type: "RATING", payload: "2_STAR_&_ABOVE" })
							}
						/>
						<label htmlFor="rating-2">2 Stars & above</label>
					</div>

					<div>
						<input
							type="radio"
							name="rating"
							id="rating-1"
							checked={rating === "1_STAR_&_ABOVE"}
							onChange={() =>
								dispatch({ type: "RATING", payload: "1_STAR_&_ABOVE" })
							}
						/>
						<label htmlFor="rating-1">1 Stars & above</label>
					</div>
				</div>
			</div>
			<div>
				<div className="filters sm-text mt-4">
					<h2>Category</h2>

					<div>
						<input
							type="checkbox"
							id="checkbox-1"
							checked={paintings}
							onChange={() => dispatch({ type: "PAINTINGS" })}
						/>
						<label htmlFor="checkbox-1">Paintings</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="checkbox-2"
							checked={bags}
							onChange={() => dispatch({ type: "BAGS" })}
						/>
						<label htmlFor="checkbox-2">Bags</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="checkbox-3"
							checked={diary}
							onChange={() => dispatch({ type: "DIARY" })}
						/>
						<label htmlFor="checkbox-3">Diary</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="checkbox-4"
							checked={coaster}
							onChange={() => dispatch({ type: "COASTER" })}
						/>
						<label htmlFor="checkbox-4">Coaster</label>
					</div>
				</div>
				<div className="filters sm-text mt-4">
					<h2>Sort By</h2>

					<div>
						<input
							type="radio"
							name="sort"
							id="low-to-high"
							checked={sortBy === "LOW_TO_HIGH"}
							onChange={() =>
								dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
							}
						/>
						<label htmlFor="low-to-high">Low to High</label>
					</div>

					<div>
						<input
							type="radio"
							name="sort"
							id="high-to-low"
							checked={sortBy === "HIGH_TO_LOW"}
							onChange={() =>
								dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
							}
						/>
						<label htmlFor="high-to-low">High to Low</label>
					</div>
				</div>
				<button className="btn btn-link" onClick={resetHandler}>
					Clear Filters{" "}
				</button>
			</div>
		</div>
	);
};

export { MobileFilters };
