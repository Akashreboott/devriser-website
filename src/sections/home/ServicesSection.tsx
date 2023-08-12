import GlassCard from "@/components/GlassCard";
import HomeGrid from "@/components/HomeGrid";
import LineLayout from "@/components/LineLayout";
import React from "react";
import white from "../../../public/assets/images/white520.png";
import MotionComponent from "@/components/MotionComponent";

const ServicesSection = (props: { onView?: any; notOnView?: any }) => {
	return (
		<MotionComponent onViewportLeave={props.notOnView}>
			<LineLayout heading='Web Development' onView={() => props.onView("Web Development")}>
				<HomeGrid reverse={true} className=' justify-items-center gap-10  '>
					<div className='isolate flex h-[calc(100%-6rem)] w-fit flex-col  justify-center gap-2 '>
						<GlassCard delay={0.1} heading='AI-powered' image={white} className='relative -right-[3rem] top-[3rem] z-10 ml-auto' />
						<GlassCard
							delay={0.3}
							heading='AI-powered'
							image={white}
							ImageClasses='w-full h-[200px] md:h-[280px]'
							className='z-0 h-full w-[200px] md:w-[280px]'
						/>
						<GlassCard delay={0.5} heading='AI-powered' image={white} className='relative -top-[3rem] right-[3rem] z-10 mr-auto' />
					</div>
				</HomeGrid>
			</LineLayout>

			<LineLayout heading='Mobile Development' className='mb-14' onView={() => props.onView("Mobile Development")}>
				<HomeGrid className='justify-items-center gap-10' reverse={true}>
					<div className='isolate flex w-[70%] flex-col items-center justify-center gap-4 '>
						<div className='grid w-full grid-cols-2 gap-6'>
							<GlassCard delay={0.1} heading='Transaction history' image={white} className='w-full' />
							<GlassCard delay={0.3} heading='Transaction history' image={white} className='w-full' />
						</div>
						<div className=' grid  w-full gap-6'>
							<GlassCard delay={0.5} heading='Transaction history' image={white} ImageClasses='w-full h-full' className='h-[245px] w-full' />
						</div>
					</div>
				</HomeGrid>
			</LineLayout>
			<LineLayout heading='UI/UX Services' className='mb-14' onView={() => props.onView("UI/UX Services")}>
				<HomeGrid className='justify-items-center gap-4 md:gap-10'>
					<div className='isolate mx-2 flex w-fit justify-center gap-2   md:gap-4'>
						<div className='my-auto grid shrink gap-3 md:gap-6 '>
							<GlassCard delay={0.1} heading='Transaction history' image={white} className='' />
							<GlassCard delay={0.3} heading='Transaction history' image={white} className='' />
						</div>
						<div className='my-auto grid gap-6'>
							<GlassCard delay={0.5} heading='Transaction history' image={white} className='' />
						</div>
					</div>
				</HomeGrid>
			</LineLayout>
			<LineLayout heading='CMS Services' onView={() => props.onView("CMS Services")}>
				<HomeGrid reverse={true} className='justify-items-center gap-10 max-lg:gap-0'>
					<div className='isolate flex h-[calc(100%-6rem)] w-fit flex-col justify-center gap-2 '>
						<GlassCard
							delay={0.1}
							heading='AI-powered'
							image={white}
							className='relative left-[50%] top-16 -z-10 w-[140px] md:left-[80%]  md:mr-auto md:w-[173px]'
						/>
						<GlassCard delay={0.3} heading='AI-powered' image={white} ImageClasses='w-full h-[180px]' className='z-0 h-full w-[70%] md:w-[300px]' />
						<GlassCard
							delay={0.5}
							heading='AI-powered'
							image={white}
							className='relative -left-4 -top-12 z-10  w-[140px] md:right-[80%] md:ml-auto md:w-[173px]'
						/>
					</div>
				</HomeGrid>
			</LineLayout>
			<LineLayout heading='Managed Services' className='mb-14' onView={() => props.onView("Managed Services")}>
				<HomeGrid className='justify-items-center gap-10'>
					<div className='isolate my-auto flex h-fit w-fit justify-center gap-4 '>
						<div className=' grid gap-6'>
							<GlassCard delay={0.1} heading='Transaction history' image={white} ImageClasses='h-[120%] max-w-[200px] w-full ' className='' />
						</div>
						<div className='my-auto grid gap-6'>
							<GlassCard delay={0.3} heading='Transaction history' image={white} className='' />
							<GlassCard delay={0.5} heading='Transaction history' image={white} className='' />
						</div>
					</div>
				</HomeGrid>
			</LineLayout>
			<LineLayout heading='Enterprise Solutions' className='mb-14' onView={() => props.onView("Enterprise Solutions")}>
				<HomeGrid className='justify-items-center gap-10'>
					<div className='isolate flex w-[70%] flex-col items-center justify-center gap-4 '>
						<div className=' grid w-full gap-6'>
							<GlassCard delay={0.1} heading='Transaction history' image={white} ImageClasses='w-full' className='w-full' />
						</div>
						<div className='grid w-full grid-cols-2 gap-6'>
							<GlassCard delay={0.3} heading='Transaction history' image={white} className='w-full' />
							<GlassCard delay={0.5} heading='Transaction history' image={white} className='w-full' />
						</div>
					</div>
				</HomeGrid>
			</LineLayout>
		</MotionComponent>
	);
};

export default ServicesSection;
