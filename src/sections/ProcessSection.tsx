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
import SectionHeading from "@/components/SectionHeading";

const ProcessSection = () => {
	const PROCESSES: { title: string; description: string }[] = [
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

	function SliceProcesses(start: number, end?: number) {
		return PROCESSES.slice(start, end).map((process) => (
			<div
				key={process.title}
				className='btn-outline h-[33px] max-w-[100px] px-4 hover:after:bg-dark md:h-[38px] md:max-w-[155px] lg:h-[75px] lg:max-w-[312px]'>
				{process.title}
			</div>
		));
	}
	return (
		<section className='isolate w-full bg-dark [&_.btn-outline::after]:[background-color:transparent] [&_.btn-outline::before]:bg-none [&_img]:!text-gray'>
			<SectionHeading title='Our Process' gradientText='Process' as='div' className='z-10 mt-24 text-white max-lg:hidden '>
				<div className='flex flex-col'>
					<div className='relative flex rotate-180 justify-center -space-x-1'>
						<div className='absolute bottom-0 aspect-square w-5 translate-x-[calc(50%-11px)] rounded-full border-[3px] border-white bg-pink-500'></div>
						<Image src={vector2} alt='' />
						<Image src={vector1} alt='' />
						<Image src={vector3} alt='' />
					</div>
					<div className='flex justify-center gap-3'>{SliceProcesses(0, 3)}</div>
					<div className='flex justify-center -space-x-1 '>
						<Image src={vector4} alt='' />
						<Image src={vector6} alt='' />
						<Image src={vector4} alt='' />
						<Image src={vector6} alt='' />
					</div>
					<div className='flex justify-center gap-[65px]'>{SliceProcesses(3, 5)}</div>
					<div className='flex items-start justify-center -space-x-1 '>
						<Image src={vector8} alt='' />
						<div className='relative'>
							<Image src={vector10} alt='' />
							<Image src={vector11} className='absolute -bottom-[calc(100%-6px)] left-1/2' alt='' />
						</div>
						<Image src={vector9} alt='' />
					</div>
					<div className='flex justify-center gap-3'>{SliceProcesses(5)}</div>
				</div>
			</SectionHeading>

			{/* <div className='bg-dark lg:hidden'>
				<h2 className='primary-heading mb-3 text-center md:mt-24'>
					Our <span className='clip pink-gradient-bright '>Process</span>
				</h2> */}
			<SectionHeading title='Our Process' gradientText='Process' as='div' className='md:pt-24 lg:hidden [&_.btn-outline]:!text-white'>
				<div className='mt-4 flex flex-col items-center gap-2'>
					<div className='flex flex-col justify-center gap-3  -space-y-2'>
						<div className='relative flex justify-center -space-x-1 '>
							<div className='absolute -top-3 aspect-square w-3 translate-x-[calc(50%-7px)] rounded-full border-[2.5px] border-white bg-pink-500'></div>
							<Image src={vector35} className='absolute -top-1.5 left-[calc(50%+0.5px)] -z-10 rotate-[0deg]' alt='' />

							<Image src={vector34} className='w-full max-w-[133px]' alt='' />
							<Image src={vector37} className='w-full max-w-[133px]' alt='' />
						</div>
						<div className='flex justify-center gap-[119px]'>{SliceProcesses(0, 2)}</div>
						<div className='flex -translate-x-[0.5px] rotate-180 justify-center -space-x-1'>
							<Image src={vector34} className='w-full max-w-[133px]' alt='' />
							<Image src={vector37} className='w-full max-w-[133px]' alt='' />
						</div>
					</div>
					{SliceProcesses(2, 3)}
					<div className='flex flex-col justify-center gap-3 -space-y-2'>
						<div className='relative flex justify-center -space-x-1 '>
							<Image src={vector35} className='absolute -top-1.5 left-[calc(50%-4px)] -z-10  origin-top rotate-[0deg]' alt='' />

							<Image src={vector34} className='w-full max-w-[133px]' alt='' />
							<Image src={vector37} className='w-full max-w-[133px]' alt='' />
						</div>
						<div className='flex justify-center gap-[119px]'>{SliceProcesses(3, 5)}</div>
						<div className='flex -translate-x-[0.5px] rotate-180 justify-center -space-x-1'>
							<Image src={vector34} className='w-full max-w-[133px]' alt='' />
							<Image src={vector37} className='w-full max-w-[133px]' alt='' />
						</div>
					</div>
					{SliceProcesses(5, 6)}
					<div className='flex flex-col justify-center gap-3 -space-y-2'>
						<div className='flex justify-center -space-x-1 '>
							<Image src={vector34} className='w-full max-w-[133px]' alt='' />
							<Image src={vector37} className='w-full max-w-[133px]' alt='' />
						</div>
						<div className='flex justify-center gap-[119px]'>{SliceProcesses(6)}</div>
					</div>
				</div>
			</SectionHeading>
			{/* </div> */}
			<div className='relative isolate  mx-auto grid gap-[70px] bg-dark px-12 py-[63px] md:pt-[150px] lg:gap-[75px] lg:pt-[180px] xl:gap-[95px] xl:pt-[200px] '>
				<div className='absolute -left-[1rem] -top-[6rem]  -z-10 aspect-square w-[500px] rounded-full opacity-40 blur-[100px] [background-image:radial-gradient(circle,theme("colors.violet"),transparent_90%)]'></div>
				<div className='flex flex-wrap justify-center gap-[70px] max-lg:mx-auto max-lg:max-w-[500px]  lg:gap-[30px] xl:gap-[64px]'>
					{PROCESSES.slice(0, 3).map((process) => (
						<ProcessCard description={process.description} image={placeholder} title={process.title} key={process.title} />
					))}
				</div>
				<div className='flex flex-wrap justify-center gap-[70px] max-lg:mx-auto max-lg:max-w-[500px]  lg:gap-[30px] xl:gap-[64px]'>
					{PROCESSES.slice(3, 5).map((process) => (
						<ProcessCard description={process.description} image={placeholder} title={process.title} key={process.title} />
					))}
				</div>
				<div className='flex flex-wrap justify-center gap-[70px] max-lg:mx-auto max-lg:max-w-[500px]  lg:gap-[30px] xl:gap-[64px]'>
					{PROCESSES.slice(5).map((process) => (
						<ProcessCard description={process.description} image={placeholder} title={process.title} key={process.title} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ProcessSection;
