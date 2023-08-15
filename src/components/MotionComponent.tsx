"use client";
import { m, HTMLMotionProps, MotionProps } from "framer-motion";
import React, { forwardRef } from "react";

interface props extends HTMLMotionProps<"div"> {
	children?: React.ReactNode;
	as?: "div" | "main" | "section" | "span" | "p" | "footer" | "header" | "h2" | "h3";
}
export type Ref = HTMLDivElement;
const MotionComponent = forwardRef<Ref, props>(function MotionComponen({ children, as, ...props }, ref) {
	let Component = as ? m[as] : m["div"];
	return (
		<Component {...props} ref={ref}>
			{children}
		</Component>
	);
});

export default MotionComponent;

interface buttonprops extends HTMLMotionProps<"button"> {
	children?: React.ReactNode;
}

export const MotionButtonComponent = ({ children, ...props }: any) => {
	return <m.button {...props}>{children}</m.button>;
};
