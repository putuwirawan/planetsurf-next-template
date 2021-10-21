import "../styles/globals.css";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<ReduxProvider store={store}>
				<CookiesProvider>
				
						<div suppressHydrationWarning>
							<CssBaseline />
							{typeof window === "undefined" ? null : (
								<Component {...pageProps} />
							)}
						</div>
			
				</CookiesProvider>
			</ReduxProvider>
		</React.Fragment>
	);
}

export default MyApp;
