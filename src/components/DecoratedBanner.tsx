import React from "react";
import SectionHeading from "./SectionHeading";
import { DecoratedBannerProps } from "../types/types";
import Button from "./Button";
import cn from "@/utils/cn";
const DecoratedBanner = ({ title, description, btnText, variant, className, HideRings = false, BannerColor = "#090a0b" }: DecoratedBannerProps) => {
	return (
		<section
			style={{ "--decorated-banner-color": BannerColor } as React.CSSProperties}
			className={cn(
				"before:white-gradient group relative isolate my-20 grid w-full items-center justify-center gap-[40px] overflow-hidden py-8 before:absolute before:-z-10 before:h-full before:w-full  after:absolute after:left-0 after:top-0 after:-z-50 after:h-full after:w-full after:bg-[--decorated-banner-color]",
				className
			)}>
			{/* rings */}
			{!HideRings && (
				<>
					<div className='circle  ring-color RotateAndSlideOpposite absolute -left-[350px] -top-[300px] -z-20 grid aspect-square w-[446px] place-items-center rounded-full  blur-md duration-[15s] md:-left-[300px] md:-top-[250px] '>
						<div className='aspect-square w-[calc(100%-var(--inner-circle-width))] rounded-full bg-dark [--inner-circle-width:140px] md:[--inner-circle-width:100px]'></div>
					</div>
					<div className='circle ring-color RotateAndSlide absolute -bottom-[300px] -right-[320px] -z-20 grid aspect-square w-[446px] rotate-90 place-items-center rounded-full  blur-md duration-[15s]  md:-bottom-[250px] md:-right-[270px]'>
						<div className='aspect-square w-[calc(100%-var(--inner-circle-width))] rounded-full bg-dark [--inner-circle-width:140px] md:[--inner-circle-width:100px]'></div>
					</div>
				</>
			)}
			{/* rings */}

			<SectionHeading
				title={title}
				description={description}
				className='z-50 gap-[40px] px-3 [&>*]:text-white   [&_h2]:text-[26px] [&_p]:text-[16px]'
			/>
			<Button
				variant={variant ?? "Primary"}
				text={btnText}
				className={cn(
					"mx-auto text-[14px]"
					//, "mb-[62px] md:mb-[53px] lg:mb-[68px] xl:mb-[117px]"
				)}
			/>
		</section>
	);
};

export default DecoratedBanner;
