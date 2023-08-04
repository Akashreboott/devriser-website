import HeroOverlay from "@/components/HeroOverlay";
import Main from "@/components/Main";
import Hero from "@/sections/home/Hero";
import Stars from "./../../public/assets/images/stars home.svg";
import Logo from "./../../public/assets/images/LOGO.png";
import Image from "next/image";
import { NAV_LINKS } from "@/utils/cms-data";
import Link from "next/link";
import cn from "@/utils/cn";
import LineLayout from "@/components/LineLayout";
import SideHeading from "@/components/SideHeading";
import illustr from "./../../public/assets/images/illustr.svg";
import HomeGrid from "@/components/HomeGrid";
import GlassCard from "@/components/GlassCard";
import white from "./../../public/assets/images/white520.png";
import image208 from "./../../public/assets/images/Rectangle 208.png";
import image281 from "./../../public/assets/images/Rectangle 281.png";
import GlassCardBig from "@/components/GlassCardBig";
import Phone from "./../../public/assets/images/Nothing Phone 1.png";
import image218 from "./../../public/assets/images/Rectangle 218.png";
import BlogCard from "@/components/BlogCard";
import ArrowSmall from "../../public/assets/icons/ArrowSmall";
import Banner from "@/components/Banner";
import SolutionSection from "@/sections/home/SolutionSection";
import MotionComponent from "@/components/MotionComponent";

const Page = () => {
	return (
		<Main data-page='home' className='relative isolate grid'>
			{/* NAVBAR */}
			{false && (
				<nav className='fixed left-0 top-0 flex w-full items-center justify-center gap-20  bg-white/[0.05] py-5 backdrop-blur '>
					<div className='flex justify-center gap-5'>
						{NAV_LINKS["services"].map(([name, path]) => (
							<Link key={name} href={path}>
								{name}
							</Link>
						))}
					</div>
					<button className='bg-[rgba(71, 71, 71, 0.4)] rounded-[10px] border-[0.5px] border-white/50 px-3.5 py-2.5'>Business Solution</button>
				</nav>
			)}

			<div className='absolute left-0 top-0 flex h-fit w-full items-start justify-center '>
				<div
					className={cn(
						"opacity-0.5 absolute -right-[350px] -top-full aspect-square w-[543px] rounded-full bg-[rgba(44,91,249,0.1)] blur-[100px] md:-right-[180px]   md:-top-1/4"
					)}></div>
				<div
					className={cn("opacity-0.4 absolute  -left-full -top-[200px] z-20 aspect-square w-[400px] rounded-full bg-[rgba(216,216,216,1)] ")}></div>
				<div className='w-full '>
					<Image src={Stars} alt='' className='h-[800px] w-[90%] -translate-y-[200px] brightness-50' />
				</div>
			</div>
			<div className='home isolate'>
				<LineLayout className='my-20' HideSymbol={true}>
					<Hero
						heading='Empowering Your Digital Future'
						description='Unlock the full potential of your digital journey with us! Our platform offers a powerful combination of expert web development'
						btnText="Let's Begin"
						className='z-50'
					/>

					{/* LOGO SECTION */}
					<MotionComponent
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className='mx-3 flex justify-between max-md:flex-col max-md:justify-center max-md:gap-6 lg:ml-24 lg:mr-8'>
						<div className='text-[20px] font-medium max-md:mx-auto lg:text-[26px]/[54px]'>Trusted by</div>
						<div className='flex justify-center gap-5 max-lg:space-y-1 max-md:flex-wrap  lg:gap-10 [&>*]:shrink-0'>
							<Image src={Logo} alt='' className='h-4 object-contain md:h-12' />
							<Image src={Logo} alt='' className='h-4 object-contain md:h-12' />
							<Image src={Logo} alt='' className='h-4 object-contain md:h-12' />
							<Image src={Logo} alt='' className='h-4 object-contain md:h-12' />
							<Image src={Logo} alt='' className='h-4 object-contain md:h-12' />
						</div>
					</MotionComponent>
					<SideHeading
						className='mb-10 mt-20 lg:mb-40 lg:mt-40 lg:pl-16'
						heading='Services'
						description='Empowering Your Digital Future Web Development, Design'
						gradientText='Empowering Your Digital Future'
					/>
				</LineLayout>
				<LineLayout heading='Web Development' className='md:mb-48 lg:mb-20 '>
					<HomeGrid reverse={true} className='justify-items-center gap-10 '>
						<div className='isolate flex w-fit flex-col justify-center gap-2 max-lg:-translate-y-14 max-md:-translate-y-36'>
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
				<LineLayout heading='Web Design' className='mb-20'>
					<HomeGrid className='justify-items-center gap-4 md:gap-10'>
						<div className='isolate mx-2 flex w-fit justify-center gap-2 max-md:-translate-y-24  md:gap-4'>
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
				<LineLayout heading='CMS' className='mb-20 max-md:-mt-24'>
					<HomeGrid reverse={true} className='justify-items-center gap-10 max-lg:gap-0'>
						<div className='isolate flex w-fit flex-col justify-center gap-2 max-lg:-translate-y-14 max-md:-translate-y-32'>
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
				<LineLayout heading='UI/UX' className='mb-0 max-md:mt-16 md:mb-20'>
					<HomeGrid className='justify-items-center gap-10'>
						<div className='isolate flex w-[70%] flex-col items-center justify-center gap-4 max-md:-translate-y-32'>
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
				<LineLayout heading='Mobile Development' className=' mb-20'>
					<HomeGrid className='justify-items-center gap-10' reverse={true}>
						<div className='isolate flex w-[70%] flex-col items-center justify-center gap-4 max-md:-translate-y-24'>
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

				<LineLayout heading='Managed Services' className='mb-20'>
					<HomeGrid className='justify-items-center gap-10'>
						<div className='isolate my-auto flex h-fit w-fit justify-center gap-4 max-md:-translate-y-32'>
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

				<LineLayout className='mx-4 mb-20'>
					<SolutionSection />

					<div className='mx-auto grid max-w-[1080px] gap-4 max-md:grid-cols-[minmax(100,500px)]'>
						<div className='grid grid-cols-1 gap-5 max-md:mx-3 max-md:justify-items-center md:grid-cols-3'>
							<GlassCardBig
								delay={0.1}
								heading='Responsive'
								content='Unlock the full potential of your digital journey with us! Our platform offers a powerful combination of expert web development, stunning design, and cutting-edge applications.'
								image={Phone}
								variant='big'
								className='p-3.5 md:p-5 md:[grid-column:1/3]'
							/>
							<GlassCardBig
								delay={0.1}
								heading='AI powered'
								content='Unlock the full potential of your digital journey with us! Our platform offers a powerful combination.'
								image={image208}
								variant='small'
								className='p-3.5 md:p-5 md:[grid-column:3/4]'
							/>
						</div>
						<div className='grid grid-cols-1 gap-5 max-md:mx-3 max-md:justify-items-center md:grid-cols-3'>
							<GlassCardBig
								delay={0.1}
								heading='Security'
								content='Unlock the full potential of your digital journey with us! Our platform offers a powerful combination.'
								image={image208}
								variant='small'
								className='p-3.5 md:p-5 md:[grid-column:1/2]'
							/>
							<GlassCardBig
								delay={0.1}
								heading='Data Centre'
								content='Unlock the full potential of your digital journey with us! Our platform offers a powerful combination of expert web development, stunning design, and cutting-edge applications. '
								image={image281}
								variant='big'
								className='p-3.5 md:p-5 md:[grid-column:2/4]'
							/>
						</div>
					</div>
				</LineLayout>

				<LineLayout>
					<SideHeading
						heading='Blogs'
						description='Empowering Your Digital Future Web Development, Design'
						gradientText='Empowering Your Digital Future'
						gradientColor='[background-color:#7B9AFE]'
					/>
					<div className='mx-auto mt-20 grid w-[90%] grid-cols-1 gap-4 md:grid-cols-3 '>
						<BlogCard
							delay={0.1}
							heading='Know all about improving your sales through eaiser'
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
							image={image218}
						/>
						<BlogCard
							delay={0.1}
							heading='Know all about improving your sales through eaiser'
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
							image={image218}
						/>
						<BlogCard
							delay={0.5}
							heading='Know all about improving your sales through eaiser'
							content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
							image={image218}
						/>
					</div>
					<Link href={"#"} className='mx-auto mt-10 flex items-center justify-center gap-3 underline'>
						View all
						<ArrowSmall className='h-4 ' />
					</Link>
					<Banner btnText='Get started now!' heading="Ready To Innovate? Let's Build Your Dream App!" />
				</LineLayout>
			</div>
		</Main>
	);
};

export default Page;
