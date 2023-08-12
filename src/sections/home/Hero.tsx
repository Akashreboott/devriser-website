import Button from "@/components/Button";
import SemiGradientText from "@/components/SemiGradientText";
import transparent from "./../../../public/assets/images/transparent.png";
import Image from "next/image";
import React from "react";
import cn from "@/utils/cn";
import MotionComponent from "@/components/MotionComponent";
import { splitString } from "@/utils/utils";
import { opacityAnimVariants, scaleAnimVariants } from "@/utils/FramerVariants";
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
					"relative  mx-6 mb-[95px] flex w-full items-center justify-between gap-10 [--top-space:160px]    max-lg:flex-wrap max-lg:text-center max-md:max-w-[90%] max-md:text-center md:mb-[112px]  lg:mb-[144px]  lg:px-12 xl:max-w-[1400px]",
					className
				)}>
				<div className=' mr-auto mt-[50px] w-full min-w-[300px] basis-full md:mt-[100px]  lg:ml-10 lg:mt-[var(--top-space)] '>
					{/* <SemiGradientText
						className='hero-text w-full  font-normal text-primary-dark dark:text-white xl:text-[54px]/[70px]'
						text={heading}
						gradientText={gradientText ?? ""}
						GradientTextColor={props.GradientTextColor ?? "gradient-tint"}
						as='h1'
					/> */}
					<h1 className='relative w-full  flex-wrap  overflow-hidden text-[40px] font-semibold text-dark selection:bg-fuchsia-500 selection:text-white dark:text-white max-lg:text-center max-md:text-center xl:text-[54px]/[70px]'>
						{heading.split(" ").map((word, index) => (
							<MotionComponent
								as='span'
								initial={{ filter: "brightness(1)" }}
								animate={{ filter: "brightness(2)" }}
								transition={{ duration: 1, delay: 4 }}
								key={index}
								className={cn("inline-flex overflow-hidden   max-lg:text-center")}>
								{/* <span className='relative z-10 h-[120%] w-full overflow-hidden  max-md:hidden'> */}
								<MotionComponent
									as='span'
									animate={{ y: 0 }}
									// initial={{ y: index % 2 !== 0 ? "-130%" : "130%" }}
									initial={{
										y: "100%",
									}}
									transition={{ delay: 0.35 * index, duration: 0.8, ease: "easeInOut" }}
									className={cn("inline-flex", word === " " && "[width:0.25ch]")}>
									{`${word} `}&nbsp;
								</MotionComponent>
								{/* </span> */}
							</MotionComponent>
						))}
						<MotionComponent
							initial={{ x: "-100%" }}
							animate={{ x: "150%" }}
							transition={{ duration: 1.5, delay: 4 }}
							className='absolute bottom-0 h-1 w-[80%] bg-gradient-to-r from-transparent via-emerald-500  via-50% to-sky-500'></MotionComponent>
					</h1>
					{description && (
						<p className='md:hero-btn-animation mt-5 max-w-[700px] text-basic text-primary-dark [--delay:1.7s] dark:text-gray max-lg:mx-auto'>
							{description.split(" ").map((word, index) => (
								<span key={index} className={cn("inline-flex   overflow-hidden")}>
									{/* <span className='relative z-10 h-[120%] w-full overflow-hidden  max-md:hidden'> */}
									<MotionComponent
										as='span'
										animate={{ y: 0 }}
										// initial={{ y: index % 2 !== 0 ? "-130%" : "130%" }}
										initial={{ y: "100%" }}
										transition={{ delay: 1.5 + 0.02 * index, duration: 1, ease: "easeInOut" }}
										className={cn("inline-flex", word === " " && "[width:0.5ch]")}>
										{`${word}`}&nbsp;
									</MotionComponent>
									{/* </span> */}
								</span>
							))}
						</p>
					)}
					{btnText && (
						<Button
							text={btnText}
							// initial='hide'
							animate='visible'
							variants={scaleAnimVariants([0, 1.25, 1])}
							transition={{ duration: 0.3, delay: 2.8 }}
							variant='Primary'
							className='md:hero-btn-animation mt-8 [--delay:3s] max-lg:mx-auto'
						/>
					)}
				</div>
			</section>
		</>
	);
};

export default Hero;
