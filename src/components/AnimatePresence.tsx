"use client";
import React from "react";
import { AnimatePresenceProps, AnimatePresence } from "framer-motion";
interface props extends AnimatePresenceProps {
	children: React.ReactNode;
}
const FramerAnimatePresence = ({ children, ...props }: props) => {
	return <AnimatePresence>{children}</AnimatePresence>;
};

export default FramerAnimatePresence;
