import "./App.css";
import { Navbar } from "./components/index";
import { Home, Product, Login, Signup, Cart, Wishlist } from "./pages/index";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			{/* <Product /> */}
			{/* <Login /> */}
			{/* <Signup /> */}
			{/* <Cart /> */}
			{/* <Wishlist /> */}
		</div>
	);
}

export default App;
