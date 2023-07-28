import Grid1x2 from "@/components/Grid1x2";
import SectionHeading from "@/components/SectionHeading";
import { OFFERINGS } from "@/utils/managed-services-data";
import React from "react";

const OfferingsSection = () => {
	return (
		<SectionHeading title='Our Offerings'>
			<div className='mt-14'>
				{OFFERINGS.map(({ content, heading, image }) => (
					<Grid1x2 key={heading} content={content} image={image} title={heading} className='layout-1x2' />
				))}
			</div>
		</SectionHeading>
	);
};

export default OfferingsSection;
