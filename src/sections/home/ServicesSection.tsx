"use client";
import GlassCard from "@/components/GlassCard";
import HomeGrid from "@/components/HomeGrid";
import LineLayout from "@/components/LineLayout";
import React, { useState } from "react";
import white from "../../../public/assets/images/white520.png";
import MotionComponent from "@/components/MotionComponent";
import FramerProps, { slideCrossVariants, opacityAnimVariants } from "@/utils/FramerVariants";
import { NAV_LINKS } from "@/utils/cms-data";
import cn from "@/utils/cn";
import { SOLUTIONS } from "@/utils/home-data";
import { slugify } from "@/utils/utils";
import { m, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const ServicesSection = (props: { onView?: (sectionName: string) => void; notOnView?: any }) => {
  const [services, setServices] = useState("");
  const [solutionsClicked, setSolutionsClicked] = useState<boolean>(false);

  function onView(value: string) {
    setServices(value);
  }
  function notOnView() {
    setServices("");
  }

  return (
    <>
      {services &&
        createPortal(
          <m.nav
            {...FramerProps(slideCrossVariants(["-47.5%", "-100%"], ["-47.5%", "0%"]))}
            transition={{ duration: 1 }}
            className='fixed left-1/2  top-0 z-50 mx-auto flex w-full max-w-[1728px]  items-center justify-center gap-20 bg-white/[0.05]  py-5 backdrop-blur-2xl max-lg:hidden '>
            <div className='flex  justify-center gap-5'>
              {NAV_LINKS["services"].map(([name]) => (
                <a aria-label={`Go to ${name} section`} key={name} className='relative inline-block' href={`#${slugify(slugify(name), "/")}`}>
                  {name}
                  {services === name && (
                    <MotionComponent
                      as='span'
                      layoutId='HorizontalNavbarUnderline'
                      className='absolute -bottom-2.5 left-0 inline-block  h-1 w-full bg-gradient-to-r from-transparent  via-sky-500  via-50%  to-transparent'
                    />
                  )}
                </a>
              ))}
            </div>
            <button
              onClick={() => setSolutionsClicked((prev) => !prev)}
              className='bg-[rgba(71, 71, 71, 0.4)] relative rounded-[10px] border-[0.5px] border-white/50 px-3.5 py-2.5'>
              <span>Business Solution</span>
              <AnimatePresence>
                {solutionsClicked && (
                  <m.ul
                    onMouseLeave={() => setSolutionsClicked(false)}
                    {...FramerProps(opacityAnimVariants(0, 1))}
                    className={
                      "absolute left-0 top-[calc(100%+8px)] -z-10 flex w-full min-w-fit flex-col gap-3  rounded-md  bg-light py-3 backdrop-blur-3xl  dark:bg-gray-30/95   [&>li]:cursor-pointer [&>li]:transition-colors"
                    }>
                    {SOLUTIONS.map(({ name }, index) => (
                      <m.li
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 * index }}
                        key={name}
                        className={cn(
                          "flex h-full w-full  items-center justify-start gap-2 px-5  py-3 text-p12 transition-colors duration-200 hover:bg-light  dark:hover:bg-dark"
                        )}>
                        {name}
                      </m.li>
                    ))}
                  </m.ul>
                )}
              </AnimatePresence>
            </button>
          </m.nav>,
          document.body
        )}

      <MotionComponent onViewportLeave={notOnView}>
        <LineLayout heading='Web Development' onView={onView}>
          <HomeGrid reverse={true} className=' justify-items-center gap-10  '>
            <div className='isolate flex h-[calc(100%-6rem)] w-fit flex-col  justify-center gap-2 '>
              <GlassCard delay={0.1} heading='Unique Design' image={white} className='relative -right-[3rem] top-[3rem] z-10 ml-auto' />
              <GlassCard
                delay={0.3}
                heading='Enhanced Functionality'
                image={white}
                ImageClasses='w-full h-[200px] md:h-[280px]'
                className='z-0 h-full w-[200px] md:w-[280px]'
              />
              <GlassCard delay={0.5} heading='Scalability' image={white} className='relative -top-[3rem] right-[3rem] z-10 mr-auto' />
            </div>
          </HomeGrid>
        </LineLayout>

        <LineLayout heading='CMS Services' className='mb-14' onView={onView}>
          <HomeGrid className='justify-items-center gap-10' reverse={true}>
            <div className='isolate flex w-[70%] flex-col items-center justify-center gap-4 '>
              <div className='grid w-full grid-cols-2 gap-6'>
                <GlassCard delay={0.1} heading='Cost-Effective' image={white} className='w-full' />
                <GlassCard delay={0.3} heading='Easy to manage' image={white} className='w-full' />
              </div>
              <div className=' grid  w-full gap-6'>
                <GlassCard delay={0.5} heading='Responsive Design' image={white} ImageClasses='w-full h-full' className='h-[245px] w-full' />
              </div>
            </div>
          </HomeGrid>
        </LineLayout>
        <LineLayout heading='UI/UX Services' className='mb-14' onView={onView}>
          <HomeGrid className='justify-items-center gap-4 md:gap-10'>
            <div className='isolate mx-2 flex w-fit justify-center gap-2   md:gap-4'>
              <div className='my-auto grid shrink gap-3 md:gap-6 '>
                <GlassCard delay={0.1} heading='User engagement' image={white} className='' />
                <GlassCard delay={0.3} heading='Higher Conversion Rates' image={white} className='' />
              </div>
              <div className='my-auto grid gap-6'>
                <GlassCard delay={0.5} heading='Better SEO Performance' image={white} className='' />
              </div>
            </div>
          </HomeGrid>
        </LineLayout>
        <LineLayout heading='Mobile Development' onView={onView}>
          <HomeGrid reverse={true} className='justify-items-center gap-10 max-lg:gap-0'>
            <div className='isolate flex h-[calc(100%-6rem)] w-fit flex-col justify-center gap-2 '>
              <GlassCard
                delay={0.1}
                heading='Brand reinforcement'
                image={white}
                className='relative left-[50%] top-16 -z-10 w-[140px] md:left-[80%]  md:mr-auto md:w-[173px]'
              />
              <GlassCard
                delay={0.3}
                heading='Build engagement'
                image={white}
                ImageClasses='w-full h-[180px]'
                className='z-0 h-full w-[70%] md:w-[300px]'
              />
              <GlassCard
                delay={0.5}
                heading='Competitive edge'
                image={white}
                className='relative -left-4 -top-12 z-10  w-[140px] md:right-[80%] md:ml-auto md:w-[173px]'
              />
            </div>
          </HomeGrid>
        </LineLayout>

        <LineLayout heading='Managed Services' className='mb-14' onView={onView}>
          <HomeGrid className='justify-items-center gap-10'>
            <div className='isolate my-auto flex h-fit w-fit justify-center gap-4 '>
              <div className=' grid gap-6'>
                <GlassCard delay={0.1} heading='timely issue resolution' image={white} ImageClasses='h-[120%] max-w-[200px] w-full ' className='' />
              </div>
              <div className='my-auto grid gap-6'>
                <GlassCard delay={0.3} heading='regular maintenance' image={white} className='' />
                <GlassCard delay={0.5} heading='strategic guidance' image={white} className='' />
              </div>
            </div>
          </HomeGrid>
        </LineLayout>

        <LineLayout heading='Enterprise Solutions' className='mb-14' onView={onView}>
          <HomeGrid className='justify-items-center gap-10'>
            <div className='isolate flex w-[70%] flex-col items-center justify-center gap-4 '>
              <div className=' grid w-full gap-6'>
                <GlassCard delay={0.1} heading='Flexible customization' image={white} ImageClasses='w-full' className='w-full' />
              </div>
              <div className='grid w-full grid-cols-2 gap-6'>
                <GlassCard delay={0.3} heading='Scalable architecture' image={white} className='w-full' />
                <GlassCard delay={0.5} heading='Data Center' image={white} className='w-full' />
              </div>
            </div>
          </HomeGrid>
        </LineLayout>
      </MotionComponent>
    </>
  );
};

export default ServicesSection;
