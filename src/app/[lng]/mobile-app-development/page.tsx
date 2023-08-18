import HeroOverlay from "@/components/HeroOverlay";
import Main from "@/components/Main";
import HeroSection from "@/components/HeroSection";
import React from "react";
import Pattern from "../../../../public/assets/images/mobile-development-pattern.svg";
import Placeholder from "../../../../public/assets/images/placeholder.png";
import Heading from "@/components/SectionHeading";
import ProcessCard from "@/components/ProcessCard";
import DecoratedBanner from "@/components/DecoratedBanner";
import Grid1x2 from "@/components/Grid1x2";
import ProcessSection from "@/sections/mobile-app-development/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import { TECH_STACK } from "@/utils/web-development-data";
import Image from "next/image";
import Banner from "@/components/Banner";
import FaqSection from "@/components/FaqSection";
import type { Metadata } from "next";
import { SERVICES as SERVICES_IMAGES } from "@/utils/mobile-app-data";
import { useTranslation } from "@/app/i18n";

const page = async ({ params: { lng } }: any) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng, "mobileDevelopment");
	let SOLUTIONS: { heading: string; description: string }[] = t("solutions", { returnObjects: true });
	let SERVICES: { heading: string; description: string; image: any }[] = t("services", { returnObjects: true });
	let TECHNOLOGIES: { name: string }[] = t("technologies", { returnObjects: true });

	return (
		<Main data-page='mobile-app-development'>
			<HeroOverlay
				overlay={Pattern}
				gradientClasses='md:left-0  dark:md:opacity-80 md:opacity-60 opacity-40'
				transparentOverlayClasses='bg-gradient-to-br md:to-70% dark:to-30%'
				className='top-0 opacity-100 dark:opacity-70 md:-left-[0.8rem]'
			/>
			<HeroSection heading={t("hero-heading")} gradientText={t("hero-gradient")} description={t("hero-tag")} btnText={t("hero-btn-text")} />

			<Heading
				gap='35px'
				className='section-spacing-p section-spacing-p min-h-section px-4  [--pb:100px]'
				title={t("solutions-heading.heading")}
				gradientText={t("solutions-heading.gradient-text")}
				description={t("solutions-heading.description")}>
				<div className='mt-20 grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center justify-items-center gap-10 lg:grid-cols-4 '>
					{SOLUTIONS.map(({ description, heading }) => (
						<ProcessCard key={heading} description={description} darkVisibleImage={Placeholder} title={heading} className='px-8' />
					))}
				</div>
			</Heading>

			<DecoratedBanner
				quoteLink='mobile-development'
				title={t("decorated-banner.heading")}
				description={t("decorated-banner.description")}
				btnText={t("decorated-banner.btn-text")}
			/>

			<Heading
				title={t("services-heading.heading")}
				gradientText={t("services-heading.gradient-text")}
				description={t("services-heading.description")}
				className='section-spacing-p  [--pt:100px]'
				gap='40px'>
				<div>
					{SERVICES.map(({ description, heading }, index) => (
						<Grid1x2 key={heading} image={SERVICES_IMAGES[index].image} content={description} title={heading} />
					))}
				</div>
			</Heading>
			<ProcessSection lng={lng} />
			<TestimonialSection lng={lng} />
			<Heading
				title={t("technology-heading.heading")}
				gradientText={t("technology-heading.gradient-text")}
				className='section-spacing-p section-height  max-w-6xl gap-12'>
				{TECHNOLOGIES.map(({ name }, index) => (
					<div key={name} className='group  flex w-[calc(100%-20px)] max-w-[80%] flex-col items-center gap-2'>
						<h3 className='mr-auto origin-left text-lg leading-[52px] transition-transform group-hover:scale-110 md:text-p24'>{name}</h3>
						{/* <div className='flex w-full flex-wrap  justify-center rounded border border-white px-4 py-4 [&>img]:mx-12'> */}
						<div className='flex w-full max-w-[var(--container-width)]  flex-wrap items-center justify-center gap-7 rounded-lg  border border-dark/[0.15] bg-white/[0.05] p-2 transition-all [--container-width:1280px] [--logo-width:8rem] [--space:0.6rem] group-hover:border-dark/[0.15] group-hover:shadow-md dark:border-white/10  group-hover:dark:border-white/30 md:p-1.5 md:[--space:1rem]  [&>img>*]:aspect-[7/1]  [&>img>*]:w-[var(--logo-width)]  [&>img]:mx-[var(--space)] [&>img]:my-[calc(var(--space)/2)]'>
							{TECH_STACK[index].techs.map((logo, index) => (
								<Image key={index} src={logo} className='h-8 w-8' alt='' />
							))}
						</div>
					</div>
				))}
			</Heading>
			<Banner heading={t("banner.heading")} btnText={t("banner.btn-text")} />
			<FaqSection lng={lng} faqQuestions={t("faq-questions", { returnObjects: true })} />
		</Main>
	);
};

export default page;

export async function generateMetadata({ params: { lng } }: { params: { lng: string } }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng, "mobileDevelopment");
	return {
		title: t("meta-title"),
		description: t("meta-description"),
	};
}
