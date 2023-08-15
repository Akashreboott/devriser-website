import HeroSection from "@/components/HeroSection";
import Frame from "../../../../public/assets/images/bg-frame.svg";
import illustration from "../../../../public/assets/images/dark hero illustration.svg";
import Lightillustration from "../../../../public/assets/images/light hero illustration.svg";
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
import { useTranslation } from "@/app/i18n";

export const metadata: Metadata = {
	title: "CMS Development Services| CMS web development services",
	description:
		"With our CMS development services, experience a seamless user experience as we create visually stunning and feature-rich websites using platforms like WordPress, Wix, Drupal, Webflow, and Shopify.",
};
export default async function Home({ params: { lng } }: any) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng, "cmsServices");

	return (
		<Main data-page='cms' key='cms'>
			<HeroOverlay
				overlay={Frame}
				className='w-screen lg:w-[70vw]'
				gradientClasses='opacity-25'
				transparentOverlayClasses='bg-gradient-to-b to-light to-90% '
			/>
			<HeroSection
				LightVisibleImage={Lightillustration}
				DarkVisibleImage={illustration}
				heading={t("hero-heading")}
				gradientText={t("hero-gradient")}
				description={t("hero-tag")}
				btnText={t("hero-btn-text")}
				className='section-spacing-p section-height'
			/>
			<FeaturesSection lng={lng} />

			<DecoratedBanner
				quoteLink='cms-services'
				title={t("decorated-banner.heading")}
				description={t("decorated-banner.description")}
				btnText={t("decorated-banner.btn-text")}
			/>
			<LineUpSection lng={lng} />
			<WebsiteTypesSection lng={lng} />
			<ProcessSection lng={lng} />
			<TestimonialSection lng={lng} />
			<ChooseUsSection lng={lng} />
			<Banner heading={t("banner.heading")} btnText={t("banner.btn-text")} />
			<FaqSection lng={lng} faqQuestions={t("faq-questions", { returnObjects: true })} />
		</Main>
	);
}
