import "./globals.css";

import type { Metadata } from "next";
// import { ThemeProvider } from "@/utils/ThemeContext";

import App from "./App";

export const metadata: Metadata = {
	title: "DevRiser",
	description: "One Stop for all Software Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='light'>
			<body>
				<App>{children}</App>
			</body>
		</html>
	);
}
