// pages/_app.tsx

import React from "react";
import "../css/globals.css"; // Import your global CSS file here

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
	// You can add any application-wide logic here

	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
