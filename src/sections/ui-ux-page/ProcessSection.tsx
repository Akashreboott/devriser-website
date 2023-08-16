import { useTranslation } from "@/app/i18n";
import DottedLine from "@/components/DottedLine";
import Heading from "@/components/SectionHeading";
import SemiGradientText from "@/components/SemiGradientText";
import { PROCESSES } from "@/utils/ui-ux-data";
import React from "react";

const ProcessSection = async (props: any) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(props.lng, "uiUxServices");
	let PROCESSES: { heading: string; description: string }[] = t("processes", { returnObjects: true });
	return (
		<Heading
			title={t("process-heading.heading")}
			gradientText={t("process-heading.gradient-text")}
			className='section-spacing-p section-height gap-20 lg:gap-[120px]'>
			<div className='relative grid w-full  grid-cols-1 gap-24 overflow-y-hidden lg:gap-[150px]'>
				<DottedLine DashHeight={5} Height={2000} className='absolute  top-0 opacity-70 dark:opacity-30 max-lg:left-[calc(14px+25px)]  lg:right-1/2' />
				{PROCESSES.map(({ heading, description }) => (
					<div
						key={heading}
						className='layout-1x2-lg relative grid grid-cols-1 gap-8 pl-24 text-left lg:grid-cols-2  lg:justify-center lg:justify-items-center lg:gap-20 lg:text-center  '>
						{/* DOT */}
						<div className='ball top[calc(50%+14px)] absolute left-[calc(25px+0.75px)] h-[28px] w-[28px] rounded-full border-[9px] border-black bg-white dark:border-white dark:bg-black lg:left-[calc(50%-14px-1.5px)]'></div>

						<SemiGradientText
							GradientTextColor='[background-image:linear-gradient(90.32deg,#00C4E0_30.86%,#A371F7_50.81%)]'
							text={heading}
							FullGradient={true}
							gradientText={heading}
							className='first text-[18px] md:max-w-[200px] md:text-[24px]/[25px]'
						/>
						<p className='second e max-w-[90%]  text-[14px] leading-8 md:text-[20px] md:leading-10 lg:max-w-[380px] '>{description}</p>
					</div>
				))}
			</div>
		</Heading>
	);
};

export default ProcessSection;
