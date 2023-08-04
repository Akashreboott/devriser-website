"use client";
import GlassCard from "@/components/GlassCard";
import React, { useEffect, useRef } from "react";
import white from "../../../public/assets/images/white520.png";
import GlassCardBig from "@/components/GlassCardBig";
import LineLayout from "@/components/LineLayout";
import SideHeading from "@/components/SideHeading";
import Link from "next/link";
import Image from "next/image";
import largeImage from "../../../public/assets/images/Rectangle-186.png";
import smallimage from "../../../public/assets/images/Rectangle-200.png";
import image208 from "../../../public/assets/images/Rectangle-208.png";
import image281 from "../../../public/assets/images/Rectangle-281.png";
import Stars from "../../../public/assets/images/stars home.svg";
import Phone from "../../../public/assets/images/Nothing-Phone-1.png";
import { Swiper, SwiperSlide } from "@/components/Swiper";
import MotionComponent from "@/components/MotionComponent";

const SolutionSection = () => {
	let SwiperRef = useRef<any>(null);

	return (
		<>
			<SideHeading
				gradientColor='[background-color:#7B9AFE]'
				heading='Solutions'
				description='Empowering Your Digital Future Web Development, Design'
				gradientText='Empowering Your Digital Future'
			/>
			<div className='relative isolate grid  w-full justify-center gap-10'>
				<Image src={Stars} alt='' className='absolute left-0 top-0 -z-20 w-full  opacity-100' />

				{/* BUTTONS */}
				{/* 
        // @ts-ignore */}
				{/* <Swiper
					ref={SwiperRef}
					slidesPerView={1}
					breakpoints={{
						768: { slidesPerView: 4, spaceBetween: 20 },
					}}
					className=' mt-10 flex w-full gap-4 max-lg:overflow-x-scroll  lg:max-w-[1080px]'>
					<SwiperSlide data-swiper-slide='home' className='shrink-0'>
						<button className='glass px-8 py-4'>CRM solutions</button>
					</SwiperSlide>
					<SwiperSlide data-swiper-slide='home'>
						<button className='glass px-8 py-4'>CRM solutions</button>
					</SwiperSlide>
					<SwiperSlide data-swiper-slide='home'>
						<button className='glass px-8 py-4'>CRM solutions</button>
					</SwiperSlide>
					<SwiperSlide data-swiper-slide='home'>
						<button className='glass px-8 py-4'>CRM solutions</button>
					</SwiperSlide>
				</Swiper> */}

				{/* IMAGE */}
				<div className='glass relative w-[95%] p-2.5 md:ml-24 md:w-[70%] md:p-5'>
					<div className='absolute flex h-full  w-full items-center justify-center '>
						<GlassCard
							delay={0.3}
							heading='Sales'
							image={white}
							className='my-auto mr-auto h-[86px] w-[100px] -translate-y-1/2 translate-x-4 bg-[#47474766] min-[500px]:h-[116px] min-[500px]:w-[130px] md:h-[146px] md:w-[180px] md:-translate-x-20 lg:h-[166px] lg:w-[228px]'
						/>
						<div className='flex h-full flex-col justify-evenly '>
							<GlassCard
								delay={0.5}
								heading='Leads'
								image={white}
								className='h-[86px] w-[100px] -translate-y-1/2 bg-[#47474766] min-[500px]:h-[116px] min-[500px]:w-[130px] md:h-[146px] md:w-[180px] md:translate-x-10 lg:h-[166px] lg:w-[228px]'
							/>
							<GlassCard
								delay={0.7}
								heading='Transaction History'
								image={white}
								className='h-[86px] w-[100px] -translate-x-6 bg-[#47474766] min-[500px]:h-[116px] min-[500px]:w-[130px] md:h-[146px] md:w-[180px] md:translate-x-20 lg:h-[166px] lg:w-[228px] '
							/>
						</div>
					</div>
					<MotionComponent initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
						<Image src={largeImage} alt='' className='max-md:mx-auto' />
					</MotionComponent>
				</div>

				{/* CONTENT AND IMAGE */}
				<div className='mx-auto grid max-w-[1080px]  lg:grid-cols-2'>
					<div className='flex w-full flex-col gap-6 max-lg:text-center'>
						<p>
							Unlock the full potential of your digital journey with us! Our platform offers a powerful combination of expert web development,
							stunning design, and cutting-edge AI-powered
						</p>
						<Link href={"#"} className='underline'>
							Check out CRM solution
						</Link>
					</div>

					<div className='relative    isolate my-20 w-full max-lg:space-y-2'>
						<GlassCard
							heading='Deals'
							image={smallimage}
							className='relative -top-1/4 z-10 aspect-[338/119] w-[95%] max-lg:mx-auto md:w-[70%] lg:absolute lg:right-1/4'
							ImageClasses='!w-full h-[150px] max-lg:!max-h-[150px] lg:h-full object-cover'
						/>
						<GlassCard
							delay={0.3}
							heading='Leads'
							image={smallimage}
							className='relative aspect-[338/119] w-[95%] max-lg:mx-auto md:w-[70%] lg:-left-1/4  lg:top-1/4'
							ImageClasses='!w-full h-[150px] max-lg:!max-h-[150px] lg:h-full object-cover'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default SolutionSection;
