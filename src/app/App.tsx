"use client";
import FramerAnimatePresence from "@/components/AnimatePresence";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import { ThemeProvider } from "next-themes";
import React from "react";

const App = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider attribute='class' storageKey='devriser-theme'>
			<Header />
			<FramerAnimatePresence initial={false} mode='wait'>
				{children}
			</FramerAnimatePresence>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
