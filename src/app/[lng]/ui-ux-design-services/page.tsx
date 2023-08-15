import HeroOverlay from "@/components/HeroOverlay";
import HeroSection from "@/components/HeroSection";
import overlay from "../../../../public/assets/images/ui-ux-hero-overlay.svg";
import Heading from "@/components/SectionHeading";
import { Features as FEATURES_IMAGES, PROCESSES, faqQuestions } from "@/utils/ui-ux-data";
import FeatureCard from "@/components/FeatureCard";
import DecoratedBanner from "@/components/DecoratedBanner";
import TestimonialSection from "@/components/TestimonialSection";
import ProcessCard from "@/components/ProcessCard";
import { SPECIALITIES as SPECIALITIES_IMAGES } from "@/utils/ui-ux-data";
import Banner from "@/components/Banner";
import FaqSection from "@/components/FaqSection";
import Grid1x2 from "@/components/Grid1x2";
import white from "../../../../public/assets/images/white520.png";

import CarourselSection from "@/sections/ui-ux-page/CarourselSection";
import ProcessSection from "@/sections/ui-ux-page/ProcessSection";
import Main from "@/components/Main";
import type { Metadata } from "next";
import { useTranslation } from "@/app/i18n";

export const metadata: Metadata = {
	title: "UI/UX Design Services",
	description:
		"We specialize in crafting exceptional User Interface and User Experience (UI/UX) designs that captivate users, enhance engagement, and drive success. Experience the transformative power of our UI/UX design services and unlock your digital potential",
};
const page = async ({ params: { lng } }: any) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng, "uiUxServices");
	let FEATURES: { heading: string; description: string; image: any }[] = t("features", { returnObjects: true });
	let SPECIALITIES: { name: string; description: string; image: any }[] = t("specialities", { returnObjects: true });

	return (
		<Main data-page='UI/UX Services' key='UI/UX Services'>
			<HeroOverlay overlay={overlay} transparentOverlayClasses='dark:to-80% bg-gradient-to-br' />

			{/* HERO SECTION */}
			<HeroSection heading={t("hero-heading")} gradientText={t("hero-gradient")} description={t("hero-tag")} btnText={t("hero-btn-text")} />
			{/* FEATURES SECTION */}
			<Heading
				className='section-spacing-p section-height w-full gap-[40px] px-3 [--pb:100px]'
				title={t("features-heading.heading")}
				gradientText={t("features-heading.gradient-text")}
				description={t("features-heading.description")}>
				<div className='mx-auto mt-8 grid w-full grid-cols-[minmax(100px,var(--max-card-w))] justify-center gap-[23px] [--max-card-w:550px] lg:grid-cols-[minmax(300px,var(--max-card-w))_minmax(300px,var(--max-card-w))] min-[1600px]:[--max-card-w:641px]'>
					{FEATURES.map(({ heading, description }, index) => (
						<FeatureCard key={heading} title={heading} image={FEATURES_IMAGES[index].image} description={description} />
					))}
				</div>
			</Heading>
			{/* BANNER SECTION */}
			<DecoratedBanner
				quoteLink='ui-ux'
				title={t("decorated-banner.heading")}
				description={t("decorated-banner.description")}
				btnText={t("decorated-banner.btn-text")}
			/>
			{/* SLIDER SECTION */}
			<CarourselSection lng={lng} />
			<Grid1x2 as='section' title={t("grid-section.heading")} content={t("grid-section.description")} image={white} className='section-spacing-p' />
			<ProcessSection lng={lng} />
			<TestimonialSection lng={lng} />
			{/* CHOOSEUS SECTION */}
			<Heading
				title={t("specialities-heading.heading")}
				gradientText={t("specialities-heading.gradient-text")}
				description={t("specialities-heading.description")}
				gap='3rem'
				className='section-spacing-p px-3'>
				<div className='mt-[63px] flex w-full   shrink grow-0 basis-[300px] flex-wrap justify-center gap-[70px] md:mt-[75px] lg:mt-[180px] lg:gap-[75px] xl:mt-[95px] xl:gap-[95px]'>
					{SPECIALITIES.map((speciality, index) => (
						<ProcessCard
							title={speciality.name}
							darkVisibleImage={SPECIALITIES_IMAGES[index].image}
							gradientTitle={true}
							// darkImage={black}
							description={speciality.description}
							key={speciality.name}
							card='center-aligned'
							className='[&_p]:!text-primary-dark dark:[&_p]:!text-primary-light'
						/>
					))}
				</div>
			</Heading>
			<Banner heading={t("banner.heading")} btnText={t("banner.btn-text")} />
			<FaqSection lng={lng} faqQuestions={t("faq-questions", { returnObjects: true })} />
		</Main>
	);
};

export default page;
