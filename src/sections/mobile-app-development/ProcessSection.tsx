"use client";

import SectionHeading from "@/components/SectionHeading";
import { PROCESS_DETAILS } from "@/utils/mobile-app-data";
import Placeholder from "../../../public/assets/images/placeholder.png";
import React, { useRef, useState } from "react";
import Image from "next/image";
import cn from "@/utils/cn";
import DarkLightImage from "@/components/DarkLightImage";

import { AnimatePresence, motion } from "framer-motion";
import { opacityAnimVariants } from "@/utils/FramerVariants";
import { Swiper, SwiperSlide } from "@/components/Swiper";
import ChevronIcon from "../../../public/assets/icons/Chevron";
PROCESS_DETAILS;
const ProcessSection = () => {
	const [selectedProcess, setSelectedProcess] = useState<string>(PROCESS_DETAILS[0].heading);
	let variants = opacityAnimVariants();
	let SwiperRef = useRef<any>(null);

	return (
		<AnimatePresence>
			<SectionHeading title='Our Process' gap='50px' className='my-32'>
				<div className=' grid w-full max-w-[90%] grid-cols-1 justify-center justify-items-center gap-8 md:grid-cols-2  md:gap-12'>
					{/* MOBILE VERSION */}
					<div className='relative h-full w-full md:hidden'>
						{/* 
					// @ts-ignore */}
						<Swiper
							// navigation
							ref={SwiperRef}
							slidesPerView={5}
							loop={true}
							breakpoints={{
								180: {
									slidesPerView: 1,
									spaceBetween: 20,
								},
								620: {
									slidesPerView: 1,
									spaceBetween: 20,
								},
							}}
							className=' overflow-x-scroll] relative flex h-[calc(100%+1.5rem)] w-[calc(100%-4rem)]  items-center gap-2 [--swiper-navigation-size:25px]  md:hidden'>
							{PROCESS_DETAILS.map(({ heading }) => (
								<SwiperSlide key={heading} data-swiper-slide='mobile-dev'>
									<button
										onClick={() => {
											setSelectedProcess(heading);
										}}
										className={cn(
											"shrink-0 rounded border border-dark/10 bg-gray/10 p-2.5 dark:border-white/10 dark:bg-dark-gray/10 max-md:w-[80%]  md:p-3 lg:p-4 "
											// selectedProcess === heading && "bg-banner-bg dark:bg-banner-bg"
										)}>
										<span
											className={cn(
												"max-w-[90%] font-medium text-dark dark:text-white md:text-[12px] lg:text-[14px]/[20px]",
												selectedProcess === heading && "clip gradient-bright"
											)}>
											{heading}
										</span>
									</button>
								</SwiperSlide>
							))}
						</Swiper>
						<div
							onClick={() => SwiperRef.current.swiper.slidePrev()}
							className={cn(
								"absolute -left-0 top-1/2 z-10 flex -translate-y-[calc(50%-(1.5rem/2))] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-light p-2 transition-transform active:scale-[0.97] active:opacity-60 dark:bg-dark md:hidden"
								// swiperStart && "opacity-40"
							)}>
							<ChevronIcon className='h-5 w-5 -translate-x-0.5 rotate-180 text-banner-bg' />
						</div>
						<div
							onClick={() => SwiperRef.current.swiper.slideNext()}
							className={cn(
								"absolute right-0 top-1/2 z-10 flex -translate-y-[calc(50%-(1.5rem/2))] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-light p-2 transition-transform active:scale-[0.97] active:opacity-60 dark:bg-dark md:hidden"
								// swiperEnd && "opacity-40"
							)}>
							<ChevronIcon className=' h-5 w-5 translate-x-0.5 text-banner-bg' />
						</div>
					</div>
					{/* DESKTOP VERSION */}
					<div className='grid grid-cols-[repeat(9,max-content)] gap-2 [--box-width:210px]  max-md:hidden  md:grid-cols-[repeat(3,minmax(auto,var(--box-width)))] '>
						{PROCESS_DETAILS.slice(0, 9).map(({ heading }) => (
							<button
								onClick={() => setSelectedProcess(heading)}
								key={heading}
								className={cn(
									"flex flex-col items-center justify-start gap-3 rounded border border-dark/10 bg-gray/10 dark:border-white/10 dark:bg-dark-gray/10  md:p-3 lg:p-4 ",
									selectedProcess === heading && "bg-banner-bg dark:bg-banner-bg"
								)}>
								<DarkLightImage
									DarkVisibleImage={Placeholder}
									LightVisibleImage={Placeholder}
									className='max-md:hidden md:h-10 md:w-16 lg:h-14 lg:w-20'
									alt=''
								/>
								<span
									className={cn(
										"max-w-[90%] font-medium text-dark dark:text-white md:text-[12px] lg:text-[14px]/[20px]"
										// selectedProcess === heading && "clip gradient-tint"
									)}>
									{heading}
								</span>
							</button>
						))}
					</div>
					<motion.div
						initial='hide'
						animate='visible'
						exit='hide'
						transition={{ duration: 1 }}
						variants={variants}
						key={selectedProcess}
						className='flex flex-col items-center justify-center gap-10 border border-dark/30 p-4 dark:border-white/10 lg:p-6'>
						<div className='secondary-heading'>{selectedProcess}</div>
						<p className='font-350 leading-7'>{PROCESS_DETAILS.find(({ heading }) => heading === selectedProcess)?.description}</p>
					</motion.div>
				</div>
			</SectionHeading>
		</AnimatePresence>
	);
};

export default ProcessSection;
