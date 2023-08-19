import Image from "next/image";

import LineLayout from "@/components/LineLayout";
import MotionComponent from "@/components/MotionComponent";
import SideHeading from "@/components/SideHeading";
import Hero from "./Hero";

import Logo0 from "../../../public/assets/icons/logoipsum-292.svg";
import Logo1 from "../../../public/assets/icons/logoipsum-293.svg";
import Logo2 from "../../../public/assets/icons/logoipsum-295.svg";
import Logo3 from "../../../public/assets/icons/logoipsum-296.svg";
import Logo4 from "../../../public/assets/icons/logoipsum-298.svg";
import Logo5 from "../../../public/assets/icons/logoipsum-299.svg";

const HeroSection = () => {
  return (
    <LineLayout className='mb-10' HideSymbol={true}>
      <Hero
        heading='Innovative Solutions, Lasting Impact'
        description='Empower your success with our innovative solutions.'
        btnText="Let's Begin"
        className=' z-50'
      />

      {/* LOGO SECTION */}
      <MotionComponent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
        className='mx-3 flex justify-between max-lg:flex-col max-lg:justify-center max-md:mb-20 max-md:gap-6 lg:ml-24 lg:mr-8'
      >
        <div className='text-p20 font-medium max-lg:mx-auto lg:text-p26'>Trusted by</div>
        <div className='flex justify-center gap-5 max-lg:space-y-1 max-md:flex-wrap  lg:gap-16 [&>*]:shrink-0'>
          <Image src={Logo0} alt='' className='h-4 object-contain md:h-12' />
          <Image src={Logo1} alt='' className='h-4 object-contain md:h-12' />
          <Image src={Logo2} alt='' className='h-4 object-contain md:h-12' />
          <Image src={Logo3} alt='' className='h-4 object-contain md:h-12' />
          <Image src={Logo4} alt='' className='h-4 object-contain md:h-12' />
          <Image src={Logo5} alt='' className='h-4 object-contain md:h-12' />
        </div>
      </MotionComponent>
      <SideHeading
        className='relative mb-0 mt-20  lg:mb-5 lg:mt-40 '
        heading='Services'
        description='Digital Alchemy at Its Finest'
        gradientText='Digital Alchemy'
      />
    </LineLayout>
  );
};

export default HeroSection;
