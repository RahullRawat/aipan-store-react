import React from "react";
import { useFilter } from "../utils/FilterContext";
import { SliderFilter } from "./Filters/SliderFilter";
import { PriceRangeFilter } from "./Filters/PriceRangeFilter";
import { CategoryFilter } from "./Filters/CategoryFilter";
import { RatingFilter } from "./Filters/RatingFilter";
import { SortFilter } from "./Filters/SortFilter";

export const Filter = () => {
	const { state, dispatch } = useFilter();

	const resetHandler = () => {
		dispatch({ type: "RESET", payload: {} });
	};

	return (
		<aside className="filter-product">
			<div className="filter-heading">
				<h1>Filters</h1>
			</div>

			<SliderFilter state={state} dispatch={dispatch} />
			<PriceRangeFilter state={state} dispatch={dispatch} />
			<CategoryFilter state={state} dispatch={dispatch} />
			<RatingFilter state={state} dispatch={dispatch} />
			<SortFilter state={state} dispatch={dispatch} />

			<button className="btn btn-link" onClick={resetHandler}>
				Clear Filters
			</button>
		</aside>
	);
};
