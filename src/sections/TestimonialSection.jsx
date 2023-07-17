import Image from "next/image";
import Avatar from "./../../public/assets/images/Avatar.png";
import Star from "./../../public/assets/icons/Star.svg";
import React from "react";

const TestimonialSection = () => {
	return (
		<section className='text-center'>
			<h2 className='primary-heading my-24'>
				What <span className='clip pink-gradient-bright '>People Say</span> About Us
			</h2>
			<div className='hero-gradient'>
				<div className='py-[91px] flex flex-col items-center '>
					<h3 className='text-white lg:text-[36px]/[44px] md:text-[24px]/[34px] max-w-screen-xl'>
						Love the simplicity of the service and the prompt customer support. We can&apos;t imagine working without it.
					</h3>
					<Image src={Avatar} className='mt-[62px]' alt='' />
					<p className='text-[18px]/[28px] text-white font-bold mt-4'>Kelly Williams</p>
					<p className='text-[18px]/[28px] text-white font-bold mt-1'>Head of Design, Layers</p>
					<div className='flex justify-center gap-1 mt-4'>
						<Image src={Star} className='w-5 h-5 object-cover' alt='' />
						<Image src={Star} className='w-5 h-5 object-cover' alt='' />
						<Image src={Star} className='w-5 h-5 object-cover' alt='' />
						<Image src={Star} className='w-5 h-5 object-cover' alt='' />
						<Image src={Star} className='w-5 h-5 object-cover' alt='' />
					</div>
					<div className='space-x-4 mt-10'>
						<span className='w-2.5 h-2.5 inline-block rounded-full bg-white'></span>
						<span className='w-2.5 h-2.5 inline-block rounded-full bg-white/80'></span>
						<span className='w-2.5 h-2.5 inline-block rounded-full bg-white/80'></span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialSection;
