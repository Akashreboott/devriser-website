"use client";
import Main from "@/components/Main";

import Stars from "./../../../public/assets/images/stars home.svg";
import Image from "next/image";
import { NAV_LINKS } from "@/utils/cms-data";
import cn from "@/utils/cn";
import LineLayout from "@/components/LineLayout";
import Link from "next/link";

import image208 from "./../../../public/assets/images/Rectangle-208.png";
import image281 from "./../../../public/assets/images/Rectangle-281.png";
import GlassCardBig from "@/components/GlassCardBig";
import Phone from "./../../../public/assets/images/Nothing-Phone-1.png";

import Banner from "@/components/Banner";
import SolutionSection from "@/sections/home/SolutionSection";
import MotionComponent from "@/components/MotionComponent";
import ServicesSection from "@/sections/home/ServicesSection";
import BlogsSection from "@/sections/home/BlogsSection";
import HeroSection from "@/sections/home/HeroSection";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { slugify } from "@/utils/utils";
import { SOLUTIONS } from "@/utils/home-data";

const Page = () => {
	const [services, setServices] = useState("");
	const [solutionsClicked, setSolutionsClicked] = useState<boolean>(false);

	function onView(value: string) {
		setServices(value);
	}
	function notOnView() {
		setServices("");
	}

	return (
		<>
			{/* NAVBAR */}
			<AnimatePresence>
				{services && (
					<m.nav
						initial={{ y: "-100%", x: "-47.5%" }}
						animate={{ y: "0%", x: "-47.5%" }}
						exit={{ y: "-100%", x: "-47.5%" }}
						transition={{ duration: 1 }}
						className='fixed left-1/2  top-0 z-50 mx-auto flex w-full max-w-[1728px]  items-center justify-center gap-20 bg-white/[0.05]  py-5 backdrop-blur-2xl max-lg:hidden '>
						<div className='flex  justify-center gap-5'>
							{NAV_LINKS["services"].map(([name]) => (
								<a aria-label={`Go to ${name} section`} key={name} className='relative inline-block' href={`#${slugify(slugify(name), "/")}`}>
									{name}
									{services === name && (
										<MotionComponent
											as='span'
											layoutId='HorizontalNavbarUnderline'
											className='absolute -bottom-2.5 left-0 inline-block  h-1 w-full bg-gradient-to-r from-transparent  via-sky-500  via-50%  to-transparent'
										/>
									)}
								</a>
							))}
						</div>
						<button
							onClick={() => setSolutionsClicked((prev) => !prev)}
							className='bg-[rgba(71, 71, 71, 0.4)] relative rounded-[10px] border-[0.5px] border-white/50 px-3.5 py-2.5'>
							<span>Business Solution</span>
							<AnimatePresence>
								{solutionsClicked && (
									<m.ul
										onMouseLeave={() => setSolutionsClicked(false)}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className={
											"absolute left-0 top-[calc(100%+8px)] -z-10 flex w-full min-w-fit flex-col gap-3  rounded-md  bg-light py-3 backdrop-blur-3xl  dark:bg-gray-30/95   [&>li]:cursor-pointer [&>li]:transition-colors"
										}>
										{SOLUTIONS.map(({ name }, index) => (
											<m.li
												animate={{ opacity: [0, 1] }}
												transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 * index }}
												key={name}
												className={cn(
													"flex h-full w-full  items-center justify-start gap-2 px-5  py-3 text-[12px]/[11.6px] transition-colors duration-200 hover:bg-light  dark:hover:bg-dark"
													// ,selectedLanguage.shortName === lang.shortName && "bg-light dark:bg-dark"
												)}>
												{/* onClick={() => {
														setSelectedLanguage(lang);
														setLanguagesOpened(false);
													}} */}
												{name}
											</m.li>
										))}
									</m.ul>
								)}
							</AnimatePresence>
						</button>
					</m.nav>
				)}
			</AnimatePresence>
			<Main data-page='home' className=' isolate grid '>
				{/* STARS AND GRADIENTS OVERLAY */}
				<div className='absolute left-0 top-0 flex min-h-section w-screen items-start justify-center overflow-hidden '>
					<MotionComponent
						transition={{ repeat: Infinity, delay: 4.5, duration: 4, repeatType: "mirror" }}
						className={cn(
							"opacity-0.5 absolute -right-[350px] -top-full aspect-square w-[543px] rounded-full bg-[rgba(44,91,249,0.1)] blur-[100px] md:-right-[180px]   md:-top-1/4"
						)}
					/>
					{/* WHITE BALL */}
					{/* <MotionComponent
						animate={{
							x: [0, 100, 200, 200, 300, 400, 500, 750, 850, 950, 1000, 1100, 1200],
							y: [0, 100, 200, 250, 500, 600, 400, 300, 200, 100, 0],
						}}
						transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
						className={cn(
							"opacity-0.4 absolute -top-[200px] left-full z-20 aspect-square w-[400px] rounded-full bg-gradient-to-tl from-emerald-400 to-emerald-500 opacity-30 blur-3xl lg:-left-[10%] "
						)}
					/> */}
					<m.div
						animate={{
							filter: ["brightness(0) blur(3px)", "brightness(0.1) blur(1.5px)", "brightness(0.4) blur(0px)"],
						}}
						transition={{ duration: 1, delay: 4 }}
						className='h-full  w-full brightness-50'>
						<Image src={Stars} alt='' className=' hidden h-full w-full -translate-y-[200px] object-cover dark:block max-md:translate-y-0 ' />
					</m.div>
				</div>

				<div className='home isolate'>
					{/* HERO SECTION */}
					<HeroSection />

					<ServicesSection notOnView={notOnView} onView={onView} />

					{/* SOLUTIONS SECTION */}
					<LineLayout className='mb-20'>
						<SolutionSection />

						<div className='mx-auto grid max-w-[1080px] justify-center gap-4 max-md:grid-cols-[minmax(100,500px)] lg:-translate-x-[25px] xl:-translate-x-[35px]'>
							<div className='grid grid-cols-1 gap-5 max-md:mx-3 max-md:justify-items-center md:grid-cols-3'>
								<GlassCardBig
									delay={0.1}
									heading='Responsive'
									content='Experience responsive accessibility—our solution smoothly adapts to all devices, enhancing your efficiency on the go.'
									image={Phone}
									variant='big'
									className='p-3.5 md:p-5 md:[grid-column:1/3]'
								/>
								<GlassCardBig
									delay={0.1}
									heading='Data center'
									content='Choose Your Service Hosting Destination. Customize your experience by deciding where your services reside, putting you in control of security'
									image={image208}
									variant='small'
									className='p-3.5 md:p-5 md:[grid-column:3/4]'
								/>
							</div>
							<div className='grid grid-cols-1 gap-5 max-md:mx-3 max-md:justify-items-center md:grid-cols-3'>
								<GlassCardBig
									delay={0.1}
									heading='Security'
									content='Our solution employs encryption, access controls, and audits to protect your data and ensure compliance.'
									image={image208}
									variant='small'
									className='p-3.5 md:p-5 md:[grid-column:1/2]'
								/>
								<GlassCardBig
									delay={0.1}
									heading='AI powered'
									content='Step into the future with AI-powered innovation. Automate tasks, gain insights, and make informed decisions for unparalleled efficiency.'
									image={image281}
									variant='big'
									className='p-3.5 md:p-5 md:[grid-column:2/4]'
								/>
							</div>
						</div>
					</LineLayout>

					<LineLayout className='w-full '>
						<BlogsSection />
						<Banner className='max-lg:mx-auto' btnText='Get started now!' heading="Let's Create Digital Excellence Together." />
					</LineLayout>
				</div>
			</Main>
		</>
	);
};

export default Page;
