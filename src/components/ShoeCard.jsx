import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
	const handleClick = () => {
		if (bigShoeImg !== imgURL.bigShoe) {
			changeBigShoeImage(imgURL.bigShoe);
		}
	};
	return (
		<div
			className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
				bigShoeImg === imgURL ? "border-coral-red" : "border-transparent"
			}`}
			onClick={handleClick}
		>
			<div className="flex items-center justify-center bg-card bg-cover bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
				<img
					src={imgURL.thumbnail}
					alt="Shoe collection"
					width={127}
					height={103}
					className="object-contain"
				/>
			</div>
		</div>
	);
};

export default ShoeCard;
