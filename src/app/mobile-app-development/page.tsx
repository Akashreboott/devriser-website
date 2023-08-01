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
		</Main>
	);
};

export default page;
