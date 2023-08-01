"use client";
import AnimatedNumber from "@/components/AnimatedNumber";
import MotionComponent from "@/components/MotionComponent";
import cn from "@/utils/cn";
import { motion } from "framer-motion";
import React, { useState } from "react";

const StatsSection = (props: { className?: string }) => {
	const [isInView, setIsInView] = useState<boolean>(false);

	const Circle = (props: { CircleWidth?: string; borderWidth?: string; offsetWidth?: string; Value: number; Color: string }) => (
		<MotionComponent
			style={
				{
					"--circle-size": "180px",
					"--offsetWidth": "12px",
				} as React.CSSProperties
			}
			className={cn("relative isolate h-[--circle-size] w-[--circle-size]   [&>*]:inset-0")}>
			<div className='absolute h-[--circle-size] w-[--circle-size] rounded-full border-2 border-dark bg-body-bg dark:border-white'></div>
			<MotionComponent
				initial={{ backgroundImage: `conic-gradient( ${props.Color}  ${"0%"}, transparent ${"0%"})` }}
				animate={{ backgroundImage: `conic-gradient( ${props.Color}  ${props.Value}%, transparent ${props.Value}%)` }}
				transition={{ duration: 1 + props.Value / 100 }}
				className='absolute  h-[calc(var(--circle-size)+calc(var(--offsetWidth)*2))] w-[calc(var(--circle-size)+calc(var(--offsetWidth)*2))] -translate-x-[--offsetWidth] -translate-y-[--offsetWidth] rounded-full '></MotionComponent>
			<div className='absolute h-[calc(var(--circle-size)-calc(var(--offsetWidth)*2))] w-[calc(var(--circle-size)-calc(var(--offsetWidth)*2))] translate-x-[--offsetWidth] translate-y-[--offsetWidth] rounded-full  bg-body-bg'></div>
			<div className='absolute z-50 grid h-[--circle-size] w-[--circle-size] place-items-center'>
				<p className='primary-heading !text-dark dark:!text-white'>{<AnimatedNumber duration={1000} Value={props.Value} />}%</p>
			</div>
		</MotionComponent>
	);

	return (
		<motion.div
			onViewportEnter={() => setIsInView(true)}
			onViewportLeave={() => setIsInView(false)}
			className={cn("md flex items-center justify-between gap-4 max-lg:flex-col max-lg:gap-24", props.className)}>
			{/* {isInView && ( */}
			<>
				<div className={cn("flex  items-center justify-center gap-10 max-lg:flex-col max-lg:gap-20")}>
					<Circle Color='#00D085' Value={57} />
					<p className='max-w-[45%]'>
						57%+ Of Corporate <br className='max-lg:hidden' /> Professionals Face Hurdles In Managing their software
					</p>
				</div>
				<div className={cn("flex  items-center justify-center gap-10 max-lg:flex-col max-lg:gap-20")}>
					<Circle Color='#0b759f' Value={47} />
					<p className='max-w-[45%]'>
						47%+ of businesses <br className='max-lg:hidden' /> struggle with their software performance issues
					</p>
				</div>
			</>
			{/* )} */}
		</motion.div>
	);
};

export default StatsSection;
