import HeroOverlay from "@/components/HeroOverlay";
import HeroSection from "@/sections/HeroSection";
import overlay from "../../../public/assets/images/ui-ux-hero-overlay.svg";
import SectionHeading from "@/components/SectionHeading";
import { Features } from "@/utils/ui-ux-data";
import FeatureCard from "@/components/FeatureCard";
import DecoratedBanner from "@/components/DecoratedBanner";
import TestimonialSection from "@/sections/TestimonialSection";
import ProcessCard from "@/components/ProcessCard";
import { SPECIALITIES } from "@/utils/ui-ux-data";
import Banner from "@/components/Banner";
import FaqSection from "@/sections/FaqSection";

const page = () => {
	return (
		<main
			data-page='UI/UX Services'
			className='relative mx-auto flex  w-full  max-w-[1728px] flex-col items-center overflow-x-hidden pb-24 [grid-area:main] [&>*]:shrink [&>*]:grow-0'>
			<HeroOverlay Overlay={overlay} OverlayGradientClasses='dark:to-80% bg-gradient-to-br' />

			<HeroSection
				heading='Enrich User Experience With Our Exquisite UI/UX Design Services'
				gradientText='UI/UX Design Services'
				description="Enhance your digital experience with DevRiser's exceptional UI/UX design expertise, fusing awe-inspiring interfaces with flawless functionality."
				btnText="Let's Begin"
			/>

			<SectionHeading
				className='w-full gap-[40px]  px-3 pt-[75px]  max-md:pb-[36px] md:px-[77px] md:pb-[69px] lg:pb-[239px] xl:pb-[44px] '
				title='Feature-Packed Offerings'
				description='Experience powerful website creation with our tailored CMS Development Services, using popular platforms for transformative results.'>
				<div className='mx-auto mt-8 grid w-full grid-cols-[repeat(auto-fit,minmax(150px,var(--max-card-w)))] justify-center gap-[23px] [--max-card-w:550px] min-[1600px]:[--max-card-w:641px]'>
					{Features.map(({ title, description, image }) => (
						<FeatureCard key={title} title={title} image={image} description={description} />
					))}
				</div>
			</SectionHeading>

			<DecoratedBanner
				title='Spark User Interest and Fuel Success With DevRiser'
				description='Elevate performance, engage users, and unlock potential with our transformative UI/UX design service.'
				btnText='Get a quote'
			/>

			<TestimonialSection />

			<SectionHeading
				title='Why Choose Us'
				gradientText='Choose Us'
				description='Through adherence to industry-leading standards in design and development, we offer tailor-made CMS solutions that prioritize scalability,
				security, and effortless management'
				gap='3rem'
				className='pt-24'>
				<div className='mt-[63px] flex w-full   shrink grow-0 basis-[300px] flex-wrap justify-center gap-[70px] md:mt-[75px] lg:mt-[180px] lg:gap-[75px] xl:mt-[95px] xl:gap-[95px]'>
					{SPECIALITIES.map((speciality) => (
						<ProcessCard
							title={speciality.title}
							image={speciality.image}
							gradientTitle={true}
							// darkImage={black}
							description={speciality.description}
							key={speciality.title}
							card='center-aligned'
							className='[&_p]:!text-primary-dark dark:[&_p]:!text-primary-light'
						/>
					))}
				</div>
			</SectionHeading>
			<Banner heading='Get Ready To Start Your Dream Project' btnText="Let's talk" />
			<FaqSection />
		</main>
	);
};

export default page;
