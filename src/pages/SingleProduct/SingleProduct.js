import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context/index";
import { fetchProducts } from "../../services/fetchProducts";
import { Loader } from "../../components/Loader/Loader";
import { addToCart } from "../Cart/services/addToCart";
import { addToWishlist } from "../Wishlist/services/addToWishlist";
import "./SingleProduct.css";

export const SingleProduct = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loader, setLoader] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [itemInCart, setItemInCart] = useState(false);
	const [itemInWishlist, setItemInWishlist] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();

	const { token } = useAuth();
	const {
		cartState: { cartItems },
		cartDispatch,
	} = useCart();

	const {
		wishlistState: { wishlistItems },
		wishlistDispatch,
	} = useWishlist();

	useEffect(() => {
		fetchProducts(setLoader, setError, setProducts);
	}, []);

	useEffect(() => {
		cartItems.find((item) => item._id === findItem._id)
			? setItemInCart(true)
			: setItemInCart(false);
	}, [cartItems]);

	useEffect(() => {
		wishlistItems.find((item) => item._id === findItem._id)
			? setItemInWishlist(true)
			: setItemInWishlist(false);
	}, [wishlistItems]);

	const findItem = products.find((item) => item._id === id);

	const addToCartHandler = (findItem) => {
		addToCart(findItem, cartDispatch, token, setDisabled);
	};

	const addToWishlistHandler = (findItem) => {
		addToWishlist(findItem, token, wishlistDispatch, setDisabled);
	};

	return (
		<div>
			{findItem ? (
				<div className="horizontal-product-card">
					<img src={findItem.img} alt="horizontal-img" />
					<div className="horizontal-product-details">
						<h3>{findItem.title}</h3>
						<h6>Category : {findItem.categoryName}</h6>
						<h6>Price : Rs {findItem.price}</h6>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut
							velit voluarum quia omnis ducimus temporibus. Harum voluptatum
							soluta repudiandae velit.
						</p>
						<button
							className="btn btn-primary"
							onClick={
								itemInCart
									? () => navigate("/cart")
									: () => addToCartHandler(findItem)
							}
							disabled={disabled}
						>
							{itemInCart ? "Go to cart" : "Add to cart"}
						</button>
						<button
							className="btn btn-primary"
							onClick={
								itemInWishlist
									? () => navigate("/wishlist")
									: () => addToWishlistHandler(findItem)
							}
							disabled={disabled}
						>
							{itemInWishlist ? "Go to wishlist" : "Add to wishlist"}
						</button>
					</div>
				</div>
			) : (
				<Loader />
			)}
		</div>
	);
};
