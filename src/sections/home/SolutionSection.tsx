"use client";
import GlassCard from "@/components/GlassCard";
import React, { useEffect, useRef, useState } from "react";
import white from "../../../public/assets/images/white520.png";
import SideHeading from "@/components/SideHeading";
import Link from "next/link";
import Image from "next/image";
import largeImage from "../../../public/assets/images/Rectangle-186.png";
import smallimage from "../../../public/assets/images/Rectangle-200.png";
import Stars from "../../../public/assets/images/stars home.svg";
import MotionComponent from "@/components/MotionComponent";
import useEmblaCarousel from "embla-carousel-react";
import useMatchesMedia from "@/hooks/useMatchesMedia";
import cn from "@/utils/cn";
import ChevronIcon from "../../../public/assets/icons/Chevron";
import { SOLUTIONS } from "@/utils/home-data";
import { AnimatePresence, motion } from "framer-motion";

const SolutionSection = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel();
	const [active, setActive] = useState(SOLUTIONS[0]);
	const matches1014px = useMatchesMedia("min-width:1014px");
	const [buttonClicked, setButtonClicked] = useState(0);

	function moveRight() {
		setButtonClicked((prev) => {
			let number = prev === SOLUTIONS.length - 1 ? prev : prev + 1;
			setActive(SOLUTIONS[number]);
			return number;
		});
	}
	function moveLeft() {
		setButtonClicked((prev) => {
			let number = prev === 0 ? prev : prev - 1;
			setActive(SOLUTIONS[number]);

			// emblaApi?.scrollTo(number);
			return number;
		});
	}

	useEffect(() => {
		emblaApi?.scrollTo(buttonClicked);
	}, [buttonClicked, emblaApi]);
	return (
		<>
			<SideHeading
				gradientColor='[background-color:#7B9AFE]'
				className='mb-12'
				heading='Solutions'
				description='Empowering Your Digital Future Web Development, Design'
				gradientText='Empowering Your Digital Future'
			/>
			<div key={active.name} className='relative isolate grid  w-full justify-center gap-10 lg:-translate-x-[25px] xl:-translate-x-[35px]'>
				<Image src={Stars} alt='' className='absolute left-0 top-0 -z-20 w-full  opacity-100' />
				{/* BUTTONS */}
				{/* 				
								// @ts-ignore */}
				<nav
					ref={!matches1014px ? emblaRef : null}
					className=' relative mb-3 mt-2 flex h-[calc(100%+1rem)] w-full items-center justify-center overflow-hidden md:mb-10 md:mt-6'>
					<ul className='flex w-full items-center gap-4 lg:mx-auto lg:justify-center max-lg:[&>li]:shrink-0 max-lg:[&>li]:grow-0 max-lg:[&>li]:basis-full'>
						{SOLUTIONS.map((solution) => (
							<li key={solution.name} className='flex items-center justify-center'>
								<button onClick={() => setActive(solution)} className={cn("glass px-8 py-4", active.name === solution.name && "bg-[#2853DE]")}>
									{solution.name}
								</button>
							</li>
						))}
					</ul>
					<button
						disabled={buttonClicked === 0}
						onClick={() => {
							moveLeft();
							emblaApi?.scrollPrev();
						}}
						className={cn(
							"absolute left-4 top-1/2 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-light p-2 transition-transform active:scale-[0.97] active:opacity-60 dark:bg-dark md:hidden",
							buttonClicked === 0 && "opacity-40"
						)}>
						<ChevronIcon className='pointer-events-none h-5 w-5 -translate-x-0.5 rotate-180 text-banner-bg' />
					</button>
					<button
						disabled={buttonClicked === SOLUTIONS.length - 1}
						onClick={() => {
							moveRight();
							emblaApi?.scrollNext();
						}}
						className={cn(
							"absolute right-4 top-1/2 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-light p-2 transition-transform active:scale-[0.97] active:opacity-60 dark:bg-dark md:hidden",
							buttonClicked === SOLUTIONS.length - 1 && "opacity-40"
						)}>
						<ChevronIcon className=' pointer-events-none h-5 w-5 translate-x-0.5 text-banner-bg' />
					</button>
				</nav>
				{/* IMAGE */}
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='glass relative mx-auto w-[95%] p-2.5 max-md:mx-2.5 md:w-[70%] md:p-5'>
						<div className='absolute flex h-full  w-full items-center justify-center '>
							<GlassCard
								delay={0.3}
								heading={active.features[0].name}
								image={active.features[0].image}
								className='my-auto mr-auto h-[86px] w-[100px] -translate-y-1/2 translate-x-4 bg-[#47474766] min-[500px]:h-[116px] min-[500px]:w-[130px] md:h-[146px] md:w-[180px] md:-translate-x-20 lg:h-[166px] lg:w-[228px]'
							/>
							<div className='flex h-full flex-col justify-evenly '>
								<GlassCard
									delay={0.5}
									heading={active.features[1].name}
									image={active.features[1].image}
									className='h-[86px] w-[100px] -translate-y-1/2 bg-[#47474766] min-[500px]:h-[116px] min-[500px]:w-[130px] md:h-[146px] md:w-[180px] md:translate-x-10 lg:h-[166px] lg:w-[228px]'
								/>
								<GlassCard
									delay={0.7}
									heading={active.features[2].name}
									image={active.features[2].image}
									className='h-[86px] w-[100px] -translate-x-6 bg-[#47474766] min-[500px]:h-[116px] min-[500px]:w-[130px] md:h-[146px] md:w-[180px] md:translate-x-20 lg:h-[166px] lg:w-[228px] '
								/>
							</div>
						</div>
						<MotionComponent
							initial={{ opacity: 0, y: 50 }}
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}>
							<Image src={active.mainImage} alt='' className='' />
						</MotionComponent>
					</motion.div>
				</AnimatePresence>
				{/* CONTENT AND IMAGE */}
				<div className='mx-auto grid max-w-[1080px]  lg:grid-cols-2'>
					<div className='flex w-full flex-col gap-6 max-lg:px-2 max-lg:text-center'>
						<p>{active.content}</p>
						<Link href={active.link} className='underline'>
							Check out {active.name}
						</Link>
					</div>
					<div className='relative isolate my-20 w-full justify-center max-lg:grid '>
						<GlassCard
							heading='Deals'
							image={active.smallImages[0]}
							className='relative -top-1/4 z-10 aspect-[338/119] w-[95%] max-lg:mx-auto md:w-[70%] lg:absolute lg:right-1/4'
							ImageClasses='!w-full h-[150px] max-lg:!max-h-[150px] lg:h-full object-cover'
						/>
						<GlassCard
							delay={0.3}
							heading='Leads'
							image={active.smallImages[1]}
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
