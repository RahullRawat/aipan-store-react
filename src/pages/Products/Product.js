import React from "react";
import "./Product.css";
import { Filter } from "./components/Filter";

export const Product = () => {
	return (
		<div className="product">
			<Filter />
			<main className="product-container">
				<div className="product-search">
					<input type="text" placeholder="Enter Product........" />
					<button className=" btn-search">Search</button>
				</div>

				<div className="show-products">
					Showing All Products <span>(Showing 20 products)</span>
				</div>

				<div className="featured-categories text-left">
					<div className="featured-items">
						<a href="#">
							<img
								src="https://aipan-store.netlify.app/assets/paintings/sun-painting.jpg"
								alt="paintings"
							/>
						</a>

						<a href="../wishlist/wishlist.html">
							<i className="far fa-heart"></i>
						</a>

						<div className="price-container">
							<p className="item-name">Sun Painting</p>
							<div className="flex">
								<span className="currency">Rs 999</span>
								<small className="rating">
									4<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<a href="../cart/cart.html">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</a>
					</div>

					<div className="featured-items">
						<a href="#">
							<img
								src="https://aipan-store.netlify.app/assets/bags/bag1.jpg"
								alt="bag"
							/>
						</a>

						<a href="../wishlist/wishlist.html">
							<i className="far fa-heart"></i>
						</a>

						<div className="price-container ">
							<p className="item-name">Cotton Fabric Bag</p>
							<div className="flex">
								<span className="currency">Rs 760</span>
								<small className="rating">
									2<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<a href="../cart/cart.html">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</a>
					</div>

					<div className="featured-items">
						<a href="#">
							<img
								src="https://aipan-store.netlify.app/assets//diary/diary2.jpg"
								alt="diary"
							/>
						</a>

						<a href="../wishlist/wishlist.html">
							<i className="far fa-heart"></i>
						</a>

						<div className="price-container ">
							<p className="item-name"> Handmade Diary</p>
							<div className="flex">
								<span className="currency">Rs 560</span>
								<small className="rating">
									4<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<a href="../cart/cart.html">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</a>
					</div>

					<div className="featured-items">
						<a href="#">
							<img
								src="https://aipan-store.netlify.app/assets/coaster/coaster2.jpg"
								alt="coaster"
							/>
						</a>

						<a href="../wishlist/wishlist.html">
							<i className="far fa-heart"></i>
						</a>

						<div className="price-container ">
							<p className="item-name">Handcrafted tea coaster</p>
							<div className="flex">
								<span className="currency">Rs 740</span>
								<small className="rating">
									1<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<a href="../cart/cart.html">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</a>
					</div>

					<div className="featured-items">
						<a href="#">
							<img
								src="https://aipan-store.netlify.app/assets/coaster/coaster1.jpg"
								alt="coaster"
							/>
						</a>

						<a href="../wishlist/wishlist.html">
							<i className="far fa-heart"></i>
						</a>

						<div className="price-container ">
							<p className="item-name">Handcrafted tea coaster</p>
							<div className="flex">
								<span className="currency">Rs 890</span>
								<small className="rating">
									3<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<a href="../cart/cart.html">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</a>
					</div>

					<div className="featured-items">
						<a href="#">
							<img
								src="https://aipan-store.netlify.app/assets/diary/diary3.jpg"
								alt="diary"
							/>
						</a>

						<a href="../wishlist/wishlist.html">
							<i className="far fa-heart"></i>
						</a>

						<div className="price-container ">
							<p className="item-name">Handmade Diary</p>
							<div className="flex">
								<span className="currency">Rs 560</span>
								<small className="rating">
									2<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<a href="../cart/cart.html">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</a>
					</div>

					<div className="featured-items">
						<a href="#">
							<img
								src="https://aipan-store.netlify.app/assets/bags/bag2.jpg"
								alt="bags"
							/>
						</a>

						<a href="../wishlist/wishlist.html">
							<i className="far fa-heart"></i>
						</a>

						<div className="price-container ">
							<p className="item-name">Cotton Fabric Bag</p>
							<div className="flex">
								<span className="currency">Rs 760</span>
								<small className="rating">
									4<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<a href="../cart/cart.html">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</a>
					</div>

					<div className="featured-items">
						<a href="#">
							<img
								src="https://aipan-store.netlify.app/assets/paintings/painting1.jpg"
								alt="paintings"
							/>
						</a>

						<a href="../wishlist/wishlist.html">
							<i className="far fa-heart"></i>
						</a>

						<div className="price-container ">
							<p className="item-name">Aipan Painting</p>
							<div className="flex">
								<span className="currency">Rs 2200</span>
								<small className="rating">
									4<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<a href="../cart/cart.html">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</a>
					</div>
				</div>
			</main>
		</div>
	);
};
