"use client";
import SectionHeading from "@/components/SectionHeading";
import { PROCESS_DETAILS } from "@/utils/web-development-data";
import React, { useState } from "react";
import ArrowLeft from "../../../public/assets/icons/ArrowLeft";
import cn from "@/utils/cn";
import { AnimatePresence, m } from "framer-motion";
import ChevronIcon from "../../../public/assets/icons/Chevron";

const ProcessSection = () => {
	const [processIndex, setProcessIndex] = useState(0);
	const activeProcess = PROCESS_DETAILS[processIndex];

	let activeClasses = "clip gradient-tint";

	function moveRight() {
		setProcessIndex((prev) => (prev === PROCESS_DETAILS.length - 1 ? prev : prev + 1));
	}
	function moveLeft() {
		setProcessIndex((prev) => (prev === 0 ? prev : prev - 1));
	}

	return (
		<SectionHeading title='Our Process' gradientText='Process' className='mt-20 w-full gap-20'>
			<div className='gradient-border grid w-[calc(100%-30px)]  max-w-[1436px] grid-cols-1 gap-10 p-6 md:grid-cols-2 md:p-9 lg:p-[65px]'>
				<div>
					{/* DESKTOP VERSION */}
					<div className='scroll-bar-hide relative flex snap-x snap-mandatory  gap-10 [--move-right:50px] max-md:hidden max-md:overflow-x-auto  md:flex-col md:[--move-right:0] max-md:[&>*]:shrink-0'>
						{PROCESS_DETAILS.map(({ heading }, index) => {
							let activeTab = activeProcess.heading === heading;
							return (
								<button
									onClick={() => setProcessIndex(index)}
									key={heading}
									className={cn("flex snap-center items-center gap-4 max-lg:justify-between  max-md:shrink-0 max-md:basis-full")}>
									<p
										className={cn(
											"mr-auto text-left text-sm/[23px] font-semibold max-lg:max-w-[200px] max-md:max-w-full lg:text-base/[15.4px] xl:text-[18px]/[17.4px]",
											activeTab ? activeClasses : "dark:text-white"
										)}>
										{heading}
									</p>
									<ArrowLeft className={cn("w-9 rotate-180 max-md:hidden", activeTab && "text-banner-bg")} />
								</button>
							);
						})}
					</div>
					{/* MOBILE VERSION - CAROUSEL */}
					<div className='relative isolate flex snap-x snap-mandatory gap-10  [--move-right:50px] md:hidden   [&>*]:shrink-0'>
						<div
							key={activeProcess.heading}
							className={cn("flex snap-center  items-center justify-center gap-4 max-lg:justify-between  max-md:shrink-0 max-md:basis-full")}>
							<span className={cn("mx-auto text-left text-sm/[23px] font-semibold   lg:text-base/[15.4px] xl:text-[18px]/[17.4px]", activeClasses)}>
								{activeProcess.heading}
							</span>
						</div>
						<button
							onClick={() => {
								moveLeft();
							}}
							className={cn(
								"absolute left-4 top-1/2 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-light p-2 transition-transform active:scale-[0.97] active:opacity-60 dark:bg-dark  md:hidden",
								processIndex === 0 && "opacity-40"
							)}>
							<ChevronIcon className='pointer-events-none h-3 w-3 -translate-x-0.5 rotate-180 text-banner-bg' />
						</button>
						<button
							onClick={() => {
								moveRight();
							}}
							disabled={processIndex === PROCESS_DETAILS.length - 1}
							className={cn(
								"absolute right-4 top-1/2 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-light p-2 transition-transform active:scale-[0.97] active:opacity-60 dark:bg-dark md:hidden",
								processIndex === PROCESS_DETAILS.length - 1 && "opacity-40"
							)}>
							<ChevronIcon className=' pointer-events-none h-3 w-3 translate-x-0.5 text-banner-bg' />
						</button>
					</div>
				</div>
				{/* PROCESS DESCRIPTION */}
				<div className='rounded bg-white px-8 py-[35px] text-[14px]/[21px] font-350 text-dark dark:bg-gray-54 dark:text-white max-md:font-350 md:text-[18px]/[40px] lg:px-[54px]  '>
					<m.div initial={{ opacity: 0, y: "-5px" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
						{activeProcess.description}
					</m.div>
				</div>
			</div>
		</SectionHeading>
	);
};

export default ProcessSection;
