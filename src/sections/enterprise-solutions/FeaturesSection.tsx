"use client";
import ProcessCard from "@/components/ProcessCard";
import Heading from "@/components/SectionHeading";
import { Swiper, SwiperSlide } from "@/components/Swiper";
import { Features as FEATURES_IMAGES } from "@/utils/enterprise-data";
import React, { useRef } from "react";
import ArrowLeft from "../../../public/assets/icons/ArrowLeft";
import { useTranslation } from "@/app/i18n/client";

const FeaturesSection = (props: any) => {
	let SwiperRef = useRef<any>(null);
	let { t } = useTranslation(props.lng, "enterpriseSolutions");
	let FEATURES: { title: string; description: string; image: any }[] = t("features", { returnObjects: true });
	return (
		<section className='section-spacing-p grid min-h-section place-items-center'>
			<Heading as='div' title={t("scale-business-heading.heading")} gradientText={t("scale-business-heading.gradient-text")} className=' max-w-[80%]'>
				{/* 
			// @ts-ignore */}
				<Swiper
					id='enterprise-solution'
					ref={SwiperRef}
					slidesPerView={1}
					spaceBetween={10}
					loop={true}
					breakpoints={{
						768: { slidesPerView: 2, spaceBetween: 20 },
						1011: { slidesPerView: 3, spaceBetween: 20 },
					}}
					className='  mt-[80px] grid h-[calc(100%+1.5rem)] w-full snap-x  grid-cols-[repeat(3,100%)]  items-center justify-start gap-16    [--card-width:320px]  max-md:px-3 md:[--card-width:400px]'>
					{/* className='scroll-bar-hide max-w-ful mt-[40px] grid h-[calc(400px+20px)] w-full  snap-x grid-cols-[repeat(7,calc(var(--card-width)-64px))] items-center  justify-start  gap-16 overflow-x-auto overflow-y-visible [--card-width:320px] md:[--card-width:400px] [&>*]:mx-auto   [&>*]:snap-center'> */}
					{FEATURES.map(({ image, description, title }, index) => (
						<SwiperSlide key={title} data-swiper-slide='enterprise-solution'>
							<ProcessCard title={title} description={description} darkVisibleImage={FEATURES_IMAGES[index].image} />
						</SwiperSlide>
					))}
				</Swiper>

				<div className='ml-8 mt-8 flex gap-2 self-start max-md:mx-auto '>
					<button aria-label='Previous Feature' onClick={() => SwiperRef.current.swiper.slidePrev()}>
						<ArrowLeft className='w-10 transition-[colors,opacity] duration-75 hover:text-banner-bg active:opacity-60' />
					</button>
					<button aria-label='Next Feature' onClick={() => SwiperRef.current.swiper.slideNext()}>
						<ArrowLeft className='w-10 rotate-180 transition-[colors,opacity] duration-75 hover:text-banner-bg active:opacity-60' />
					</button>
				</div>
			</Heading>
		</section>
	);
};

export default FeaturesSection;
