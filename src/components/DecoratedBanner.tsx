import React from "react";
import SectionHeading from "./SectionHeading";
import { DecoratedBannerProps } from "../types/types";
import Button from "./Button";
const DecoratedBanner = ({ title, description, btnText }: DecoratedBannerProps) => {
	return (
		<section className='bg-noise before:white-gradient relative my-20 grid w-full items-center justify-center  gap-[60px] overflow-hidden before:absolute before:-z-10 before:h-full before:w-full  after:absolute after:left-0 after:top-0 after:-z-50 after:h-full after:w-full after:bg-dark '>
			{/* rings */}
			<div className='circle ring-color absolute -left-[350px] -top-[270px] -z-20 grid aspect-square w-[446px] place-items-center rounded-full blur-md'>
				<div className='aspect-square w-[calc(100%-100px)] rounded-full bg-dark'></div>
			</div>
			<div className='circle ring-color absolute -bottom-[276px] -right-[270px] -z-20 grid aspect-square w-[446px] place-items-center rounded-full blur-md'>
				<div className='aspect-square w-[calc(100%-100px)] rounded-full bg-dark'></div>
			</div>
			{/* rings */}

			<SectionHeading title={title} description={description} className='z-50 mt-[44px] gap-[40px] px-3 pt-[70px] [&>*]:text-white' />
			<Button variant='Primary' text={btnText} className='mx-auto mb-[62px] md:mb-[53px] lg:mb-[68px] xl:mb-[117px]' />
		</section>
	);
};

export default DecoratedBanner;
