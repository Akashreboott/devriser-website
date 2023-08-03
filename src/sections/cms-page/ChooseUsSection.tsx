import ProcessCard from "@/components/ProcessCard";
import placeholder from "../../../public/assets/images/placeholder.png";
import black from "../../../public/assets/images/black.png";
import SectionHeading from "@/components/SectionHeading";
import { SPECIALITIES } from "@/utils/cms-data";

const ChooseUsSection = () => {
	return (
		// <section className='relative mx-4 mt-24 flex  flex-col items-center gap-14  text-center'>
		// 	<div className='absolute -right-[4rem] -top-[8rem] aspect-square w-[246px] rounded-full bg-violet/60 blur-[100px]'></div>
		// 	<h2 className='primary-heading '>Why Choose Us</h2>
		// 	<p className='  text-base/[37.5px] font-350 text-primary-dark dark:text-white md:text-2xl/[48px]'>
		// 		Through adherence to industry-leading standards in design and development, we offer tailor-made CMS solutions that prioritize scalability,
		// 		security, and effortless management
		// 	</p>

		<SectionHeading
			title='Why Choose Us'
			gradientText='Choose Us'
			description='Through adherence to industry-leading standards in design and development, we offer tailor-made CMS solutions that prioritize scalability,
				security, and effortless management'
			gap='3rem'
			className='pt-24'>
			<div className='mt-[63px] flex w-full shrink grow-0 basis-[300px] flex-wrap justify-center gap-[70px] md:mt-[75px] lg:mt-[180px] lg:gap-[75px] xl:mt-[95px] xl:gap-[95px]'>
				{SPECIALITIES.map((speciality) => (
					<ProcessCard
						title={speciality.title}
						image={speciality.image}
						gradientTitle={true}
						darkImage={black}
						description={speciality.description}
						key={speciality.title}
						card='center-aligned'
						className=' xl:max-w-[370px]'
					/>
				))}
			</div>
		</SectionHeading>
		// </section>
	);
};

export default ChooseUsSection;
