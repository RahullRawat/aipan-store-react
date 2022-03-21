import { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";
import { Filter } from "./components/Filter";
import { ProductSearch } from "./components/ProductSearch";
import { ProductCard } from "./components/ProductCard";
import { useFilter } from "../../context/index";
import {
	filterBySlider,
	filterByPriceRange,
	filterByCategory,
	filterByRating,
	filterBySort,
} from "./utils/FilterFunctions";
import { addToCart } from "../../pages/Cart/services/addToCart";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Product = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loader, setLoader] = useState(false);

	const { state } = useFilter();
	const {
		sortBy,
		priceRange,
		rating,
		paintings,
		bags,
		diary,
		coaster,
		sliderRange,
	} = state;

	const filterBySliderData = filterBySlider(products, sliderRange);
	const filterByPriceRangeData = filterByPriceRange(
		filterBySliderData,
		priceRange
	);
	const filterByCategoryData = filterByCategory(
		filterByPriceRangeData,
		paintings,
		bags,
		diary,
		coaster
	);
	const filterByRatingData = filterByRating(filterByCategoryData, rating);
	const filterBySortData = filterBySort(filterByRatingData, sortBy);

	useEffect(() => {
		(async () => {
			setLoader(true);
			try {
				const response = await axios.get("/api/products");
				setLoader(false);
				setProducts(response.data.products);
			} catch (error) {
				setError(true);
				setLoader(false);
			}
		})();
	}, []);

	const { cartState, cartDispatch } = useCart();
	const { token } = useAuth();
	const navigate = useNavigate();

	const addToCartHandler = (product) => {
		if (token) {
			addToCart(product, cartDispatch, token);
		} else {
			navigate("/login");
		}
	};

	return (
		<div className="product">
			<Filter />
			<main className="product-container">
				<ProductSearch />

				{error && (
					<h1 className="error-msg">
						Oops something went wrong, Please try again later !!!
					</h1>
				)}
				{loader && <span class="loader"></span>}

				<div className="featured-categories text-left">
					{filterBySortData.map((product) => {
						return (
							<ProductCard
								key={product._id}
								product={product}
								addToCartHandler={addToCartHandler}
							/>
						);
					})}
				</div>
			</main>
		</div>
	);
};
