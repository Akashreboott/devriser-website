import HeroSection from "@/sections/HeroSection";
import Header from "@/sections/Header";
import Image from "next/image";
import Frame from "./../../public/assets/images/bg-frame.svg";

import SectionHeading from "@/components/SectionHeading";
import LineUpSection from "@/sections/LineUpSection";
import ProcessSection from "@/sections/ProcessSection";
import ChooseUsSection from "@/sections/ChooseUsSection";
import FaqSection from "@/sections/FaqSection";
import FeaturesSection from "@/sections/FeaturesSection";
import WebsiteTypesSection from "@/sections/WebsiteTypesSection";
import { ThemeProvider } from "@/utils/ThemeContext";

export default function Home() {
	return (
		<ThemeProvider>
			<div className='absolute top-0 left-0  lg:w-[971px] max-w-[100vw] w-full  h-[923px] grid -z-10 grid-cols-2 overflow-hidden'>
				<div className='w-[543px] aspect-square rounded-full bg-coral/50 blur-[100px] absolute -top-1/3 -left-1/4'></div>
				<div className='bg-gradient-to-br from-transparent dark:to-40% to-70% dark:to-dark to-transparent  w-full -z-20 h-full [grid-column:1/3]'></div>
				<Image src={Frame} alt='' className=' absolute top-0 left-0 -z-30 ' />
			</div>
			<Header />
			<main className='overflow-hidden'>
				<HeroSection />
				<FeaturesSection />
				<section className='bg-noise after:bg-dark after:absolute after:w-full after:top-0 after:left-0 after:-z-50  after:h-full relative before:absolute before:w-full before:h-full before:white-gradient overflow-hidden '>
					<div className='circle hero-gradient grid place-items-center w-[446px] aspect-square absolute blur-md -top-[270px] -left-[350px] -z-20 rounded-full'>
						<div className='w-[calc(100%-100px)] aspect-square bg-dark rounded-full'></div>
					</div>
					<div className='circle hero-gradient grid place-items-center w-[446px] aspect-square absolute blur-md -bottom-[276px] -right-[270px] -z-20 rounded-full'>
						<div className='w-[calc(100%-100px)] aspect-square bg-dark rounded-full'></div>
					</div>
					<SectionHeading
						title='Exquisite Precision Crafted By Our CMS Experts'
						description='Experience the art of website creation with our team of CMS experts who specialize in delivering customized websites that precisely align with your unique requirements. Leveraging a range of CMS platforms, we seamlessly integrate cutting-edge technology to craft dynamic, user-friendly websites that fascinate your audience. Each website is meticulously tailored to perfection, ensuring a seamless and distinctive online experience that sets you apart from the competition.'
						className='gap-12 mt-[44px] py-[70px] [&>*]:text-white'
					/>
				</section>
				<LineUpSection />
				<WebsiteTypesSection />
				<ProcessSection />
				<ChooseUsSection />
				<section className='flex flex-col items-center gap-[88px]  relative before:absolute before:w-full before:h-full before:bg-light-pink before:-z-20 mt-[130px] '>
					<div className='bg-noise absolute w-full h-full'></div>
					<h3 className='md:primary-heading !font-normal mt-[166px] text-white dark:text- text-[16px]/[28px]'>Let&apos;s Build Your Dream Website</h3>
					<button className='py-[18px] px-9 bg-white rounded-md font-semibold w-fit lg:mb-[176px] md:mb-[160px] mb-[125px]'>
						<span className='clip hero-gradient'>Get in touch</span>
					</button>
				</section>
				<FaqSection />
			</main>
		</ThemeProvider>
	);
}
