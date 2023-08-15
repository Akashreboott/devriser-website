"use client";
import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";
import React from "react";

interface allprops extends ImageProps {
	darkVisibleImage?: any;
	lightVisibleImage?: any;
	as?: "Image" | "img";
}
type props = Omit<allprops, "src">;
const DarkLightImage = ({ darkVisibleImage, lightVisibleImage, alt, as = "Image", ...props }: props) => {
	let { theme } = useTheme();

	// if (as === "Image")
	// 	return (
	// 		<Image src={theme === "light" ? lightVisibleImage ?? darkVisibleImage : darkVisibleImage ?? lightVisibleImage} alt={alt ?? ""} {...props} />
	// 	);
	return <Image src={theme === "light" ? lightVisibleImage ?? darkVisibleImage : darkVisibleImage ?? lightVisibleImage} alt={alt ?? ""} {...props} />;

	// if (as === "img")
	// 	return (
	// 		// eslint-disable-next-line @next/next/no-img-element
	// 		<img src={theme === "light" ? lightVisibleImage ?? darkVisibleImage : darkVisibleImage ?? lightVisibleImage} alt={alt ?? ""} {...props} />
	// 	);
};

export default DarkLightImage;
