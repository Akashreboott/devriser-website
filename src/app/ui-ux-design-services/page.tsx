import HeroOverlay from "@/components/HeroOverlay";
import HeroSection from "@/components/HeroSection";
import overlay from "../../../public/assets/images/ui-ux-hero-overlay.svg";
import SectionHeading from "@/components/SectionHeading";
import { Features, PROCESSES, faqQuestions } from "@/utils/ui-ux-data";
import FeatureCard from "@/components/FeatureCard";
import DecoratedBanner from "@/components/DecoratedBanner";
import TestimonialSection from "@/components/TestimonialSection";
import ProcessCard from "@/components/ProcessCard";
import { SPECIALITIES } from "@/utils/ui-ux-data";
import Banner from "@/components/Banner";
import FaqSection from "@/components/FaqSection";
import Grid1x2 from "@/components/Grid1x2";
import white from "../../../public/assets/images/white520.png";

import CarourselSection from "@/sections/ui-ux-page/CarourselSection";
import ProcessSection from "@/sections/ui-ux-page/ProcessSection";
import Main from "@/components/Main";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: " UI/UX Design Services",
	description:
		"We specialize in crafting exceptional User Interface and User Experience (UI/UX) designs that captivate users, enhance engagement, and drive success. Experience the transformative power of our UI/UX design services and unlock your digital potential",
};
const page = () => {
	return (
		<Main data-page='UI/UX Services' key='UI/UX Services'>
			<HeroOverlay Overlay={overlay} TransparentGradientClasses='dark:to-80% bg-gradient-to-br' />

			{/* HERO SECTION */}
			<HeroSection
				heading='Enrich User Experience With Our Exquisite UI/UX Design Services'
				gradientText='UI/UX Design Services'
				description="Enhance your digital experience with DevRiser's exceptional UI/UX design expertise, fusing awe-inspiring interfaces with flawless functionality."
				btnText="Let's Begin"
			/>
			{/* FEATURES SECTION */}
			<SectionHeading
				className='w-full gap-[40px]  px-3 pt-[75px]  max-md:pb-[36px] md:px-[77px] md:pb-[69px] lg:pb-[239px] xl:pb-[44px] '
				title='Feature-Packed Offerings'
				gradientText='Offerings'
				description='Experience powerful website creation with our tailored CMS Development Services, using popular platforms for transformative results.'>
				<div className='mx-auto mt-8 grid w-full grid-cols-[minmax(100px,var(--max-card-w))] justify-center gap-[23px] [--max-card-w:550px] lg:grid-cols-[minmax(300px,var(--max-card-w))_minmax(300px,var(--max-card-w))] min-[1600px]:[--max-card-w:641px]'>
					{Features.map(({ title, description, image }) => (
						<FeatureCard key={title} title={title} image={image} description={description} />
					))}
				</div>
			</SectionHeading>
			{/* BANNER SECTION */}
			<DecoratedBanner
				quoteLink='ui-ux'
				title='Spark User Interest and Fuel Success With DevRiser'
				description='Elevate performance, engage users, and unlock potential with our transformative UI/UX design service.'
				btnText='Get a quote'
			/>
			{/* SLIDER SECTION */}
			<CarourselSection />
			<Grid1x2
				title='Exemplary Design Experiences'
				content='	At DevRiser we transform designs into extraordinary experiences, with user-friendly interfaces, smooth interactions, and immersive digital
					journeys that exceed expectations.'
				image={white}
				className='mb-20'
			/>
			<ProcessSection />
			<TestimonialSection />
			{/* CHOOSEUS SECTION */}
			<SectionHeading
				title='Why Choose Us'
				gradientText='Choose Us'
				description='Through adherence to industry-leading standards in design and development, we offer tailor-made CMS solutions that prioritize scalability,
				security, and effortless management'
				gap='3rem'
				className='px-3 pt-24'>
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
			<FaqSection faqQuestions={faqQuestions} />
		</Main>
	);
};

export default page;
