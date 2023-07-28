import Image from "next/image";
import React from "react";
import cn from "@/utils/cn";
const Grid1x2 = ({ className, title, content, image }: { className?: string; title: string; content: string; image: any }) => {
	return (
		<div
			className={cn(
				"mx-4 grid grid-cols-1 items-center justify-between justify-items-center gap-12 max-md:text-center md:grid-cols-[1fr_minmax(280px,1fr)]",
				className
			)}>
			<div className='first flex flex-col gap-10 md:pl-16'>
				<h3 className='secondary-heading'>{title}</h3>
				<p className='text-p14 font-350 md:text-p16 lg:text-p18 '>{content}</p>
			</div>
			<Image src={image} alt='placeholder' className='second h-[335px] w-full max-w-[520px] rounded-md object-cover' />
		</div>
	);
};

export default Grid1x2;
