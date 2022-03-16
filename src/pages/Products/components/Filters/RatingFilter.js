import React from "react";

export const RatingFilter = ({ state, dispatch }) => {
	const { rating } = state;
	return (
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
	);
};
