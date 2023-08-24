import { useState } from "react";

import "./App.css";
import CustomerReview from "./sections/CustomerReview";

function App() {
	return (
		<main className="relative">
			nav
			<section className="xl:padding-1 wide:padding-r padding-b">hero</section>
			<section className="padding   ">popular product</section>
			<section className="padding   ">super quality</section>
			<section className="padding-x py-10  ">services</section>
			<section className="padding   ">special offer</section>
			<section className="padding  bg-pale-blue ">
				<CustomerReview />
			</section>
			<section className="padding-x sm:py-32 py-16 w-full  ">subscribe</section>
			<section className="padding  bg-black padding-x padding-t pb-8 ">
				footers
			</section>
		</main>
	);
}

export default App;
