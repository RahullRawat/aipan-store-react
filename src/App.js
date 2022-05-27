import "./App.css";
import { Navbar, RequireAuth } from "./components/index";
import {
	Home,
	Product,
	Login,
	Signup,
	Cart,
	Wishlist,
	User,
	Error404,
	SingleProduct,
	Checkout,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
	return (
		<div>
			<ToastContainer
				position="bottom-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				theme="colored"
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/product/:id" element={<SingleProduct />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route
					path="/cart"
					element={
						<RequireAuth>
							<Cart />
						</RequireAuth>
					}
				/>
				<Route
					path="/wishlist"
					element={
						<RequireAuth>
							<Wishlist />
						</RequireAuth>
					}
				/>
				<Route path="/user" element={<User />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</div>
	);
}

export default App;
