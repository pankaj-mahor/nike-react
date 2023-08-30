import React from "react";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
	return (
		<footer className="max-container">
			<div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
				<div className="flex flex-col items-start">
					<a href="/">
						<img src={footerLogo} width={150} height={46} className="" />
					</a>

					<p className="sm:max-w-sm mt-6 text-base leading-7 font-montserrat text-white-400">
						Get shoes ready for the new term at your nearest Nike store. Find
						your Perfect size in store, Get Rewards.
					</p>

					<div className="flex items-center gap-5 mt-8 ">
						{socialMedia.map((social) => {
							return (
								<div
									key={social.alt}
									className="w-12 flex justify-center items-center h-12 w-12  bg-white rounded-full"
								>
									<img
										src={social.src}
										alt={social.alt}
										height={24}
										width={24}
									/>
								</div>
							);
						})}
					</div>
				</div>

				<div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
					{footerLinks.map((section) => {
						return (
							<div key={section.title}>
								<h4 className="text-white text-2xl font-montserrat leading-normal font-medium mb-6">
									{section.title}
								</h4>
								<ul>
									{section.links.map((link) => {
										return (
											<li
												key={link.name}
												className=" mt-3 cursor-pointer text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray"
											>
												<a href={link.link}>{link.name}</a>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
				</div>
			</div>

			<div className="flex justify-between max-sm:items-center text-white mt-24 max-sm:flex-col">
				<div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
					<img
						src={copyrightSign}
						alt="Copyright"
						width={20}
						height={20}
						className="rounded-full m-0"
					/>
					<p>Copyright. All Rights Reserved</p>
				</div>
				<p className="font-montserrat cursor-pointer">Terms & Conditions </p>
			</div>
		</footer>
	);
};

export default Footer;
