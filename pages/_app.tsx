import React from "react";
import "../css/globals.css";
import AppContextProvider from "@/context/appContext";
import Navigation from "@/components/Navigation";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
	return (
		<AppContextProvider>
			<main>
				<Navigation />
				<Component {...pageProps} />
			</main>
		</AppContextProvider>
	);
}

export default MyApp;
