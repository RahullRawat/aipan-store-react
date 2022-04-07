import "./App.css";
import { Navbar } from "./components/index";
import {
	Home,
	Product,
	Login,
	Signup,
	Cart,
	Wishlist,
	User,
	Error404,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mockman from "mockman-js";
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
				<Route path="/cart" element={<Cart />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/user" element={<User />} />
				<Route path="/404" element={<Error404 />} />
				<Route path="/mockman" element={<Mockman />} />
			</Routes>
		</div>
	);
}

export default App;
