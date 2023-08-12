"use client";
import FramerAnimatePresence from "@/components/AnimatePresence";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header/Header";
import { ThemeProvider } from "next-themes";
import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";

const App = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider attribute='class' storageKey='devriser-theme' disableTransitionOnChange>
			<LazyMotion features={domAnimation} strict>
				<Header />
				<FramerAnimatePresence initial={false} mode='wait'>
					{children}
				</FramerAnimatePresence>
				<Footer />
			</LazyMotion>
		</ThemeProvider>
	);
};

export default App;
