import illustration from "./../../public/assets/images/dark hero illustration.svg";
import Lightillustration from "./../../public/assets/images/light hero illustration.svg";
import Image from "next/image";
const HeroSection = () => {
	return (
		<section className='flex justify-center max-md:text-center  max-lg:flex-wrap items-center lg:mb-[220px] md:mb-[112px] mb-[95px]  max-md:max-w-[90%] max-md:mx-auto gap-4 relative'>
			<div className='max-w-[611px] lg:mt-[274px] md:mt-[100px] mt-[57px] '>
				<h1 className='hero-text text-primary-dark dark:text-white font-normal '>
					Advanced <span className='hero-gradient clip font-medium '>CMS Development</span>{" "}
					<span className='hero-gradient clip font-medium'>Services</span> For Maximizing Your Website&apos;s Potential
				</h1>
				<p className='text-primary-dark dark:text-gray mt-4 text-basic'>
					We optimize the true power of your business with our advanced CMS development services. Our CMS team handles every aspect of your
					website&apos;s creation, ensuring a seamless and dynamic online presence that maximizes your website&apos;s potential
				</p>
				<button className='btn btn-gradient mt-8'>Let&apos; begin</button>
			</div>

			<Image className='w-[402px] dark:block hidden max-md:w-[80%] h-fit lg:mt-[274px] md:mt-[38px] mt-[32.5px]' src={illustration} alt='' />
			<Image className='dark:hidden block w-[402px] max-md:w-[80%] h-fit lg:mt-[274px] md:mt-[38px] mt-[32.5px]' src={Lightillustration} alt='' />
		</section>
	);
};

export default HeroSection;
