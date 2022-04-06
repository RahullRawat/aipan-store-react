import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
	filterBySearch,
} from "./utils/FilterFunctions";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useWishlist } from "../../context/WishlistContext";
import { addToCart } from "../../pages/Cart/services/addToCart";
import { addToWishlist } from "../Wishlist/services/addToWishlist";

export const Product = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loader, setLoader] = useState(false);
	const [search, setSearch] = useState("");

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
	const filterBySearchData = filterBySearch(filterBySortData, search);

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

	const { token } = useAuth();
	const navigate = useNavigate();
	const { cartDispatch } = useCart();

	const addToCartHandler = (product) => {
		if (token) {
			addToCart(product, cartDispatch, token);
		} else {
			navigate("/login");
		}
	};

	const { wishlistDispatch } = useWishlist();

	const addToWishlistHandler = (product) => {
		if (token) {
			addToWishlist(product, token, wishlistDispatch);
		} else {
			navigate("/login");
		}
	};

	const searchHandler = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className="product">
			<Filter />
			<main className="product-container">
				<ProductSearch searchHandler={searchHandler} />

				{error && (
					<h1 className="error-msg">
						Oops something went wrong, Please try again later !!!
					</h1>
				)}
				{loader && <span class="loader"></span>}

				<div className="featured-categories text-left">
					{filterBySearchData.map((product) => {
						return (
							<ProductCard
								key={product._id}
								product={product}
								addToCartHandler={addToCartHandler}
								addToWishlistHandler={addToWishlistHandler}
							/>
						);
					})}
				</div>
			</main>
		</div>
	);
};
