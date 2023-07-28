import DottedLine from "@/components/DottedLine";
import SectionHeading from "@/components/SectionHeading";
import SemiGradientText from "@/components/SemiGradientText";
import { PROCESSES } from "@/utils/cms-data";
import React from "react";

const ProcessSection = () => {
	return (
		<SectionHeading title='Our Process' gradientText='Process' gap='125px'>
			<div className='relative grid w-full  grid-cols-1 gap-[150px] overflow-y-hidden'>
				<DottedLine DashHeight={5} Height={2000} className='absolute  top-0 opacity-30 max-lg:left-[calc(14px+25px)]  lg:right-1/2' />

				{PROCESSES.map(({ title, description }) => (
					<div
						key={title}
						className='layout-1x2 relative grid grid-cols-1  gap-20 pl-24 text-left max-lg:gap-10  lg:grid-cols-2 lg:justify-center lg:justify-items-center lg:text-center  '>
						<div className='ball top[calc(50%+14px)] absolute left-[25px] h-7 w-7 rounded-full border-[9px] border-white bg-black lg:left-[calc(50%-14px)]'></div>
						<SemiGradientText
							GradientTextColor='[background-image:linear-gradient(90.32deg,#00C4E0_30.86%,#A371F7_50.81%)]'
							text={title}
							FullGradient={true}
							gradientText={title}
							className='first max-md:text-[24px]/[25px] md:max-w-[200px]'
						/>
						<p className='second max-w-[90%] text-base font-semibold leading-8 !text-white md:text-xl md:leading-10 lg:max-w-[380px] xl:text-2xl'>
							{description}
						</p>
					</div>
				))}
			</div>
		</SectionHeading>
	);
};

export default ProcessSection;
