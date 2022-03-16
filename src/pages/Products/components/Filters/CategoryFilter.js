import React from "react";

export const CategoryFilter = ({ state, dispatch }) => {
	const { paintings, bags, diary, coaster } = state;
	return (
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
	);
};
