import Main from "@/components/Main";
import HeroSection from "@/components/HeroSection";
import { TECH_STACK } from "@/utils/web-development-data";
import HeroImgDark from "../../../../public/assets/images/web-development-illustration.svg";

import HeroImgLight from "../../../../public/assets/images/web-development-illustration-light.svg";
import Pattern from "../../../../public/assets/images/webservices-pattern.svg";
import Cone from "./../../../../public/assets/images/OfferingSectionWebDev";
import React from "react";
import HeroOverlay from "@/components/HeroOverlay";
import TestimonialSection from "@/components/TestimonialSection";
import DecoratedBanner from "@/components/DecoratedBanner";
import Heading from "@/components/SectionHeading";
import { OFFERINGS as OFFERINGS_IMAGE } from "@/utils/web-development-data";
import Grid1x2 from "@/components/Grid1x2";
import Banner from "@/components/Banner";
import FaqSection from "@/components/FaqSection";
import ProcessSection from "@/sections/web-development/ProcessSection";
import Image from "next/image";
import { useTranslation } from "@/app/i18n";

const Page = async ({ params: { lng } }: any) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t, i18n } = await useTranslation(lng, "webDevelopment");

	const OFFERINGS: { heading: string; content: string; image: any }[] = t("offerings", { returnObjects: true });

	return (
		<Main data-page='web-development-services' key='web-development-services'>
			<HeroOverlay
				overlay={Pattern}
				className='h-[550px]'
				gradientClasses='left-0'
				transparentOverlayClasses='md:dark:to-90% bg-gradient-to-br to-90%'
				patternImgClasses='object-contain '
			/>
			<HeroSection
				heading={t("hero-heading")}
				gradientText={t("hero-gradient")}
				description={t("hero-tag")}
				btnText={t("hero-btn-text")}
				DarkVisibleImage={HeroImgDark}
				LightVisibleImage={HeroImgLight}
			/>

			<Heading
				title={t("offerings-heading.heading")}
				gradientText={t("offerings-heading.gradient-text")}
				className='section-spacing-p section-height gap-12 [--pb:100px]'>
				<div className='h-full max-h-[550px] w-full max-w-[800px] px-2'>
					<Cone className='h-full w-full text-dark dark:text-white' />
				</div>
			</Heading>

			<DecoratedBanner
				quoteLink='web-development'
				title={t("decorated-banner.heading")}
				description={t("decorated-banner.description")}
				btnText={t("decorated-banner.btn-text")}
				className='section-spacing-p h-fit'
			/>

			<Heading
				title={t("custom-website.section-heading.heading")}
				className='section-spacing-p section-height gap-20  [--pt:100px]'
				gradientText={t("custom-website.section-heading.gradient-text")}>
				<div className='flex flex-col items-center justify-center gap-6 px-3 md:flex-row md:items-start md:gap-10'>
					<span className='text-p26 font-semibold !leading-[35px] md:text-[30px]'>{t("custom-website.users-percentage")}</span>
					<div className='flex flex-col items-center gap-6 text-left'>
						<p className='flex w-full justify-between max-md:text-center'>{t("custom-website.content")}</p>
						<span className='max-md:text-center md:ml-auto'>{t("custom-website.source")}</span>
					</div>
				</div>
				<div>
					{OFFERINGS.map(({ heading, content }, index: number) => (
						<Grid1x2 key={heading} content={content} image={OFFERINGS_IMAGE[index].image} title={heading} className='layout-1x2 my-14 md:my-20' />
					))}
				</div>
			</Heading>

			<Heading
				title={t("technology-heading.heading")}
				gradientText={t("technology-heading.gradient-text")}
				className='section-spacing-p section-height max-w-6xl gap-12'>
				{TECH_STACK.map(({ field, techs }) => (
					<div key={field} className='group  flex w-[calc(100%-20px)] max-w-[80%] flex-col items-center gap-2'>
						<h3 className='mr-auto origin-left text-lg leading-[52px] transition-transform group-hover:scale-110 md:text-p24'>{field}</h3>
						{/* <div className='flex w-full flex-wrap  justify-center rounded border border-white px-4 py-4 [&>img]:mx-12'> */}
						<div className='flex w-full max-w-[var(--container-width)]  flex-wrap items-center justify-center gap-7 rounded-lg  border border-dark/[0.15] bg-white/[0.05] p-2 transition-all [--container-width:1280px] [--logo-width:8rem] [--space:0.6rem] group-hover:border-dark/[0.15] group-hover:shadow-md dark:border-white/10  group-hover:dark:border-white/30 md:p-1.5 md:[--space:1rem]  [&>img>*]:aspect-[7/1]  [&>img>*]:w-[var(--logo-width)]  [&>img]:mx-[var(--space)] [&>img]:my-[calc(var(--space)/2)]'>
							{techs.map((logo, index) => (
								<Image key={index} src={logo} className='h-8 w-8' alt='' />
							))}
						</div>
					</div>
				))}
			</Heading>

			<TestimonialSection lng={lng} />
			<ProcessSection lng={lng} />
			<Banner heading={t("banner-section.heading")} btnText={t("banner-section.btn-text")} />
			<FaqSection faqQuestions={t("faq-questions", { returnObjects: true })} />
		</Main>
	);
};

export default Page;

export async function generateMetadata({ params: { lng } }: { params: { lng: string } }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng, "webDevelopment");
	return {
		title: t("meta-title"),
		description: t("meta-description"),
	};
}
