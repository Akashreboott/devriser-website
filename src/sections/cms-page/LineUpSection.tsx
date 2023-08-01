"use client";
import Image from "next/image";
import wordpress from "./../../../public/assets/images/wordpress.png";
import { useState } from "react";
import cn from "@/utils/cn";
import { motion } from "framer-motion";
import ShopifyLight from "../../../public/assets/icons/shopify-svgrepo-light.svg";
import ShopifyDark from "../../../public/assets/icons/shopify-svgrepo-com.svg";

import WebFlowLight from "../../../public/assets/icons/webflow-svgrepo-com-light.svg";
import WebFlowDark from "../../../public/assets/icons/webflow-svgrepo-com.svg";

import WixLight from "../../../public/assets/icons/wix-svgrepo-com-light.svg";
import WixDark from "../../../public/assets/icons/wix-svgrepo-com.svg";

import DrupalLight from "../../../public/assets/icons/drupal-svgrepo-com-light.svg";
import DrupalDark from "../../../public/assets/icons/drupal-svgrepo-com.svg";

import WordpressLight from "../../../public/assets/icons/wordpress-logo-svgrepo-com-light.svg";
import WordpressDark from "../../../public/assets/icons/wordpress-logo-svgrepo-com.svg";

interface detail {
	name: string;
	details: string;
	lightImage: any;
	darkImage: any;
}
let DETAILS: detail[] = [
	{
		name: "Wordpress",
		details: `WordPress is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of
				WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use
				responsive designs to enhance your user engagement and accessibility across various devices`,
		darkImage: WordpressLight,
		lightImage: WordpressDark,
	},
	{
		name: "Wix",
		details: `Wix is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of
				WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use
				responsive designs to enhance your user engagement and accessibility across various devices`,
		darkImage: WixLight,
		lightImage: WixDark,
	},
	{
		name: "Drupal",
		details: `Drupal is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of
				WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use
				responsive designs to enhance your user engagement and accessibility across various devices`,
		darkImage: DrupalLight,
		lightImage: DrupalDark,
	},
	{
		name: "Webflow",
		details: `Webflow is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of
				WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use
				responsive designs to enhance your user engagement and accessibility across various devices`,
		lightImage: WebFlowDark,
		darkImage: WebFlowLight,
	},
	{
		name: "Shopify",
		details: `Shopify is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of
				WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use
				responsive designs to enhance your user engagement and accessibility across various devices`,
		lightImage: ShopifyDark,
		darkImage: ShopifyLight,
	},
];

const LineUpSection = () => {
	let [active, setActive] = useState("Wordpress");

	function setActiveButton(name: string) {
		setActive(name);
	}
	return (
		<section className='mb-16 grid max-w-[90%] items-center justify-items-center overflow-x-hidden py-16 text-center'>
			<h2 className='primary-heading mb-[65px] '>Meet Our CMS Lineups</h2>
			<nav
				style={{ gridTemplateColumns: `repeat(${DETAILS.length},1fr)` }}
				className='scroll-bar-hide grid w-full max-w-[80%]  justify-start gap-[43px] max-lg:overflow-x-scroll md:gap-[86px] lg:justify-center lg:gap-3 [&>*]:grow'>
				{DETAILS.map(({ name }) => (
					<button
						onClick={() => setActive(name)}
						key={name}
						className={cn(
							"relative isolate rounded-lg bg-[#eee] text-[16px]/[19.39px]   backdrop-blur   transition-colors active:scale-[0.99] dark:bg-gray-30 max-lg:min-h-[3rem] max-lg:text-center max-lg:before:absolute max-lg:before:top-10 max-lg:before:h-0.5  max-lg:before:w-full lg:border lg:border-white/20 lg:p-5  lg:text-xl",
							name === active && "lg:pink-gradient max-lg:before:bg-pink-500"
						)}>
						{name}
						{/* {name == active && (
							<motion.div
								layoutId='lineup-bg'
								transition={{ duration: 1 }}
								className='absolute inset-0 -z-10 h-full w-full rounded-lg bg-banner-bg mix-blend-exclusion'></motion.div>
						)} */}
					</button>
				))}
			</nav>

			{DETAILS.map((detail) => {
				if (detail.name === active) {
					return (
						<div
							key={detail.name}
							className='mt-[77px] grid grid-cols-1 justify-center justify-items-center gap-[45px] rounded-lg  bg-[#eee] px-[30px] py-[42px] dark:bg-gray-30 lg:px-[54px] lg:py-[30px]'>
							<Image src={detail.darkImage} data-hide-in-light='true' className='h-[65px] w-[65px] max-lg:mx-auto' alt={detail.name} />
							<Image src={detail.lightImage} data-hide-in-dark='true' className='h-[65px] w-[65px] max-lg:mx-auto' alt={detail.name} />
							<p className='text-center text-[18px]/[35px]  dark:text-white lg:mr-16 '>{detail.details}</p>
						</div>
					);
				}
			})}
		</section>
	);
};

export default LineUpSection;
