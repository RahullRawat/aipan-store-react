import React from "react";

export const SliderFilter = ({ state, dispatch }) => {
	return (
		<div className="filters mt-4 slider">
			<input
				type="range"
				min="800"
				max="4000"
				name="slider"
				id="slider"
				className="range"
				value={state.sliderRange}
				onChange={(e) =>
					dispatch({ type: "SLIDER_RANGE", payload: e.target.value })
				}
			/>
			<span>₹{state.sliderRange}</span>
		</div>
	);
};
