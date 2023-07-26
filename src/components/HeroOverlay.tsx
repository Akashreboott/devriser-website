import cn from "@/utils/cn";
import Image from "next/image";
import React from "react";

const HeroOverlay = (props: { Overlay: any; className?: string; Opacity?: number; OverlayGradientClasses?: string }) => {
	const commonClasses = " h-[110vh] w-screen lg:w-[70vw]";
	// const GradientClasses = props.OverlayClasses ? ""
	return (
		<div className={cn("absolute left-0 top-0  -z-10 grid grid-cols-2 overflow-hidden", commonClasses, props.className)}>
			<div
				style={{ opacity: props.Opacity ?? "0.4" }}
				className='absolute -left-1/4 -top-1/3 aspect-square w-[543px] rounded-full bg-[--hero-overlay-color]   blur-[100px]'></div>
			<div
				className={cn(
					"-z-20  bg-gradient-to-br from-transparent to-light/70 to-70%  [grid-column:1/3] dark:to-dark dark:to-90% md:dark:to-40% ",
					commonClasses,
					props.OverlayGradientClasses
				)}></div>
			<Image src={props.Overlay} alt='' className=' absolute left-0 top-0 -z-30 h-full w-full object-cover' />
		</div>
	);
};

export default HeroOverlay;
