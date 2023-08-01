"use client";
import "./globals.css";
import Header from "@/sections/Header";
import type { Metadata } from "next";
// import { ThemeProvider } from "@/utils/ThemeContext";

import Footer from "@/sections/Footer";
import FramerAnimatePresence from "@/components/AnimatePresence";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
	title: "DevRiser",
	description: "One Stop for all Software Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='light' suppressHydrationWarning>
			<body>
				<ThemeProvider attribute='class' storageKey='devriser-theme'>
					<Header />
					<FramerAnimatePresence initial={false} mode='wait'>
						{children}
					</FramerAnimatePresence>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
