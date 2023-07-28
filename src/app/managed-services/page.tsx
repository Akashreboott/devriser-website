import HeroOverlay from "@/components/HeroOverlay";
import Main from "@/components/Main";
import React from "react";
import Pattern from "../../../public/assets/images/managed-services-pattern.svg";
import HeroSection from "@/sections/cms-page/HeroSection";
import DecoratedBanner from "@/components/DecoratedBanner";
import OfferingsSection from "@/sections/managed-services-page/OfferingsSection";
import TestimonialSection from "@/sections/cms-page/TestimonialSection";
import FaqSection from "@/sections/cms-page/FaqSection";
import StatsSection from "@/sections/managed-services-page/StatsSection";
const ManagedServices = () => {
	return (
		<Main data-page='managed-services'>
			<HeroOverlay Overlay={Pattern} TransparentGradientClasses='dark:to-dark opacity-70' GradientClasses='-left-1' />
			<HeroSection
				heading='Achieve More, Worry Less Managed Services For Flawless Operations'
				description='Achieve More, Worry Less with Our Expert Managed Services for Your Digital Infrastructure.'
				btnText="Let's Begin"
			/>
			<StatsSection />

			<DecoratedBanner
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

			<FaqSection />
		</Main>
	);
};

export default ManagedServices;
