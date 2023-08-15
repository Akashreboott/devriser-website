import { useTranslation } from "@/app/i18n";
import Grid1x2 from "@/components/Grid1x2";
import Heading from "@/components/SectionHeading";
import { OFFERINGS } from "@/utils/managed-services-data";
import React from "react";

const OfferingsSection = async (props: any) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(props.lng, "managedServices");

	return (
		<Heading title={t("offerings-heading.heading")} gradientText={t("offerings-heading.gradient-text")} className='section-spacing-p min-h-section'>
			<div className='md:mt-14'>
				{OFFERINGS.map(({ content, heading, image }) => (
					<Grid1x2 key={heading} content={content} image={image} title={heading} className='layout-1x2' />
				))}
			</div>
		</Heading>
	);
};

export default OfferingsSection;
