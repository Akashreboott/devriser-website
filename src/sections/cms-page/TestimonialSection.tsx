import Image from "next/image";
import Person from "./../../../public/assets/images/test-img.png";
import Star from "./../../../public/assets/icons/Star.svg";
import SectionHeading from "@/components/SectionHeading";

const TestimonialSection = () => {
	const Testimonial = (props: { content: string; userName: string; userRole?: string; Rating: number }) => {
		return (
			// <div className='testimonial-bg w-full'>
			// 	<div className='flex flex-col items-center py-[80px] md:py-[90px] '>
			// 		<h3 className='max-w-[90%] font-350 text-white md:text-[24px]/[34px] lg:max-w-[1024px] lg:text-[36px]/[44px]'>{props.content}</h3>
			// 		<Image src={Avatar} className='mt-[62px]' alt='' />
			// 		<p className='mt-4 text-[18px]/[28px] font-bold !text-white'>{props.userName}</p>
			// 		<p className='mt-1 text-[18px]/[28px] font-bold !text-white'>{props.userRole}</p>
			// 		<div className='mt-4 flex justify-center gap-1'>
			// 			<Image src={Star} className='h-5 w-5 object-cover' alt='' />
			// 			<Image src={Star} className='h-5 w-5 object-cover' alt='' />
			// 			<Image src={Star} className='h-5 w-5 object-cover' alt='' />
			// 			<Image src={Star} className='h-5 w-5 object-cover' alt='' />
			// 			<Image src={Star} className='h-5 w-5 object-cover' alt='' />
			// 		</div>
			// 		<div className='mt-10 space-x-4'>
			// 			<span className='inline-block h-2.5 w-2.5 rounded-full bg-white'></span>
			// 			<span className='inline-block h-2.5 w-2.5 rounded-full bg-white/80'></span>
			// 			<span className='inline-block h-2.5 w-2.5 rounded-full bg-white/80'></span>
			// 		</div>
			// 	</div>
			// </div>
			<div className='testimonial-bg isolate w-[min(920px,100%)] px-9  py-3 lg:rounded-lg '>
				<div className='mb-2 flex items-center  justify-center gap-3 max-md:flex-col md:justify-between '>
					<div className='flex flex-col text-center max-md:order-2 md:text-left'>
						<p className='max-w-[480px] text-p14 font-350 text-white md:text-[16px]/[27px] '>{props.content}</p>
						<h3 className='mt-6 text-p14 font-semibold text-white md:text-[18px]/[28px] '>{props.userName}</h3>
						<p className='mt-1 text-xs text-white  md:text-[14px]/[28px]'>{props.userRole}</p>
						<div className='mt-1 flex justify-center gap-1 md:justify-start [&>img]:h-4 [&>img]:w-4 md:[&>img]:h-5 md:[&>img]:w-5'>
							<Image src={Star} className=' object-cover' alt='' />
							<Image src={Star} className=' object-cover' alt='' />
							<Image src={Star} className=' object-cover' alt='' />
							<Image src={Star} className=' object-cover' alt='' />
							<Image src={Star} className=' object-cover' alt='' />
						</div>
					</div>
					<Image
						src={Person}
						className='max-md:order-1 max-md:h-[72px] max-md:w-[72px] max-md:rounded-full max-md:border max-md:border-white max-md:bg-white max-md:object-cover max-md:object-top'
						alt=''
					/>
				</div>
				<div className='mb-2 space-x-4 max-md:mt-4'>
					<span className='inline-block h-2.5 w-2.5 rounded-full bg-white'></span>
					<span className='inline-block h-2.5 w-2.5 rounded-full bg-white/80'></span>
					<span className='inline-block h-2.5 w-2.5 rounded-full bg-white/80'></span>
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
