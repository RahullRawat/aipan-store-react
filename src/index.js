import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
	AuthProvider,
	CartProvider,
	FilterProvider,
	WishlistProvider,
} from "./context/index";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<WishlistProvider>
					<CartProvider>
						<FilterProvider>
							<App />
						</FilterProvider>
					</CartProvider>
				</WishlistProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
