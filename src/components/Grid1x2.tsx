import Image from "next/image";
import React from "react";
import cn from "@/utils/cn";
import Button from "./Button";
const Grid1x2 = ({
	className,
	title,
	content,
	image,
	btnText,
}: {
	className?: string;
	title: string;
	content: string;
	image: any;
	btnText?: string;
}) => {
	return (
		<div
			className={cn(
				"layout-1x2  mx-4 mt-14 grid grid-cols-1 items-center justify-between justify-items-center gap-10",
				"max-md:text-center md:mt-20 md:grid-cols-[1fr_minmax(280px,1fr)] md:gap-12",
				className
			)}>
			<div className='first flex flex-col gap-2 md:gap-10 md:pl-16 md:text-left'>
				<h3 className='text-[18px]/[52px] font-semibold md:text-[24px]/[43px]'>{title}</h3>
				<p className='text-p14  font-350 md:text-p16 '>{content}</p>
				{btnText && <Button text={btnText} className='mt-6 w-fit max-md:mx-auto' variant='Secondary' />}
			</div>
			<Image src={image} alt='placeholder' className='second h-[335px] w-full max-w-[520px] rounded-md object-cover' />
		</div>
	);
};

export default Grid1x2;
