import ProcessCard from "@/components/ProcessCard";
import placeholder from "../../../public/assets/images/placeholder.png";
import black from "../../../public/assets/images/black.png";
import Heading from "@/components/SectionHeading";
import { SPECIALITIES as SPECIALITIES_IMAGES } from "@/utils/cms-data";
import { useTranslation } from "@/app/i18n";

const ChooseUsSection = async (props: any) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(props.lng, "cmsServices");
	let SPECIALITIES: { name: string; description: string; image: any }[] = t("specialities", { returnObjects: true });
	return (
		// <section className='relative mx-4 mt-24 flex  flex-col items-center gap-14  text-center'>
		// 	<div className='absolute -right-[4rem] -top-[8rem] aspect-square w-[246px] rounded-full bg-violet/60 blur-[100px]'></div>
		// 	<h2 className='primary-heading '>Why Choose Us</h2>
		// 	<p className='  text-base/[37.5px] font-350 text-primary-dark dark:text-white md:text-2xl/[48px]'>
		// 		Through adherence to industry-leading standards in design and development, we offer tailor-made CMS solutions that prioritize scalability,
		// 		security, and effortless management
		// 	</p>

		<Heading
			title='Why Choose Us'
			gradientText='Choose Us'
			description='Through adherence to industry-leading standards in design and development, we offer tailor-made CMS solutions that prioritize scalability,
				security, and effortless management'
			gap='3rem'
			className='section-spacing-p section-height'>
			<div className='mt-[63px] flex w-full shrink grow-0 basis-[300px] flex-wrap justify-center gap-[70px] md:mt-[75px] lg:mt-[180px] lg:gap-[75px] xl:mt-[95px] xl:gap-[95px]'>
				{SPECIALITIES.map((speciality, index) => (
					<ProcessCard
						title={speciality.name}
						darkVisibleImage={SPECIALITIES_IMAGES[index].image}
						gradientTitle={true}
						lightVisibleImage={black}
						description={speciality.description}
						key={speciality.name}
						card='center-aligned'
						className=' xl:max-w-[370px]'
					/>
				))}
			</div>
		</Heading>
		// </section>
	);
};

export default ChooseUsSection;
