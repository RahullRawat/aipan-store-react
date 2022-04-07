import React from "react";
import { Link } from "react-router-dom";
import error404 from "../../assets/error404.svg";
import "./Error404.css";

export const Error404 = () => {
	return (
		<div className="error404-container">
			<img src={error404} className="image-responsive" alt="error-404" />
			<Link to="/">
				<button className="btn btn-secondary ">Home</button>
			</Link>
		</div>
	);
};
