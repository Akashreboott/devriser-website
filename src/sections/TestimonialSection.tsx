import Image from "next/image";
import Avatar from "./../../public/assets/images/Avatar.png";
import Star from "./../../public/assets/icons/Star.svg";
import React from "react";
import SectionHeading from "@/components/SectionHeading";

const TestimonialSection = () => {
	const Testimonial = (props: { content: string; userName: string; userRole?: string; Rating: number }) => {
		return (
			<div className='testimonial-bg w-full'>
				<div className='flex flex-col items-center py-[80px] md:py-[90px] '>
					<h3 className='max-w-[90%] font-350 text-white md:text-[24px]/[34px] lg:max-w-[1024px] lg:text-[36px]/[44px]'>{props.content}</h3>
					<Image src={Avatar} className='mt-[62px]' alt='' />
					<p className='mt-4 text-[18px]/[28px] font-bold !text-white'>{props.userName}</p>
					<p className='mt-1 text-[18px]/[28px] font-bold !text-white'>{props.userRole}</p>
					<div className='mt-4 flex justify-center gap-1'>
						<Image src={Star} className='h-5 w-5 object-cover' alt='' />
						<Image src={Star} className='h-5 w-5 object-cover' alt='' />
						<Image src={Star} className='h-5 w-5 object-cover' alt='' />
						<Image src={Star} className='h-5 w-5 object-cover' alt='' />
						<Image src={Star} className='h-5 w-5 object-cover' alt='' />
					</div>
					<div className='mt-10 space-x-4'>
						<span className='inline-block h-2.5 w-2.5 rounded-full bg-white'></span>
						<span className='inline-block h-2.5 w-2.5 rounded-full bg-white/80'></span>
						<span className='inline-block h-2.5 w-2.5 rounded-full bg-white/80'></span>
					</div>
				</div>
			</div>
		);
	};

	return (
		<SectionHeading title='What People Say About Us' gradientText='People Say' gap='60px' className='pt-[60px]'>
			<Testimonial
				content="Love the simplicity of the service and the prompt customer support. We can't imagine working without it."
				userName='Kelly Williams'
				Rating={5}
				userRole='Head of Design, Layers'
			/>
		</SectionHeading>
	);
};

export default TestimonialSection;
