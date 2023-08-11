import Button from "@/components/Button";
import SemiGradientText from "@/components/SemiGradientText";
import transparent from "./../../../public/assets/images/transparent.png";
import React from "react";
import cn from "@/utils/cn";
import DarkLightImage from "@/components/DarkLightImage";

interface props {
	heading: string;
	gradientText?: string;
	btnText?: string;
	className?: string;
	description?: string;

	DarkVisibleImage?: any;
	LightVisibleImage?: any;
	GradientTextColor?: string;
}

const HeroSection = ({ heading, gradientText, btnText, description, className, ...props }: props) => {
	return (
		<section
			className={cn(
				"relative mx-6 mb-[95px] flex w-full items-center justify-between gap-10  [--top-space:160px]  max-lg:flex-wrap max-lg:text-center max-md:max-w-[90%] max-md:text-center md:mb-[112px]  lg:mb-[144px]  lg:px-12 xl:max-w-[1400px]",
				className
			)}>
			<div className='mx-auto  mt-[57px] w-full min-w-[300px] basis-[611px]  md:mt-[100px] lg:mt-[var(--top-space)] '>
				<SemiGradientText
					className='hero-text  font-normal text-primary-dark dark:text-white'
					text={heading}
					gradientText={gradientText ?? ""}
					GradientTextColor={props.GradientTextColor ?? "gradient-tint"}
					as='h1'
				/>
				{description && <p className='mt-4 text-basic text-primary-dark dark:text-gray'>{description}</p>}
				{btnText && <Button text={btnText} variant='Primary' className='mt-8' />}
			</div>
			<DarkLightImage
				DarkVisibleImage={props.DarkVisibleImage ?? transparent}
				LightVisibleImage={props.LightVisibleImage ?? transparent}
				className='mx-auto mt-[32.5px]  h-fit w-full max-w-[402px]  max-md:w-[80%] md:mt-[38px] lg:mt-[var(--top-space)]'
				alt=''
			/>
		</section>
	);
};

export default HeroSection;
