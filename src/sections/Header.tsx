"use client";
import Logo from "./../../public/assets/icons/Logo";
import Xmark from "./../../public/assets/icons/Xmark";
import ChevronIcon from "./../../public/assets/icons/Chevron";
import AboutIcon from "./../../public/assets/icons/About";
import ContactIcon from "./../../public/assets/icons/ContactIcon";
import Light from "./../../public/assets/icons/LightIcon";
import Blogs from "./../../public/assets/icons/BlogIcon";
import SettingsIcon from "./../../public/assets/icons/SettingsIcon";
import Solutions from "./../../public/assets/icons/SolutionIcon";
import flag from "./../../public/assets/icons/flag.svg";
import Image from "next/image";
import Menu from "../../public/assets/icons/Menu";
import { useContext, useState } from "react";
import ThemeContext from "@/utils/ThemeContext";
import ThemeButton from "@/utils/ThemeButton";

const Header = () => {
	const ctx = useContext(ThemeContext);
	const [activeLink, setActiveLink] = useState<string>("");
	const [desktopMenuOpened, setDesktopMenuOpened] = useState<boolean>(false);
	const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);
	const [services, setServices] = useState(false);
	const [solutions, setSolutions] = useState(false);

	const NAV_LINKS = {
		services: [
			["Web Development", "#"],
			["Mobile Development", "#"],
			["UI/UX Services", "#"],
			["CMS Services", "#"],
			["Managed Services", "#"],
			["Enterprise Solutions", "#"],
		],
		solutions: [
			["Web Development solutions ", "#"],
			["Mobile Development solutions ", "#"],
			["UI/UX Services solutions ", "#"],
			["CMS Services solutions ", "#"],
			["Managed Services solutions ", "#"],
			["Enterprise Solutions solutions ", "#"],
		],
		blog: [
			["Blog 0", "#"],
			["Blog 1", "#"],
			["Blog 2", "#"],
			["Blog 3", "#"],
			["Blog 4", "#"],
			["Blog 5", "#"],
		],
		contact: [
			["Contact Link 0", "#"],
			["Contact Link 1", "#"],
			["Contact Link 2", "#"],
			["Contact Link 3", "#"],
			["Contact Link 4", "#"],
			["Contact Link 5", "#"],
		],
		AboutUs: [
			["About Link 0", "#"],
			["About Link 1", "#"],
			["About Link 2", "#"],
			["About Link 3", "#"],
			["About Link 4", "#"],
			["About Link 5", "#"],
		],
		languages: [["En"], ["Francis"], ["Posh"]],
	};

	function closeMenu() {
		setDesktopMenuOpened(false);
	}
	function openMenu() {
		setDesktopMenuOpened(true);
	}

	return (
		<>
			<header className='relative'>
				<div
					onMouseLeave={closeMenu}
					className={`w-fit max-lg:hidden flex flex-col items-center h-full  ${
						desktopMenuOpened && "border-r"
					} z-[100] border-gray justify-self-start justify-between self-start px-1 py-3 max-h-screen h-full dark:bg-secondary-dark min-h-screen  top-0 sticky bg-white`}>
					<Logo className='w-[35px] h-[35px] aspect-square mb-[40px] shrink-0' />
					<ul className='grid gap-[25px] text-navlink h-full [&_li]:cursor-pointer'>
						<li
							onMouseEnter={() => {
								openMenu();
								setActiveLink("services");
							}}
							className='flex flex-col gap-[5px] items-center '>
							<SettingsIcon
								className={`dark:hover:bg-dark hover:bg-light/10 p-2 rounded-lg box-content ${
									activeLink === "services" && desktopMenuOpened && "dark:bg-dark bg-light"
								}`}
							/>
							<p>Services</p>
						</li>
						<li
							onMouseEnter={() => {
								openMenu();
								setActiveLink("solutions");
							}}
							className='flex flex-col gap-[5px] items-center '>
							<Solutions
								className={`dark:hover:bg-dark hover:bg-light/10 p-2 rounded-lg box-content ${
									activeLink === "solutions" && desktopMenuOpened && "dark:bg-dark bg-light"
								}`}
							/>
							<p>Solutions</p>
						</li>
						<li
							onMouseEnter={() => {
								openMenu();
								setActiveLink("blog");
							}}
							className='flex flex-col gap-[5px] items-center '>
							<Blogs
								className={`dark:hover:bg-dark hover:bg-light/10 p-2 rounded-lg box-content ${
									activeLink === "blog" && desktopMenuOpened && "dark:bg-dark bg-light"
								}`}
							/>
							<p>Blogs</p>
						</li>
						<li
							onMouseEnter={() => {
								openMenu();
								setActiveLink("contact");
							}}
							className='flex flex-col gap-[5px] items-center '>
							<ContactIcon
								className={`dark:hover:bg-dark hover:bg-light/10 p-2 rounded-lg box-content ${
									activeLink === "contact" && desktopMenuOpened && "dark:bg-dark bg-light"
								}`}
							/>
							<p>Contact</p>
						</li>
						<li
							onMouseEnter={() => {
								openMenu();
								setActiveLink("AboutUs");
							}}
							className='flex flex-col gap-[5px] items-center '>
							<AboutIcon
								className={`dark:hover:bg-dark hover:bg-light/10 p-2 rounded-lg box-content ${
									activeLink === "AboutUs" && desktopMenuOpened && "dark:bg-dark bg-light"
								}`}
							/>
							<p>About Us</p>
						</li>
					</ul>
					<div className='flex flex-col gap-[15px] text-navlink h-full mt-auto mb-2'>
						<ThemeButton />
						<div className='grow-0'>
							<button className='px-[17px] py-2 rounded-[3.5px] dark:bg-gray-66 bg-[#EBEAEA]'>SignIn</button>
						</div>
						<div className='grow-0 w-full'>
							<button
								onMouseEnter={() => {
									openMenu();
									setActiveLink("languages");
								}}
								className='px-[17px] py-2 w-max rounded-[3.5px] flex gap-1 items-center  border dark:border-white border-[#2A2A2A]'>
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
					className={`${
						!desktopMenuOpened && "hidden"
					} fixed navslide-anim max-lg:hidden  w-fit translate-x-[85px] max-h-screen h-full backdrop-blur-lg z-50 dark:bg-secondary-dark bg-light top-0 left-0`}>
					<ul className={"flex flex-col gap-5 [&>*]:min-w-[200px] [&>li]:cursor-pointer [&>li]:transition-colors   py-6 px-5"}>
						{activeLink &&
							desktopMenuOpened &&
							NAV_LINKS[activeLink].map(([name, path]) => (
								<li key={name} className='p-[9px] pr-[21px] dark:hover:bg-dark hover:bg-white rounded-md duration-200'>
									<a href={path ?? ""}>{name}</a>
								</li>
							))}
					</ul>
				</div>
			</header>

			<header className='lg:hidden flex items-center justify-between backdrop-blur-2xl z-[100] self-start  py-3  dark:bg-secondary-dark/50 w-full px-2  top-0 sticky'>
				<button className='px-[10px] py-[5px] rounded-[3.5px] border border-white text-xs'>SignIn</button>
				<Logo className='w-[35] aspect-square ' />
				{mobileMenuOpened && (
					<div className='fixed top-0  bg-white/20 p-4  w-screen h-screen backdrop-blur-xl'>
						<div className='flex justify-between items-center px-4 mb-4'>
							<ThemeButton className='w-6 h-6'>
								<Light className='w-6 h-6' />
							</ThemeButton>
							<Xmark onClick={() => setMobileMenuOpened(false)} className='w-4 h-4 cursor-pointer' />
						</div>
						<ul className=' flex flex-col gap-[26px] w-full h-full [&_p]:text-basic [&_p]:font-normal  dark:bg-secondary-dark bg-light  mx-auto  text-navlink p-6 pt-8'>
							<li className='flex  gap-[18px] items-center'>
								<Logo className='w-[15px]' />
								<p>Home</p>
							</li>
							<li className='flex flex-col'>
								<button onClick={() => setServices((prev) => !prev)} className='flex  gap-[18px] items-center'>
									<SettingsIcon className='w-[15px]' />
									<p>Services</p>
									<ChevronIcon className={`w-[15px] ml-auto  transition-transform ${services && "rotate-90"}`} />
								</button>

								<div className={`space-y-[20px] mt-4 pl-8 ${!services && "hidden"}`}>
									{NAV_LINKS["services"].map(([name, path]) => (
										<a key={name} href={path} className='block text-xs/[12px]'>
											{name}
										</a>
									))}
								</div>
							</li>
							<li className='flex flex-col'>
								<div onClick={() => setSolutions((prev) => !prev)} className='flex  gap-[18px] items-center'>
									<Solutions className='w-[15px]' />
									<p>Solutions</p>
									<ChevronIcon className={`w-[15px] ml-auto  transition-transform ${solutions && "rotate-90"}`} />
								</div>

								<div className={`space-y-[20px] mt-4 pl-8 ${!solutions && "hidden"}`}>
									{NAV_LINKS["solutions"].map(([name, path]) => (
										<a key={name} href={path} className='block text-xs/[12px]'>
											{name}
										</a>
									))}
								</div>
							</li>
							<li className='flex  gap-[18px] items-center'>
								<Blogs className='w-[15px]' />
								<p>Blogs</p>
							</li>
							<li className='flex  gap-[18px] items-center'>
								<ContactIcon className='w-[15px]' />
								<p>Contact</p>
							</li>
							<li className='flex  gap-[18px] items-center'>
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
					<Menu className='w-5 fill-white cursor-pointer' onClick={() => setMobileMenuOpened(true)} />
				</button>
			</header>
		</>
	);
};

export default Header;
