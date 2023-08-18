import HeroOverlay from "@/components/HeroOverlay";
import Main from "@/components/Main";
import HeroSection from "@/components/HeroSection";
import Pattern from "../../../../public/assets/images/enterprise-pattern.svg";
import Placeholder from "../../../../public/assets/images/white520.png";
import Heading from "@/components/SectionHeading";
import FeaturesSection from "@/sections/enterprise-solutions/FeaturesSection";
import Image from "next/image";
import { INDUSTRIES as INDUSTRIES_IMAGES, SOLUTIONS_IMAGES } from "@/utils/enterprise-data";
import Grid1x2 from "@/components/Grid1x2";
import DecoratedBanner from "@/components/DecoratedBanner";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import WhyDevRiserSection from "@/sections/enterprise-solutions/WhyDevriserSection";
import ProcessSection from "@/sections/enterprise-solutions/ProcessSection";
import type { Metadata } from "next";
import { useTranslation } from "@/app/i18n";

const Page = async ({ params: { lng } }: { params: any }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	let { t } = await useTranslation(lng, "enterpriseSolutions");
	let SOLUTIONS: { title: string; image: any }[] = t("custom-solutions", { returnObjects: true });
	let INDUSTRIES: { name: string; image: any }[] = t("industries", { returnObjects: true });

	return (
		<Main data-page='enterprise-solutions'>
			<HeroOverlay
				overlay={Pattern}
				className='h-[600px] '
				gradientClasses='left-0 opacity-50'
				patternImgClasses='opacity-30 dark:opacity-100'
				transparentOverlayClasses='bg-gradient-to-br  md:dark:to-100% opacity-20'
			/>
			<HeroSection heading={t("hero-heading")} description={t("hero-tag")} btnText={t("hero-btn-text")} gradientText={t("hero-gradient")} />
			<FeaturesSection lng={lng} />
			<section className='section-spacing-p grid min-h-section place-items-center'>
				<Heading
					as='div'
					title={t("scalable-solutions-heading.heading")}
					className='my-auto h-fit gap-6'
					gradientText={t("scalable-solutions-heading.gradient-text")}>
					<Heading
						title={t("custom-solutions-heading.heading")}
						description={t("custom-solutions-heading.description")}
						as='div'
						className='mt-4 [&_h2]:!text-p26'>
						<div className='mx-3 mt-10 grid max-w-[1120px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
							{SOLUTIONS.map(({ title }, index) => (
								<div
									key={title}
									className='group flex flex-col gap-5 border border-white/30 p-6 text-left transition-colors duration-300 hover:border-white/70 max-md:items-center max-md:text-center'>
									<Image
										src={SOLUTIONS_IMAGES[index]}
										alt='icon1'
										className=' object-contain transition-all group-hover:brightness-125 group-hover:contrast-150'
									/>
									<div className='text-p16 font-normal md:text-p20'>{title}</div>
								</div>
							))}
						</div>
					</Heading>
				</Heading>
			</section>
			<Heading
				title={t("industries-heading.heading")}
				className='section-spacing-p min-h-section gap-8 [--pb:100px] [--pt:100px]'
				gradientText={t("industries-heading.gradient-text")}>
				<div className='grid w-full grid-cols-[repeat(auto-fit,minmax(150px,360px))] justify-center gap-4'>
					{INDUSTRIES.map(({ name }, index) => (
						<div key={name} className='group relative isolate mx-4 flex aspect-[16/11] items-center justify-center overflow-hidden '>
							<Image
								src={INDUSTRIES_IMAGES[index].image}
								className='absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.3] transition-transform duration-500  group-hover:scale-110'
								alt={name}
							/>
							<div className='flex h-full w-full items-center justify-center px-4 text-p20 leading-[50px] text-white transition-transform  lg:text-p26'>
								{name}
							</div>
						</div>
					))}
				</div>
			</Heading>

			<ProcessSection lng={lng} />

			<Heading
				className='section-spacing-p min-h-section'
				title={t("not-looking-heading.heading")}
				gradientText={t("not-looking-heading.gradient-text")}>
				<Grid1x2 title={t("grid-section.heading")} content={t("grid-section.description")} image={Placeholder} btnText={t("grid-section.btn-text")} />
			</Heading>

			<DecoratedBanner
				title={t("decorated-banner.heading")}
				description={t("decorated-banner.description")}
				btnText={t("decorated-banner.btn-text")}
				quoteLink='enterprise-solutions'
				className='[&_h2]:!text-white [&_p]:!text-white'
				HideRings={true}
				variant='Secondary'
				BannerColor='rgba(197, 61, 173, 1)'
			/>

			<WhyDevRiserSection lng={lng} />
			<TestimonialSection lng={lng} />
			<FaqSection lng={lng} faqQuestions={t("faq-questions", { returnObjects: true })} />
		</Main>
	);
};

export default Page;
export async function generateMetadata({ params: { lng } }: { params: { lng: string } }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng, "enterpriseSolutions");
	return {
		title: t("meta-title"),
		description: t("meta-description"),
	};
}
