import { useEffect, useState } from "react";

const useMatchesMedia = (props: string) => {
	const [matchesBreakPoint, setMatchesBreakPoint] = useState<boolean>(false);

	function matchesSize() {
		if (window.matchMedia(`(${props})`).matches) {
			setMatchesBreakPoint(true);
		} else {
			setMatchesBreakPoint(false);
		}
	}
	useEffect(() => {
		matchesSize();
		window.addEventListener("resize", matchesSize);
		return () => window.removeEventListener("resize", matchesSize);
	}, []);

	return matchesBreakPoint;
};

export default useMatchesMedia;
