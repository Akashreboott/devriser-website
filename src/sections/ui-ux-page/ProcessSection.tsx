import DottedLine from "@/components/DottedLine";
import SectionHeading from "@/components/SectionHeading";
import SemiGradientText from "@/components/SemiGradientText";
import { PROCESSES } from "@/utils/ui-ux-data";
import React from "react";

const ProcessSection = () => {
	return (
		<SectionHeading title='Our Process' gradientText='Process' className='gap-20 lg:gap-[120px]'>
			<div className='relative grid w-full  grid-cols-1 gap-24 overflow-y-hidden lg:gap-[150px]'>
				<DottedLine DashHeight={5} Height={2000} className='absolute  top-0 opacity-30 max-lg:left-[calc(14px+25px)]  lg:right-1/2' />
				{PROCESSES.map(({ title, description }) => (
					<div
						key={title}
						className='layout-1x2 relative grid grid-cols-1 gap-8 pl-24 text-left lg:grid-cols-2  lg:justify-center lg:justify-items-center lg:gap-20 lg:text-center  '>
						{/* DOT */}
						<div className='ball top[calc(50%+14px)] absolute left-[calc(25px+0.75px)] h-[28px] w-[28px] rounded-full border-[9px] border-white bg-black lg:left-[calc(50%-14px-1.5px)]'></div>

						<SemiGradientText
							GradientTextColor='[background-image:linear-gradient(90.32deg,#00C4E0_30.86%,#A371F7_50.81%)]'
							text={title}
							FullGradient={true}
							gradientText={title}
							className='first text-[18px] md:max-w-[200px] md:text-[24px]/[25px]'
						/>
						<p className='second e max-w-[90%]  text-[14px] leading-8 md:text-[20px] md:leading-10 lg:max-w-[380px] '>{description}</p>
					</div>
				))}
			</div>
		</SectionHeading>
	);
};

export default ProcessSection;
