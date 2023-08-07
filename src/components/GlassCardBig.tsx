import cn from "@/utils/cn";
import Image from "next/image";
import React from "react";
import MotionComponent from "./MotionComponent";
interface props {
	heading: string;
	image: any;
	content: string;
	className?: string;
	delay?: number;
	variant: "small" | "big";
}

const GlassCardBig = ({ variant, ...props }: props) => {
	return (
		<div
			className={cn(
				"glass isolate z-0 grid h-[calc(100%-1px)] w-[calc(100%-1px)] ",
				// "border-none",
				// "after-overlay after:inset-[1px] after:-z-10 after:h-auto after:w-auto after:rounded-lg after:glass",
				// "before-overlay before:inset-0 before:-z-20 before:rounded-lg before:bg-gradient-to-br before:from-white/70 before:via-white/10  before:to-white/70  before:opacity-40 before:transition-opacity before:duration-300 hover:before:opacity-80",
				variant === "small" ? "grid-cols-1 gap-6" : "grid-cols-2 gap-2 md:gap-8",
				"",
				props.className
			)}>
			<div className={cn("flex flex-col gap-3 md:gap-6 ")}>
				<MotionComponent
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					as='h2'
					className='text-[18px]/[33px] font-semibold md:text-[22px]/[43px]'>
					{props.heading}
				</MotionComponent>
				<MotionComponent
					as='p'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: props.delay ?? 0 }}
					viewport={{ once: true }}
					className='leading-7 max-md:text-[14px] md:leading-9'>
					{props.content}
				</MotionComponent>
			</div>

			<Image
				src={props.image}
				alt=''
				className={cn(
					"rounded-lg",
					variant === "big" && "ml-auto h-[220px] w-full object-contain max-md:my-auto md:h-[350px]",
					variant === "small" && "h-[170px] w-full object-cover md:w-[365px]"
				)}
			/>
		</div>
	);
};

export default GlassCardBig;
