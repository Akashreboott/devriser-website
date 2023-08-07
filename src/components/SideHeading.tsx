import React from "react";
import SemiGradientText from "./SemiGradientText";
import cn from "@/utils/cn";
import MotionComponent from "./MotionComponent";
interface props {
	heading: string;
	description: string;
	gradientText: string;
	gradientColor?: string;
	children?: React.ReactNode;
	className?: string;
}

const SideHeading = (props: props) => {
	return (
		<div className={cn("max-w-[800px] space-y-2 max-md:text-center", props.className)}>
			<MotionComponent
				as='h2'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className='w-fit text-p16 font-medium max-lg:mx-auto max-lg:text-center lg:text-[24px]'>
				{props.heading}
			</MotionComponent>
			<SemiGradientText
				gradientText={props.gradientText}
				className='primary-heading max-lg:mx-3'
				GradientTextColor={props.gradientColor ?? "[background-color:#55D163]"}
				text={props.description}></SemiGradientText>
		</div>
	);
};

export default SideHeading;
