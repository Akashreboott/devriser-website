"use client";
import React, { useEffect, useState, createContext } from "react";
const ThemeContext = createContext({
	theme: "",
	changeTheme: (modeL: string) => {},
	changeToOsPreferred: () => {},
});
interface themeContext {
	theme: string | undefined;
	changeTheme: (mode: string) => void;
	changeToOsPreferred: () => void;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	let [theme, setTheme] = useState<string>("");

	useEffect(() => {
		resetTheme();
		if (
			localStorage["devriser-theme"] === "dark" ||
			(!("devriser-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			setTheme("dark");
		} else {
			document.documentElement.classList.remove("dark");
			setTheme("light");
		}
	}, []);

	function resetTheme() {
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark");
		}
		if (document.documentElement.classList.contains("light")) {
			document.documentElement.classList.remove("light");
		}
	}
	function changeTheme(mode: string) {
		resetTheme();
		setTheme(mode);
		document.documentElement.classList.add(mode);
		localStorage.setItem("devriser-theme", mode);
	}
	function changeToOsPreferred() {
		if (localStorage.getItem("devriser-theme")) localStorage.removeItem("devriser-theme");
	}

	let context = {
		theme,
		changeTheme,
		changeToOsPreferred,
	};

	return <ThemeContext.Provider value={context}>{theme && children}</ThemeContext.Provider>;
};

export default ThemeContext;
