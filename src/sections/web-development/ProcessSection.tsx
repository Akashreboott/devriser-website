"use client";
import SectionHeading from "@/components/SectionHeading";
import { PROCESS_DETAILS } from "@/utils/web-development-data";
import React, { useEffect, useState } from "react";
import ArrowLeft from "../../../public/assets/icons/ArrowLeft";
import cn from "@/utils/cn";
import { motion } from "framer-motion";

const ProcessSection = () => {
	const [activeProcess, setActiveProcess] = useState("Consultation and gathering requirements");
	const [breakPoint767, setBreakPoint767] = useState<boolean>(false);
	const process = PROCESS_DETAILS.filter(({ heading }) => heading === activeProcess)[0].description;
	const index = PROCESS_DETAILS.findIndex(({ heading }) => heading === activeProcess);
	const MODIFIED_PROCESS = breakPoint767 ? PROCESS_DETAILS.slice(index).concat(PROCESS_DETAILS.slice(0, index)) : PROCESS_DETAILS;

	function matches767() {
		if (window.matchMedia("(max-width: 768px)").matches) {
			setBreakPoint767(true);
		} else {
			setBreakPoint767(false);
		}
	}

	useEffect(() => {
		matches767();
		window.addEventListener("resize", matches767);
		return () => window.removeEventListener("resize", matches767);
	}, []);

	let activeClasses = "clip gradient-tint";

	return (
		<SectionHeading title='Our Process' gradientText="Process" className='mt-20 w-full gap-20'>
			<div className=' gradient-border grid w-[calc(100%-30px)]  max-w-[1436px] grid-cols-1 gap-10 p-6 md:grid-cols-2 md:p-[75px]'>
				<motion.div
					layoutRoot
					initial={{ scale: 1, x: "var(--move-right)" }}
					animate={{ scale: 1, x: 0 }}
					className='scroll-bar-hide flex snap-x snap-mandatory gap-10 [--move-right:50px] max-md:overflow-x-auto  md:flex-col md:[--move-right:0] max-md:[&>*]:shrink-0'>
					{MODIFIED_PROCESS.map(({ heading }) => {
						let activeTab = activeProcess === heading;
						return (
							<motion.button
								layout
								onClick={() => setActiveProcess(heading)}
								key={heading}
								className={cn("flex snap-start items-center gap-4 max-lg:justify-between")}>
								<p
									className={cn(
										"mr-auto text-left text-sm/[23px] font-semibold max-lg:max-w-[200px] max-md:max-w-full lg:text-base/[15.4px] xl:text-[18px]/[17.4px]",
										activeTab ? activeClasses : "dark:text-white"
									)}>
									{heading}
								</p>
								<ArrowLeft className={cn("w-9 rotate-180 max-md:hidden", activeTab && "text-banner-bg")} />
							</motion.button>
						);
					})}
				</motion.div>
				<div className='rounded bg-white dark:bg-gray-54 px-8 py-[35px] text-[14px]/[21px] text-dark font-350 dark:text-white max-md:font-350 md:px-[54px] md:text-[18px]/[40px]  '>
					<motion.div initial={{ opacity: 0, y: "-5px" }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
						{process}
					</motion.div>
				</div>
			</div>
		</SectionHeading>
	);
};

export default ProcessSection;
