"use client";

import React, { useContext, useEffect, useState } from "react";
import ThemeContext, { ThemeProvider } from "./ThemeContext";
import LightIcon from "../../public/assets/icons/LightIcon";
import MoonIcon from "../../public/assets/icons/MoonIcon";

const ThemeButton = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
	let ctx = useContext(ThemeContext);
	return (
		<ThemeProvider>
			<div className='flex flex-col gap-[9px] items-center mt-auto'>
				{ctx.theme === "dark" && (
					<button
						className='appearance-none'
						onClick={() => {
							ctx.changeTheme("light");
						}}>
						<LightIcon className={`p-2.5 box-content border border-gray rounded-full ${className ?? ""}`} />
					</button>
				)}
				{ctx.theme !== "dark" && (
					<button
						className='appearance-none'
						onClick={() => {
							ctx.changeTheme("dark");
						}}>
						<MoonIcon className={`p-2.5 box-content border border-gray rounded-full ${className ?? ""}`} />
					</button>
				)}
			</div>
		</ThemeProvider>
	);
};

export default ThemeButton;
