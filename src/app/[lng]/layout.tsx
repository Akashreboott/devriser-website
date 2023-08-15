import "./globals.css";

import type { Metadata } from "next";
// import { ThemeProvider } from "@/utils/ThemeContext";

import App from "./App";

import { dir } from "i18next";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
	title: "DevRiser",
	description: "One Stop for all Software Services",
};

export default function RootLayout({ children, params: { lng } }: { children: React.ReactNode; params: any }) {
	return (
		<html lang={lng} dir={dir(lng)} className='dark'>
			<body>
				<App lng={lng}>{children}</App>
			</body>
		</html>
	);
}
