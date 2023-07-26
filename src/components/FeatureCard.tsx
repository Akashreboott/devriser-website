"use client";
import Image from "next/image";
import Noise from "../../public/assets/images/bg-noise725.png";
import white from "../../public/assets/images/placeholder.png";
import useMousePosition from "@/utils/UseMousePosition";
import { useRef, useState } from "react";

const FeatureCard = (props: props) => {
	const pos = useMousePosition();
	const CardRef = useRef<HTMLDivElement>();
	const card = CardRef.current?.getBoundingClientRect();
	const [hovering, setHovering] = useState(false);
	let [x, setX] = useState<number>(0);
	let [y, setY] = useState<number>(0);
	let [rotateX, setRotateX] = useState<number>(0);
	let [rotateY, setRotateY] = useState<number>(0);

	return (
		<div
			style={{ transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY < 0 ? Math.abs(rotateY) : -rotateY}deg)` }}
			className='gradient-border '
			onMouseMove={() => {
				if (card) {
					let maxRotationAboutYAxis = 1.5; //degree
					let maxRotationAboutXAxis = 1; //degree
					let mouseX = pos?.x - card?.x;
					let mouseY = pos?.y - card?.y;
					setX((prev) => (mouseX > 0 && mouseX < card?.width + 180 ? mouseX : prev));
					setY((prev) => (mouseY > 0 && mouseY < card?.height + 180 ? mouseY : prev));
					setRotateY((prev) =>
						mouseX > 0 && mouseX < card?.width + 180 ? (maxRotationAboutXAxis * 2 * mouseX) / card?.width - maxRotationAboutYAxis : prev
					);
					setRotateX((prev) =>
						mouseY > 0 && mouseY < card?.height + 180 ? (maxRotationAboutYAxis * 2 * mouseY) / card?.height - maxRotationAboutYAxis : prev
					);
				}
			}}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			// @ts-ignore
			ref={CardRef}>
			<div className='relative isolate box-content flex h-full  flex-col  items-center gap-4 overflow-hidden rounded-lg after:bg-dark max-md:gap-4 [&>img~*]:mx-[18px] max-md:[&>img~*]:mx-4'>
				<div
					style={{
						translate: `${Math.round(x - 75)}px ${Math.round(y - 75)}px`,
						opacity: hovering ? "1" : "0",
					}}
					id='movingcircle'
					className='absolute  left-0 top-0 -z-10 h-[220px] w-[220px] rounded-full blur-[80px]  transition-[transform,opacity] duration-500 ease-in-out [background-image:var(--moving-gradient-color)] '></div>
				<Image src={Noise} alt='' className='absolute -z-10 h-full w-full object-cover [&~*]:px-2' />
				<h3 className='mt-4 text-[24px] font-semibold md:mt-[32px] lg:text-[32px]/[52px] '>{props.title}</h3>
				<Image
					src={props.image}
					alt='Placeholder'
					className='h-[53px] w-[71px] object-cover md:h-[81px] md:w-[107px] lg:h-[106px]  lg:w-[141px] xl:h-[133px] xl:w-[177px]'
				/>
				<p className='text-[14px]/[24px] font-350 dark:!text-gray md:text-[16px]/[30px] xl:text-[18px]/[30px]'>{props.description}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
interface props {
	title: string;
	description: string;
	image: any;
}
