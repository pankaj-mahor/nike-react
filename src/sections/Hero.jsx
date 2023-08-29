import React from "react";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
	return (
		<section
			id="hero"
			className="w-full flex xl:flex-row flex-col justify-center
  
  min-h-screen gap-10 max-container"
		>
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">
				<p className="text-xl font-montserrat text-coral-red">
					Our summer collection
				</p>

				<h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
						The New Arrival
					</span>
					<br />
					<span className="text-coral-red inline-block mt-3 ">Nike </span> Shoes
				</h1>

				<p className="leading-8 text-lg mt-6 mb-14 sm:max-w-sm font-montserrat text-slate-gray ">
					Discover styles nike arrivals, quality comfort, and innovation for
					your active life.
				</p>
				<Button label="Shop Now" iconURL={arrowRight} />

				<div className="flex justify-starts item-center gap-16 flex-wrap w-full mt-20">
					{statistics.map((stat) => {
						return (
							<div key={stat.label}>
								<p className="text-4xl font-palanquin font-bold ">
									{stat.value}
								</p>
								<p className="leading-7 text-slate-gray font-montserrat">
									{stat.label}
								</p>
							</div>
						);
					})}
				</div>
			</div>

			<div className="relative flex-1 flex items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
				<img
					src={bigShoeImg}
					alt="Big Shoe 1 Collection"
					width={610}
					height={500}
					className="relative object-contain z-10"
				/>

				<div
					className="flex sm:gap-6 gap-4 absolute -bottom-[5%]
				sm:left-[10%]  max-sm:px-6
				"
				>
					{shoes.map((shoe) => {
						return (
							<div key={shoe}>
								<ShoeCard
									imgURL={shoe}
									changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
									bigShoeImg={bigShoeImg}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Hero;
