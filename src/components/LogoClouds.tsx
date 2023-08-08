import React from "react";
import MotionComponent from "./MotionComponent";
import Image from "next/image";

import cn from "@/utils/cn";
const LogoClouds = (props: { heading: string; logos: any[]; className?: string; gapBetweenLogos?: string; logoClasses?: string }) => {
	return (
		<MotionComponent
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, delay: 3 }}
			className={cn(
				"mx-3 flex  justify-between max-lg:flex-col max-lg:justify-center max-md:mb-20 max-md:gap-6 lg:ml-24 lg:mr-8",
				"flex-col items-center gap-7",
				props.className
			)}>
			<div className='text-[20px] font-medium max-lg:mx-auto lg:text-[26px]/[54px]'>{props.heading}</div>
			<div
				className={cn("flex items-center justify-center  gap-10 max-lg:flex-wrap max-lg:space-y-2 lg:gap-16 [&>*]:shrink-0", props.gapBetweenLogos)}>
				{props.logos.map((logo, index) => (
					<Image key={index} src={logo} alt='' className='h-12 object-contain' />
				))}
			</div>
		</MotionComponent>
	);
};

export default LogoClouds;
