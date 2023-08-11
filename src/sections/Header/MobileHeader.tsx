"use client";
import Logo from "./../../../public/assets/icons/Logo";
import Xmark from "./../../../public/assets/icons/Xmark";
import ChevronIcon from "./../../../public/assets/icons/Chevron";
import ContactIcon from "./../../../public/assets/icons/ContactIcon";
import Light from "./../../../public/assets/icons/LightIcon";
import SettingsIcon from "./../../../public/assets/icons/SettingsIcon";
import Solutions from "./../../../public/assets/icons/SolutionIcon";
import Menu from "../../../public/assets/icons/Menu";

import DevRiserLogo from "../../../public/assets/images/DevRiserLogo";
import { useEffect, useState } from "react";
import ThemeButton from "@/utils/ThemeButton";
import { LANGUAGE, LANGUAGES, NAV_LINKS, NAV_LINKSInterface } from "../../utils/cms-data";
import Link from "next/link";
import cn from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { opacityAnimVariants } from "@/utils/FramerVariants";
import { headerPropsInterface } from "./Header";

const MobileHeader = ({
	className,
	selectedLanguage,
	setSelectedLanguage,
	setSubLink,
	subLink,
	selectedLink,
	setSelectedLink,
	...props
}: headerPropsInterface) => {
	const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);
	const [languagesOpened, setLanguagesOpened] = useState<boolean>(false);
	const [services, setServices] = useState<boolean>(false);
	const [solutions, setSolutions] = useState<boolean>(false);

	useEffect(() => {
		if (mobileMenuOpened) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [mobileMenuOpened]);

	return (
		<>
			<header className='sticky top-0 isolate z-[100] grid w-full grid-cols-3 items-center justify-between justify-items-center self-start bg-light px-2  py-3  shadow-sm backdrop-blur-[100px] [grid-area:header]  dark:bg-gray-30 lg:hidden'>
				<div className='flex justify-self-start'>
					<button className='shrink-0 rounded-[3.5px] border border-black bg-light px-[10px] py-[5px] text-xs dark:border-white dark:bg-gray-30'>
						Sign In
					</button>
				</div>
				<Link href={"/"}>
					<DevRiserLogo className='h-[38px] w-[38px] shrink-0' />
				</Link>

				<button className='justify-self-end'>
					<Menu className='w-5 cursor-pointer fill-white' onClick={() => setMobileMenuOpened(true)} />
				</button>
			</header>

			<AnimatePresence mode='wait'>
				{/* OVERLAY */}
				{mobileMenuOpened && (
					<motion.div
						initial={{ opacity: 0, y: "-120%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-120%" }}
						transition={{ duration: "0.5", ease: "easeInOut" }}
						key='mobile-menu'
						className='fixed left-0 top-0 z-[200] flex h-[min(100vh,100%)] w-screen flex-col overflow-y-auto bg-white/20 p-4 backdrop-blur-3xl dark:bg-dark/50 lg:hidden [&_p]:text-dark dark:[&_p]:text-white'>
						{/* TOP BUTTONS */}
						<div className='mb-4 grid grid-cols-3 items-center justify-between justify-items-center px-2'>
							<ThemeButton className='justify-self-start'>
								<Light className='h-6 w-6' />
							</ThemeButton>
							<Link href={"/"} onClick={() => setMobileMenuOpened(false)}>
								<DevRiserLogo className='h-[38px] w-[38px] shrink-0' />
							</Link>
							<Xmark onClick={() => setMobileMenuOpened(false)} className='h-4 w-4 cursor-pointer justify-self-end' />
						</div>
						{/* LINKS */}
						<ul className=' mx-auto flex h-fit w-full grow flex-col gap-[26px] bg-white  p-6 pt-8  text-navlink  dark:bg-gray-30 [&_p]:text-basic [&_p]:font-normal'>
							<li>
								<Link href={"/"} onClick={() => setMobileMenuOpened(false)} className='flex items-center gap-[18px]'>
									<Logo className='w-[15px]' />
									<p>Home</p>
								</Link>
							</li>
							<li className='flex flex-col'>
								<button onClick={() => setServices((prev) => !prev)} className='flex  items-center gap-[18px]'>
									<SettingsIcon className='w-[15px]' />
									<p>Services</p>
									<ChevronIcon className={`ml-auto w-[15px]  transition-transform ${services && "rotate-90"}`} />
								</button>
								<div className={`mt-4 space-y-[6px] pl-8 ${!services && "hidden"}`}>
									{NAV_LINKS["services"].map(([name, path]) => (
										<Link
											key={name}
											href={path}
											onClick={() => {
												setSubLink(name);
												setSelectedLink("services");
												setMobileMenuOpened(false);
											}}
											className={cn("block rounded p-2.5 text-xs/[12px] opacity-60 active:opacity-100", subLink === name && "bg-gray dark:bg-dark")}>
											{name}
										</Link>
									))}
								</div>
							</li>
							<li className='flex flex-col'>
								<button onClick={() => setSolutions((prev) => !prev)} className='flex items-center gap-[18px]'>
									<Solutions className='w-[15px]' />
									<p>Solutions</p>
									<ChevronIcon className={`ml-auto w-[15px]  transition-transform ${solutions && "rotate-90"}`} />
								</button>
								<div className={`mt-4 space-y-[6px] pl-8 ${!solutions && "hidden"}`}>
									{NAV_LINKS["solutions"].map(([name, path]) => (
										<Link
											key={name}
											href={path}
											onClick={() => {
												setSubLink(name);
												setSelectedLink("solutions");
												setMobileMenuOpened(false);
											}}
											className='block rounded p-2.5 text-xs/[12px] opacity-60 active:opacity-100'>
											{name}
										</Link>
									))}
								</div>
							</li>
							<li className='flex  items-center gap-[18px]'>
								<Link href={"/contact-us"} onClick={() => setMobileMenuOpened(false)} className='flex items-center gap-[18px]'>
									<ContactIcon className='w-[15px]' />
									<p>Contact</p>
								</Link>
							</li>
							{/* BOTTOM BUTTONS */}
							<li className='flex flex-col gap-2 '>
								<motion.button
									initial={{ opacity: 0.15 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0.15 }}
									transition={{ duration: 1 }}
									key={selectedLanguage.fullName}
									onClick={() => setLanguagesOpened((prev) => !prev)}
									className='relative isolate flex items-center justify-start gap-3 rounded-md border border-primary-dark/[0.16] bg-light px-[20px]  py-[14px] text-base text-primary-dark dark:bg-dark dark:text-primary-light'>
									<Image src={selectedLanguage.flag} className='h-[18px] w-[18px] rounded-full object-contain' alt='' />
									{selectedLanguage.fullName}
									<ChevronIcon className='ml-auto rotate-90' />
									{languagesOpened && (
										<motion.ul
											initial='hide'
											animate='visible'
											exit='hide'
											variants={opacityAnimVariants(0.2, 1)}
											className={
												"absolute -bottom-[330%] left-0  z-50 flex w-full flex-col gap-2 rounded-[0_0_8px_8px]  border-2 bg-white/80 p-3  backdrop-blur-3xl dark:border-dark/50 dark:bg-gray-30/95   [&>li]:cursor-pointer [&>li]:transition-colors"
											}>
											{LANGUAGES.map((lang, index) => (
												<motion.li
													initial={{ x: -10, opacity: 0 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ duration: 0.2, type: "spring", stiffness: 120, delay: 0.1 * index }}
													key={lang.shortName}
													className={cn(
														"rounded-md duration-200 hover:bg-light dark:hover:bg-dark",
														selectedLanguage.shortName === lang.shortName && "bg-light dark:bg-dark"
													)}>
													<button
														onClick={() => {
															setSelectedLanguage(lang);
															setLanguagesOpened(false);
															// props.changeLanguage(lang.shortName.toLowerCase());
														}}
														className={cn("flex h-full w-full items-center justify-start gap-4 px-6 py-3  text-[12px]/[11.6px]")}>
														<Image src={lang.flag} className='h-[18px] w-[18px] object-contain' alt='' /> <span>{lang.fullName}</span>
													</button>
												</motion.li>
											))}
										</motion.ul>
									)}
								</motion.button>
								<button className='flex items-center justify-center rounded-md border border-primary-dark/[0.16] bg-dark px-[20px]  py-[14px] text-center text-base text-primary-light dark:bg-light dark:text-primary-dark'>
									Sign In
								</button>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default MobileHeader;
