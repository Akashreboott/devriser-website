import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import { Features } from "@/utils/cms-data";
import React from "react";
const FeaturesSection = () => {
	return (
		<SectionHeading
			className='w-full gap-[40px]  px-3 pt-[75px]  max-md:pb-[36px] md:px-[77px] md:pb-[69px] lg:pb-[239px] xl:pb-[44px] '
			title='Feature-Packed Offerings'
			description='Experience powerful website creation with our tailored CMS Development Services, using popular platforms for transformative results.'>
			<div className='mx-auto mt-8 grid w-full grid-cols-[minmax(100px,var(--max-card-w))] justify-center gap-[23px] [--max-card-w:550px] lg:grid-cols-[minmax(300px,var(--max-card-w))_minmax(300px,var(--max-card-w))] min-[1600px]:[--max-card-w:641px]'>
				{Features.map(({ title, description, image }) => (
					<FeatureCard key={title} title={title} image={image} description={description} />
				))}
			</div>
		</SectionHeading>
	);
};

export default FeaturesSection;
