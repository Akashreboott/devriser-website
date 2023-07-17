"use client";
import Image from "next/image";
import wordpress from "./../../public/assets/images/wordpress.png";
import { useState } from "react";

interface detail {
	name: string;
	details: string;
}
const LineUpSection = () => {
	let DETAILS: detail[] = [
		{
			name: "Wordpress",
			details: `WordPress is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of
					WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use
					responsive designs to enhance your user engagement and accessibility across various devices`,
		},
		{
			name: "Wix",
			details: `Wix is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of
					WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use
					responsive designs to enhance your user engagement and accessibility across various devices`,
		},
		{
			name: "Drupal",
			details: `Drupal is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of
					WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use
					responsive designs to enhance your user engagement and accessibility across various devices`,
		},
		{
			name: "Webflow",
			details: `Webflow is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of
					WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use
					responsive designs to enhance your user engagement and accessibility across various devices`,
		},
		{
			name: "Shopify",
			details: `Shopify is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of
					WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use
					responsive designs to enhance your user engagement and accessibility across various devices`,
		},
	];

	let [active, setActive] = useState("Wordpress");

	function setActiveButton(name: string) {
		setActive(name);
	}
	return (
		<section className='text-center py-16 max-w-[90%] mx-auto'>
			<h2 className='primary-heading mb-[65px] '>Meet Our CMS Lineups</h2>
			<nav className='flex lg:gap-3 md:gap-[86px] gap-[43px] lg:justify-center justify-start [&>*]:grow mx-auto max-lg:overflow-x-scroll scroll-bar-hide'>
				{DETAILS.map((detail) => (
					<button
						onClick={() => setActive(detail.name)}
						key={detail.name}
						className={`lg:p-12 [--gradient-border-color:var(--light-gradient-border2)]  ${
							detail.name === active ? "lg:pink-gradient max-lg:before:bg-pink-500" : "dark:lg:bg-noise250 dark:lg:btn-white-gradient "
						} active:scale-[0.99] hover:scale-[0.98]  lg:gradient-border  lg:text-2xl text-[16px]/[19.39px] max-lg:before:w-full relative max-lg:before:h-0.5 max-lg:before:absolute before:top-10  max-lg:min-h-[3rem]  max-lg:text-center  rounded-lg`}>
						{detail.name}
					</button>
				))}
			</nav>

			<div className='grid lg:grid-cols-[auto_1fr] grid-cols-1 mt-[77px] gap-[45px] dark:bg-light bg-dark  lg:py-[100px] py-[42px] lg:px-[54px] px-[30px] rounded-lg'>
				<Image src={wordpress} className='max-lg:mx-auto' alt='' />
				<p className='dark:text-primary-dark text-light  text-left para-text-xl lg:mr-16  '>
					{DETAILS.map((detail) => (detail.name === active ? detail.details : ""))}
				</p>
			</div>
		</section>
	);
};

export default LineUpSection;
