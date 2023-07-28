import HeroSection from "@/sections/cms-page/HeroSection";
import Frame from "./../../public/assets/images/bg-frame.svg";
import illustration from "./../../public/assets/images/dark hero illustration.svg";
import Lightillustration from "./../../public/assets/images/light hero illustration.svg";
import LineUpSection from "@/sections/cms-page/LineUpSection";
import ProcessSection from "@/sections/cms-page/ProcessSection";
import ChooseUsSection from "@/sections/cms-page/ChooseUsSection";
import TestimonialSection from "@/sections/cms-page/TestimonialSection";
import FaqSection from "@/sections/cms-page/FaqSection";
import FeaturesSection from "@/sections/cms-page/FeaturesSection";
import WebsiteTypesSection from "@/sections/cms-page/WebsiteTypesSection";
import DecoratedBanner from "@/components/DecoratedBanner";
import Banner from "@/components/Banner";
import HeroOverlay from "@/components/HeroOverlay";
import Main from "@/components/Main";

export default function Home() {
	return (
		<Main data-page='cms'>
			<HeroOverlay Overlay={Frame} className='w-screen lg:w-[70vw]' Opacity={0.25} TransparentGradientClasses='bg-gradient-to-b to-light to-90% ' />
			<HeroSection
				LightModeImage={Lightillustration}
				DarkModeImage={illustration}
				heading="Advanced CMS Development Services  For Maximizing Your Website's Potential"
				gradientText='CMS Development Services'
				description="We optimize the true power of your business with our advanced CMS development services. Our CMS team handles every aspect of your
					website's creation, ensuring a seamless and dynamic online presence that maximizes your website's potential"
				btnText="Let's Begin"
			/>
			<FeaturesSection />

			<DecoratedBanner
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
			<FaqSection />
		</Main>
	);
}
