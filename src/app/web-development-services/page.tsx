import Main from "@/components/Main";
import HeroSection from "@/sections/cms-page/HeroSection";
import { HERO_DETAILS, PROCESS_DETAILS } from "@/utils/web-development-data";
import HeroImgDark from "../../../public/assets/images/web-development-illustration.svg";
import Logo1 from "../../../public/assets/icons/logoipsum-295.svg";
import Logo2 from "../../../public/assets/icons/logoipsum-296.svg";
import Logo3 from "../../../public/assets/icons/logoipsum-298.svg";
import Logo4 from "../../../public/assets/icons/logoipsum-299.svg";
import Logo5 from "../../../public/assets/icons/logoipsum-293.svg";
import Logo6 from "../../../public/assets/icons/logoipsum-292.svg";
import HeroImgLight from "../../../public/assets/images/web-development-illustration-light.svg";
import Pattern from "../../../public/assets/images/webservices-pattern.svg";
import React, { useState } from "react";
import HeroOverlay from "@/components/HeroOverlay";
import TestimonialSection from "@/sections/cms-page/TestimonialSection";
import DecoratedBanner from "@/components/DecoratedBanner";
import SectionHeading from "@/components/SectionHeading";
import { OFFERINGS } from "@/utils/managed-services-data";
import Grid1x2 from "@/components/Grid1x2";
import Banner from "@/components/Banner";
import FaqSection from "@/sections/cms-page/FaqSection";
import ProcessSection from "@/sections/web-development/ProcessSection";
import Image from "next/image";

const Page = () => {
	return (
		<Main data-page='web-development-services'>
			<HeroOverlay Overlay={Pattern} className='h-[500px]' GradientClasses='left-0' />
			<HeroSection
				heading={HERO_DETAILS.heading}
				gradientText='Custom Website Development Services'
				description={HERO_DETAILS.description}
				btnText={HERO_DETAILS.btnText}
				DarkModeImage={HeroImgDark}
				LightModeImage={HeroImgLight}
			/>

			<DecoratedBanner
				title='Revitalize Your Digital Presence With Custom Websites'
				description='Creating websites that truly reflect your brand and capture your vision.'
				btnText='Get a quote'
			/>

			<SectionHeading title='Experience The Impact Of Custom Made Websites' className='gap-28'>
				<div>
					{OFFERINGS.map(({ content, heading, image }) => (
						<Grid1x2 key={heading} content={content} image={image} title={heading} className='layout-1x2 my-20' />
					))}
				</div>
			</SectionHeading>

			<SectionHeading title='Our Technology Stack' className='max-w-6xl gap-10'>
				<div className='flex w-[calc(100%-20px)] flex-col items-center gap-5'>
					<h3 className='mr-auto text-lg leading-[52px] md:text-[22px] lg:text-3xl'>Frontend</h3>
					<div className='flex w-full flex-wrap  justify-center rounded border border-white px-4 py-4 [&>img]:mx-12'>
						<Image src={Logo1} alt='' />
						<Image src={Logo2} alt='' />
						<Image src={Logo3} alt='' />
						<Image src={Logo4} alt='' />
						<Image src={Logo5} alt='' />
						<Image src={Logo6} alt='' />
						<Image src={Logo2} alt='' />
						<Image src={Logo4} alt='' />
					</div>
				</div>
			</SectionHeading>

			<TestimonialSection />
			<ProcessSection />
			<Banner heading='Ready For A Website That Sets You Apart?' btnText='Request a Consultation' />
			<FaqSection />
		</Main>
	);
};

export default Page;
