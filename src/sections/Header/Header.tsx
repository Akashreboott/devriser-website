import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = ({ className }: { className?: string }) => {
	return (
		<>
			<DesktopHeader />
			<MobileHeader />
		</>
	);
};

export default Header;
