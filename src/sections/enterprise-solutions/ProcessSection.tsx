"use client";
import Heading from "@/components/SectionHeading";
import SemiGradientText from "@/components/SemiGradientText";
import { PROCESSES } from "@/utils/enterprise-data";
import cn from "@/utils/cn";
import React, { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useTranslation } from "@/app/i18n/client";

const ProcessSection = (props: any) => {
	let { t } = useTranslation(props.lng, "enterpriseSolutions");
	let PROCESSES: {
		name: string;
		description: string;
	}[] = t("processes", { returnObjects: true });
	const [selectedProcess, setSelectedProcess] = useState(PROCESSES[0].name);
	return (
		<Heading
			title={t("development-heading.heading")}
			gradientText={t("development-heading.gradient-text")}
			className='section-spacing-p min-h-section gap-20 [--pb:150px] max-md:text-center lg:px-[calc(170px+10px)]'>
			<div className='relative mt-20 flex h-[calc(80vw-110px)] w-[calc(80vw-110px)] items-center justify-center rounded-full border border-primary-dark dark:border-white md:h-[470px] md:w-[470px] lg:h-[525px] lg:w-[525px] '>
				<AnimatePresence>
					<m.div
						key={selectedProcess}
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.5 }}
						className='px-10 max-md:text-xs max-[500px]:text-[10px]'>
						{PROCESSES.find(({ name }) => name === selectedProcess)?.description}
					</m.div>
				</AnimatePresence>
				{PROCESSES.map(({ name }, index) => {
					let angle = index * (360 / PROCESSES.length);
					return (
						<div
							key={name}
							style={{ "--angle": `${angle}deg` } as React.CSSProperties}
							className='absolute flex h-1 w-full origin-center rotate-[--angle] justify-between bg-transparent [&>div>:not(.active-process)]:opacity-100 '>
							{/* BUTTON AND TEXT */}
							<button
								onClick={() => setSelectedProcess(name)}
								className={cn(
									"relative h-5 w-5 border-spacing-2 origin-center -translate-x-[0.625rem] -translate-y-[calc(0.625rem-0.125rem)] cursor-pointer select-none rounded-full border-4 border-transparent bg-primary-dark transition-colors  dark:bg-white ",
									selectedProcess === name && "border-banner-bg"
								)}>
								<SemiGradientText
									as='div'
									text={name}
									gradientText={selectedProcess === name ? name : ""}
									FullGradient={true}
									style={{ "--angle": `-${angle}deg` } as React.CSSProperties}
									className={cn(
										"absolute min-w-[80px] rotate-[--angle] cursor-pointer  duration-300 active:scale-[0.99] max-md:text-xs  max-[400px]:text-[8px] md:min-w-[150px] [&_span]:!font-medium",
										angle === 0 && "-translate-x-full",
										angle <= 90 && angle > 0 && "-translate-x-full",
										angle <= 180 && angle > 90 && "-translate-x-full -translate-y-full",
										angle <= 270 && angle > 180 && "-translate-x-full ",
										angle <= 360 && angle > 270 && "-translate-x-full -translate-y-full"
									)}
								/>
							</button>
						</div>
					);
				})}
			</div>
		</Heading>
	);
};

export default ProcessSection;
