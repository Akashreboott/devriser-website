"use client";
import { useState } from "react";
import cn from "@/utils/cn";
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

import ChevronIcon from "../../../public/assets/icons/Chevron";
import DarkLightImage from "@/components/DarkLightImage";
import useEmblaCarousel from "embla-carousel-react";
import useMatchesMedia from "@/hooks/useMatchesMedia";

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
	const [emblaRef, emblaApi] = useEmblaCarousel();
	let [active, setActive] = useState(DETAILS[0]);
	let matches1014 = useMatchesMedia("min-width:1014px");
	const [buttonClicked, setButtonClicked] = useState(0);

	function moveRight() {
		setButtonClicked((prev) => {
			let number = prev === DETAILS.length - 1 ? prev : prev + 1;
			setActive(DETAILS[number]);
			return number;
		});
	}
	function moveLeft() {
		setButtonClicked((prev) => {
			let number = prev === 0 ? prev : prev - 1;
			setActive(DETAILS[number]);

			return number;
		});
	}

	return (
		<section className='mx-auto mb-16 grid w-full max-w-[90%] items-center justify-center justify-items-center overflow-x-hidden py-16 text-center'>
			<h2 className='primary-heading mb-[65px] '>Meet Our CMS Lineups</h2>
			<div className='relative mx-auto flex h-[calc(100%+1.5rem)] w-full'>
				<div
					ref={!matches1014 ? emblaRef : null}
					className='scroll-bar-hide mx-auto flex  h-full w-[60%] justify-start  gap-[43px] overflow-hidden md:gap-[86px] lg:justify-center lg:gap-3 '>
					<div data-swiper-slide='cms-lineups' className='flex w-full grid-cols-5 gap-2.5 lg:grid'>
						{DETAILS.map((detail) => (
							<button
								key={detail.name}
								onClick={() => setActive(detail)}
								className={cn(
									"relative isolate  rounded-lg  text-[16px]/[19.39px] transition-colors active:scale-[0.99]",
									"max-lg:min-h-[3rem] max-lg:shrink-0 max-lg:grow-0 max-lg:basis-full   max-lg:text-center   max-lg:before:absolute max-lg:before:top-10 max-lg:before:h-0.5 max-lg:before:w-full max-[320px]:w-fit",
									"lg:grow lg:border lg:border-white/20  lg:bg-[#eee] lg:p-1 lg:text-xl lg:backdrop-blur lg:dark:bg-gray-30",
									detail.name === active.name && "lg:pink-gradient max-lg:rounded-none max-lg:border-b-2 max-lg:border-b-pink-500"
								)}>
								{detail.name}
							</button>
						))}
					</div>
				</div>

				<button
					disabled={buttonClicked === 0}
					onClick={() => {
						moveLeft();
						emblaApi?.scrollPrev();
					}}
					className={cn(
						"absolute left-4 top-1/2 z-10 flex -translate-y-[calc(50%-(1.5rem/2))] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-light p-2 transition-transform active:scale-[0.97] active:opacity-60 dark:bg-dark md:hidden"
					)}>
					<ChevronIcon className='pointer-events-none h-5 w-5 -translate-x-0.5 rotate-180 text-banner-bg' />
				</button>
				<button
					disabled={buttonClicked === DETAILS.length - 1}
					onClick={() => {
						moveRight();
						emblaApi?.scrollNext();
					}}
					className={cn(
						"absolute right-4 top-1/2 z-10 flex -translate-y-[calc(50%-(1.5rem/2))] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-light p-2 transition-transform active:scale-[0.97] active:opacity-60 dark:bg-dark md:hidden"
					)}>
					<ChevronIcon className=' pointer-events-none h-5 w-5 translate-x-0.5 text-banner-bg' />
				</button>
			</div>
			<div
				className='mt-[77px] grid grid-cols-1 justify-center justify-items-center gap-5 rounded-lg bg-[#eee] px-[30px]  py-5 dark:bg-gray-30 
						max-md:w-[80%]
						md:gap-10 md:py-[42px] lg:px-[54px] lg:py-[30px]'>
				<DarkLightImage
					DarkVisibleImage={active.darkImage}
					LightVisibleImage={active.lightImage}
					alt={active.name}
					className='h-[65px] w-[65px] max-lg:mx-auto'
				/>
				<p className='text-center text-[15px]/[30px] font-350 dark:text-white  md:text-[16px]/[35px] lg:mr-16 '>{active.details}</p>
			</div>
		</section>
	);
};

export default LineUpSection;
