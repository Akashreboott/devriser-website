"use client";
import { MouseEvent, useState } from "react";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";

import cn from "@/utils/cn";
import MotionComponent from "./MotionComponent";

interface props {
  title: string;
  description: string;
  image: any;
}

const FeatureCard = (props: props) => {
  const [hovering, setHovering] = useState(false);

  let x = useMotionValue(0);
  let y = useMotionValue(0);
  let rotateX = useMotionValue(0);
  let rotateY = useMotionValue(0);

  function handleMouseMove(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    const card = e.currentTarget.getBoundingClientRect();
    let maxRotationAboutYAxis = 1.5; //degree
    let maxRotationAboutXAxis = 1; //degree
    let mouseX = e.clientX - card?.x - 100;
    let mouseY = e.clientY - card?.y - 100;
    x.set(mouseX);
    y.set(mouseY);

    rotateY.set(
      mouseX > 0 && mouseX < card?.width + 180 ? (maxRotationAboutXAxis * 2 * mouseX) / card?.width - maxRotationAboutYAxis : rotateY.get()
    );
    rotateX.set(
      mouseY > 0 && mouseY < card?.height + 180 ? (maxRotationAboutYAxis * 2 * mouseY) / card?.height - maxRotationAboutYAxis : rotateX.get()
    );
  }

  return (
    <MotionComponent
      style={{ transform: useMotionTemplate`perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
      className='gradient-border '
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className='relative  isolate box-content flex h-full  flex-col  items-center gap-4 overflow-hidden rounded-lg after:bg-dark max-md:gap-4 [&>img~*]:mx-[26px] max-md:[&>img~*]:mx-4'>
        <MotionComponent
          style={{
            transform: useMotionTemplate`translateX(${x}px) translateY(${y}px)`,
            opacity: hovering ? 1 : 0,
          }}
          id='movingcircle'
          className={cn(
            "absolute  left-0 top-0 -z-10 h-[300px] w-[300px] rounded-full blur-[80px] transition-opacity duration-500 [background-image:var(--moving-gradient-color)]  max-md:[transform:translateX(0px)_translateY(0px)_!important] md:h-[220px]  md:w-[220px] ",
            hovering && "max-md:!opacity-60"
          )}
        />
        <h3 className='mt-4 text-[24px] font-semibold md:mt-[32px]'>{props.title}</h3>
        <Image src={props.image} alt='Placeholder' className='h-[53px] w-[71px] object-cover md:h-[81px] md:w-[107px] lg:h-[106px]  lg:w-[141px] ' />
        <p className='text-[14px]/[24px] font-350 dark:!text-gray md:text-[16px]/[30px] '>{props.description}</p>
      </div>
    </MotionComponent>
  );
};

export default FeatureCard;
