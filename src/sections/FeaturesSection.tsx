import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import React from "react";

const FeaturesSection = () => {
	return (
		<section className='bg-dark md:px-[77px] px-2 text-white [&_p]:text-white pt-[75px] mx-auto xl:pb-[44px] lg:pb-[239px] md:pb-[69px] max-md:pb-[36px]'>
			<SectionHeading
				className='gap-[52px]'
				title='Elevate Your Website Creation With Our Expert CMS Development Services'
				description='Experience the power of website creation with our comprehensive CMS Development Services. Leveraging industry-leading platforms such as WordPress, Wix, Drupal, Webflow, and Shopify, we provide tailored solutions that cater to your unique needs. Our expertise in custom designs and responsive layouts ensures seamless user experiences while effortless website management and updates empower you to stay in control. Captivate your audience, achieve tangible results, and embark on a transformative digital journey with our exceptional CMS web development services.'
			/>

			<div className=' [--max-card-w:441px] grid grid-cols-[repeat(auto-fit,minmax(0,var(--max-card-w)))] gap-[23px] mx-auto justify-center mt-8'>
				<FeatureCard
					title='Time Saving'
					description='Our team specializes in creating user-friendly CMS websites that are easy to manage. We harness the power of CMS platforms to accelerate the website creation process, allowing you to have a fully functional website in significantly less time compared to traditional code-based methods'
				/>
				<FeatureCard
					title='Time Saving'
					description='Our team specializes in creating user-friendly CMS websites that are easy to manage. We harness the power of CMS platforms to accelerate the website creation process, allowing you to have a fully functional website in significantly less time compared to traditional code-based methods'
				/>
				<FeatureCard
					title='Time Saving'
					description='Our team specializes in creating user-friendly CMS websites that are easy to manage. We harness the power of CMS platforms to accelerate the website creation process, allowing you to have a fully functional website in significantly less time compared to traditional code-based methods'
				/>
				<FeatureCard
					title='Time Saving'
					description='Our team specializes in creating user-friendly CMS websites that are easy to manage. We harness the power of CMS platforms to accelerate the website creation process, allowing you to have a fully functional website in significantly less time compared to traditional code-based methods'
				/>
			</div>
		</section>
	);
};

export default FeaturesSection;
