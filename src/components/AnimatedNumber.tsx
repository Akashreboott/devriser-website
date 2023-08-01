"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = (props: { Value: number; duration?: number; children?: React.ReactNode; className?: string }) => {
	const [number, setNumber] = useState<number>(0);
	let timeGap = (props.duration ?? 1000) / props.Value;

	useEffect(() => {
		const interval =
			number < props.Value
				? setInterval(() => {
						setNumber((prev) => prev + 1);
				  }, timeGap)
				: setInterval(() => {});

		return () => clearInterval(interval);
	}, [number, props.Value, timeGap]);

	return (
		<motion.span key={number} className={props.className}>
			{number}
			{props.children}
		</motion.span>
	);
};

export default AnimatedNumber;
