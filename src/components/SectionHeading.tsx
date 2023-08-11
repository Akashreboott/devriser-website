import React from "react";
import { SectionHeadingProps } from "../types/types";
import SemiGradientText from "./SemiGradientText";
import cn from "@/utils/cn";

const SectionHeading = (props: SectionHeadingProps) => {
	const Component = ({ children, ...props }: any) => {
		return React.createElement(props.as ?? "section", { ...props }, children);
	};
	return (
		<Component
			as={props.as}
			style={{ gap: props.gap }}
			className={cn("mx-auto flex flex-col items-center text-center", "w-[calc(100%-3rem)]", props.className)}>
			<SemiGradientText
				GradientTextColor={props.GradientColor ?? "gradient-bright"}
				gradientText={props.gradientText ?? ""}
				text={props.title}
				FullGradient={props.FullGradient}
				as='h2'
				className='primary-heading mx-auto max-w-[85%] max-md:max-w-[95%]'
			/>
			{props.description && <p className='max-w-[902px] text-basic text-primary-dark dark:text-gray max-md:text-[14px]'>{props.description}</p>}
			{props.children}
		</Component>
	);
};

export default SectionHeading;
