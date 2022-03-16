import React from "react";

export const SortFilter = ({ state, dispatch }) => {
	const { sortBy } = state;
	return (
		<div className="filters sm-text mt-4">
			<h2>Sort By</h2>

			<div>
				<input
					type="radio"
					name="sort"
					id="low-to-high"
					checked={sortBy === "LOW_TO_HIGH"}
					onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
				/>
				<label htmlFor="low-to-high">Low to High</label>
			</div>

			<div>
				<input
					type="radio"
					name="sort"
					id="high-to-low"
					checked={sortBy === "HIGH_TO_LOW"}
					onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
				/>
				<label htmlFor="high-to-low">High to Low</label>
			</div>
		</div>
	);
};
