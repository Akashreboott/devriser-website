"use client";
import { m, HTMLMotionProps, MotionProps } from "framer-motion";
import React from "react";

interface props extends HTMLMotionProps<"div"> {
	children?: React.ReactNode;
	as?: "div" | "main" | "section" | "span" | "p" | "footer" | "header" | "h2" | "h3" | "img";
}

const MotionComponent = ({ children, as, ...props }: props) => {
	let Component = as ? m[as] : m["div"];
	return <Component {...props}>{children}</Component>;
};

export default MotionComponent;

interface buttonprops extends HTMLMotionProps<"button"> {
	children?: React.ReactNode;
}

export const MotionButtonComponent = ({ children, ...props }: any) => {
	return <m.button {...props}>{children}</m.button>;
};
