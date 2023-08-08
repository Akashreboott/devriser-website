import HeroOverlay from "@/components/HeroOverlay";
import Main from "@/components/Main";
import HeroSection from "@/sections/cms-page/HeroSection";
import React from "react";
import Pattern from "../../../public/assets/images/mobile-development-pattern.svg";
import Placeholder from "../../../public/assets/images/placeholder.png";
import Placeholder520 from "../../../public/assets/images/white520.png";
import SectionHeading from "@/components/SectionHeading";
import ProcessCard from "@/components/ProcessCard";
import DecoratedBanner from "@/components/DecoratedBanner";
import Grid1x2 from "@/components/Grid1x2";
import ProcessSection from "@/sections/mobile-app-development/ProcessSection";
import TestimonialSection from "@/sections/cms-page/TestimonialSection";
import { TECH_STACK } from "@/utils/web-development-data";
import Image from "next/image";
import Banner from "@/components/Banner";
import FaqSection from "@/sections/cms-page/FaqSection";
const page = () => {
	return (
		<Main data-page='mobile-app-development'>
			<HeroOverlay
				Overlay={Pattern}
				GradientClasses='md:left-0 md:opacity-80 opacity-40'
				TransparentGradientClasses='bg-gradient-to-br md:to-70% dark:to-30%'
				className='top-0 opacity-70 md:-left-[0.8rem]'
			/>
			<HeroSection
				description="Accelerate your mobile endeavors with DevRiser's Custom Mobile App Development."
				heading='Redefine Your Mobile Strategy With Custom Mobile App Development'
				btnText="Let's Begin"
			/>

			<SectionHeading
				gap='35px'
				className='px-4'
				title='Elevate Your Brand With Value-Driven Mobile App Solutions'
				description='In this digital world , opting for custom mobile app development unlocks a world of possibilities for your business.'>
				<div className='mt-20 grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center justify-items-center gap-10 lg:grid-cols-4 '>
					<ProcessCard
						description='Gain valuable insights from your users with built-in analytical tools. Measure engagement, and optimize strategies.'
						image={Placeholder}
						title='Analytics & insights'
						className='px-8'
					/>
					<ProcessCard
						description='Gain valuable insights from your users with built-in analytical tools. Measure engagement, and optimize strategies.'
						image={Placeholder}
						title='Analytics & insights'
						className='px-8'
					/>
					<ProcessCard
						description='Gain valuable insights from your users with built-in analytical tools. Measure engagement, and optimize strategies.'
						image={Placeholder}
						title='Analytics & insights'
						className='px-8'
					/>
					<ProcessCard
						description='Gain valuable insights from your users with built-in analytical tools. Measure engagement, and optimize strategies.'
						image={Placeholder}
						title='Analytics & insights'
						className='px-8'
					/>
				</div>
			</SectionHeading>

			<DecoratedBanner
				title='Transform Your Ideas Into Impactful Mobile App Solutions'
				btnText='Get a quote'
				description='DevRiser brings innovation to life with custom mobile app development, driving business success and user engagement.'
			/>

			<SectionHeading
				title='Services Offered'
				gap='40px'
				description='We specialize in creating tailor-made mobile apps, designed to fit your unique business needs. Transform your app ideas into reality with our expert team.'>
				<div>
					<Grid1x2
						image={Placeholder520}
						content='DevRiser excels in native app development for iOS and Android, delivering high-performance, engaging brand-enhancing experiences from concept to deployment.'
						title='Native apps'
					/>
					<Grid1x2
						image={Placeholder520}
						content='DevRiser excels in native app development for iOS and Android, delivering high-performance, engaging brand-enhancing experiences from concept to deployment.'
						title='Native apps'
					/>
				</div>
			</SectionHeading>
			<ProcessSection />
			<TestimonialSection />
			<SectionHeading title='Our Technology Stack' gradientText='Technology' className='my-24 max-w-6xl gap-12'>
				{TECH_STACK.map(({ field, techs }) => (
					<div key={field} className='group  flex w-[calc(100%-20px)] max-w-[80%] flex-col items-center gap-2'>
						<h3 className='mr-auto origin-left text-lg leading-[52px] transition-transform group-hover:scale-110 md:text-[24px]'>{field}</h3>
						{/* <div className='flex w-full flex-wrap  justify-center rounded border border-white px-4 py-4 [&>img]:mx-12'> */}
						<div className='flex w-full max-w-[var(--container-width)]  flex-wrap items-center justify-center gap-7 rounded-lg  border border-dark/[0.15] bg-white/[0.05] p-2 transition-all [--container-width:1280px] [--logo-width:8rem] [--space:0.6rem] group-hover:border-dark/[0.15] group-hover:shadow-md dark:border-white/10  group-hover:dark:border-white/30 md:p-1.5 md:[--space:1rem]  [&>img>*]:aspect-[7/1]  [&>img>*]:w-[var(--logo-width)]  [&>img]:mx-[var(--space)] [&>img]:my-[calc(var(--space)/2)]'>
							{techs.map((logo, index) => (
								<Image key={index} src={logo} className='h-8 w-8' alt='' />
							))}
						</div>
					</div>
				))}
			</SectionHeading>
			<Banner btnText='Get started now!' heading="Ready To Innovate? Let's Build Your Dream App!" />
			<FaqSection />
		</Main>
	);
};

export default page;
