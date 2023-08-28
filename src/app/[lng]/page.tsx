import Image from "next/image";
import cn from "@/utils/cn";

import Stars from "./../../../public/assets/images/stars home.svg";
import LineLayout from "@/components/LineLayout";
import image208 from "./../../../public/assets/images/Rectangle-208.png";
import image281 from "./../../../public/assets/images/Rectangle-281.png";
import GlassCardBig from "@/components/GlassCardBig";
import Phone from "./../../../public/assets/images/Nothing-Phone-1.png";

import Banner from "@/components/Banner";
import Main from "@/components/Main";
import SolutionSection from "@/sections/home/SolutionSection";
import MotionComponent from "@/components/MotionComponent";
import ServicesSection from "@/sections/home/ServicesSection";
import BlogsSection from "@/sections/home/BlogsSection";
import HeroSection from "@/sections/home/HeroSection";

const Page = () => {
  return (
    <>
      <Main data-page='home' className=' isolate grid '>
        {/* STARS AND GRADIENTS OVERLAY */}
        <div className='absolute left-0 top-0 flex min-h-section w-screen items-start justify-center overflow-hidden '>
          <MotionComponent
            transition={{ repeat: Infinity, delay: 3, duration: 4, repeatType: "mirror" }}
            className={cn(
              "opacity-0.5 absolute -right-[350px] -top-full aspect-square w-[543px] rounded-full bg-[rgba(44,91,249,0.1)] blur-[100px] md:-right-[180px]   md:-top-1/4"
            )}
          />
          {/* WHITE BALL */}
          {/* <div
						className={cn(
							"opacity-0.4 absolute -top-[200px] left-full z-20 aspect-square w-[400px] rounded-full bg-gradient-to-tl from-emerald-400 to-emerald-500 opacity-30 blur-3xl lg:-left-[10%] "
						)}
					/> */}
          <MotionComponent
            animate={{
              filter: ["brightness(0) blur(3px)", "brightness(0.1) blur(1.5px)", "brightness(0.4) blur(0px)"],
            }}
            transition={{ duration: 1, delay: 3 }}
            className='h-full  w-full brightness-50'>
            <Image
              src={Stars}
              alt=''
              className=' hidden h-screen w-full -translate-y-[200px] object-cover opacity-50 dark:block max-md:translate-y-0 md:h-full '
            />
          </MotionComponent>
        </div>

        <div className='home isolate'>
          {/* HERO SECTION */}
          <HeroSection />
          <ServicesSection />

          {/* SOLUTIONS SECTION */}
          <LineLayout className='mb-20'>
            <SolutionSection />

            <div className='mx-auto grid max-w-[1080px] justify-center gap-4 max-md:grid-cols-[minmax(100,500px)] lg:-translate-x-[25px] xl:-translate-x-[35px]'>
              <div className='grid grid-cols-1 gap-5 max-md:mx-3 max-md:justify-items-center md:grid-cols-3'>
                <GlassCardBig
                  delay={0.1}
                  heading='Responsive'
                  content='Experience responsive accessibility—our solution smoothly adapts to all devices, enhancing your efficiency on the go.'
                  image={Phone}
                  variant='big'
                  className='p-3.5 md:p-5 md:[grid-column:1/3]'
                />
                <GlassCardBig
                  delay={0.1}
                  heading='Data center'
                  content='Choose Your Service Hosting Destination. Customize your experience by deciding where your services reside, putting you in control of security'
                  image={image208}
                  variant='small'
                  className='p-3.5 md:p-5 md:[grid-column:3/4]'
                />
              </div>
              <div className='grid grid-cols-1 gap-5 max-md:mx-3 max-md:justify-items-center md:grid-cols-3'>
                <GlassCardBig
                  delay={0.1}
                  heading='Security'
                  content='Our solution employs encryption, access controls, and audits to protect your data and ensure compliance.'
                  image={image208}
                  variant='small'
                  className='p-3.5 md:p-5 md:[grid-column:1/2]'
                />
                <GlassCardBig
                  delay={0.1}
                  heading='AI powered'
                  content='Step into the future with AI-powered innovation. Automate tasks, gain insights, and make informed decisions for unparalleled efficiency.'
                  image={image281}
                  variant='big'
                  className='p-3.5 md:p-5 md:[grid-column:2/4]'
                />
              </div>
            </div>
          </LineLayout>

          <LineLayout className='w-full '>
            <BlogsSection />
            <Banner className='max-lg:mx-auto' btnText='Get started now!' heading="Let's Create Digital Excellence Together." />
          </LineLayout>
        </div>
      </Main>
    </>
  );
};

export default Page;
