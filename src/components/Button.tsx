import { forwardRef } from "react";
import cn from "../utils/cn";
import { MotionButtonComponent } from "./MotionComponent";
import { HTMLMotionProps } from "framer-motion";
interface props extends HTMLMotionProps<"div"> {
	variant: "Primary" | "Secondary" | "Outlined";
	text: string;
	type?: "Link" | "Button";
	className?: string;
}

const Button = forwardRef(function Button({ variant: variant, text, ...props }: props, ref) {
	const baseClasses = "rounded-lg font-semibold max-lg:mx-auto w-fit";
	const primaryClasses = "py-3.5 px-7 primary-btn-color primary-btn-text-color";
	const secondaryClasses = "py-[18px] px-9 bg-secondary-btn-color ";

	return (
		<MotionButtonComponent
			{...props}
			className={cn(baseClasses, variant === "Primary" && primaryClasses, variant === "Secondary" && secondaryClasses, props.className)}>
			{variant === "Primary" ? text : <span className='clip secondary-btn-text-color '>{text}</span>}
		</MotionButtonComponent>
	);
});

export default Button;
