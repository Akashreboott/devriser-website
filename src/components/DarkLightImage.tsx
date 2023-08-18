import Image, { ImageProps } from "next/image";

interface allprops extends ImageProps {
	darkVisibleImage?: any;
	lightVisibleImage?: any;
}
type props = Omit<allprops, "src">;
const DarkLightImage = ({ darkVisibleImage, lightVisibleImage, alt, ...props }: props) => {
	return (
		<>
			<Image src={lightVisibleImage ?? darkVisibleImage} data-hide-in-dark='true' alt={alt ?? ""} {...props} />
			<Image src={darkVisibleImage ?? lightVisibleImage} data-hide-in-light='true' alt={alt ?? ""} {...props} />
		</>
	);
};

export default DarkLightImage;
