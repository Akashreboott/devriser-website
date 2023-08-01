import cn from "@/utils/cn";
import Image from "next/image";
import React from "react";

const HeroOverlay = (props: {
	Overlay: any;
	className?: string;

	TransparentGradientClasses?: string;
	GradientClasses?: string;
}) => {
	const commonClasses = "h-[550px] w-[min(1728px,100vw)]";

	return (
		<div className={cn("absolute  left-0 top-0  -z-10 grid grid-cols-2 overflow-hidden", commonClasses, props.className)}>
			<div
				className={cn(
					"opacity-0.4 absolute -left-1/4 -top-1/3 aspect-square w-[543px] rounded-full  bg-[--hero-overlay-color]  blur-[100px]",
					props.GradientClasses
				)}></div>
			<div
				className={cn(
					"-z-20  bg-gradient-to-br from-transparent to-light/70 to-70%  [grid-column:1/3] dark:to-dark dark:to-90% md:dark:to-40% ",
					commonClasses,
					props.TransparentGradientClasses
				)}></div>
			<Image src={props.Overlay} alt='' className={cn("absolute left-0 top-0 -z-30 object-cover", commonClasses, props.className)} />
		</div>
	);
};

export default HeroOverlay;
