import LineLayout from "@/components/LineLayout";
import MotionComponent from "@/components/MotionComponent";
import SideHeading from "@/components/SideHeading";
import React from "react";
import Logo from "../../../public/assets/images/LOGO.png";
import Hero from "./Hero";
import Image from "next/image";

const HeroSection = () => {
	return (
		<LineLayout className='mb-20' HideSymbol={true}>
			<Hero
				heading='Empowering Your Digital Future'
				description='Unlock the full potential of your digital journey with us! Our platform offers a powerful combination of expert web development'
				btnText="Let's Begin"
				className=' z-50'
			/>

			{/* LOGO SECTION */}
			<MotionComponent
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 3 }}
				className='mx-3 flex justify-between max-lg:flex-col max-lg:justify-center max-md:mb-20 max-md:gap-6 lg:ml-24 lg:mr-8'>
				<div className='text-[20px] font-medium max-lg:mx-auto lg:text-[26px]/[54px]'>Trusted by</div>
				<div className='flex justify-center gap-5 max-lg:space-y-1 max-md:flex-wrap  lg:gap-10 [&>*]:shrink-0'>
					<Image src={Logo} alt='' className='h-4 object-contain md:h-12' />
					<Image src={Logo} alt='' className='h-4 object-contain md:h-12' />
					<Image src={Logo} alt='' className='h-4 object-contain md:h-12' />
					<Image src={Logo} alt='' className='h-4 object-contain md:h-12' />
					<Image src={Logo} alt='' className='h-4 object-contain md:h-12' />
				</div>
			</MotionComponent>
			<SideHeading
				className='mb-0 mt-20 lg:mb-40 lg:mt-40 lg:pl-16'
				heading='Services'
				description='Empowering Your Digital Future Web Development, Design'
				gradientText='Empowering Your Digital Future'
			/>
		</LineLayout>
	);
};

export default HeroSection;
