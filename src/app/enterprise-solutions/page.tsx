import HeroOverlay from "@/components/HeroOverlay";
import Main from "@/components/Main";
import HeroSection from "@/components/HeroSection";
import Pattern from "../../../public/assets/images/enterprise-pattern.svg";
import Placeholder from "../../../public/assets/images/white520.png";
import SectionHeading from "@/components/SectionHeading";
import FeaturesSection from "@/sections/enterprise-solutions/FeaturesSection";
import Icon1 from "../../../public/assets/images/custom-solution (1).svg";
import Icon2 from "../../../public/assets/images/custom-solution (2).svg";
import Icon3 from "../../../public/assets/images/custom-solution (3).svg";
import Icon4 from "../../../public/assets/images/custom-solution (4).svg";
import Image from "next/image";
import { INDUSTRIES, faqQuestions } from "@/utils/enterprise-data";
import Grid1x2 from "@/components/Grid1x2";
import DecoratedBanner from "@/components/DecoratedBanner";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import WhyDevriserSection from "@/sections/enterprise-solutions/WhyDevriserSection";
import ProcessSection from "@/sections/enterprise-solutions/ProcessSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Enterprise Solutions | Custom Enterprise Solutions | DevRiser",
	description:
		"Empower your business with our Custom Enterprise Solutions for digital transformation, revolutionizing operations, enhancing efficiency, and achieving scalable growth.",
};
const Page = () => {
	return (
		<Main data-page='enterprise-solutions'>
			<HeroOverlay
				Overlay={Pattern}
				className='h-[600px] '
				GradientClasses='left-0 opacity-50'
				TransparentGradientClasses='bg-gradient-to-br md:dark:to-100% opacity-20'
			/>
			<HeroSection
				heading='Accelerate Digitalizing with Advanced Enterprise Solutions'
				description='Enfold the future of your enterprise with our tailored software offerings, revolutionizing the way you operate'
				btnText="Let's Begin"
			/>
			<FeaturesSection />
			<SectionHeading title='Scalable Solutions For Growth' className=' my-40 gap-6' gradientText='Scalable Solutions'>
				<SectionHeading
					title='Custom-made solutions'
					as='div'
					className='mt-4 [&_h2]:!text-[26px]/[52px]'
					description="Supercharge your business with DevRiser's tailored enterprise solutions, optimizing operations and driving growth with faultess integration.">
					<div className='mx-3 mt-10 grid max-w-[1120px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
						<div className='group flex flex-col gap-5 border border-white/30 p-6 text-left transition-colors duration-300 hover:border-white/70 max-md:items-center max-md:text-center'>
							<Image src={Icon1} alt='icon1' className='transition-all group-hover:brightness-125 group-hover:contrast-150' />
							<div className='text-[16px]/[30px] font-normal md:text-[20px]/[35px]'>Enhanced efficiency</div>
						</div>
						<div className='group flex flex-col gap-5 border border-white/30 p-6 text-left transition-colors duration-300 hover:border-white/70 max-md:items-center max-md:text-center'>
							<Image src={Icon2} alt='icon1' className='transition-all group-hover:brightness-125 group-hover:contrast-150' />
							<div className='text-[16px]/[30px] font-normal md:text-[20px]/[35px]'>Improved decision-making</div>
						</div>
						<div className='group flex flex-col gap-5 border border-white/30 p-6 text-left transition-colors duration-300 hover:border-white/70 max-md:items-center max-md:text-center'>
							<Image src={Icon3} alt='icon1' className='transition-all group-hover:brightness-125 group-hover:contrast-150' />
							<div className='text-[16px]/[30px] font-normal md:text-[20px]/[35px]'>Scalability and maintainability</div>
						</div>
						<div className='group flex flex-col gap-5 border border-white/30 p-6 text-left transition-colors duration-300 hover:border-white/70 max-md:items-center max-md:text-center'>
							<Image src={Icon4} alt='icon1' className='transition-all group-hover:brightness-125 group-hover:contrast-150' />
							<div className='text-[16px]/[30px] font-normal md:text-[20px]/[35px]'>Security and reliability</div>
						</div>
					</div>
				</SectionHeading>
			</SectionHeading>
			<SectionHeading title='Industries Served' className='mb-44 gap-8' gradientText='Industries'>
				<div className='grid w-full grid-cols-[repeat(auto-fit,minmax(200px,360px))] justify-center gap-4'>
					{INDUSTRIES.map(({ image, name }) => (
						<div key={name} className='group relative isolate mx-4 flex aspect-[16/11] items-center justify-center overflow-hidden '>
							<Image
								src={image}
								className='absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.3] transition-transform duration-500  group-hover:scale-110'
								alt={name}
							/>
							<div className='flex h-full w-full items-center justify-center px-4 text-[20px] leading-[50px] transition-transform  lg:text-[26px]'>
								{name}
							</div>
						</div>
					))}
				</div>
			</SectionHeading>

			<ProcessSection />

			<SectionHeading className='mb-24' title='Not Looking For A Custom Solution ?' gradientText='Custom Solution'>
				<Grid1x2
					title='Over-the-counter solutions'
					content='Explore our flawless over-the-counter software solutions, designed for effortless integration, immediate efficiency, and optimal results in your operations.'
					image={Placeholder}
					btnText='Explore Our Solutions'
				/>
			</SectionHeading>

			<DecoratedBanner
				quoteLink='enterprise-solutions'
				className='[&_p]:!text-white'
				title='Digitalize Your Transformation With Our Game-Changing Solutions.'
				description='Experience the Power of Our Enterprise Solutions and Achieve Unprecedented Efficiency and Growth'
				HideRings={true}
				variant='Secondary'
				btnText='Get A Quote'
				BannerColor='rgba(197, 61, 173, 1)'
			/>

			<WhyDevriserSection />
			<TestimonialSection />
			<FaqSection faqQuestions={faqQuestions} />
		</Main>
	);
};

export default Page;
