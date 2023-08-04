import cn from "@/utils/cn";
import Image from "next/image";
import React from "react";
import MotionComponent from "./MotionComponent";

const GlassCard = (props: { heading: string; ImageClasses?: string; className?: string; image: any; delay?: number }) => {
	return (
		<MotionComponent
			initial={{ opacity: 0, y: 50, scale: 0 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.65, delay: props.delay ?? 0, type: "spring" }}
			viewport={{ margin: "50px", once: false }}
			className={cn(
				"flex w-fit flex-col gap-3 rounded-[10px] border-[0.5px] border-white/20 bg-white/[0.05] p-2.5 text-center backdrop-blur md:gap-8 md:p-3 lg:p-4",
				props.className
			)}>
			<div className='max-md:text-xs'>{props.heading}</div>
			<Image className={cn("mx-auto mb-4 h-[40px] w-[80px] md:h-full md:max-h-[60px] md:w-[120px]", props.ImageClasses)} src={props.image} alt='' />
		</MotionComponent>
	);
};

export default GlassCard;
