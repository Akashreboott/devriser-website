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
import { AnimatePresence, motion } from "framer-motion";

const Footer = () => {
	let opacityVariants = opacityAnimVariants();
	let [active, setActive] = useState("");
	const [breakPoint1011, setBreakPoint1011] = useState(false);
	useEffect(() => {
		function matches1011() {
			if (window.matchMedia("(max-width: 1011px)").matches) {
				setBreakPoint1011(true);
			} else {
				setBreakPoint1011(false);
			}
		}
		window.addEventListener("resize", matches1011);
		matches1011();
		return () => window.removeEventListener("resize", matches1011);
	}, []);

	return (
		<MotionComponent
			initial='hide'
			whileInView='visible'
			variants={opacityVariants}
			viewport={{ margin: "200px" }}
			as='footer'
			className='grid bg-white pt-[70px] font-350 [grid-area:footer] dark:bg-gray-30  [&>*]:mx-auto [&>*]:w-[min(100%,1347px)] [&>*]:px-3 '>
			<div className='flex flex-col justify-between gap-16 lg:flex-row'>
				{/* LOGO SECTION */}
				<MotionComponent initial='hide' animate='visible' variants={opacityVariants} className='flex flex-col space-y-[35px] '>
					<div className='flex items-center gap-[18px]'>
						<DevRiserLogo className='h-[42px] w-[42px]' />
						<h4 className='text-[26px]/[33px] font-normal '>DevRiser</h4>
					</div>
					<div className='max-w-md text-[15px]/[25px] opacity-70'>
						Elevate performance, engage users, and unlock potential with our transformative software services.
					</div>
				</MotionComponent>

				{/* LINKS SECTION */}
				<MotionComponent initial='hide' animate='visible' variants={opacityVariants} className='flex flex-col gap-5  lg:flex-row  lg:gap-[60px] '>
					<ul className='flex flex-col gap-2.5 '>
						<li
							onClick={() => setActive((prev) => (prev === "Company" ? "" : "Company"))}
							className={cn(
								"text-[15px]/[33px] brightness-[1.4] max-lg:cursor-pointer",
								"max-lg:flex max-lg:items-center max-lg:justify-between max-lg:border-b max-lg:border-black/80 max-lg:dark:border-white/50"
							)}>
							<span>Company</span>
							<span>
								<ChevronIcon className={cn("mr-2 rotate-90 lg:hidden", active === "Company" && "-rotate-90")} />
							</span>
						</li>
						{(active === "Company" || !breakPoint1011) && (
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
								<li className='text-[15px]/[33px] opacity-50 transition-[filter,opacity] duration-200 hover:opacity-100 hover:brightness-[1.35]'>
									<Link href={"#"} className='inline-block h-full w-full'>
										About Us
									</Link>
								</li>
								<li className='text-[15px]/[33px] opacity-50 transition-[filter,opacity] duration-200 hover:opacity-100 hover:brightness-[1.35]'>
									<Link href={"#"} className='inline-block h-full w-full'>
										Contact Us
									</Link>
								</li>
							</motion.div>
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
								<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={name}>
									<li className='text-[15px]/[33px] opacity-50 transition-[filter,opacity] duration-200 hover:opacity-100 hover:brightness-[1.35]'>
										<Link href={path} className='inline-block h-full w-full'>
											{name}
										</Link>
									</li>
								</motion.div>
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
								<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={name}>
									<li className='text-[15px]/[33px] opacity-50 transition-[filter,opacity] duration-200 hover:opacity-100 hover:brightness-[1.35]'>
										<a href={path} className='inline-block h-full w-full'>
											{name}
										</a>
									</li>
								</motion.div>
							))}
					</ul>
				</MotionComponent>
			</div>

			{/* ADDRESS SECTION */}
			{/* <div className='mt-[100px] flex gap-[102px] bg-[rgb(250,250,250)] px-12 py-[38px] font-normal dark:bg-[#2B2B2B] dark:[&_p]:!text-white'>
				<p className='text-[16px]/[33px]'>
					2972 Westheimer Rd.
					<br /> Santa Ana, Illinois 85486
				</p>
				<p className='mr-auto text-[16px]/[33px]'>
					4517 Washington Ave.
					<br /> Manchester, Kentucky 39495
				</p>
				<div className='flex flex-col items-center gap-[18px] '>
					<div className='flex gap-5'>
						<a href='#'>
							<Facebooklogo className=' h-7 w-7 dark:text-white' />
						</a>
						<a href='#'>
							<TwitterLogo className=' h-7 w-7 dark:text-white' />
						</a>
						<a href='#'>
							<InstagramIcon className=' h-7 w-7 dark:text-white' />
						</a>
					</div>
					<p>Say 👋 at Ibrahim@devriser.in</p>
				</div>
			</div> */}

			{/* COPYRIGHT SECTION */}
			<div className='mt-[30px] grid  grid-cols-1 items-center justify-between justify-items-center bg-dark/50 !px-5 py-2 dark:text-white max-lg:gap-5 max-lg:py-4 lg:grid-cols-3'>
				<div className='lg:justify-self-start'>
					<a
						href='#'
						className='border-r  border-gray  px-2.5  text-xs/[33px] first-of-type:pl-0 last-of-type:border-r-0 dark:border-[rgb(105,105,105)]'>
						Privacy policy
					</a>
					<a
						href='#'
						className='border-r border-gray   px-2.5  text-xs/[33px] first-of-type:pl-0 last-of-type:border-r-0 dark:border-[rgb(105,105,105)]'>
						Terms of use
					</a>
					<a
						href='#'
						className=' border-r  border-gray px-2.5  text-xs/[33px] first-of-type:pl-0 last-of-type:border-r-0 dark:border-[rgb(105,105,105)]'>
						Licensing
					</a>
				</div>
				<div>&copy; 2023 DevRiser</div>
				<div className='flex gap-5 lg:justify-self-end'>
					<a href='#'>
						<Facebooklogo className=' h-6 w-6 dark:text-white' />
					</a>
					<a href='#'>
						<TwitterLogo className=' h-6 w-6 dark:text-white' />
					</a>
					<a href='#'>
						<InstagramIcon className=' h-6 w-6 dark:text-white' />
					</a>
				</div>
			</div>
		</MotionComponent>
	);
};

export default Footer;
