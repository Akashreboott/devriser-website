import cn from "@/utils/cn";
import React from "react";
import Code from "./Code";
import MotionComponent from "./MotionComponent";
import Image from "next/image";
import neon from "../../public/assets/icons/Group 771.svg";
interface props {
	children: React.ReactNode;
	LineClasses?: string;
	className?: string;
	heading?: string;
	HideSymbol?: boolean;
}

const LineLayout = ({ children, LineClasses, className, HideSymbol = false, heading }: props) => {
	return (
		<div className='line-layout'>
			<MotionComponent
				whileInView={{
					opacity: [0.7, 0.9, 0.7, 1],
					filter: [
						"brightness(1) hue-rotate(0deg)",
						"brightness(2) hue-rotate(60deg)",
						"brightness(1) hue-rotate(90deg)",
						"brightness(2) hue-rotate(60deg)",
						"brightness(1) hue-rotate(0deg)",
					],
				}}
				transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", repeatDelay: 0 }}
				className={cn("relative isolate h-full [grid-area:line] max-lg:hidden", LineClasses)}>
				{!HideSymbol && <Code className='absolute right-0 z-10 translate-x-[calc(50%-3px)] rounded-full backdrop-blur-3xl' />}
				<div className='z-0 ml-auto h-full w-1 bg-gradient-to-t from-[#245F00] to-[#55D163]'></div>
			</MotionComponent>
			<div className={cn("[grid-area:main] lg:pl-16", className, "mt-0")}>
				{heading && (
					<div>
						{/* <Code className='mx-auto  lg:hidden' /> */}
						{/* <Code className='h-10 w-10 rounded-full backdrop-blur-lg ' /> */}
						<Image src={neon} alt='' className='mx-auto h-14 w-14 rounded-full  lg:hidden' />
						<MotionComponent
							as='h2'
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ margin: "300px 0px 0px 0px" }}
							className='primary-heading mt-1.5 w-fit max-lg:mx-auto max-lg:mb-0 xl:mb-10'>
							{heading}
						</MotionComponent>
					</div>
				)}
				{children}
			</div>
		</div>
	);
};

export default LineLayout;
