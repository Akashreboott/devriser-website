"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import ArrowLeft from "../../../public/assets/icons/ArrowLeft";
import cn from "@/utils/cn";

import white from "../../../public/assets/images/white520.png";
import { SwiperSlide, Swiper } from "@/components/Swiper";

function Carousel(props) {
	const SwiperRef = useRef(null);
	const { children, ...rest } = props;
	let DATA = [
		{
			title: "User Engagement",
			content:
				"Stand out in the digital landscape with our strong UI/UX design, delivering well-designed websites that build trust, credibility, andbrand loyalty through seamless and enjoyable experiences.",
		},
		{
			title: "User Engagement",
			content:
				"Stand out in the digital landscape with our strong UI/UX design, delivering well-designed websites that build trust, credibility, andbrand loyalty through seamless and enjoyable experiences.",
		},
		{
			title: "User Engagement",
			content:
				"Stand out in the digital landscape with our strong UI/UX design, delivering well-designed websites that build trust, credibility, andbrand loyalty through seamless and enjoyable experiences.",
		},
		{
			title: "User Engagement",
			content:
				"Stand out in the digital landscape with our strong UI/UX design, delivering well-designed websites that build trust, credibility, andbrand loyalty through seamless and enjoyable experiences.",
		},
		{
			title: "User Engagement",
			content:
				"Stand out in the digital landscape with our strong UI/UX design, delivering well-designed websites that build trust, credibility, andbrand loyalty through seamless and enjoyable experiences.",
		},
		{
			title: "User Engagement",
			content:
				"Stand out in the digital landscape with our strong UI/UX design, delivering well-designed websites that build trust, credibility, andbrand loyalty through seamless and enjoyable experiences.",
		},
		{
			title: "User Engagement",
			content:
				"Stand out in the digital landscape with our strong UI/UX design, delivering well-designed websites that build trust, credibility, andbrand loyalty through seamless and enjoyable experiences.",
		},
	];

	useEffect(() => {
		// Register Swiper web component
		register();

		// // Add event listener
		// SwiperRef.current.addEventListener("slidechange", (e) => {
		// 	console.log(e.detail);
		// });

		// // Object with parameters
		// const params = {
		// 	// or pass it in on
		// 	on: {
		// 		slideChange(s) {
		// 			console.log(s);
		// 		},
		// 	},
		// };

		// // Assign it to swiper element
		// Object.assign(SwiperRef.current, params);

		// initialize swiper
		SwiperRef.current.initialize();
	}, []);

	return (
		<div>
			<Swiper
				ref={SwiperRef}
				navigation
				slidesPerView={3}
				spaceBetween={10}
				// loop={true}
				breakpoints={{
					620: { slidesPerView: 2, spaceBetween: 20 },
					1012: { slidesPerView: 3, spaceBetween: 20 },
					1280: { slidesPerView: 4, spaceBetween: 20 },
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
				}}
				className='scroll-bar-hide mt-[40px] flex h-[calc(400px+50px)] w-full max-w-full  snap-x items-center  justify-start  gap-16  [--card-width:320px] md:[--card-width:400px]'>
				{/* className='scroll-bar-hide max-w-ful mt-[40px] grid h-[calc(400px+20px)] w-full  snap-x grid-cols-[repeat(7,calc(var(--card-width)-64px))] items-center  justify-start  gap-16 overflow-x-auto overflow-y-visible [--card-width:320px] md:[--card-width:400px] [&>*]:mx-auto   [&>*]:snap-center'> */}
				{[...DATA, ...DATA].map(({ content, title }, index) => (
					<SwiperSlide key={title}>
						<motion.div
							layout
							key={title}
							className={cn(
								"gradient-border bg-noise relative  !flex h-[332px] w-full max-w-[320px]  flex-col items-center justify-center gap-10 overflow-hidden rounded px-4 transition-transform lg:max-w-[400px]",
								index === 0 && "ml-4",
								"group"
							)}>
							<Image src={white} className='h-[120px] max-w-[200px] rounded-md' alt='' />
							<p className='max-w-[90%] text-xl leading-10 lg:text-[26px]'>{title}</p>
							<div className=' back-card bg-noise250 absolute inset-0 hidden h-full w-full rounded  bg-banner-bg  '>
								<p className='mx-auto mt-10 max-w-[90%] text-white'>{content}</p>
							</div>
						</motion.div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='ml-8 flex gap-2 self-start'>
				<button onClick={() => () => SwiperRef.current.swiper.slideNext()}>
					<ArrowLeft className='w-10 transition-[colors,opacity] duration-75 hover:text-banner-bg active:opacity-60' />
				</button>
				<button onClick={() => () => SwiperRef.current.swiper.slideNext()}>
					<ArrowLeft className='w-10 rotate-180 transition-[colors,opacity] duration-75 hover:text-banner-bg active:opacity-60' />
				</button>
			</div>
		</div>
	);
}

export default Carousel;
