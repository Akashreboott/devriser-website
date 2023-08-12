import HeroOverlay from "@/components/HeroOverlay";
import Main from "@/components/Main";
import React from "react";
import Pattern from "../../../public/assets/images/managed-services-pattern.svg";
import HeroSection from "@/components/HeroSection";
import DecoratedBanner from "@/components/DecoratedBanner";
import OfferingsSection from "@/sections/managed-services-page/OfferingsSection";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import StatsSection from "@/sections/managed-services-page/StatsSection";
import type { Metadata } from "next";
import { faqQuestions } from "@/utils/managed-services-data";

export const metadata: Metadata = {
	title: " Managed IT services | Cyber security services | DevRiser",
	description:
		"Achieve flawless operations with our Managed Services. Let us handle your digital infrastructure while you focus on business activities",
};
const ManagedServices = () => {
	return (
		<Main data-page='managed-services' key='managed-services'>
			<HeroOverlay Overlay={Pattern} TransparentGradientClasses='dark:to-dark opacity-70' GradientClasses='-left-1' />
			<HeroSection
				heading='Achieve More, Worry Less Managed Services For Flawless Operations'
				description='Achieve More, Worry Less with Our Expert Managed Services for Your Digital Infrastructure.'
				btnText="Let's Begin"
				gradientText='Managed Services'
				GradientTextColor='[background-image:linear-gradient(103.61deg,_#00d085_37.8%,_#1910be_170.78%)]'
			/>
			<StatsSection className='my-14' />

			<DecoratedBanner
				quoteLink='managed-services'
				title='Take Control Of Your Digital Success Today !'
				className='[&_p]:!text-white'
				btnText='Start Your Journey'
				variant='Secondary'
				description='Stay ahead of the curve while we handle your IT needs, allowing you to stay laser-focused on fueling your business growth'
				BannerColor='var(--banner-bg)'
				HideRings={true}
			/>

			<OfferingsSection />

			<TestimonialSection />

			<FaqSection faqQuestions={faqQuestions} />
		</Main>
	);
};

export default ManagedServices;
