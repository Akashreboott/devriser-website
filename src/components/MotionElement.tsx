import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

interface props extends HTMLMotionProps<"div"> {
	Component: React.FC;
	children?: React.ReactNode;
}

const MotionElement = (props: props) => {
	let Component = motion(props.Component);
	return <Component>{props.children}</Component>;
};

export default MotionElement;
