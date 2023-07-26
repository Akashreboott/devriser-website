import Button from "@/components/Button";
import SemiGradientText from "@/components/SemiGradientText";
import transparent from "./../../public/assets/images/transparent.png";
import Image from "next/image";
import React from "react";

interface props {
	heading: string;
	gradientText?: string;
	btnText?: string;
	description?: string;
	LightModeImage?: any;
	DarkModeImage?: any;
}

const HeroSection = ({ heading, gradientText, btnText, description, ...props }: props) => {
	return (
		<section className='relative mx-6 mb-[95px] flex w-full items-center justify-between  gap-10  max-lg:flex-wrap max-lg:text-center max-md:max-w-[90%] max-md:text-center md:mb-[112px]   lg:mb-[144px]  lg:px-12 xl:max-w-[1400px]'>
			<div className='mx-auto mt-[57px] w-full min-w-[300px] basis-[611px] md:mt-[100px] lg:mt-[220px] '>
				<SemiGradientText
					className='hero-text  font-normal text-primary-dark dark:text-white'
					text={heading}
					gradientText={gradientText ?? ""}
					GradientTextColor='gradient-tint'
					as='h1'
				/>
				{description && <p className='mt-4 text-basic text-primary-dark dark:text-gray'>{description}</p>}
				{btnText && <Button text={btnText} variant='Primary' className='mt-8' />}
			</div>

			<Image
				className='mx-auto mt-[32.5px] hidden h-fit w-full max-w-[402px] dark:block max-md:w-[80%] md:mt-[38px] lg:mt-[220px]'
				src={props.DarkModeImage ?? transparent}
				alt=''
			/>
			<Image
				className='mx-auto mt-[32.5px] block h-fit w-full max-w-[402px] dark:hidden max-md:w-[80%] md:mt-[38px] lg:mt-[220px]'
				src={props.LightModeImage ?? transparent}
				alt=''
			/>
		</section>
	);
};

export default HeroSection;
