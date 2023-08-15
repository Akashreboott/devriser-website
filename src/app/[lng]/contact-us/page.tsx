import Main from "@/components/Main";
import HeroSection from "@/components/HeroSection";
import illustration from "../../../../public/assets/images/dark hero illustration.svg";
import Lightillustration from "../../../../public/assets/images/light hero illustration.svg";

import { COMPANY_DETAILS, OFFICE_DETAILS, OUR_SERVICES } from "@/utils/contact-us-data";
import Heading from "@/components/SectionHeading";
import ContactCard from "@/components/ContactCard";
import cn from "@/utils/cn";

const ContactUS = () => {
	return (
		<Main data-page='About'>
			<HeroSection
				DarkVisibleImage={illustration}
				LightVisibleImage={Lightillustration}
				heading='Lorem Ipsum is simply dummy text of the printing'
				description="Maximize your website's potential with our CMS development services and reflect the true value of your business."
				className=''
			/>
			<section className='section-spacing-p grid w-full place-items-center'>
				<div className='grid w-[80%] grid-cols-1 gap-6 lg:grid-cols-3'>
					{COMPANY_DETAILS.map(({ contact, details, icon }) => {
						const ICON = icon;
						return (
							<div key={contact} className='glass flex items-center justify-start gap-3 px-6 py-4 pr-12'>
								<ICON className='h-8 w-11 text-dark dark:text-white ' />
								<div className='grid'>
									<h2 className='text-lg font-semibold'>{contact}</h2>
									<p className='text-[12px]'>{details}</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<Heading
				title='Our services and solution'
				description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less no'
				className='section-spacing-p min-h-section gap-3'>
				<div className='mx-3 mt-16 grid grid-cols-[minmax(0,300px)]  gap-4  md:grid-cols-[repeat(2,minmax(0,350px))]'>
					{OUR_SERVICES.map(({ DarkVisibleImage, LightVisibleImage, description, heading, link }) => (
						<ContactCard
							description={description}
							heading={heading}
							key={heading}
							link={link}
							DarkVisibleImage={DarkVisibleImage}
							LightVisibleImage={LightVisibleImage}
						/>
					))}
				</div>
			</Heading>
			<Heading
				title='Visit Our Office'
				description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less no'
				className='section-spacing-p min-h-section gap-3'>
				<div
					className={cn(
						"[--card-width:220px] [--cards:4] [--gap-between-cards:28px]",
						"max-w-[calc(var(--cards)*var(--card-width)+(var(--cards)*var(--gap-between-cards)))] gap-[--gap-between-cards] [&>*]:basis-[--card-width]",
						" mt-16 flex w-full flex-wrap justify-center [&>*]:shrink-0  "
					)}>
					{OFFICE_DETAILS.map(({ DarkVisibleImage, city, address }) => (
						<ContactCard
							description={address}
							heading={city}
							key={city}
							DarkVisibleImage={DarkVisibleImage}
							className='py-14'
							imageClasses='w-16 h-16'
						/>
					))}
				</div>
			</Heading>
		</Main>
	);
};

export default ContactUS;
