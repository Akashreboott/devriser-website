import Button from "@/components/Button";
import SemiGradientText from "@/components/SemiGradientText";
import transparent from "./../../../public/assets/images/transparent.png";
import Image from "next/image";
import React from "react";
import cn from "@/utils/cn";
import MotionComponent from "@/components/MotionComponent";

interface props {
	heading: string;
	gradientText?: string;
	btnText?: string;
	className?: string;
	description?: string;
	LightModeImage?: any;
	DarkModeImage?: any;
	GradientTextColor?: string;
}

const Hero = ({ heading, gradientText, btnText, description, className, ...props }: props) => {
	return (
		<>
			<section
				className={cn(
					"relative mx-6 mb-[95px] flex w-full items-center justify-between gap-10 [--top-space:160px]    max-lg:flex-wrap max-lg:text-center max-md:max-w-[90%] max-md:text-center md:mb-[112px]  lg:mb-[144px]  lg:px-12 xl:max-w-[1400px]",
					className
				)}>
				<div className=' mr-auto mt-[57px] w-full min-w-[300px] basis-full md:ml-10  md:mt-[100px] lg:mt-[var(--top-space)] '>
					{/* <SemiGradientText
						className='hero-text w-full  font-normal text-primary-dark dark:text-white xl:text-[54px]/[70px]'
						text={heading}
						gradientText={gradientText ?? ""}
						GradientTextColor={props.GradientTextColor ?? "gradient-tint"}
						as='h1'
					/> */}
					<h1 className='hero-text   w-full  flex-wrap overflow-hidden font-normal text-primary-dark dark:text-white max-md:text-center xl:text-[54px]/[70px]'>
						{heading.split(" ").map((word, index) => (
							<span key={word} className='relative isolate  w-fit  overflow-hidden'>
								<MotionComponent
									as='span'
									initial={{ y: 0 }}
									animate={{ y: index % 2 === 0 ? "-130%" : "130%" }}
									transition={{ delay: 0.35 * index, duration: 1, ease: "easeInOut" }}
									className='absolute z-10 h-[120%] w-full bg-dark max-md:hidden'></MotionComponent>
								<span>{`${word}`}&nbsp;</span>
							</span>
						))}
					</h1>
					{description && (
						<p className='md:hero-btn-animation mt-5 max-w-[700px] text-basic text-primary-dark [--delay:1.7s] dark:text-gray'>{description}</p>
					)}
					{btnText && <Button text={btnText} variant='Primary' className='md:hero-btn-animation mt-8 [--delay:3s]' />}
				</div>
			</section>
		</>
	);
};

export default Hero;
