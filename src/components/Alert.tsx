import cn from "@/utils/cn";
import React from "react";
import MotionComponent from "./MotionComponent";

const Alert = (props: { className?: string; message: string }) => {
	return (
		<MotionComponent
			initial={{ x: "120%" }}
			animate={{ x: "0" }}
			exit={{ x: "120%" }}
			transition={{ duration: 0.5, type: "spring" }}
			className={cn(
				"flex w-4/5 items-center justify-center gap-4 rounded-md border-b-2 border-red-300 bg-red-100/80 p-3 px-4 text-lg text-red-900 backdrop-blur-3xl dark:border-red-400 dark:bg-red-700/20 dark:text-red-400 max-sm:text-base max-[350px]:flex-col lg:w-full lg:max-w-sm",
				props.className
			)}>
			<span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='aspect-square w-8 max-sm:w-6'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					fill='none'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' /> <circle cx={12} cy={12} r={9} /> <line x1={12} y1={8} x2={12} y2={12} />{" "}
					<line x1={12} y1={16} x2='12.01' y2={16} />{" "}
				</svg>
			</span>
			{props.message}
			<span className='ml-auto'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='aspect-square w-8 max-sm:w-6'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					fill='none'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' /> <circle cx={12} cy={12} r={9} /> <path d='M10 10l4 4m0 -4l-4 4' />{" "}
				</svg>
			</span>
		</MotionComponent>
	);
};

export default Alert;
