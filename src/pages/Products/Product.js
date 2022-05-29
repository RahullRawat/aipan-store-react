import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Product.css";
import { fetchProducts } from "../../services/fetchProducts";
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
import { useAddress } from "../../context/AddressContext";
import { addToCart } from "../../pages/Cart/services/addToCart";
import { addToWishlist } from "../Wishlist/services/addToWishlist";
import { getAddress } from "../../services/getAddress";

export const Product = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loader, setLoader] = useState(false);
	const [search, setSearch] = useState("");
	const [disabled, setDisabled] = useState(false);

	const { addressDispatch } = useAddress();
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
		fetchProducts(setLoader, setError, setProducts);
	}, []);

	useEffect(() => {
		getAddress(token, addressDispatch);
	}, []);

	useEffect(() => {
		document.title = "Aipan Store | Products";
	}, []);

	const { token } = useAuth();
	const navigate = useNavigate();
	const { cartDispatch } = useCart();

	const addToCartHandler = (product) => {
		if (token) {
			addToCart(product, cartDispatch, token, setDisabled);
		} else {
			navigate("/login");
		}
	};

	const { wishlistDispatch } = useWishlist();

	const addToWishlistHandler = (product) => {
		if (token) {
			addToWishlist(product, token, wishlistDispatch, setDisabled);
		} else {
			navigate("/login");
		}
	};

	const searchHandler = (value) => {
		setSearch(value);
	};

	const debounce = (fn) => {
		let timerId;
		return function () {
			let context = this;
			clearTimeout(timerId);
			timerId = setTimeout(() => {
				fn.apply(context, arguments);
			}, 500);
		};
	};

	const optimizedFunc = useCallback(debounce(searchHandler), []);

	return (
		<div className="product">
			<Filter />
			<main className="product-container">
				<ProductSearch
					searchHandler={searchHandler}
					optimizedFunc={optimizedFunc}
				/>
				<div className="md-text font-color">
					Showing {filterBySearchData.length} products...
				</div>
				{error && (
					<h1 className="error-msg">
						Oops something went wrong, Please try again later !!!
					</h1>
				)}
				{loader && <span class="loader"></span>}

				<div className="featured-categories text-left">
					{filterBySearchData.length === 0 ? (
						<h1 className="mt-4">No Products found</h1>
					) : (
						filterBySearchData.map((product) => {
							return (
								<ProductCard
									key={product._id}
									product={product}
									addToCartHandler={addToCartHandler}
									addToWishlistHandler={addToWishlistHandler}
									disabled={disabled}
									setDisabled={setDisabled}
								/>
							);
						})
					)}
				</div>
			</main>
		</div>
	);
};
