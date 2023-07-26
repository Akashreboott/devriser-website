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
import { NAV_LINKS, NAV_LINKSInterface } from "../utils/cms-data";
import Link from "next/link";

const Header = ({ className }: { className?: string }) => {
	const ctx = useContext(ThemeContext);
	const [activeLink, setActiveLink] = useState("services");
	const [desktopMenuOpened, setDesktopMenuOpened] = useState<boolean>(false);
	const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);
	const [services, setServices] = useState<boolean>(false);
	const [solutions, setSolutions] = useState<boolean>(false);
	const headerRef = useRef<HTMLDivElement>(null);
	const [headerWidth, setheaderWidth] = useState<number>(85);
	const [page, setPage] = useState<string>("");

	console.log(page);
	useEffect(() => {
		if (headerRef.current != null) {
			console.log(headerRef.current.getBoundingClientRect());
			setheaderWidth(headerRef.current.getBoundingClientRect().width);
		}
	}, []);
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

	let IconClasses = (tag: string) =>
		`dark:hover:bg-dark hover:bg-light p-2 rounded-lg box-content ${activeLink === tag && desktopMenuOpened && "dark:bg-dark bg-light"}`;

	const NavBarLink = (children: ReactNode, linkname: string) => {
		return (
			<li onMouseEnter={() => setActive(linkname)} className='flex flex-col items-center gap-[5px]  '>
				{children}
				<p>Services</p>
			</li>
		);
	};
	return (
		<>
			<header
				ref={headerRef}
				className={`scroll-bar-thin sticky top-0 isolate z-[100]  h-full max-h-screen min-h-screen [grid-area:header] max-lg:hidden ${
					className ?? ""
				}`}>
				<div
					onMouseLeave={closeMenu}
					className={`flex h-full w-fit flex-col items-center   ${
						desktopMenuOpened && "border-r"
					}  z-10 justify-between self-start justify-self-start overflow-y-auto overflow-x-hidden border-gray bg-white px-1  py-3  dark:bg-gray-30`}>
					<Link href={"/"} onClick={() => setPage("")}>
						<DevRiserLogo className='mb-[40px]  aspect-square h-[35px] w-[35px] shrink-0 ' />
					</Link>
					<ul className='grid h-full gap-[25px] [&_li]:cursor-pointer [&_p]:text-navlink [&_p]:text-black dark:[&_p]:text-white'>
						<li onMouseEnter={() => setActive("services")} className='flex flex-col items-center gap-0.5   '>
							<SettingsIcon className={IconClasses("services")} />
							<p className=''>Services</p>
						</li>
						<li onMouseEnter={() => setActive("solutions")} className='flex flex-col items-center gap-0.5   '>
							<Solutions className={IconClasses("solutions")} />
							<p className=''>Solutions</p>
						</li>
						<li onMouseEnter={() => setActive("blog")} className='flex flex-col items-center gap-0.5   '>
							<Blogs className={IconClasses("blog")} />
							<p className=''>Blogs</p>
						</li>
						<li onMouseEnter={() => setActive("contact")} className='flex flex-col items-center gap-0.5   '>
							<ContactIcon className={IconClasses("contact")} />
							<p className=''>Contact</p>
						</li>
						<li onMouseEnter={() => setActive("AboutUs")} className='flex flex-col items-center gap-0.5   '>
							<AboutIcon className={IconClasses("AboutUs")} />
							<p className=''>About Us</p>
						</li>
					</ul>
					<div className=' mb-2 mt-auto flex h-full flex-col gap-[15px] pt-3 text-navlink'>
						<ThemeButton />
						<div className='grow-0'>
							<button className='rounded-[3.5px] bg-[#EBEAEA] px-[17px] py-2 dark:bg-gray-66'>SignIn</button>
						</div>
						<div className='w-full grow-0'>
							<button
								onMouseEnter={() => setActive("languages")}
								className='flex w-max items-center gap-1 rounded-[3.5px] border border-[#2A2A2A]  px-[17px] py-2 dark:border-white'>
								<Image src={flag} alt='' />
								<span className='relative top-[0.5px]'>En</span>
							</button>
						</div>
					</div>
				</div>
				{/* SIDE BAR */}
				<div
					onMouseEnter={openMenu}
					onMouseLeave={closeMenu}
					style={{
						transform: `translateX(${headerWidth}px)`,
					}}
					className={`${
						!desktopMenuOpened && "hidden"
					} navslide-anim fixed left-0 top-0 -z-10 h-full max-h-screen w-fit min-w-[320px]  bg-white backdrop-blur-lg dark:bg-[#1E1E1E] max-lg:hidden`}>
					<ul className={"flex flex-col gap-5 px-5 py-6 [&>*]:min-w-[200px]  [&>li]:cursor-pointer [&>li]:transition-colors"}>
						{activeLink &&
							desktopMenuOpened &&
							NAV_LINKS[activeLink as keyof NAV_LINKSInterface].map(([name, path]) => (
								<li key={name} className='rounded-md p-[9px] pr-[21px] duration-200 hover:bg-light dark:hover:bg-dark'>
									<Link href={path ?? ""} className='inline-block h-full w-full'>
										{name}
									</Link>
								</li>
							))}
					</ul>
				</div>
			</header>

			{/* MOBILE HEADER */}
			<header className='sticky top-0 z-[100] flex w-full items-center justify-between self-start  px-2  py-3 backdrop-blur-2xl [grid-area:header]  dark:bg-secondary-dark/50 lg:hidden'>
				<button className='rounded-[3.5px] border border-black bg-light px-[10px] py-[5px] text-xs dark:border-white dark:bg-dark'>SignIn</button>
				<Logo className='aspect-square w-[35] ' />

				{/* OVERLAY */}
				{mobileMenuOpened && (
					<div className='fixed left-0 top-0 h-screen w-screen  bg-white/20 p-4 backdrop-blur-xl'>
						<div className='mb-4 flex items-center justify-between px-4'>
							<ThemeButton className='h-6 w-6'>
								<Light className='h-6 w-6' />
							</ThemeButton>
							<Xmark onClick={() => setMobileMenuOpened(false)} className='h-4 w-4 cursor-pointer' />
						</div>
						<ul className=' mx-auto flex h-full w-full flex-col gap-[26px] bg-light  p-6 pt-8  text-navlink  dark:bg-secondary-dark [&_p]:text-basic [&_p]:font-normal'>
							<li className=''>
								<Link href={"/"} className='flex items-center gap-[18px]'>
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

								<div className={`mt-4 space-y-[20px] pl-8 ${!services && "hidden"}`}>
									{NAV_LINKS["services"].map(([name, path]) => (
										<Link key={name} href={path} onClick={() => setMobileMenuOpened(false)} className='block text-xs/[12px]'>
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
										<Link key={name} href={path} onClick={() => setMobileMenuOpened(false)} className='block text-xs/[12px]'>
											{name}
										</Link>
									))}
								</div>
							</li>
							<li className='flex  items-center gap-[18px]'>
								<Blogs className='w-[15px]' />
								<p>Blogs</p>
							</li>
							<li className='flex  items-center gap-[18px]'>
								<ContactIcon className='w-[15px]' />
								<p>Contact</p>
							</li>
							<li className='flex  items-center gap-[18px]'>
								<AboutIcon className='w-[15px]' />
								<p>About Us</p>
							</li>
						</ul>
					</div>
				)}

				{/* <button className='px-[17px] py-2 w-max rounded-[3.5px] flex gap-1 items-center  border border-white'>
						<Image src={flag} alt='' />
						<span className='relative top-[0.5px]'>En</span>
					</button> */}
				<button>
					<Menu className='w-5 cursor-pointer fill-white' onClick={() => setMobileMenuOpened(true)} />
				</button>
			</header>
		</>
	);
};

export default Header;
