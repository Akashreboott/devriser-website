import Main from "@/components/Main";
import HeroSection from "@/sections/cms-page/HeroSection";
import { HERO_DETAILS, TECH_STACK } from "@/utils/web-development-data";
import HeroImgDark from "../../../public/assets/images/web-development-illustration.svg";

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

			<SectionHeading title='Our Technology Stack' className='my-24 max-w-6xl gap-10'>
				{TECH_STACK.map(({ field, techs }) => (
					<div key={field} className='flex w-[calc(100%-20px)] flex-col items-center gap-8'>
						<h3 className='mr-auto text-lg leading-[52px] md:text-[22px] lg:text-3xl'>{field}</h3>
						{/* <div className='flex w-full flex-wrap  justify-center rounded border border-white px-4 py-4 [&>img]:mx-12'> */}
						<div className='flex w-full max-w-[var(--container-width)]  flex-wrap items-center justify-between gap-7  rounded-lg border border-white/60 bg-white/[0.05] p-1.5  [--container-width:1280px] [--logo-width:8rem] [--space:1rem] [&>img>*]:aspect-[7/1]  [&>img>*]:w-[var(--logo-width)]  [&>img]:mx-[var(--space)] [&>img]:my-[calc(var(--space)/2)]'>
							{techs.map((logo, index) => (
								<Image key={index} src={logo} alt='' />
							))}
						</div>
					</div>
				))}
			</SectionHeading>

			<TestimonialSection />
			<ProcessSection />
			<Banner heading='Ready For A Website That Sets You Apart?' btnText='Request a Consultation' />
			<FaqSection />
		</Main>
	);
};

export default Page;
