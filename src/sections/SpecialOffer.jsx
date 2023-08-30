import React from "react";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
	return (
		<section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
			<div className="flex-1">
				<img
					src={offer}
					alt="Shoe collection"
					width={773}
					height={687}
					className="object-contain w-full"
				/>
			</div>

			<div className="flex flex-1 flex-col">
				<h1 className=" font-palanquin text-4xl  capitalize  font-bold lg:max-w-lg">
					<span className="text-coral-red  "> Special </span> Offer
				</h1>

				<p className="mt-4 lg:max-w-lg info-text">
					Ensuring premium comfort and style, our meticulous crafted footwear is
					designed to elevate your Experience, providing you unmatched quality,
					innovation, and a touch of elegance.
				</p>

				<p className="mt-6 lg:max-w-lg info-text">
					Navigate a realm of possibilities designed to fulfill your unique
					desires, surpassing the loftiest expectations. Your journey with us is
					nothing short of exceptional.
				</p>
				<div className="mt-11 flex flex-wrap gap-4  ">
					<Button label="Shop Now" iconURL={arrowRight} />
					<Button
						label="Learn more"
						backgroundColor="bg-white"
						borderColor="border-slate-gray"
						textColor="text-slate-gray"
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;
