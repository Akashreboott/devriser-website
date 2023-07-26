import { NAV_LINKS } from "@/utils/cms-data";
import DevRiserLogo from "../../public/assets/images/DevRiserLogo";
import Facebooklogo from "../../public/assets/icons/Facebooklogo";
import InstagramIcon from "../../public/assets/icons/InstagramIcon";
import TwitterLogo from "../../public/assets/icons/TwitterLogo";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className='grid  bg-white py-[70px] [grid-area:footer] dark:bg-gray-30 [&>*]:mx-auto [&>*]:w-[min(100%,1347px)] [&>*]:px-2 '>
			<div className='flex justify-between gap-16'>
				{/* LOGO SECTION */}
				<div className='space-y-[35px]'>
					<div className='flex items-center gap-[18px]'>
						<DevRiserLogo className='h-[56px] w-[56px]' />
						<h4 className='text-[26px]/[33px]'>DevRiser</h4>
					</div>
					<div className='font-normal'>Software building and web services provider</div>
				</div>

				{/* LINKS SECTION */}
				<div className='flex gap-[60px]'>
					<ul className='flex flex-col gap-2.5'>
						<li className='text-[18px]/[33px] font-semibold'>Company</li>
						<li className='text-[14px]/[33px]'>About Us</li>
						<li className='text-[14px]/[33px]'>Contact Us</li>
					</ul>
					<ul className='flex flex-col gap-2.5'>
						<li className='text-[18px]/[33px] font-semibold'>Services</li>
						{NAV_LINKS["services"].map(([name, path]) => (
							<li key={name} className='text-[14px]/[33px]'>
								<Link href={path} className='inline-block h-full w-full'>
									{name}
								</Link>
							</li>
						))}
					</ul>
					<ul className='flex flex-col gap-2.5'>
						<li className='text-[18px]/[33px] font-semibold'>Solutions</li>
						{NAV_LINKS["solutions"].map(([name, path]) => (
							<li key={name} className='text-[14px]/[33px]'>
								<Link href={path} className='inline-block h-full w-full'>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* ADDRESS SECTION */}
			<div className='mt-[100px] flex gap-[102px] bg-[rgb(250,250,250)] px-12 py-[38px] font-normal dark:bg-[#2B2B2B] dark:[&_p]:!text-white'>
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
			</div>

			{/* COPYRIGHT SECTION */}
			<div className='mt-[30px] flex dark:text-white'>
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
					className='mr-auto  border-r  border-gray px-2.5  text-xs/[33px] first-of-type:pl-0 last-of-type:border-r-0 dark:border-[rgb(105,105,105)]'>
					Licensing
				</a>
				<div>&copy; 2023 DevRiser</div>
			</div>
		</footer>
	);
};

export default Footer;
