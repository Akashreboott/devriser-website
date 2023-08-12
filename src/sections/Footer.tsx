"use client";
import { NAV_LINKS } from "@/utils/cms-data";
import DevRiserLogo from "../../public/assets/images/DevRiserLogo";
import Facebooklogo from "../../public/assets/icons/Facebooklogo";
import InstagramIcon from "../../public/assets/icons/InstagramIcon";
import TwitterLogo from "../../public/assets/icons/TwitterLogo";
import Link from "next/link";
import MotionComponent from "@/components/MotionComponent";
import { opacityAnimVariants } from "@/utils/FramerVariants";
import ChevronIcon from "../../public/assets/icons/Chevron";
import cn from "@/utils/cn";
import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import useMatchesMedia from "@/hooks/useMatchesMedia";

const Footer = () => {
	let opacityVariants = opacityAnimVariants();
	let [active, setActive] = useState("");
	const breakPoint1011 = useMatchesMedia("max-width: 1011px");

	return (
		<MotionComponent
			initial='hide'
			whileInView='visible'
			variants={opacityVariants}
			viewport={{ margin: "200px" }}
			as='footer'
			className='grid w-[calc(100%+1.5px)] -translate-x-[1.5px] bg-white pt-[30px] font-350 [grid-area:footer] dark:bg-gray-30  [&>*]:mx-auto [&>*]:w-[min(100%,1347px)] [&>*]:px-3 '>
			<div className='flex flex-col justify-between gap-16 lg:flex-row'>
				{/* LOGO SECTION */}
				<MotionComponent initial='hide' animate='visible' variants={opacityVariants} className='flex flex-col space-y-[16px] '>
					<div className='flex items-center gap-[18px]'>
						<DevRiserLogo className='h-[48px] w-[48px]' />
						<div>
							<h4 className='text-[22px]/[33px] font-normal'>DevRiser</h4>
							<div className='max-w-md text-[15px]/[25px] opacity-70'>Elevating Your Project</div>
						</div>
					</div>
				</MotionComponent>

				{/* LINKS SECTION */}
				<MotionComponent initial='hide' animate='visible' variants={opacityVariants} className='flex flex-col gap-5  lg:flex-row  lg:gap-[60px] '>
					<ul className='flex flex-col gap-2.5 '>
						<li
							onClick={() => setActive((prev) => (prev === "Company" ? "" : "Company"))}
							className={cn(
								"text-[15px]/[33px] brightness-[1.4] max-lg:cursor-pointer",
								"max-lg:flex  max-lg:items-center max-lg:justify-between max-lg:border-b max-lg:border-black/80 max-lg:dark:border-white/50"
							)}>
							<span>Company</span>
							<span>
								<ChevronIcon className={cn("mr-2 rotate-90 lg:hidden", active === "Company" && "-rotate-90")} />
							</span>
						</li>
						{(active === "Company" || !breakPoint1011) && (
							<m.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
								<div className='text-[15px]/[33px] opacity-70 transition-[filter,opacity] duration-200 hover:opacity-100 hover:brightness-[1.35] dark:opacity-50 dark:hover:opacity-100'>
									<Link aria-label='Know more about us.' href={"/about"} className='inline-block h-full w-full'>
										About Us
									</Link>
								</div>
								<div className='text-[15px]/[33px] opacity-70 transition-[filter,opacity] duration-200 hover:opacity-100 hover:brightness-[1.35] dark:opacity-50 dark:hover:opacity-100'>
									<Link aria-label='Go to contact us page.' href={"/contact-us"} className='inline-block h-full w-full'>
										Contact Us
									</Link>
								</div>
							</m.li>
						)}
					</ul>
					<ul className='flex flex-col gap-2 '>
						<li
							onClick={() => setActive((prev) => (prev === "Services" ? "" : "Services"))}
							className={cn(
								"text-[15px]/[33px] brightness-[1.4] max-lg:cursor-pointer",
								"max-lg:flex max-lg:items-center max-lg:justify-between max-lg:border-b max-lg:border-black/80 max-lg:dark:border-white/50"
							)}>
							<span>Services</span>
							<span>
								<ChevronIcon className={cn("mr-2 rotate-90 lg:hidden", active === "Services" && "-rotate-90")} />
							</span>
						</li>
						{/* <AnimatePresence> */}
						{(active === "Services" || !breakPoint1011) &&
							NAV_LINKS["services"].map(([name, path]) => (
								<m.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={name}>
									<div className='text-[15px]/[33px] opacity-70 transition-[filter,opacity] duration-200 hover:opacity-100 hover:brightness-[1.35] dark:opacity-50 dark:hover:opacity-100'>
										<Link aria-label={`Go to ${name} Page`} href={path} className='inline-block h-full w-full'>
											{name}
										</Link>
									</div>
								</m.li>
							))}
						{/* </AnimatePresence> */}
					</ul>
					<ul className='flex flex-col gap-2 '>
						<li
							onClick={() => setActive((prev) => (prev === "Solutions" ? "" : "Solutions"))}
							className={cn(
								"text-[15px]/[33px] brightness-[1.4] max-lg:cursor-pointer",
								"max-lg:flex max-lg:items-center max-lg:justify-between max-lg:border-b max-lg:border-black/80 max-lg:dark:border-white/50"
							)}>
							<span>Solutions</span>
							<span>
								<ChevronIcon className={cn("mr-2 rotate-90 lg:hidden", active === "Solutions" && "-rotate-90")} />
							</span>
						</li>
						{(active === "Solutions" || !breakPoint1011) &&
							NAV_LINKS["solutions"].map(([name, path]) => (
								<m.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={name}>
									<div className='text-[15px]/[33px] opacity-70 transition-[filter,opacity] duration-200 hover:opacity-100 hover:brightness-[1.35] dark:opacity-50 dark:hover:opacity-100'>
										<Link aria-label={`Go to ${name} page`} href={path} className='inline-block h-full w-full'>
											{name}
										</Link>
									</div>
								</m.li>
							))}
					</ul>
				</MotionComponent>
			</div>

			{/* COPYRIGHT SECTION */}
			<div className='mt-[30px] grid  grid-cols-1 items-center justify-between justify-items-center !px-5 py-2   backdrop-brightness-[0.95] dark:text-white dark:backdrop-brightness-[0.85] max-lg:gap-5 max-lg:py-4 lg:grid-cols-3'>
				<div className='lg:justify-self-start'>
					<Link
						aria-label='Go to Privacy policy page'
						href='#'
						className='border-r  border-gray  px-2.5  text-xs/[33px] first-of-type:pl-0 last-of-type:border-r-0 dark:border-[rgb(105,105,105)]'>
						Privacy policy
					</Link>
					<Link
						aria-label='Go to Terms of use page'
						href='#'
						className='border-r border-gray   px-2.5  text-xs/[33px] first-of-type:pl-0 last-of-type:border-r-0 dark:border-[rgb(105,105,105)]'>
						Terms of use
					</Link>
					<Link
						aria-label='Go to Licensing page'
						href='#'
						className=' border-r  border-gray px-2.5  text-xs/[33px] first-of-type:pl-0 last-of-type:border-r-0 dark:border-[rgb(105,105,105)]'>
						Licensing
					</Link>
				</div>
				<div>&copy; 2023 DevRiser</div>
				<div className='flex gap-5 lg:justify-self-end'>
					<Link aria-label='Know more about our activites in Facebook page' href='#'>
						<Facebooklogo className=' h-6 w-6 dark:text-white' />
					</Link>
					<Link aria-label='Know more about our activites in Twitter page' href='#'>
						<TwitterLogo className=' h-6 w-6 dark:text-white' />
					</Link>
					<Link aria-label='Know more about our activites in Instagram page' href='#'>
						<InstagramIcon className=' h-6 w-6 dark:text-white' />
					</Link>
				</div>
			</div>
		</MotionComponent>
	);
};

export default Footer;
