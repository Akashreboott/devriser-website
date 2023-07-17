import ProcessCard from "@/components/ProcessCard";
import placeholder from "../../public/assets/images/placeholder.png";
import vector1 from "./../../public/assets/icons/Vector 1.svg";
import vector2 from "./../../public/assets/icons/Vector 2.svg";
import vector3 from "./../../public/assets/icons/Vector 3.svg";
import vector4 from "./../../public/assets/icons/Vector 4.svg";
import vector6 from "./../../public/assets/icons/Vector 6.svg";
import vector8 from "./../../public/assets/icons/Vector 8.svg";
import vector9 from "./../../public/assets/icons/Vector 9.svg";
import vector10 from "./../../public/assets/icons/Vector 10.svg";
import vector11 from "./../../public/assets/icons/Vector 11.svg";
import vector34 from "./../../public/assets/icons/Vector 34.svg";
import vector35 from "./../../public/assets/icons/Vector 35.svg";
import vector37 from "./../../public/assets/icons/Vector 37.svg";
import Image from "next/image";

const ProcessSection = () => {
	const PROCESSES = [
		{
			title: "Gathering requirements",
			description:
				"We Begin by understanding your needs, goals, preferred CMS platform, and target audience to determine the website's features, functionality, and content requirements",
		},
		{
			title: "Research and planning",
			description:
				"We then move on to conduct in-depth research and create a comprehensive plan outlining the project scope, suitable CMS platform, timeline, and deliverables",
		},
		{
			title: "Creating design",
			description:
				"Our third step involves creating a visually appealing and user-friendly website design, considering factors like branding, layout, navigation, and responsive design",
		},
		{
			title: "Website developments",
			description:
				"Utilizing the approved design, our professionals develop a fully functional website by incorporating all of the necessary features and functionalities",
		},
		{
			title: "Website testing",
			description:
				"We conduct rigorous testing of the newly created website to ensure the website functions flawlessly across different browsers, devices, and scenarios",
		},
		{
			title: "User training",
			description:
				"We provide training and a detailed manual for your web operations team to efficiently manage the website, serving as a comprehensive reference guide for ongoing maintenance and updates",
		},
		{
			title: "Staging site",
			description:
				"After user training and before the launch, we deploy the website for the final round of testing. This ensures that any issues or bugs are identified and resolved before the website goes live",
		},
		{
			title: "Launch of website",
			description: "After successful staging, the website is launched, marking its online debut and making it accessible to the target audience",
		},
	];
	return (
		<section className='[&_img]:!text-gray'>
			<div className='max-lg:hidden bg-dark text-white'>
				<h2 className='primary-heading mt-24 text-center'>
					Our <span className='clip pink-gradient-bright '>Process</span>
				</h2>
				<div className='flex flex-col'>
					<div className='flex justify-center -space-x-1 rotate-180 relative'>
						<div className='w-5 aspect-square rounded-full bg-pink-500 border-[3px] border-white absolute bottom-0 translate-x-[calc(50%-11px)]'></div>
						<Image src={vector2} alt='' />
						<Image src={vector1} alt='' />
						<Image src={vector3} alt='' />
					</div>
					<div className='flex gap-3 justify-center'>
						{PROCESSES.slice(0, 3).map((process) => (
							<div
								key={process.title}
								className='btn-outline hover:after:bg-dark lg:max-w-[312px] lg:h-[75px] md:max-w-[155px] md:h-[38px] max-w-[100px] h-[33px] px-4'>
								{process.title}
							</div>
						))}
					</div>
					<div className='flex justify-center -space-x-1 '>
						<Image src={vector4} alt='' />
						<Image src={vector6} alt='' />
						<Image src={vector4} alt='' />
						<Image src={vector6} alt='' />
					</div>
					<div className='flex gap-[65px] justify-center'>
						{PROCESSES.slice(3, 5).map((process) => (
							<div
								key={process.title}
								className='btn-outline hover:after:bg-dark lg:max-w-[312px] lg:h-[75px] md:max-w-[155px] md:h-[38px] max-w-[100px] h-[33px] px-4'>
								{process.title}
							</div>
						))}
					</div>
					<div className='flex justify-center items-start -space-x-1 '>
						<Image src={vector8} alt='' />
						<div className='relative'>
							<Image src={vector10} alt='' />
							<Image src={vector11} className='absolute -bottom-[calc(100%-6px)] left-1/2' alt='' />
						</div>
						<Image src={vector9} alt='' />
					</div>
					<div className='flex gap-3 justify-center'>
						{PROCESSES.slice(5).map((process) => (
							<div
								key={process.title}
								className='btn-outline hover:after:bg-dark lg:max-w-[312px] lg:h-[75px] md:max-w-[155px] md:h-[38px] max-w-[100px] h-[33px] px-4'>
								{process.title}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='lg:hidden bg-dark'>
				<h2 className='primary-heading md:mt-24 text-center mb-3'>
					Our <span className='clip pink-gradient-bright '>Process</span>
				</h2>
				<div className='flex flex-col items-center gap-2'>
					<div className='flex flex-col gap-3 justify-center  -space-y-2'>
						<div className='flex justify-center -space-x-1 relative '>
							<div className='w-3 aspect-square rounded-full bg-pink-500 border-[2.5px] border-white absolute -top-3 translate-x-[calc(50%-7px)]'></div>
							<Image src={vector35} className='absolute -top-1.5 left-[calc(50%+0.5px)] rotate-[0deg] -z-10' alt='' />

							<Image src={vector34} className='max-w-[133px] w-full' alt='' />
							<Image src={vector37} className='max-w-[133px] w-full' alt='' />
						</div>
						<div className='flex justify-center gap-[119px]'>
							{PROCESSES.slice(0, 2).map((process) => (
								<div
									key={process.title}
									className='btn-outline hover:after:bg-darklg:max-w-[312px] lg:h-[75px] md:max-w-[155px] md:h-[38px] max-md:!max-w-[100px] w-full h-[33px] md:px-4'>
									{process.title}
								</div>
							))}
						</div>
						<div className='flex justify-center -space-x-1 rotate-180 -translate-x-[0.5px]'>
							<Image src={vector34} className='max-w-[133px] w-full' alt='' />
							<Image src={vector37} className='max-w-[133px] w-full' alt='' />
						</div>
					</div>
					{PROCESSES.slice(2, 3).map((process) => (
						<div
							key={process.title}
							className='btn-outline hover:after:bg-dark lg:max-w-[312px] lg:h-[75px] md:max-w-[155px] md:h-[38px] max-md:!max-w-[100px] w-full h-[33px] md:px-4'>
							{process.title}
						</div>
					))}

					<div className='flex flex-col gap-3 justify-center -space-y-2'>
						<div className='flex justify-center -space-x-1 relative '>
							<Image src={vector35} className='absolute -top-1.5 left-[calc(50%-4px)] rotate-[0deg]  origin-top -z-10' alt='' />

							<Image src={vector34} className='max-w-[133px] w-full' alt='' />
							<Image src={vector37} className='max-w-[133px] w-full' alt='' />
						</div>
						<div className='flex justify-center gap-[119px]'>
							{PROCESSES.slice(3, 5).map((process) => (
								<div
									key={process.title}
									className='btn-outline hover:after:bg-dark lg:max-w-[312px] lg:h-[75px] md:max-w-[155px] md:h-[38px] max-md:!max-w-[100px] w-full h-[33px] md:px-4'>
									{process.title}
								</div>
							))}
						</div>
						<div className='flex justify-center -space-x-1 rotate-180 -translate-x-[0.5px]'>
							<Image src={vector34} className='max-w-[133px] w-full' alt='' />
							<Image src={vector37} className='max-w-[133px] w-full' alt='' />
						</div>
					</div>
					{PROCESSES.slice(5, 6).map((process) => (
						<div
							key={process.title}
							className='btn-outline hover:after:bg-dark lg:max-w-[312px] lg:h-[75px] md:max-w-[155px] md:h-[38px] max-md:!max-w-[100px] w-full h-[33px] md:px-4'>
							{process.title}
						</div>
					))}
					<div className='flex flex-col gap-3 justify-center -space-y-2'>
						<div className='flex justify-center -space-x-1 '>
							<Image src={vector34} className='max-w-[133px] w-full' alt='' />
							<Image src={vector37} className='max-w-[133px] w-full' alt='' />
						</div>
						<div className='flex justify-center gap-[119px]'>
							{PROCESSES.slice(6).map((process) => (
								<div
									key={process.title}
									className='btn-outline hover:after:bg-dark lg:max-w-[312px] lg:h-[75px] md:max-w-[155px] md:h-[38px] max-md:!max-w-[100px] w-full h-[33px] md:px-4'>
									{process.title}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='px-12 bg-dark mx-auto grid lg:gap-[75px] xl:gap-[95px] gap-[70px] xl:pt-[200px] lg:pt-[180px] md:pt-[150px] py-[63px] relative '>
				<div className='w-[500px] aspect-square rounded-full bg-violet/50 blur-[100px] absolute -top-[6rem] -left-[1rem] opacity-60'></div>
				<div className='flex max-lg:flex-wrap max-lg:max-w-[500px] max-lg:mx-auto lg:gap-[30px] gap-[70px]  xl:gap-[64px] justify-center'>
					{PROCESSES.slice(0, 3).map((process) => (
						<ProcessCard description={process.description} image={placeholder} title={process.title} key={process.title} />
					))}
				</div>
				<div className='flex max-lg:flex-wrap max-lg:max-w-[500px] max-lg:mx-auto lg:gap-[30px] gap-[70px]  xl:gap-[64px] justify-center'>
					{PROCESSES.slice(3, 5).map((process) => (
						<ProcessCard description={process.description} image={placeholder} title={process.title} key={process.title} />
					))}
				</div>
				<div className='flex max-lg:flex-wrap max-lg:max-w-[500px] max-lg:mx-auto lg:gap-[30px] gap-[70px]  xl:gap-[64px] justify-center'>
					{PROCESSES.slice(5).map((process) => (
						<ProcessCard description={process.description} image={placeholder} title={process.title} key={process.title} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ProcessSection;
