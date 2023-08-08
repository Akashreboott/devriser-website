"use client";

import DevRiserLogo from "../../../public/assets/images/DevRiserLogo";
import SettingsIcon from "./../../../public/assets/icons/SettingsIcon";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import ThemeButton from "@/utils/ThemeButton";
import { LANGUAGES, NAV_LINKS, NAV_LINKSInterface, ARR_OF_LINKS } from "../../utils/cms-data";
import Link from "next/link";
import cn from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

const DesktopHeader = ({ className }: { className?: string }) => {
	const [activeLink, setActiveLink] = useState("");
	const [subLink, setSubLink] = useState<string>("");
	const [selectedLink, setSelectedLink] = useState<string>("");
	const [languagesOpened, setLanguagesOpened] = useState<boolean>(false);
	const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);

	const [desktopMenuOpened, setDesktopMenuOpened] = useState<boolean>(false);
	const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);

	const headerRef = useRef<HTMLDivElement>(null);
	const [headerWidth, setheaderWidth] = useState<number>(82);

	console.log(activeLink, selectedLink);
	useEffect(() => {
		if (mobileMenuOpened) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [mobileMenuOpened, desktopMenuOpened]);

	function closeMenu() {
		setDesktopMenuOpened(false);
	}
	function openMenu() {
		setDesktopMenuOpened(true);
	}
	function setActive(name: string): void {
		openMenu();

		// for (let arr of ARR_OF_LINKS) {
		// 	if (arr.has(subLink)) {
		// 		console.log(arr);
		// 	}
		// }
		setActiveLink(name);
	}

	let IconClasses = "px-1 py-0.5 rounded-lg w-[21px] box-content";

	return (
		<AnimatePresence>
			<header
				onMouseLeave={() => setLanguagesOpened(false)}
				ref={headerRef}
				className={cn(
					"scroll-bar-thin sticky top-0 isolate z-[100] h-full max-h-screen  min-h-screen w-[82px] [grid-area:header] max-lg:hidden [&_*]:!font-350",
					className
				)}>
				<div
					className={cn(
						"flex h-full w-fit flex-col items-center [&>:not(ul)]:mx-1.5",
						desktopMenuOpened && "border-r border-gray",
						"scroll-bar-thin z-10 justify-between self-start justify-self-start overflow-y-auto   bg-white  py-3  dark:bg-gray-30"
					)}>
					{/* LOGO */}
					<Link
						href={"/"}
						onClick={() => {
							setSelectedLink("");
							setSubLink("");
						}}>
						<DevRiserLogo className='mb-[40px]  aspect-square h-[38px] w-[38px] shrink-0' />
					</Link>

					{/* LINKS */}
					<ul
						onMouseEnter={openMenu}
						onMouseLeave={closeMenu}
						className='grid w-full  gap-[25px] px-1 [&_li]:cursor-pointer [&_p]:text-navlink [&_p]:font-350 [&_p]:text-black dark:[&_p]:text-white'>
						<li onMouseEnter={() => setActive("services")} className=' isolate flex flex-col items-center gap-1.5   '>
							<div className='group relative isolate -z-10 flex h-fit w-[50px] items-center justify-center'>
								<SettingsIcon className={cn(IconClasses, selectedLink === "services" && "text-dark")} />
								{selectedLink === "services" && (
									<motion.div
										layoutId='navbox'
										transition={{ type: "spring", duration: 0.7 }}
										className='absolute inset-0 -z-10 h-full w-full rounded-full shadow-[0_0_4px] shadow-sky-400 dark:bg-sky-200 dark:shadow-sky-200'></motion.div>
								)}
								{!(selectedLink === "services") && (
									<div className='absolute inset-0 -z-10 h-full w-full rounded-full bg-white opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100 dark:bg-dark/50'></div>
								)}
							</div>
							<p className='z-10'>Services</p>
						</li>
						<li onMouseEnter={() => setActive("solutions")} className='group isolate flex flex-col items-center gap-1.5   '>
							<div className='relative isolate -z-10 flex h-fit w-[50px] items-center justify-center'>
								<SettingsIcon className={cn(IconClasses, selectedLink === "solutions" && "text-light dark:text-dark")} />
								{selectedLink === "solutions" && (
									<motion.div
										layoutId='navbox'
										transition={{ type: "spring", duration: 0.7 }}
										className='absolute inset-0 -z-10 h-full w-full rounded-full bg-light dark:bg-sky-200 dark:shadow-sky-200'></motion.div>
								)}
								{!(selectedLink === "solutions") && (
									<div className='absolute inset-0 -z-10 h-full w-full rounded-full bg-light opacity-0 brightness-90 transition-opacity duration-300 group-hover:opacity-100 dark:bg-dark/50'></div>
								)}
							</div>
							<p className='z-10'>Solutions</p>
						</li>

						<li onMouseEnter={() => setActive("contact")} className=' group isolate flex flex-col items-center gap-1.5   '>
							<div className='relative isolate -z-10 flex h-fit w-[50px] items-center justify-center'>
								<SettingsIcon className={cn(IconClasses, selectedLink === "contact" && "text-light dark:text-dark")} />
								{selectedLink === "contact" && (
									<motion.div
										layoutId='navbox'
										transition={{ type: "spring", duration: 0.7 }}
										className='absolute inset-0 -z-10 h-full w-full rounded-full bg-light dark:bg-sky-200 dark:shadow-sky-200'></motion.div>
								)}

								{!(selectedLink === "contact") && (
									<div className='absolute inset-0 -z-10 h-full w-full rounded-full bg-light opacity-0 brightness-90 transition-opacity duration-300 group-hover:opacity-100 dark:bg-dark/50'></div>
								)}
							</div>
							<p className='z-10'>Contact</p>
						</li>
					</ul>

					{/* BOTTOM NAV */}
					<div className=' mb-2 mt-auto flex h-full flex-col gap-[15px] pt-12 text-navlink'>
						<ThemeButton />
						{/* SIGN IN BUTTON */}
						<div className='grow-0'>
							<button
								className='w-full
								rounded-[3.5px] bg-[#EBEAEA] px-[17px] py-2 dark:bg-gray-66'>
								SignIn
							</button>
						</div>
						{/* LANGUAGE BUTTON */}
						<div className='relative z-[100] w-full grow-0'>
							<button
								onMouseEnter={() => setLanguagesOpened(true)}
								className='isolate z-[100] flex w-full items-center justify-center  gap-1.5 rounded-[3.5px] border border-[#2A2A2A]   p-2 dark:border-white'>
								<Image src={selectedLanguage.flag} className='h-[18px] w-[18px] rounded-full object-contain' alt='' />
								<span className='relative top-[0.5px]'>{selectedLanguage.shortName}</span>
							</button>
						</div>
					</div>
				</div>
				{/* SIDE BAR */}
				<AnimatePresence>
					{desktopMenuOpened && (
						<motion.div
							onMouseEnter={openMenu}
							onMouseLeave={closeMenu}
							initial={{ transform: `translateX(-${headerWidth + 250}px)` }}
							animate={{ transform: `translateX(${headerWidth}px)` }}
							exit={{ transform: `translateX(-${250 + headerWidth}px)` }}
							className={cn(
								"fixed left-0 top-0 -z-10 h-full max-h-screen w-fit min-w-[250px]  bg-white backdrop-blur-lg dark:bg-[#1E1E1E] max-lg:hidden"
							)}>
							<ul className={"flex flex-col gap-5 px-5 py-6 [&>*]:min-w-[200px]  [&>li]:cursor-pointer [&>li]:transition-colors"}>
								{activeLink &&
									desktopMenuOpened &&
									NAV_LINKS[activeLink as keyof NAV_LINKSInterface].map(([name, path], index) => (
										<motion.li
											animate={{ opacity: [0, 0, 0.4, 1] }}
											transition={{ duration: 0.5, ease: "easeInOut" }}
											key={name}
											className={cn(
												"rounded-md duration-200 hover:bg-light dark:hover:bg-dark",
												subLink === name && "bg-white shadow-[0_0_4px] shadow-dark/10 dark:bg-dark dark:shadow-none "
											)}>
											<Link
												href={path ?? ""}
												onClick={() => {
													if (path !== "#") {
														setSubLink(name);
														setSelectedLink(activeLink);
													}
												}}
												className={cn("inline-block  h-full w-full p-[14px] pr-[21px]  text-[14px]/[11.6px]")}>
												{name}
											</Link>
										</motion.li>
									))}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>

				{/* LANGUAGE POPUP */}
				<AnimatePresence>
					{languagesOpened && (
						<motion.ul
							onMouseLeave={() => setLanguagesOpened(false)}
							initial={{ x: "-100%", opacity: 0.2 }}
							animate={{ x: "0", opacity: 1 }}
							exit={{ x: "-100%", opacity: 0.2 }}
							className={
								"absolute bottom-0 left-[calc(100%-1.5px)] -z-10 flex flex-col gap-5 rounded-[0_8px_0_0]  bg-white/60 p-3 backdrop-blur-3xl  dark:bg-gray-30/60   [&>li]:cursor-pointer [&>li]:transition-colors"
							}>
							{LANGUAGES.map((lang, index) => (
								<motion.li
									animate={{ opacity: [0, 0, 0.4, 1] }}
									transition={{ duration: 0.5, ease: "easeInOut" }}
									key={lang.shortName}
									className={cn(
										"rounded-md duration-200 hover:bg-light dark:hover:bg-dark",
										selectedLanguage.shortName === lang.shortName && "bg-light dark:bg-dark"
									)}>
									<div
										onClick={() => {
											setSelectedLanguage(lang);
											setLanguagesOpened(false);
										}}
										className={cn("flex h-full w-full items-center justify-center gap-2 px-6 py-2  text-[12px]/[11.6px]")}>
										<Image src={lang.flag} className='h-[18px] w-[18px] object-contain' alt='' /> <span>{lang.fullName}</span>
									</div>
								</motion.li>
							))}
						</motion.ul>
					)}
				</AnimatePresence>
			</header>
		</AnimatePresence>
	);
};

export default DesktopHeader;
