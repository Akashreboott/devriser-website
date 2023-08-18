"use client";
import DevRiserLogo from "../../assets/DevRiserLogo";
import SettingsIcon from "./../../../public/assets/icons/SettingsIcon";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { headerPropsInterface } from "./Header";
import { LANGUAGES, NAV_LINKS, NAV_LINKSInterface, ARR_OF_LINKS, LANGUAGE } from "../../utils/cms-data";
import ThemeButton from "@/utils/ThemeButton";
import cn from "@/utils/cn";
import { useRouter } from "next/navigation";
const DesktopHeader = ({
	className,
	subLink,
	setSubLink,
	selectedLanguage,
	setSelectedLanguage,
	selectedLink,
	setSelectedLink,
	...props
}: headerPropsInterface) => {
	const [activeLink, setActiveLink] = useState("");

	const [languagesOpened, setLanguagesOpened] = useState<boolean>(false);
	const [desktopMenuOpened, setDesktopMenuOpened] = useState<boolean>(false);
	const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);

	const headerRef = useRef<HTMLDivElement>(null);
	// --navbar-width
	const headerWidth = 82;

	useEffect(() => {
		if (mobileMenuOpened) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [mobileMenuOpened]);

	function closeMenu() {
		setDesktopMenuOpened(false);
	}
	function openMenu() {
		setDesktopMenuOpened(true);
	}
	function setActive(name: string): void {
		openMenu();
		setActiveLink(name);
	}

	let IconClasses = "px-1 py-0.5 rounded-lg w-[21px] box-content";

	return (
		<AnimatePresence>
			<header
				// onMouseLeave={() => setLanguagesOpened(false)}
				ref={headerRef}
				className={cn(
					"scroll-bar-thin sticky top-0 isolate z-[100] h-full max-h-screen  min-h-screen w-[--navbar-width] [grid-area:header] max-lg:hidden [&_*]:!font-350",
					className
				)}>
				<div
					className={cn(
						"flex h-full w-fit flex-col items-center [&>:not(ul)]:mx-1.5",
						desktopMenuOpened && "border-r border-gray",
						"scroll-bar-thin z-10 justify-between self-start justify-self-start overflow-y-auto bg-white py-3 dark:bg-gray-30"
					)}>
					{/* LOGO */}
					<Link
						aria-label='Go to Home Page'
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
									<m.div
										layoutId='navbox'
										transition={{ type: "spring", duration: 0.7 }}
										className='absolute inset-0 -z-10 h-full w-full rounded-full shadow-[0_0_4px] shadow-sky-400 dark:bg-sky-200 dark:shadow-sky-200'></m.div>
								)}
								{!(selectedLink === "services") && (
									<div className='absolute inset-0 -z-10 h-full w-full rounded-full bg-white opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100 dark:bg-dark/50'></div>
								)}
							</div>
							<p className='z-10'>Services</p>
						</li>
						<li onMouseEnter={() => setActive("solutions")} className='group isolate flex flex-col items-center gap-1.5   '>
							<div className='group relative isolate -z-10 flex h-fit w-[50px] items-center justify-center'>
								<SettingsIcon className={cn(IconClasses, selectedLink === "solutions" && "text-dark")} />
								{selectedLink === "solutions" && (
									<m.div
										layoutId='navbox'
										transition={{ type: "spring", duration: 0.7 }}
										className='absolute inset-0 -z-10 h-full w-full rounded-full shadow-[0_0_4px] shadow-sky-400 dark:bg-sky-200 dark:shadow-sky-200'></m.div>
								)}
								{!(selectedLink === "solutions") && (
									<div className='absolute inset-0 -z-10 h-full w-full rounded-full bg-white opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100 dark:bg-dark/50'></div>
								)}
							</div>
							<p className='z-10'>Solutions</p>
						</li>

						<li onMouseEnter={() => setActive("contact")} className=' group isolate flex flex-col items-center gap-1.5   '>
							<div className='group relative isolate -z-10 flex h-fit w-[50px] items-center justify-center'>
								<SettingsIcon className={cn(IconClasses, selectedLink === "contact" && "text-dark")} />
								{selectedLink === "contact" && (
									<m.div
										layoutId='navbox'
										transition={{ type: "spring", duration: 0.7 }}
										className='absolute inset-0 -z-10 h-full w-full rounded-full shadow-[0_0_4px] shadow-sky-400 dark:bg-sky-200 dark:shadow-sky-200'></m.div>
								)}

								{!(selectedLink === "contact") && (
									<div className='absolute inset-0 -z-10 h-full w-full rounded-full bg-white opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100 dark:bg-dark/50'></div>
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
								rounded-[3.5px] bg-[#EBEAEA] px-[15px] py-2 dark:bg-gray-66'>
								Sign In
							</button>
						</div>
						{/* LANGUAGE BUTTON */}
						<div className='relative z-[100] w-full grow-0'>
							<button
								onClick={() => setLanguagesOpened((prev) => !prev)}
								className='isolate z-[100] flex w-full items-center justify-center  gap-1.5 rounded-[3.5px] border border-[#2A2A2A]   px-2 py-2.5 dark:border-white'>
								<Image src={selectedLanguage.flag} className='h-[12px] w-[16px] object-contain' alt='' />
								<span className='relative top-[0.5px]'>{selectedLanguage.shortName}</span>
							</button>
						</div>
					</div>
				</div>
				{/* SIDE BAR */}
				<AnimatePresence>
					{desktopMenuOpened && (
						<m.div
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
										<m.li
											animate={{ opacity: [0, 0, 0.4, 1] }}
											transition={{ duration: 0.5, ease: "easeInOut" }}
											key={name}
											className={cn(
												"rounded-md duration-200 hover:bg-light dark:hover:bg-dark",
												subLink === path && "bg-white shadow-[0_0_4px] shadow-dark/10 dark:bg-dark dark:shadow-none "
											)}>
											<Link
												aria-label={`Go to ${name} page`}
												href={`/${props.lng}${path}` ?? ""}
												onClick={() => {
													if (path !== "#") {
														setSubLink(path);
														setSelectedLink(activeLink);
													}
												}}
												className={cn("inline-block  h-full w-full p-[14px] pr-[21px]  text-p14/[11.6px]")}>
												{name}
											</Link>
										</m.li>
									))}
							</ul>
						</m.div>
					)}
				</AnimatePresence>

				{/* LANGUAGE POPUP */}
				<AnimatePresence>
					{languagesOpened && (
						<m.ul
							onMouseLeave={() => setLanguagesOpened(false)}
							initial={{ x: "-100%", opacity: 0.2 }}
							animate={{ x: "0", opacity: 1 }}
							exit={{ x: "-100%", opacity: 0.2 }}
							className={
								"absolute bottom-0 left-[calc(100%-1.5px)] -z-10 flex flex-col gap-3 rounded-[0_8px_0_0]  bg-white/60 p-3 backdrop-blur-3xl  dark:bg-gray-30/60   [&>li]:cursor-pointer [&>li]:transition-colors"
							}>
							{LANGUAGES.map((lang, index) => (
								<m.li
									animate={{ opacity: [0, 0, 0.4, 1] }}
									transition={{ duration: 0.5, ease: "easeInOut" }}
									key={lang.shortName}
									className={cn(
										"rounded-md duration-200 hover:bg-light dark:hover:bg-dark",
										selectedLanguage.shortName === lang.shortName && "bg-light dark:bg-dark"
									)}>
									<Link
										href={`/${lang.shortName.toLowerCase()}/${subLink.slice(1)}`}
										onClick={() => {
											// setSelectedLanguage(lang);
											setLanguagesOpened(false);
										}}
										className={cn("flex h-full w-full items-center justify-center gap-2 px-6 py-2.5  text-p12")}>
										<Image src={lang.flag} className='h-[12px] w-[16px] object-contain' alt='' /> <span>{lang.fullName}</span>
									</Link>
								</m.li>
							))}
						</m.ul>
					)}
				</AnimatePresence>
			</header>
		</AnimatePresence>
	);
};

export default DesktopHeader;
