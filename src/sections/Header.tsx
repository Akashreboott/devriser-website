"use client";
import Logo from "./../../public/assets/icons/Logo";
import Xmark from "./../../public/assets/icons/Xmark";
import ChevronIcon from "./../../public/assets/icons/Chevron";
import DevRiserLogo from "../../public/assets/images/DevRiserLogo";
import AboutIcon from "./../../public/assets/icons/About";
import ContactIcon from "./../../public/assets/icons/ContactIcon";
import Light from "./../../public/assets/icons/LightIcon";
import Blogs from "./../../public/assets/icons/BlogIcon";
import SettingsIcon from "./../../public/assets/icons/SettingsIcon";
import Solutions from "./../../public/assets/icons/SolutionIcon";
import flag from "./../../public/assets/icons/flag.svg";
import Image from "next/image";
import Menu from "../../public/assets/icons/Menu";
import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import ThemeContext from "@/utils/ThemeContext";
import ThemeButton from "@/utils/ThemeButton";
import { LANGUAGES, NAV_LINKS, NAV_LINKSInterface } from "../utils/cms-data";
import Link from "next/link";
import cn from "@/utils/cn";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const Header = ({ className }: { className?: string }) => {
	const [activeLink, setActiveLink] = useState("services");
	const [subLink, setSubLink] = useState<string>("CMS Services");
	const [languagesOpened, setLanguagesOpened] = useState<boolean>(false);
	const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);

	const [desktopMenuOpened, setDesktopMenuOpened] = useState<boolean>(false);
	const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);

	const [services, setServices] = useState<boolean>(false);
	const [solutions, setSolutions] = useState<boolean>(false);
	const headerRef = useRef<HTMLDivElement>(null);
	const [headerWidth, setheaderWidth] = useState<number>(82);
	const [page, setPage] = useState<string>("");

	useEffect(() => {
		if (mobileMenuOpened) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [mobileMenuOpened, desktopMenuOpened]);

	// useEffect(() => {
	// 	if (headerRef.current != null) {
	// 		console.log(headerRef.current.getBoundingClientRect());
	// 		setheaderWidth(headerRef.current.getBoundingClientRect().width);
	// 	}
	// }, []);
	// useEffect(() => {
	// 	function changeDataAttribute(pageName: string) {
	// 		const main = document.getElementById("main");
	// 		if (main) {
	// 			main.dataset.page = pageName;
	// 		}
	// 	}
	// 	changeDataAttribute(page);
	// }, [page]);
	// onClick={activeLink == "services" ? () => setPage(name) : () => {}}

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

	// let IconClasses = (tag: string) =>
	// 	`dark:hover:bg-dark hover:bg-light p-1.5 rounded-lg w-[20px] box-content ${activeLink === tag && desktopMenuOpened && "dark:bg-dark bg-light"}`;

	let IconClasses = "p-1.5 rounded-lg w-[20px] box-content";

	const NavBarLink = (children: ReactNode, linkname: string) => {
		return (
			<li onMouseEnter={() => setActive(linkname)} className='flex flex-col items-center gap-[5px]  '>
				{children}
				<p>Services</p>
			</li>
		);
	};
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
					<Link href={"/"} onClick={() => setPage("")}>
						<DevRiserLogo className='mb-[40px]  aspect-square h-[35px] w-[35px] shrink-0 ' />
					</Link>
					<ul
						onMouseEnter={openMenu}
						onMouseLeave={closeMenu}
						className='grid w-full  gap-[25px] px-1 [&_li]:cursor-pointer [&_p]:text-navlink [&_p]:font-350 [&_p]:text-black dark:[&_p]:text-white'>
						<li onMouseEnter={() => setActive("services")} className=' isolate flex flex-col items-center gap-1   '>
							<div className='relative isolate -z-10 h-fit w-fit'>
								<SettingsIcon className={IconClasses} />
								{activeLink === "services" && (
									<motion.div
										layoutId='navbox'
										transition={{ type: "spring", duration: 0.7 }}
										className='absolute inset-0 -z-10 h-full w-full rounded-lg bg-light dark:bg-dark'></motion.div>
								)}
							</div>
							<p className='z-10'>Services</p>
						</li>
						<li onMouseEnter={() => setActive("solutions")} className=' isolate flex flex-col items-center gap-1   '>
							<div className='relative isolate -z-10 h-fit w-fit'>
								<SettingsIcon className={IconClasses} />
								{activeLink === "solutions" && (
									<motion.div
										layoutId='navbox'
										transition={{ type: "spring", duration: 0.7 }}
										className='absolute inset-0 -z-10 h-full w-full rounded-lg bg-light dark:bg-dark'></motion.div>
								)}
							</div>
							<p className='z-10'>Solutions</p>
						</li>

						<li onMouseEnter={() => setActive("contact")} className=' isolate flex flex-col items-center gap-1   '>
							<div className='relative isolate -z-10 h-fit w-fit'>
								<SettingsIcon className={IconClasses} />
								{activeLink === "contact" && (
									<motion.div
										layoutId='navbox'
										transition={{ type: "spring", duration: 0.7 }}
										className='absolute inset-0 -z-10 h-full w-full rounded-lg bg-light dark:bg-dark'></motion.div>
								)}
							</div>
							<p className='z-10'>Contact</p>
						</li>
					</ul>
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
											className={cn("rounded-md duration-200 hover:bg-light dark:hover:bg-dark", subLink === name && "bg-light dark:bg-dark")}>
											<Link
												href={path ?? ""}
												onClick={() => (path !== "#" ? setSubLink(name) : {})}
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

			{/* MOBILE HEADER */}
			<header className='sticky top-0 isolate  z-[100] grid w-full grid-cols-3 items-center justify-between justify-items-center self-start  px-2  py-3 backdrop-blur-[100px] [grid-area:header]  dark:bg-gray-30 lg:hidden'>
				<div className='flex justify-self-start'>
					<button className='shrink-0 rounded-[3.5px] border border-black bg-light px-[10px] py-[5px] text-xs dark:border-white dark:bg-gray-30'>
						Sign In
					</button>
				</div>
				<DevRiserLogo className='h-[35px] w-[35px] shrink-0' />

				{/* <button className='px-[17px] py-2 w-max rounded-[3.5px] flex gap-1 items-center  border border-white'>
						<Image src={flag} alt='' />
						<span className='relative top-[0.5px]'>En</span>
					</button> */}
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
						className='fixed left-0 top-0 z-[200] h-screen w-screen bg-white/20 p-4 backdrop-blur-3xl dark:bg-dark/50 lg:hidden [&_p]:text-dark dark:[&_p]:text-white'>
						<div className='mb-4 flex items-center justify-between px-2'>
							<ThemeButton className='h-6 w-6'>
								<Light className='h-6 w-6' />
							</ThemeButton>
							<Xmark onClick={() => setMobileMenuOpened(false)} className='h-4 w-4 cursor-pointer' />
						</div>
						<ul className=' mx-auto flex h-full w-full flex-col gap-[26px] bg-white  p-6 pt-8  text-navlink  dark:bg-gray-30 [&_p]:text-basic [&_p]:font-normal'>
							<li className=''>
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

								<div className={`mt-4 space-y-[10px] pl-8 ${!services && "hidden"}`}>
									{NAV_LINKS["services"].map(([name, path]) => (
										<Link
											key={name}
											href={path}
											onClick={() => setMobileMenuOpened(false)}
											className={cn("block rounded p-2.5 text-xs/[12px] opacity-60 active:opacity-100", subLink === name && "bg-gray dark:bg-dark")}>
											{name}
										</Link>
									))}
								</div>
							</li>
							<li className='flex flex-col'>
								<button onClick={() => setSolutions((prev) => !prev)} className='flex  items-center gap-[18px]'>
									<Solutions className='w-[15px]' />
									<p>Solutions</p>
									<ChevronIcon className={`ml-auto w-[15px]  transition-transform ${solutions && "rotate-90"}`} />
								</button>

								<div className={`mt-4 space-y-[20px] pl-8 ${!solutions && "hidden"}`}>
									{NAV_LINKS["solutions"].map(([name, path]) => (
										<Link
											key={name}
											href={path}
											onClick={() => setMobileMenuOpened(false)}
											className='block text-xs/[12px] opacity-60 active:opacity-100'>
											{name}
										</Link>
									))}
								</div>
							</li>

							<li className='flex  items-center gap-[18px]'>
								<ContactIcon className='w-[15px]' />
								<p>Contact</p>
							</li>

							<select
								id='languages'
								className='flex items-center justify-between rounded-md border border-primary-dark/[0.16] bg-light py-[14px] pl-[54px] pr-[20px] text-base text-primary-dark dark:bg-dark dark:text-primary-light'>
								{LANGUAGES.map((lang) => (
									<option key={lang.shortName} value={lang.fullName} className='flex items-center justify-between'>
										{lang.fullName}
									</option>
								))}
							</select>

							<button className='flex items-center justify-center rounded-md border border-primary-dark/[0.16] bg-dark px-[20px]  py-[14px] text-center text-base text-primary-light dark:bg-light dark:text-primary-dark'>
								Sign In
							</button>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</AnimatePresence>
	);
};

export default Header;
