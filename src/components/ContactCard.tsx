import cn from "@/utils/cn";
import Link from "next/link";
import React from "react";

import DarkLightImage from "./DarkLightImage";
import ArrowSmall from "@/assets/icons/ArrowSmall";
const ContactCard = (props: {
	heading: string;
	description: string;
	link?: [string, string];
	DarkVisibleImage?: any;
	LightVisibleImage?: any;
	imageClasses?: string;
	className?: string;
}) => (
	<div
		className={cn(
			"glass group grid justify-items-center gap-4  px-4 py-6 ",

			// "bg-light  dark:bg-gray-39",
			props.className
		)}>
		<DarkLightImage
			alt=''
			darkVisibleImage={props.DarkVisibleImage}
			lightVisibleImage={props.LightVisibleImage}
			className={cn("w-7/12", props.imageClasses)}
		/>
		<h3 className='font-semibold'>{props.heading}</h3>
		<p className='text-xs font-350'>{props.description}</p>
		{props.link && (
			<Link href={props.link[1]} className='mt-2 flex items-center justify-center gap-3 font-medium '>
				<span className='relative inline-block before:absolute before:bottom-0  before:h-[0.5px] before:w-full before:origin-center before:scale-0 before:bg-dark/70 before:transition-transform before:duration-[400ms] group-hover:before:scale-100 before:dark:bg-white'>
					{props.link[0]}
				</span>
				<ArrowSmall direction='right' className='moveX w-2.5 text-dark dark:text-white ' />
			</Link>
		)}
	</div>
);

export default ContactCard;
