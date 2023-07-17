"use client";

import Image from "next/image";
import Noise from "../../public/assets/images/bg-noise500.png";
import useMousePosition from "@/utils/UseMousePosition";
import { useRef, useState } from "react";

const FeatureCard = (props: props) => {
	const pos = useMousePosition();
	const CardRef = useRef<HTMLDivElement>();
	const card = CardRef.current?.getBoundingClientRect();
	let [x, setX] = useState<number>(0);
	let [y, setY] = useState<number>(0);

	return (
		<div
			className='gradient-border'
			onMouseMove={() => {
				// @ts-ignore
				let mouseX = pos?.x - card?.x;
				// @ts-ignore
				let mouseY = pos?.y - card?.y;
				// @ts-ignore
				setX((prev) => (mouseX > 0 && mouseX < card?.width ? mouseX : prev));
				// @ts-ignore
				setY((prev) => (mouseY > 0 && mouseY < card?.height ? mouseY : prev));
			}}
			// @ts-ignore
			ref={CardRef}>
			<div className='flex flex-col [&>img~*]:mx-[18px] max-md:[&>img~*]:mx-4 rounded-lg overflow-hidden gradient-border after:bg-dark gap-[30px] max-md:gap-4 relative  '>
				<div
					style={{ translate: `${x - 75}px ${y - 75}px` }}
					className='w-[180px] aspect-square rounded-full bg-violet blur-[70px] absolute top-0 left-0 transition-transform ease-in-out duration-500'></div>
				<Image src={Noise} alt='' className='absolute w-full h-full -z-10 object-cover' />
				<h3 className='primary-heading md:mt-[32px] mt-4 '>Time-Efficient</h3>
				<p className='md:mb-12 mb-4 para-text'>
					Our team specializes in creating user-friendly CMS websites that are easy to manage. We harness the power of CMS platforms to accelerate the
					website creation process, allowing you to have a fully functional website in significantly less time compared to traditional code-based
					methods
				</p>
			</div>
		</div>
	);
};

export default FeatureCard;
interface props {
	title: string;
	description: string;
}
