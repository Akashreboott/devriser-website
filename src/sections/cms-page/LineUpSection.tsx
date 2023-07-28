"use client";
import Image from "next/image";
import wordpress from "./../../../public/assets/images/wordpress.png";
import { useState } from "react";

interface detail {
	name: string;
	details: string;
}
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

const LineUpSection = () => {
	let [active, setActive] = useState("Wordpress");

	function setActiveButton(name: string) {
		setActive(name);
	}
	return (
		<section className='grid max-w-[90%] items-center overflow-x-hidden py-16 text-center'>
			<h2 className='primary-heading mb-[65px] '>Meet Our CMS Lineups</h2>
			<nav className='scroll-bar-hide  flex justify-start gap-[43px] max-lg:overflow-x-scroll md:gap-[86px] lg:justify-center lg:gap-3 [&>*]:grow'>
				{DETAILS.map(({ name }) => (
					<button
						onClick={() => setActive(name)}
						key={name}
						className={`[--gradient-border-color:var(--light-gradient-border2)] lg:p-12  ${
							name === active ? "lg:pink-gradient max-lg:before:bg-pink-500" : "dark:lg:bg-noise250 dark:lg:btn-white-gradient "
						} lg:gradient-border   relative  rounded-lg text-[16px]/[19.39px] active:scale-[0.99] max-lg:min-h-[3rem] max-lg:text-center max-lg:before:absolute max-lg:before:top-10  max-lg:before:h-0.5  max-lg:before:w-full  lg:text-2xl`}>
						{name}
					</button>
				))}
			</nav>

			<div className='mt-[77px] grid grid-cols-1 gap-[45px] rounded-lg bg-dark px-[30px]  py-[42px] dark:bg-light lg:grid-cols-[auto_1fr] lg:px-[54px] lg:py-[100px]'>
				<Image src={wordpress} className='max-lg:mx-auto' alt='' />
				<p className='para-text-xl text-left  text-light dark:text-primary-dark lg:mr-16  '>
					{DETAILS.map((detail) => (detail.name === active ? detail.details : ""))}
				</p>
			</div>
		</section>
	);
};

export default LineUpSection;
