"use client";
import { useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { LANGUAGES, LANGUAGE } from "@/utils/cms-data";
import setLanguage from "next-translate/setLanguage";
import i18nConfig from "../../../i18n.json";
export interface headerPropsInterface {
	className?: string;
	subLink: string;
	setSubLink: any;
	selectedLanguage: LANGUAGE;
	setSelectedLanguage: any;
	selectedLink: string;
	setSelectedLink: any;
	changeLanguage: any;
}
const Header = ({ className }: { className?: string }) => {
	const [subLink, setSubLink] = useState<string>("");
	const [selectedLanguage, setSelectedLanguage] = useState<LANGUAGE>(LANGUAGES[0]);
	const [selectedLink, setSelectedLink] = useState<"services" | "solutions" | "contact" | "">("");

	let { locales } = i18nConfig;
	console.log(locales);

	async function changeLanguage(lang: string) {
		await setLanguage(lang);
	}
	return (
		<>
			<DesktopHeader
				subLink={subLink}
				setSubLink={setSubLink}
				selectedLanguage={selectedLanguage}
				setSelectedLanguage={setSelectedLanguage}
				selectedLink={selectedLink}
				setSelectedLink={setSelectedLink}
				changeLanguage={changeLanguage}
			/>
			<MobileHeader
				subLink={subLink}
				setSubLink={setSubLink}
				selectedLanguage={selectedLanguage}
				setSelectedLanguage={setSelectedLanguage}
				selectedLink={selectedLink}
				setSelectedLink={setSelectedLink}
				changeLanguage={changeLanguage}
			/>
		</>
	);
};

export default Header;
