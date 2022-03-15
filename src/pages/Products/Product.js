import React from "react";
import "./Product.css";
import { Filter } from "./components/Filter";
import { Link } from "react-router-dom";

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
						<Link to="#">
							<img
								src="https://aipan-store.netlify.app/assets/paintings/sun-painting.jpg"
								alt="paintings"
							/>
						</Link>

						<Link to="/wishlist">
							<i className="far fa-heart"></i>
						</Link>

						<div className="price-container">
							<p className="item-name">Sun Painting</p>
							<div className="flex">
								<span className="currency">Rs 999</span>
								<small className="rating">
									4<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<Link to="/cart">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</Link>
					</div>

					<div className="featured-items">
						<Link to="#">
							<img
								src="https://aipan-store.netlify.app/assets/bags/bag1.jpg"
								alt="bag"
							/>
						</Link>

						<Link to="/wishlist">
							<i className="far fa-heart"></i>
						</Link>

						<div className="price-container ">
							<p className="item-name">Cotton Fabric Bag</p>
							<div className="flex">
								<span className="currency">Rs 760</span>
								<small className="rating">
									2<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<Link to="/cart">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</Link>
					</div>

					<div className="featured-items">
						<Link to="#">
							<img
								src="https://aipan-store.netlify.app/assets//diary/diary2.jpg"
								alt="diary"
							/>
						</Link>

						<Link to="/wishlist">
							<i className="far fa-heart"></i>
						</Link>

						<div className="price-container ">
							<p className="item-name"> Handmade Diary</p>
							<div className="flex">
								<span className="currency">Rs 560</span>
								<small className="rating">
									4<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<Link to="/cart">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</Link>
					</div>

					<div className="featured-items">
						<Link to="#">
							<img
								src="https://aipan-store.netlify.app/assets/coaster/coaster2.jpg"
								alt="coaster"
							/>
						</Link>

						<Link to="/wishlist">
							<i className="far fa-heart"></i>
						</Link>

						<div className="price-container ">
							<p className="item-name">Handcrafted tea coaster</p>
							<div className="flex">
								<span className="currency">Rs 740</span>
								<small className="rating">
									1<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<Link to="/cart">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</Link>
					</div>

					<div className="featured-items">
						<Link to="#">
							<img
								src="https://aipan-store.netlify.app/assets/coaster/coaster1.jpg"
								alt="coaster"
							/>
						</Link>

						<Link to="/wishlist">
							<i className="far fa-heart"></i>
						</Link>

						<div className="price-container ">
							<p className="item-name">Handcrafted tea coaster</p>
							<div className="flex">
								<span className="currency">Rs 890</span>
								<small className="rating">
									3<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<Link to="/cart">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</Link>
					</div>

					<div className="featured-items">
						<Link to="#">
							<img
								src="https://aipan-store.netlify.app/assets/diary/diary3.jpg"
								alt="diary"
							/>
						</Link>

						<Link to="/wishlist">
							<i className="far fa-heart"></i>
						</Link>

						<div className="price-container ">
							<p className="item-name">Handmade Diary</p>
							<div className="flex">
								<span className="currency">Rs 560</span>
								<small className="rating">
									2<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<Link to="/cart">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</Link>
					</div>

					<div className="featured-items">
						<Link to="#">
							<img
								src="https://aipan-store.netlify.app/assets/bags/bag2.jpg"
								alt="bags"
							/>
						</Link>

						<Link to="/wishlist">
							<i className="far fa-heart"></i>
						</Link>

						<div className="price-container ">
							<p className="item-name">Cotton Fabric Bag</p>
							<div className="flex">
								<span className="currency">Rs 760</span>
								<small className="rating">
									4<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<Link to="/cart">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</Link>
					</div>

					<div className="featured-items">
						<Link to="#">
							<img
								src="https://aipan-store.netlify.app/assets/paintings/painting1.jpg"
								alt="paintings"
							/>
						</Link>

						<Link to="/wishlist">
							<i className="far fa-heart"></i>
						</Link>

						<div className="price-container ">
							<p className="item-name">Aipan Painting</p>
							<div className="flex">
								<span className="currency">Rs 2200</span>
								<small className="rating">
									4<i className="fas fa-star"></i>
								</small>
							</div>
						</div>
						<Link to="/cart">
							<button className="btn btn-primary btn-category">
								Add to cart
							</button>
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
};
