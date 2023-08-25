import React from "react";

const Hero = () => {
	return (
		<section
			id="hero"
			className="w-full flex xl:flex-row flex-col justify-center
  
  min-h-screen gap-10 max-container"
		>
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">
				<p className="">Our summer collection</p>

				<h1>
					<span>The New Arrival</span>
					<br />
					<span>Nike </span>
					Shoes
				</h1>

				<p>
					Discover styles nike arrivals, quality comfort, and innovation for
					your active life.
				</p>
			</div>
		</section>
	);
};

export default Hero;
