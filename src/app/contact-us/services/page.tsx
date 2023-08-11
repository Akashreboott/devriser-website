import ContactCard from "@/components/ContactCard";
import SectionHeading from "@/components/SectionHeading";
import cn from "@/utils/cn";
import { SERVICES_OFFERED } from "@/utils/contact-us-data";

const Services = () => {
	return (
		<SectionHeading
			title='Explore our services'
			description='Choose one of the options below to get an accurate get started'
			className='mb-40 mt-20 gap-5 dark:[--primary-text-color:rgba(177,178,178,1)]'>
			<div
				className={cn(
					"[--card-width:300px] [--cards:3] [--gap-between-cards:28px]",
					"mx-auto max-w-[calc(var(--cards)*var(--card-width)+(var(--cards)*var(--gap-between-cards)))] gap-[--gap-between-cards] [&>*]:basis-[--card-width]",
					"mt-16 flex w-full  flex-wrap justify-center [&>*]:shrink  md:[&>*]:shrink-0"
				)}>
				{SERVICES_OFFERED.map((props) => (
					<ContactCard
						heading={props.name}
						description={props.description}
						DarkVisibleImage={props.DarkVisibleImage}
						LightVisibleImage={props.LightVisibleImage}
						key={props.name}
						link={props.link}
					/>
				))}
			</div>
		</SectionHeading>
	);
};

export default Services;
