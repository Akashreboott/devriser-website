"use client";
import SectionHeading from "@/components/SectionHeading";
import { PROCESS_DETAILS } from "@/utils/web-development-data";
import React, { useState } from "react";
import ArrowLeft from "../../../public/assets/icons/ArrowLeft";
import cn from "@/utils/cn";

const ProcessSection = () => {
	const [activeProcess, setActiveProcess] = useState("Consultation and gathering requirements");
	const process = PROCESS_DETAILS.filter(({ heading }) => heading === activeProcess)[0].description;

	let activeClasses = "clip gradient-tint ";

	return (
		<SectionHeading title='Our Process' className='mt-20 w-full gap-20'>
			<div className='bg-noise1800 gradient-border grid w-[calc(100%-30px)] max-w-[1436px] grid-cols-2 gap-10 p-[75px]'>
				<div className='flex flex-col gap-10'>
					{PROCESS_DETAILS.map(({ heading, description }) => {
						let activeTab = activeProcess === heading;
						return (
							<button
								onClick={() => setActiveProcess(heading)}
								key={heading}
								className={cn("flex items-center gap-4 max-lg:justify-between", activeTab && "origin-left scale-[1.2]")}>
								<p
									className={cn(
										"text-base/[23px] font-semibold  lg:text-base/[15.4px] xl:text-[18px]/[17.4px]",
										activeTab ? activeClasses : "!text-white"
									)}>
									{heading}
								</p>
								<ArrowLeft className={cn("w-9 rotate-180", activeTab && "moveX scale-[1.2]")} />
							</button>
						);
					})}
				</div>
				<div className='bg-white px-[54px] py-[35px] text-[11px]/[21px] text-black md:text-[17px]/[33px] lg:text-[20px]/[67px] xl:text-[32px]/[54px]'>
					{process}
				</div>
			</div>
		</SectionHeading>
	);
};

export default ProcessSection;
