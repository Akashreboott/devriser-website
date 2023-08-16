import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
// import { ThemeProvider } from "@/utils/ThemeContext";

import App from "./App";

import { dir } from "i18next";
import { languages } from "../i18n/settings";
import cn from "@/utils/cn";

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
	title: "DevRiser",
	description: "One Stop for all Software Services",
};

const monaSans = localFont({
	src: [
		{
			path: "./../fonts/Mona-Sans-Bold.woff2",
			weight: "bold",
			style: "italic",
		},
		{
			path: "./../fonts/Mona-Sans-RegularWide.woff2",
			weight: "normal",
			style: "normal",
		},
		{
			path: "./../fonts/Mona-Sans-BoldWide.woff2",
			weight: "bold",
			style: "normal",
		},
		{
			path: "./../fonts/Mona-Sans-ExtraBold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "./../fonts/Mona-Sans-ExtraBoldWide.woff2",
			weight: "700",
			style: "italic",
		},
		{
			path: "./../fonts/Mona-Sans-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./../fonts/Mona-Sans-MediumWide.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./../fonts/Mona-Sans-Regular.woff2",
			weight: "350",
			style: "normal",
		},
		{
			path: "./../fonts/Mona-Sans-RegularWide.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./../fonts/Mona-Sans-RegularItalic.woff2",
			weight: "normal",
			style: "italic",
		},
		{
			path: "./../fonts/Mona-Sans-SemiBoldWide.woff2",
			weight: "600",
			style: "normal",
		},
	],
	variable: "--font-mona-sans",
});

export default function RootLayout({ children, params: { lng } }: { children: React.ReactNode; params: any }) {
	return (
		<html lang={lng} dir={dir(lng)} className={cn("dark", monaSans.className)}>
			<body>
				<App lng={lng}>{children}</App>
			</body>
		</html>
	);
}
