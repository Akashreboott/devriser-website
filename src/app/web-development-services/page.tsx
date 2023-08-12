import Main from "@/components/Main";
import HeroSection from "@/components/HeroSection";
import { HERO_DETAILS, TECH_STACK, faqQuestions } from "@/utils/web-development-data";
import HeroImgDark from "../../../public/assets/images/web-development-illustration.svg";

import HeroImgLight from "../../../public/assets/images/web-development-illustration-light.svg";
import Pattern from "../../../public/assets/images/webservices-pattern.svg";
import Cone from "../../../public/assets/images/OfferingSectionWebDev";
import React from "react";
import HeroOverlay from "@/components/HeroOverlay";
import TestimonialSection from "@/components/TestimonialSection";
import DecoratedBanner from "@/components/DecoratedBanner";
import SectionHeading from "@/components/SectionHeading";
import { OFFERINGS } from "@/utils/web-development-data";
import Grid1x2 from "@/components/Grid1x2";
import Banner from "@/components/Banner";
import FaqSection from "@/components/FaqSection";
import ProcessSection from "@/sections/web-development/ProcessSection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Custom Website Development Services | DevRiser",
	description:
		"Experience the power of custom website development with DevRiser. We craft visually stunning, highly functional websites tailored to your brand. Request a consultation or subscribe to our managed services for ongoing support.",
};
const Page = () => {
	return (
		<Main data-page='web-development-services' key='web-development-services'>
			<HeroOverlay
				Overlay={Pattern}
				className='h-[550px]'
				GradientClasses='left-0'
				TransparentGradientClasses='md:dark:to-90% bg-gradient-to-br to-90%'
				ImgClasses='object-contain '
			/>
			<HeroSection
				heading={HERO_DETAILS.heading}
				gradientText='Custom Website Development Services'
				description={HERO_DETAILS.description}
				btnText={HERO_DETAILS.btnText}
				DarkVisibleImage={HeroImgDark}
				LightVisibleImage={HeroImgLight}
			/>

			<SectionHeading title='Our Offerings' className='gap-12' gradientText='Offerings'>
				<div className='h-full max-h-[600px] w-full max-w-[800px] px-2'>
					<Cone className='h-full w-full text-dark dark:text-white' />
				</div>
			</SectionHeading>

			<DecoratedBanner
				title='Revitalize Your Digital Presence With Custom Websites'
				description='Creating websites that truly reflect your brand and capture your vision.'
				btnText='Get a quote'
			/>

			<SectionHeading title='Experience The Impact Of Custom Made Websites' className='gap-20' gradientText='Custom Made Websites'>
				<div className='flex flex-col items-center justify-center gap-6 px-3 md:flex-row md:items-start md:gap-10'>
					<span className='text-[26px] font-semibold !leading-[35px] md:text-[30px]'>75%</span>
					<div className='flex flex-col items-center gap-6 text-left'>
						<p className='flex w-full justify-between max-md:text-center'>Internet Users Determine Business Reliability Solely By Website Design</p>
						<span className='max-md:text-center md:ml-auto'>Source: Stanford</span>
					</div>
				</div>
				<div>
					{OFFERINGS.map(({ content, heading, image }) => (
						<Grid1x2 key={heading} content={content} image={image} title={heading} className='layout-1x2 my-14 md:my-20' />
					))}
				</div>
			</SectionHeading>

			<SectionHeading title='Our Technology Stack' gradientText='Technology' className='my-24 max-w-6xl gap-12'>
				{TECH_STACK.map(({ field, techs }) => (
					<div key={field} className='group  flex w-[calc(100%-20px)] max-w-[80%] flex-col items-center gap-2'>
						<h3 className='mr-auto origin-left text-lg leading-[52px] transition-transform group-hover:scale-110 md:text-[24px]'>{field}</h3>
						{/* <div className='flex w-full flex-wrap  justify-center rounded border border-white px-4 py-4 [&>img]:mx-12'> */}
						<div className='flex w-full max-w-[var(--container-width)]  flex-wrap items-center justify-center gap-7 rounded-lg  border border-white/10 bg-white/[0.05] p-2 transition-all [--container-width:1280px] [--logo-width:8rem] [--space:0.6rem]  group-hover:border-white/30 md:p-1.5 md:[--space:1rem]  [&>img>*]:aspect-[7/1]  [&>img>*]:w-[var(--logo-width)]  [&>img]:mx-[var(--space)] [&>img]:my-[calc(var(--space)/2)]'>
							{techs.map((logo, index) => (
								<Image key={index} src={logo} className='h-8 w-8' alt='' />
							))}
						</div>
					</div>
				))}
			</SectionHeading>

			<TestimonialSection />
			<ProcessSection />
			<Banner heading='Ready For A Website That Sets You Apart?' btnText='Request a Consultation' />
			<FaqSection faqQuestions={faqQuestions} />
		</Main>
	);
};

export default Page;
