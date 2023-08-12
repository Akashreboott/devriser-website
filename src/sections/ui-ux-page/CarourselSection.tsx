"use client";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import white from "../../../public/assets/images/white520.png";
import ArrowLeft from "../../../public/assets/icons/ArrowLeft";
import cn from "@/utils/cn";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "@/components/Swiper";
import { m } from "framer-motion";
import { BENEFITS } from "@/utils/ui-ux-data";

const CarourselSection = () => {
	let SwiperRef = useRef<any>(null);

	let activeClasses = "overflow-hidden [&>div]:!block scale-[1.15] ";
	return (
		<SectionHeading
			title='Embrace The Benefits Of UI UX Design Services'
			gradientText='Benefits'
			description='Witness the power of exceptional UI/UX services with our expert team of designers.'
			gap='40px'
			className='max-w-[95%] lg:max-w-[80%] xl:max-w-[60%]'>
			{/* 
			// @ts-ignore */}
			<Swiper
				id='ui-ux-carousel'
				ref={SwiperRef}
				slidesPerView={1}
				spaceBetween={10}
				loop={true}
				breakpoints={{
					// 100: { slidesPerView: 2, spaceBetween: 20 },
					768: { slidesPerView: 3, spaceBetween: 20 },
				}}
				className='scroll-bar-hide mt-[40px] flex h-[calc(400px+50px)] w-full max-w-full snap-x  items-center justify-start  gap-16  [--card-width:320px]  max-md:px-3 md:[--card-width:400px]'>
				{/* className='scroll-bar-hide max-w-ful mt-[40px] grid h-[calc(400px+20px)] w-full  snap-x grid-cols-[repeat(7,calc(var(--card-width)-64px))] items-center  justify-start  gap-16 overflow-x-auto overflow-y-visible [--card-width:320px] md:[--card-width:400px] [&>*]:mx-auto   [&>*]:snap-center'> */}
				{BENEFITS.map(({ description, title, image }, index) => (
					<SwiperSlide key={title} data-swiper-slide='ui-ux-carousel'>
						<m.div
							layout
							key={title}
							className={cn(
								"gradient-border bg-noise relative !flex  h-[332px] w-full max-w-[320px] flex-col  items-center justify-center gap-10 overflow-hidden rounded px-4 transition-transform max-md:mx-auto lg:max-w-[400px]",
								index === 0 && "ml-4",
								"group"
							)}>
							<Image src={image} className='h-[120px] max-w-[200px] rounded-md' alt='' />
							<p className='max-w-[90%] text-xl leading-10 lg:text-[26px]'>{title}</p>
							<div className='back-card  bg-noise250 absolute inset-0 hidden h-full w-full origin-center rounded  bg-banner-bg  '>
								<p className='mx-auto mt-10 max-w-[90%] text-white'>{description}</p>
							</div>
						</m.div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className='ml-8 flex gap-2 self-start max-md:mx-auto'>
				<button aria-label='Previous' onClick={() => SwiperRef.current.swiper.slidePrev()}>
					<ArrowLeft className='w-10 transition-[colors,opacity] duration-75 hover:text-banner-bg active:opacity-60' />
				</button>
				<button aria-label='Next' onClick={() => SwiperRef.current.swiper.slideNext()}>
					<ArrowLeft className='w-10 rotate-180 transition-[colors,opacity] duration-75 hover:text-banner-bg active:opacity-60' />
				</button>
			</div>
		</SectionHeading>
	);
};

export default CarourselSection;
