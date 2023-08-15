import { useTranslation } from "@/app/i18n";
import FeatureCard from "@/components/FeatureCard";
import Heading from "@/components/SectionHeading";
import { Features as FEATURES_IMAGES } from "@/utils/cms-data";
import cn from "@/utils/cn";
import React from "react";
const FeaturesSection = async (props: any) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(props.lng, "cmsServices");
	let FEATURES: { heading: string; description: string; image: any }[] = t("features", { returnObjects: true });

	return (
		<Heading
			className={cn(
				"section-spacing-p section-height w-full gap-[40px]"
				// "px-3 pt-[75px]  max-md:pb-[36px] md:px-[77px] md:pb-[69px] lg:pb-[239px] xl:pb-[44px] "
			)}
			title={t("features-heading.heading")}
			gradientText={t("features-heading.gradient-text")}
			description={t("features-heading.description")}>
			<div className='mx-auto mt-8 grid w-full grid-cols-[minmax(100px,var(--max-card-w))] justify-center gap-[23px] [--max-card-w:550px] lg:grid-cols-[minmax(300px,var(--max-card-w))_minmax(300px,var(--max-card-w))] min-[1600px]:[--max-card-w:641px]'>
				{FEATURES.map(({ heading, description }, index) => (
					<FeatureCard key={heading} title={heading} image={FEATURES_IMAGES[index].image} description={description} />
				))}
			</div>
		</Heading>
	);
};

export default FeaturesSection;
