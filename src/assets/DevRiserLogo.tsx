import DARKLOGO from "./../../public/assets/images/DevRiser-whitelogo.svg";
import LIGHTLOGO from "./../../public/assets/images/Devriser-blacklogo.svg";
import DarkLightImage from "@/components/DarkLightImage";
function DevRiserLogo(props: any) {
	return <DarkLightImage alt='' darkVisibleImage={DARKLOGO} lightVisibleImage={LIGHTLOGO} {...props} />;
}

export default DevRiserLogo;
