import HeroSection from "@/sections/HeroSection";
import Image from "next/image";
import Frame from "./../../public/assets/images/bg-frame.svg";
import illustration from "./../../public/assets/images/dark hero illustration.svg";
import Lightillustration from "./../../public/assets/images/light hero illustration.svg";
import LineUpSection from "@/sections/LineUpSection";
import ProcessSection from "@/sections/ProcessSection";
import ChooseUsSection from "@/sections/ChooseUsSection";
import TestimonialSection from "@/sections/TestimonialSection";
import FaqSection from "@/sections/FaqSection";
import FeaturesSection from "@/sections/FeaturesSection";
import WebsiteTypesSection from "@/sections/WebsiteTypesSection";
import DecoratedBanner from "@/components/DecoratedBanner";
import Banner from "@/components/Banner";
import HeroOverlay from "@/components/HeroOverlay";

export default function Home() {
	return (
		<main className='relative mx-auto flex  w-full  max-w-[1728px] flex-col items-center overflow-x-hidden pb-24 [grid-area:main] [&>*]:shrink [&>*]:grow-0'>
			<HeroOverlay Overlay={Frame} OverlayGradientClasses='bg-gradient-to-b to-light to-90%' />
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
		</main>
	);
}
