"use client";

import Heading from "@/components/SectionHeading";
import { PROCESS_DETAILS } from "@/utils/mobile-app-data";
import Placeholder from "../../../public/assets/images/placeholder.png";
import React, { useState } from "react";
import cn from "@/utils/cn";
import DarkLightImage from "@/components/DarkLightImage";

import { AnimatePresence, m } from "framer-motion";
import { opacityAnimVariants } from "@/utils/FramerVariants";

import ChevronIcon from "../../../public/assets/icons/Chevron";
import { useTranslation } from "@/app/i18n/client";
const ProcessSection = (props: any) => {
	const { t, i18n } = useTranslation(props.lng, "mobileDevelopment");
	let PROCESS_DETAILS: { heading: string; description: string }[] = t("processes", { returnObjects: true });

	const [processIndex, setProcessIndex] = useState(0);
	const activeProcess = PROCESS_DETAILS[processIndex];

	function moveRight() {
		setProcessIndex((prev) => (prev === PROCESS_DETAILS.length - 1 ? prev : prev + 1));
	}
	function moveLeft() {
		setProcessIndex((prev) => (prev === 0 ? prev : prev - 1));
	}

	return (
		<AnimatePresence>
			<Heading
				title={t("process-heading.heading")}
				gradientText={t("process-heading.gradient-text")}
				gap='50px'
				className='section-spacing-p section-height'>
				<div className=' grid w-full max-w-[90%] grid-cols-1 justify-center justify-items-center gap-8 md:grid-cols-2  md:gap-12'>
					{/* MOBILE VERSION */}
					<div className='relative h-full w-full md:hidden'>
						<div className=' relative  mx-2 flex h-[calc(100%+1.5rem)]  items-center gap-2 md:hidden'>
							<div
								key={activeProcess.heading}
								className='relative isolate mx-auto flex items-center justify-center  gap-10   md:hidden  [&>*]:shrink-0'>
								<div className={cn("w-[70%] shrink-0 basis-full rounded bg-none  p-2  md:p-3 lg:p-4 ")}>
									<span className={cn("max-w-[80%] font-medium text-dark dark:text-white md:text-[12px] lg:text-p14/[20px]", "clip gradient-bright")}>
										{activeProcess.heading}
									</span>
								</div>
							</div>
						</div>
						<button
							onClick={moveLeft}
							className={cn(
								"absolute -left-4 top-1/2 z-10 flex -translate-y-[calc(50%-(1.5rem/2))] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-light p-2 transition-transform active:scale-[0.97] active:opacity-60 dark:bg-dark md:hidden",
								processIndex === 0 && "opacity-40"
							)}>
							<ChevronIcon className='h-3.5 w-3.5 -translate-x-0.5 rotate-180 text-banner-bg' />
						</button>
						<button
							onClick={moveRight}
							className={cn(
								"absolute -right-4 top-1/2 z-10 flex -translate-y-[calc(50%-(1.5rem/2))] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-light p-2 transition-transform active:scale-[0.97] active:opacity-60 dark:bg-dark md:hidden",
								processIndex === PROCESS_DETAILS.length - 1 && "opacity-40"
							)}>
							<ChevronIcon className=' h-3.5 w-3.5 translate-x-0.5 text-banner-bg' />
						</button>
					</div>
					{/* DESKTOP VERSION */}
					<div className='grid grid-cols-[repeat(9,max-content)] gap-2 [--box-width:210px]  max-md:hidden  md:grid-cols-[repeat(3,minmax(auto,var(--box-width)))] '>
						{PROCESS_DETAILS.map(({ heading }, index) => (
							<button
								onClick={() => setProcessIndex(index)}
								key={heading}
								className={cn(
									"flex flex-col items-center justify-start gap-3 rounded border border-dark/10 bg-gray/10 dark:border-white/10 dark:bg-dark-gray/10  md:p-3 lg:p-4 ",
									activeProcess.heading === heading && "bg-banner-bg dark:bg-banner-bg"
								)}>
								<DarkLightImage
									darkVisibleImage={Placeholder}
									lightVisibleImage={Placeholder}
									className='max-md:hidden md:h-10 md:w-16 lg:h-14 lg:w-20'
									alt=''
								/>
								<span className={cn("max-w-[90%] font-medium text-dark dark:text-white md:text-[12px] lg:text-p14/[20px]")}>{heading}</span>
							</button>
						))}
					</div>
					{/* PROCESS DESCRIPTION */}
					<m.div
						initial='hide'
						animate='visible'
						exit='hide'
						transition={{ duration: 1 }}
						variants={opacityAnimVariants()}
						key={activeProcess.heading}
						className='flex flex-col items-center justify-center gap-10 rounded-md border border-dark/30 p-4 dark:border-white/10 lg:p-6'>
						{/* <div className='secondary-heading'>{activeProcess.heading}</div> */}
						<p className='font-350 leading-7'>{activeProcess.description}</p>
					</m.div>
				</div>
			</Heading>
		</AnimatePresence>
	);
};

export default ProcessSection;
