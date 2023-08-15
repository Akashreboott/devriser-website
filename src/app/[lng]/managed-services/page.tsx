import HeroOverlay from "@/components/HeroOverlay";
import Main from "@/components/Main";
import React from "react";
import Pattern from "../../../../public/assets/images/managed-services-pattern.svg";
import HeroSection from "@/components/HeroSection";
import DecoratedBanner from "@/components/DecoratedBanner";
import OfferingsSection from "@/sections/managed-services-page/OfferingsSection";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import StatsSection from "@/sections/managed-services-page/StatsSection";
import type { Metadata } from "next";
import { useTranslation } from "@/app/i18n";

export const metadata: Metadata = {
	title: " Managed IT services | Cyber security services | DevRiser",
	description:
		"Achieve flawless operations with our Managed Services. Let us handle your digital infrastructure while you focus on business activities",
};
const ManagedServices = async ({ params: { lng } }: any) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng, "managedServices");

	return (
		<Main data-page='managed-services' key='managed-services'>
			<HeroOverlay overlay={Pattern} transparentOverlayClasses='dark:to-dark opacity-70' gradientClasses='-left-1' />
			<HeroSection
				heading={t("hero-heading")}
				gradientText={t("hero-gradient")}
				description={t("hero-tag")}
				btnText={t("hero-btn-text")}
				GradientTextColor='[background-image:linear-gradient(103.61deg,_#00d085_37.8%,_#1910be_170.78%)]'
			/>
			<StatsSection lng={lng} className='section-spacing-p w-full [--pb:100px] [--pt:100px]' />

			<DecoratedBanner
				quoteLink='managed-services'
				title={t("decorated-banner.heading")}
				description={t("decorated-banner.description")}
				btnText={t("decorated-banner.btn-text")}
				className='[&_h2]:!text-white [&_p]:!text-white'
				variant='Secondary'
				BannerColor='var(--banner-bg)'
				HideRings={true}
			/>

			<OfferingsSection lng={lng} />

			<TestimonialSection lng={lng} />

			<FaqSection lng={lng} faqQuestions={t("faq-questions", { returnObjects: true })} />
		</Main>
	);
};

export default ManagedServices;
