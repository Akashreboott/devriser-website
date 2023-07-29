"use client";
import SectionHeading from "@/components/SectionHeading";
import { PROCESS_DETAILS } from "@/utils/web-development-data";
import React, { useState } from "react";
import ArrowLeft from "../../../public/assets/icons/ArrowLeft";
import cn from "@/utils/cn";

const ProcessSection = () => {
	const [activeProcess, setActiveProcess] = useState("Consultation and gathering requirements");
	const process = PROCESS_DETAILS.filter(({ heading }) => heading === activeProcess)[0].description;
	const index = PROCESS_DETAILS.findIndex(({ heading }) => heading === activeProcess);
	console.log(index);

	let activeClasses = "clip gradient-tint";

	return (
		<SectionHeading title='Our Process' className='mt-20 w-full gap-20'>
			<div className='bg-noise1800 gradient-border grid w-[calc(100%-30px)]  max-w-[1436px] grid-cols-1 gap-10 p-6 md:grid-cols-2 md:p-[75px]'>
				<div className='scroll-bar-hide flex snap-x snap-mandatory gap-10  max-md:overflow-x-auto md:flex-col max-md:[&>*]:shrink-0'>
					{PROCESS_DETAILS.slice(index)
						.concat(PROCESS_DETAILS.slice(0, index))
						.map(({ heading, description }) => {
							let activeTab = activeProcess === heading;
							return (
								<button
									onClick={() => setActiveProcess(heading)}
									key={heading}
									className={cn("flex snap-start items-center gap-4 max-lg:justify-between")}>
									<p
										className={cn(
											"mr-auto text-left text-base/[23px] font-semibold max-lg:max-w-[200px] max-md:max-w-full lg:text-base/[15.4px] xl:text-[18px]/[17.4px]",
											activeTab ? activeClasses : "!text-white"
										)}>
										{heading}
									</p>
									<ArrowLeft className={cn("w-9 rotate-180 max-md:hidden", activeTab && "text-banner-bg")} />
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
