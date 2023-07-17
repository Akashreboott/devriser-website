import ProcessCard from "@/components/ProcessCard";
import placeholder from "../../public/assets/images/placeholder.png";
import black from "../../public/assets/images/black.png";

const ChooseUsSection = () => {
	const SPECIALITIES = [
		{
			title: "Real-time project tracking",
			description:
				"Experience real-time project visibility with our convenient dashboard, tailored to make your website journey special. Track milestones, view tasks, and monitor development progress effortlessly. Our centralized project management hub ensures transparency, and effective communication, throughout the entire process",
		},
		{
			title: "Expertise in CMS Development",
			description:
				"At DevRiser, we have highly skilled professionals with extensive expertise in CMS development services. In-depth knowledge of various CMS platforms enables us to deliver top-notch websites that are tailored to meet your specific requirements",
		},
		{
			title: "Professional Design & User Experience",
			description:
				"A visually appealing and user-friendly website is essential for online success. Our professionals focus on creating websites that not only look stunning but also offer a seamless user experience, making navigation intuitive and engaging",
		},
		{
			title: "Ongoing Support & Maintenance",
			description:
				"Our commitment to quality CMS development service extends beyond the website's initial creation. From regular updates to troubleshooting and technical assistance, we are dedicated to providing reliable support throughout our clients' online journey",
		},
		{
			title: "Cost Effective CMS",
			description:
				"Experience cost-effective CMS development services tailored to your budget. Our team excels at delivering efficient websites without compromising quality. With meticulous attention to detail, we provide exceptional value for your investment",
		},
	];

	return (
		<section className='flex flex-col gap-14 text-center max-w-[90%] mx-auto mt-24 relative'>
			<div className='w-[246px] aspect-square rounded-full bg-violet/60 blur-[100px] absolute -top-[8rem] -right-[4rem]'></div>
			<h2 className='primary-heading '>Why Choose Us</h2>
			<p className='dark:text-white text-primary-dark md:text-2xl/[48px] text-base/[37.5px] font-350 max-w-[902px] mx-auto'>
				Through adherence to industry-leading standards in design and development, we offer tailor-made CMS solutions that prioritize scalability,
				security, and effortless management
			</p>
			<div className='max-w-[90%] w-full mx-auto grid lg:gap-[75px] xl:gap-[95px] gap-[70px] xl:mt-[95px] lg:mt-[180px] md:mt-[75px] mt-[63px] lg:grid-cols-[repeat(auto-fit,minmax(0,300px))] grid-cols-[repeat(auto-fit,1fr)]'>
				{SPECIALITIES.map((speciality) => (
					<ProcessCard
						title={speciality.title}
						image={placeholder}
						darkImage={black}
						description={speciality.description}
						key={speciality.title}
						card='left-aligned'
					/>
				))}
			</div>
		</section>
	);
};

export default ChooseUsSection;
