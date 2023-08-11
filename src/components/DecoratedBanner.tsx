"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { DecoratedBannerProps } from "../types/types";
import Button from "./Button";
import cn from "@/utils/cn";
import QuestionsSection from "@/sections/questions/QuestionsSection";
import { QUESTIONS } from "@/utils/questions-data";
import Xmark from "../../public/assets/icons/Xmark";
import { createPortal } from "react-dom";
const DecoratedBanner = ({ title, description, btnText, variant, className, HideRings = false, BannerColor, quoteLink }: DecoratedBannerProps) => {
	const [surveyOpen, setSurveyOpen] = useState(false);

	function handleModalOpen() {
		setSurveyOpen(true);
	}
	function handleModalClose() {
		setSurveyOpen(false);
	}

	useEffect(() => {
		if (surveyOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [surveyOpen]);

	return (
		<>
			{surveyOpen &&
				quoteLink &&
				createPortal(
					<div className='fixed top-0 z-50 h-full w-screen overflow-y-auto overflow-x-hidden bg-dark/80   px-4 backdrop-blur-md'>
						<Xmark className='absolute -right-10 top-10 h-5 w-5' />
						<div className='relative isolate flex h-full w-full items-center justify-center '>
							<div className='absolute inset-0  h-full w-full' onClick={handleModalClose}></div>
							<QuestionsSection
								closeModal={handleModalClose}
								QUESTIONS={QUESTIONS[quoteLink]}
								className='glass m-10 min-h-[90%] gap-5 bg-light p-8 dark:bg-dark [&>*]:my-0 [&_button]:my-0 '
							/>
						</div>
					</div>,
					document.body
				)}
			<section
				style={{ "--decorated-banner-color": BannerColor } as React.CSSProperties}
				className={cn(
					"before:white-gradient group relative isolate my-20 grid w-full items-center justify-center gap-[40px] overflow-hidden py-8 before:absolute before:-z-10 before:h-full before:w-full",
					"after:absolute after:left-0 after:top-0 after:-z-50 after:h-full after:w-full after:bg-[--decorated-banner-color]",
					className
				)}>
				{/* rings */}
				{!HideRings && (
					<>
						<div className='circle  ring-color RotateAndSlideOpposite absolute -left-[350px] -top-[300px] -z-20 grid aspect-square w-[446px] place-items-center rounded-full  blur-md duration-[15s] md:-left-[300px] md:-top-[250px] '>
							<div className='aspect-square w-[calc(100%-var(--inner-circle-width))] rounded-full bg-[#fafafa] [--inner-circle-width:140px] dark:bg-dark md:[--inner-circle-width:100px]'></div>
						</div>
						<div className='circle ring-color RotateAndSlide absolute -bottom-[300px] -right-[320px] -z-20 grid aspect-square w-[446px] rotate-180 place-items-center rounded-full  blur-md duration-[15s]  md:-bottom-[250px] md:-right-[270px]'>
							<div className='aspect-square w-[calc(100%-var(--inner-circle-width))] rounded-full bg-[#fafafa] [--inner-circle-width:140px] dark:bg-dark md:[--inner-circle-width:100px]'></div>
						</div>
					</>
				)}
				{/* rings */}

				<SectionHeading
					title={title}
					description={description}
					className='z-50 gap-[40px] px-3   [&_h2]:text-[26px] [&_h2]:text-white [&_p]:text-[16px]'
				/>
				<Button
					onClick={handleModalOpen}
					variant={variant ?? "Primary"}
					text={btnText}
					className={cn(
						"mx-auto text-[14px]"
						//, "mb-[62px] md:mb-[53px] lg:mb-[68px] xl:mb-[117px]"
					)}
				/>
			</section>
		</>
	);
};

export default DecoratedBanner;
