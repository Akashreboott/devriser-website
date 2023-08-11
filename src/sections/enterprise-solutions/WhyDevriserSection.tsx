import SectionHeading from "@/components/SectionHeading";
import SemiGradientText from "@/components/SemiGradientText";
import cn from "@/utils/cn";
import { SPECIALITIES } from "@/utils/enterprise-data";
import React from "react";

const WhyDevriserSection = () => {
	const Card = (props: { name: string; description: string; className?: string }) => (
		<div
			className={cn(
				"grid max-w-[550px] gap-5 rounded-lg border border-white/30 bg-gray-20 px-5 py-6 transition-colors hover:border-white/60 md:max-w-[325px]",
				props.className
			)}>
			<h3 className='text-base font-semibold'>{props.name}</h3>
			<div className='text-[12px] leading-5 md:text-p14'>{props.description}</div>
		</div>
	);
	return (
		<section
			className={cn(
				"relative isolate my-20 flex w-11/12 flex-col  gap-10 md:gap-20",
				// dash border vars
				"[--remaining-width:calc((100%-var(--width))/2)] [--width:86%]"
			)}>
			<SemiGradientText
				text='Why Devriser Is The Right Fit For Your Enterprise Needs ?'
				gradientText='Devriser Is The Right Fit'
				className='mx-auto text-center text-[28px]/[47px] md:hidden'
			/>

			<div className='absolute  inset-[--remaining-width] -z-10 h-[--width] w-[--width] border  border-dashed border-white max-md:hidden '></div>
			<div className='flex w-full justify-center max-md:flex-col max-md:items-center max-md:gap-10'>
				<Card
					name={SPECIALITIES[0].name}
					description={SPECIALITIES[0].description}
					// className='relative before:absolute before:top-[calc(var(--remaining-width)*4)] before:-translate-x-[calc(100%+2px)] before:-translate-y-1 before:bg-dark  before:content-["\276F"]'
				/>
			</div>
			<div className='flex w-full items-center justify-between gap-16 max-md:flex-col max-md:items-center max-md:gap-10'>
				<Card
					name={SPECIALITIES[1].name}
					description={SPECIALITIES[1].description}
					// className='relative before:absolute before:bottom-0 before:left-[calc(var(--remaining-width)*4)] before:-translate-x-1 before:translate-y-[calc(100%-2px)]  before:-rotate-90 before:bg-dark  before:content-["\276F"]'
				/>
				<SemiGradientText
					text='Why Devriser Is The Right Fit For Your Enterprise Needs ?'
					gradientText='Devriser Is The Right Fit'
					className='max-w-[250px] text-center text-[28px]/[47px] max-md:hidden'
				/>
				<Card name={SPECIALITIES[2].name} description={SPECIALITIES[2].description} />
			</div>
			<div className='flex w-full justify-center gap-20 max-md:flex-col max-md:items-center max-md:gap-10'>
				<Card
					name={SPECIALITIES[3].name}
					description={SPECIALITIES[3].description}
					// className='relative before:absolute before:bottom-[calc(var(--remaining-width)*4)] before:right-0 before:translate-x-[calc(100%+2px)]  before:translate-y-1 before:rotate-180 before:bg-dark  before:content-["\276F"]'
				/>
				<Card
					name={SPECIALITIES[4].name}
					description={SPECIALITIES[4].description}
					// className='relative before:absolute before:bottom-[calc(var(--remaining-width)*4)] before:right-0 before:translate-x-[calc(100%+2px)]  before:translate-y-1 before:rotate-180 before:bg-dark  before:content-["\276F"]'
				/>
			</div>
		</section>
	);
};

export default WhyDevriserSection;
