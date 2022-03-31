import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFilter } from "../../context/FilterContext";

const CategoriesCard = () => {
	const { dispatch } = useFilter();
	const [categories, setCategories] = useState([]);
	const fetchCategories = async () => {
		try {
			const response = await axios.get("/api/categories");
			if (response.status === 200) {
				setCategories(response.data.categories);
			} else {
				throw new Error();
			}
		} catch (err) {
			alert(err);
		}
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	const clickHandler = (category) => {
		dispatch({ type: "RESET" });
		if (category.categoryName === "paintings") {
			dispatch({ type: "PAINTINGS" });
		}
		if (category.categoryName === "bags") {
			dispatch({ type: "BAGS" });
		}
		if (category.categoryName === "diary") {
			dispatch({ type: "DIARY" });
		}
		if (category.categoryName === "coaster") {
			dispatch({ type: "COASTER" });
		}
	};

	return (
		<section>
			<h1 className="section-title text-center md-text">
				Featured <span className="highlight-text md-text">Categories</span>
			</h1>
			<div className="featured-categories">
				{categories.map((category) => {
					return (
						<div className="featured-items" key={category._id}>
							<Link to="#">
								<img src={category.img} alt="paintings" />
							</Link>
							<Link to="/product" onClick={() => clickHandler(category)}>
								<button className="btn btn-primary btn-category">
									{category.categoryName}
								</button>
							</Link>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export { CategoriesCard };
