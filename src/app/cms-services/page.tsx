import HeroSection from "@/components/HeroSection";
import Frame from "../../../public/assets/images/bg-frame.svg";
import illustration from "../../../public/assets/images/dark hero illustration.svg";
import Lightillustration from "../../../public/assets/images/light hero illustration.svg";
import LineUpSection from "@/sections/cms-page/LineUpSection";
import ProcessSection from "@/sections/cms-page/ProcessSection";
import ChooseUsSection from "@/sections/cms-page/ChooseUsSection";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/sections/cms-page/FeaturesSection";
import WebsiteTypesSection from "@/sections/cms-page/WebsiteTypesSection";
import DecoratedBanner from "@/components/DecoratedBanner";
import Banner from "@/components/Banner";
import HeroOverlay from "@/components/HeroOverlay";
import Main from "@/components/Main";
import type { Metadata } from "next";
import { faqQuestions } from "@/utils/cms-data";

export const metadata: Metadata = {
	title: "CMS Development Services| CMS web development services",
	description:
		"With our CMS development services, experience a seamless user experience as we create visually stunning and feature-rich websites using platforms like WordPress, Wix, Drupal, Webflow, and Shopify.",
};
export default function Home() {
	return (
		<Main data-page='cms' key='cms'>
			<HeroOverlay
				Overlay={Frame}
				className='w-screen lg:w-[70vw]'
				GradientClasses='opacity-25'
				TransparentGradientClasses='bg-gradient-to-b to-light to-90% '
			/>
			<HeroSection
				LightVisibleImage={Lightillustration}
				DarkVisibleImage={illustration}
				heading="Advanced CMS Development Services  For Maximizing Your Website's Potential"
				gradientText='CMS Development Services'
				description="Maximize your website's potential with our CMS development services and reflect the true value of your business."
				btnText="Let's Begin"
			/>
			<FeaturesSection />

			<DecoratedBanner
				quoteLink='cms-services'
				title='Crafting Websites For Your Unique Vision'
				description='Experience website creation artistry with our expert team at DevRiser, delivering websites tailored to your unique requirements'
				btnText='Get a quote'
			/>
			<LineUpSection />
			<WebsiteTypesSection />
			<ProcessSection />
			<TestimonialSection />
			<ChooseUsSection />
			<Banner heading="Let's Build Your Dream Website" btnText='Get in touch' />
			<FaqSection faqQuestions={faqQuestions} />
		</Main>
	);
}
