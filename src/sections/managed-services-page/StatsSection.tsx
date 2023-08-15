"use client";
import { useTranslation } from "@/app/i18n/client";
import AnimatedNumber from "@/components/AnimatedNumber";
import MotionComponent from "@/components/MotionComponent";
import cn from "@/utils/cn";
import { m } from "framer-motion";
import React, { useState } from "react";

const StatsSection = (props: { className?: string; lng: string }) => {
	const { t } = useTranslation(props.lng, "managedServices");
	let STATS: { number: string; description: string[] }[] = t("stats", { returnObjects: true });

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
		<m.div
			onViewportEnter={() => setIsInView(true)}
			onViewportLeave={() => setIsInView(false)}
			className={cn("md flex items-center justify-between gap-4 max-lg:flex-col max-lg:gap-24", props.className)}>
			{/* {isInView && ( */}
			<>
				<div className={cn("flex  items-center justify-center gap-10 max-lg:flex-col max-lg:gap-20")}>
					<Circle Color='#00D085' Value={parseInt(STATS[0].number)} />
					<p className='max-w-[45%]'>
						{STATS[0].description[0]}
						<br className='max-lg:hidden' />
						{STATS[0].description[1]}
					</p>
				</div>
				<div className={cn("flex  items-center justify-center gap-10 max-lg:flex-col max-lg:gap-20")}>
					<Circle Color='#0b759f' Value={parseInt(STATS[1].number)} />
					<p className='max-w-[45%]'>
						{STATS[1].description[0]}
						<br className='max-lg:hidden' />
						{STATS[1].description[1]}
					</p>
				</div>
			</>
			{/* )} */}
		</m.div>
	);
};

export default StatsSection;
