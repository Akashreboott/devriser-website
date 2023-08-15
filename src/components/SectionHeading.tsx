import React from "react";
import { SectionHeadingProps } from "../types/types";
import SemiGradientText from "./SemiGradientText";
import cn from "@/utils/cn";

const Heading = (props: SectionHeadingProps) => {
	const Component = ({ children, ...props }: any) => {
		return React.createElement(props.as ?? "section", { ...props }, children);
	};
	return (
		<Component
			as={props.as}
			style={{ gap: props.gap }}
			className={cn("section-spacing mx-auto flex w-full flex-col items-center px-3 text-center", props.className)}>
			<SemiGradientText
				GradientTextColor={props.GradientColor ?? "gradient-bright"}
				gradientText={props.gradientText ?? ""}
				text={props.title}
				FullGradient={props.FullGradient}
				as='h2'
				className='primary-heading mx-auto max-w-[85%] max-md:max-w-[95%]'
			/>
			{props.description && <p className='text-basi max-w-[902px] text-primary-dark dark:text-gray max-md:text-[14px]'>{props.description}</p>}
			{props.children}
		</Component>
	);
};

export default Heading;
