import "./globals.css";
import Header from "@/sections/Header";
import type { Metadata } from "next";
import { ThemeProvider } from "@/utils/ThemeContext";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
	title: "DevRiser",
	description: "One Stop for all Software Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='light'>
			<body>
				<ThemeProvider>
					<Header />
					{children}
					{/* <Footer /> */}
				</ThemeProvider>
			</body>
		</html>
	);
}
