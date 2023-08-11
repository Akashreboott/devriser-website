import Image, { ImageProps } from "next/image";
import React from "react";

interface allprops extends ImageProps {
	DarkVisibleImage?: any;
	LightVisibleImage?: any;
}
type props = Omit<allprops, "src">;
const DarkLightImage = ({ DarkVisibleImage, LightVisibleImage, alt, ...props }: props) => {
	return (
		<>
			<Image src={LightVisibleImage ?? DarkVisibleImage} alt={alt} data-hide-in-dark='true' {...props} />
			<Image src={DarkVisibleImage ?? LightVisibleImage} alt={alt} data-hide-in-light='true' {...props} />
		</>
	);
};

export default DarkLightImage;
