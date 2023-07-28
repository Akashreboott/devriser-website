"use client";

import SectionHeading from "@/components/SectionHeading";

import Image from "next/image";
import white from "../../../public/assets/images/white520.png";
import ArrowLeft from "../../../public/assets/icons/ArrowLeft";
import cn from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

const CarourselSection = () => {
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

	let [activeCard, setActiveCard] = useState<number>(0);
	let [scrolledWidth, setScrolledWidth] = useState<number>(0);

	let containerRef = useRef<HTMLDivElement>(null);
	function moveCardRight() {
		setActiveCard((prev) => prev + 1);
	}
	function moveCardLeft() {
		setActiveCard((prev) => (prev > 1 ? prev - 1 : prev));
	}

	useEffect(() => {
		if (containerRef.current) {
			setScrolledWidth(containerRef.current.offsetWidth);
		}
	}, []);

	useEffect(() => {
		if (containerRef.current && activeCard > 3) {
			containerRef.current.scrollBy(activeCard - 2 * (400 - 64), 0);
			console.log(activeCard);
		}
	}, [activeCard]);

	// console.log(activeCard, activeCard > 3 && activeCard - 2 * (100 / 3));
	let scrolled = 0;
	let activeClasses = "overflow-hidden [&>div]:!block scale-[1.15] ";
	return (
		<SectionHeading
			title='Embrace The Benefits Of UI UX Design Services'
			description='Witness the power of exceptional UI/UX services with our expert team of designers.'
			gap='40px'
			className='max-w-[80%]'>
			<div
				ref={containerRef}
				// style={{ translate: `-${activeCard > 3 && Math.abs(activeCard - 2 * (400 - 64))}px 0` }}
				className='scroll-bar-hide mt-[40px] grid h-[calc(400px+20px)] w-full snap-x grid-cols-[repeat(7,calc(var(--card-width)-64px))] items-center  justify-start  gap-16 overflow-x-auto overflow-y-visible [--card-width:320px] md:[--card-width:400px] [&>*]:mx-auto  [&>*]:shrink-0 [&>*]:snap-center'>
				{DATA.map(({ content, title }, index) => (
					<div
						key={title}
						className={cn(
							"lg-[400px]  gradient-border bg-noise relative flex h-[332px] w-full max-w-[320px] flex-col items-center justify-center gap-10 overflow-hidden rounded px-4 transition-transform",
							activeCard === index + 1 && activeClasses,
							index === 0 && "ml-4",
							"group hover:scale-[1.15] hover:overflow-hidden"
						)}>
						<Image src={white} className='h-[120px] max-w-[200px] rounded-md' alt='' />
						<p className='max-w-[90%] text-xl leading-10 lg:text-[26px]'>{title}</p>
						<div className='bg-noise250 absolute inset-0 hidden h-full w-full rounded  bg-banner-bg group-hover:!block '>
							<p className='mx-auto mt-10 max-w-[90%] !text-white'>{content}</p>
						</div>
					</div>
				))}
			</div>
			{/* <div className='ml-8 flex gap-2 self-start'>
				<button onClick={moveCardLeft}>
					<ArrowLeft className='w-10 transition-[colors,opacity] duration-75 hover:text-banner-bg active:opacity-60' />
				</button>
				<button onClick={moveCardRight}>
					<ArrowLeft className='w-10 rotate-180 transition-[colors,opacity] duration-75 hover:text-banner-bg active:opacity-60' />
				</button>
			</div> */}
		</SectionHeading>
	);
};

export default CarourselSection;
