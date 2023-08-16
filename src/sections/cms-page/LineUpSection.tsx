"use client";
import { useEffect, useState } from "react";
import cn from "@/utils/cn";

import ChevronIcon from "../../../public/assets/icons/Chevron";
import DarkLightImage from "@/components/DarkLightImage";
import useEmblaCarousel from "embla-carousel-react";
import useMatchesMedia from "@/hooks/useMatchesMedia";
import { CMS_DETAILS as CMS_DETAILS_IMAGES } from "@/utils/cms-data";
import { useTranslation } from "@/app/i18n/client";

const LineUpSection = (props: any) => {
	const { t } = useTranslation(props.lng, "cmsServices");
	let CMS_DETAILS: { heading: string; description: string; image: any }[] = t("lineups", { returnObjects: true });

	const [emblaRef, emblaApi] = useEmblaCarousel();

	let matches1014 = useMatchesMedia("min-width:1014px");
	const [indexOfCMS, setIndexOfCMS] = useState(0);
	let activeCMS = CMS_DETAILS[indexOfCMS];

	function moveRight() {
		setIndexOfCMS((prev) => (prev === CMS_DETAILS.length - 1 ? prev : prev + 1));
	}
	function moveLeft() {
		setIndexOfCMS((prev) => (prev === 0 ? prev : prev - 1));
	}

	useEffect(() => {
		emblaApi?.scrollTo(indexOfCMS);
	}, [indexOfCMS, emblaApi]);
	return (
		<section className='section-spacing-p section-height'>
			<div className='mx-auto  mb-16 grid w-full max-w-[90%] items-center justify-center justify-items-center overflow-x-hidden py-16 text-center'>
				<h2 className='primary-heading mb-[65px] '>{t("lineups-heading.heading")}</h2>
				<div className='relative mx-auto flex h-[calc(100%+1.5rem)] w-full'>
					<div
						ref={!matches1014 ? emblaRef : null}
						className='scroll-bar-hide mx-auto flex h-full  w-[60%] justify-start gap-[43px]  overflow-hidden scroll-smooth md:gap-[86px] lg:justify-center lg:gap-3 '>
						<div data-swiper-slide='cms-lineups' className='flex w-full grid-cols-5 gap-2.5 lg:grid'>
							{CMS_DETAILS.map((detail, index) => (
								<button
									key={detail.heading}
									onClick={() => setIndexOfCMS(index)}
									className={cn(
										"relative isolate  rounded-lg  text-[16px]/[19.39px] transition-colors active:scale-[0.99]",
										"max-lg:min-h-[3rem] max-lg:shrink-0 max-lg:grow-0 max-lg:basis-full   max-lg:text-center   max-lg:before:absolute max-lg:before:top-10 max-lg:before:h-0.5 max-lg:before:w-full max-[320px]:w-fit",
										"lg:grow lg:border lg:border-white/20  lg:bg-[#eee] lg:p-1 lg:text-xl lg:backdrop-blur lg:dark:bg-gray-30",
										detail.heading === activeCMS.heading && "lg:pink-gradient max-lg:rounded-none max-lg:border-b-2 max-lg:border-b-pink-500"
									)}>
									{detail.heading}
								</button>
							))}
						</div>
					</div>

					<button
						disabled={indexOfCMS === 0}
						onClick={() => {
							moveLeft();
							emblaApi?.scrollPrev();
						}}
						className={cn(
							"absolute left-4 top-1/2 z-10 flex -translate-y-[calc(50%-(1.5rem/2))] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-light p-2 transition-transform active:scale-[0.97] active:opacity-60 dark:bg-dark lg:hidden"
						)}>
						<ChevronIcon className='pointer-events-none h-5 w-5 -translate-x-0.5 rotate-180 text-banner-bg' />
					</button>
					<button
						disabled={indexOfCMS === CMS_DETAILS.length - 1}
						onClick={() => {
							moveRight();
							emblaApi?.scrollNext();
						}}
						className={cn(
							"absolute right-4 top-1/2 z-10 flex -translate-y-[calc(50%-(1.5rem/2))] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-light p-2 transition-transform active:scale-[0.97] active:opacity-60 dark:bg-dark lg:hidden"
						)}>
						<ChevronIcon className=' pointer-events-none h-5 w-5 translate-x-0.5 text-banner-bg' />
					</button>
				</div>
				<div
					className='mt-[77px] grid grid-cols-1 justify-center justify-items-center gap-5 rounded-lg bg-[#eee] px-[30px]  py-5 dark:bg-gray-30 
				max-md:w-[80%]
				md:gap-10 md:py-[42px] lg:px-[54px] lg:py-[30px]'>
					<DarkLightImage
						darkVisibleImage={CMS_DETAILS_IMAGES[indexOfCMS].darkImage}
						lightVisibleImage={CMS_DETAILS_IMAGES[indexOfCMS].lightImage}
						alt={activeCMS.heading}
						className='h-[65px] w-[65px] max-lg:mx-auto'
					/>
					<p className='text-center text-[15px]/[30px] font-350 dark:text-white  md:text-[16px]/[35px] lg:mr-16 '>{activeCMS.description}</p>
				</div>
			</div>
		</section>
	);
};

export default LineUpSection;
