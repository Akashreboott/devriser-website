import LogoClouds from "@/components/LogoClouds";
import Main from "@/components/Main";
import Heading from "@/components/SectionHeading";
import { PARTNERS_LOGOS, TEAM } from "@/utils/about-data";
import white from "../../../../public/assets/images/white520.png";
import whiteSmall from "../../../../public/assets/images/placeholder.png";
import blackSmall from "../../../../public/assets/images/black150.png";
import black from "../../../../public/assets/images/black520.png";
import DarkLightImage from "@/components/DarkLightImage";
import cn from "@/utils/cn";
import Button from "@/components/Button";
import DecoratedBanner from "@/components/DecoratedBanner";
import { useTranslation } from "@/app/i18n";
const About = async ({ params: { lng } }: any) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng, "aboutUs");
	let SOLUTIONS: { heading: string; description: string }[] = t("solutions", { returnObjects: true });

	return (
		<Main data-page='About'>
			<section id='hero' className='section-spacing-p grid min-h-section w-full place-items-center'>
				<Heading as='div' className='gap-32 lg:gap-5' title={t("hero-heading")} description={t("hero-tag")} />
				<LogoClouds heading={t("partners-heading.heading")} logos={PARTNERS_LOGOS} />
			</section>

			{/* GRID */}
			<section className='section-spacing-p grid min-h-section w-full place-items-center'>
				<div className='mx-auto grid max-w-5xl grid-cols-1 items-center justify-center gap-10 lg:grid-cols-[minmax(0,420px)_1fr]  lg:gap-20'>
					<DarkLightImage
						darkVisibleImage={white}
						lightVisibleImage={black}
						alt='white'
						className='h-full  grow-0 basis-[500px] rounded-lg object-cover'
					/>
					<div className='grid grid-cols-2 gap-4'>
						<div className='flex flex-col items-start justify-center gap-3.5 rounded-lg bg-white px-5   py-8 dark:bg-gray-39 lg:py-12'>
							<span className='text-p36  font-medium lg:text-p48'>45k+</span>
							<p className='text-dark dark:text-white'>Client</p>
						</div>
						<div className='flex flex-col items-start justify-center gap-3.5 rounded-lg bg-white px-5   py-8 dark:bg-gray-39 lg:py-12'>
							<span className='text-p36  font-medium lg:text-p48'>19+</span>
							<p className='text-dark dark:text-white'>Countries</p>
						</div>
						<div className='flex flex-col items-start justify-center gap-3.5 rounded-lg bg-white px-5   py-8 dark:bg-gray-39 lg:py-12'>
							<span className='text-p36  font-medium lg:text-p48'>12+</span>
							<p className='text-dark dark:text-white'>Softwares Developed</p>
						</div>
						<div className='flex flex-col items-start justify-center gap-3.5 rounded-lg bg-white px-5   py-8 dark:bg-gray-39 lg:py-12'>
							<span className='text-p36  font-medium lg:text-p48'>200+</span>
							<p className='text-dark dark:text-white'>Employees</p>
						</div>
					</div>
				</div>
			</section>

			<Heading
				title={t("tomorrow-heading.heading")}
				gradientText={t("tomorrow-heading.gradient-text")}
				description={t("tomorrow-heading.description")}
				className='section-spacing-p min-h-section gap-8'>
				<div className='mx-2 mt-8 grid max-w-md grid-cols-1  gap-4 lg:max-w-[900px] lg:grid-cols-2'>
					{SOLUTIONS.map(({ heading, description }) => (
						<div
							key={heading}
							className='grid place-items-start gap-3 rounded-lg border border-dark/10 bg-white px-6 pb-20 pt-7 hover:border-dark/20  dark:border-white/10 dark:bg-gray-39 dark:hover:border-white/25'>
							<h3 className='font-semibold'>{heading}</h3>
							<p className='text-left font-350'>{description}</p>
						</div>
					))}
				</div>
			</Heading>

			<section className='section-spacing-p grid min-h-section w-full place-items-center'>
				<div className='mx-3 grid w-full max-w-[1080px] place-items-center'>
					<Heading
						as='div'
						title={t("team-heading.heading")}
						description={t("team-heading.description")}
						className={cn(
							// 'grid   grid-cols-2  [&_h2]:text-left [&_p]:text-left',
							"w-[calc(100%-3rem)] gap-4"
						)}
					/>
					<div className='mx-auto mt-8 grid w-[calc(100%-3rem)]  gap-6 rounded-lg bg-white p-10 dark:bg-gray-39'>
						<h3 className='secondary-heading'>Team</h3>
						<div className='grid w-full max-w-[1080px] grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3 '>
							{TEAM.map(({ name, image, role }, index) => (
								<div key={index} className=' flex gap-5'>
									<DarkLightImage
										darkVisibleImage={whiteSmall}
										lightVisibleImage={blackSmall}
										alt=''
										className='h-full max-h-[80px] w-full max-w-[80px] rounded-lg'
									/>
									<div className='flex flex-col justify-center  gap-1'>
										<h4 className='font-medium'>{name}</h4>
										<p className='text-[12px]'>{role}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<Button text={t("join-team")} className='mx-auto mt-16' variant='Primary' />
				</div>
			</section>

			<DecoratedBanner
				title={t("decorated-banner.heading")}
				btnText={t("decorated-banner.btn-text")}
				variant='Secondary'
				BannerColor='rgba(96, 61, 197, 1)'
				HideRings={true}
				className=' [&_h2]:text-white'
			/>
		</Main>
	);
};

export default About;
