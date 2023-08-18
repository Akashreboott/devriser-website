import cn from "@/utils/cn";
import Image from "next/image";
import React from "react";
import MotionComponent from "./MotionComponent";
interface props {
	heading: string;
	image: any;
	content: string;
	delay?: number;
	className?: string;
	// variant: "small" | "big";
}

const BlogCard = ({ ...props }: props) => {
	return (
		<div
			className={cn(
				"glass grid p-4 transition-colors duration-300 hover:border-white/50 lg:p-5",
				// variant === "small" ? "grid-cols-1 gap-6" : "grid-cols-2 gap-8",
				"max-md:flex-col",
				props.className
			)}>
			<Image
				src={props.image}
				alt=''
				className={cn(
					"rounded-lg",
					// variant === "big" && "ml-auto h-[350px] w-full object-contain",
					"h-[160px] w-full object-cover md:h-[240px] md:w-full"
				)}
			/>
			<div className={cn("mt-6 flex flex-col gap-5 ")}>
				<h3 className='text-p15 font-semibold md:text-p20'>{props.heading}</h3>
				<p className='max-w-[95%] text-[13px] font-350 leading-6 md:text-p16 md:leading-7'>{props.content}</p>
				<div className='grid gap-1'>
					<span className='font-semibold'>Ibrahim</span>
					<span>June 27, 2023</span>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
