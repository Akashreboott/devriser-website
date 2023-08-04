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
		<MotionComponent
			initial={{ opacity: 0, x: 50, y: 50 }}
			whileInView={{ opacity: 1, y: 0, x: 0 }}
			transition={{ duration: 0.5, delay: props.delay ?? 0 }}
			className={cn(
				"glass grid p-6",
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
					"h-[160px] object-cover md:h-[240px] md:w-full"
				)}
			/>
			<div className={cn("mt-6 flex flex-col gap-5 ")}>
				<h3 className='text-[15px]/[33px] font-semibold md:text-[20px]/[43px]'>{props.heading}</h3>
				<p className='max-w-[95%] text-[13px] leading-6 md:text-[16px] md:leading-7'>{props.content}</p>
				<div className='grid gap-1'>
					<span className='font-semibold'>Ibrahim</span>
					<span>June 27, 2023</span>
				</div>
			</div>
		</MotionComponent>
	);
};

export default BlogCard;
