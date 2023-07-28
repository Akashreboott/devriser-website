import cn from "@/utils/cn";
import React from "react";

interface SemiGradientTextProps {
	gradientText: string;
	text: string;
	GradientTextColor?: string;
	TextColor?: string;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
	className?: string;
	FullGradient?: boolean;
}

const SemiGradientText = (props: SemiGradientTextProps) => {
	function convertToGradient(text: string, gradientText: string = "") {
		const splittedText = text.split(" ");
		const splittedGradientText = new Set(gradientText.split(" "));

		if (props.FullGradient)
			return (
				<span className={cn("font-semibold", gradientText && "clip gradient-bright", gradientText && props.GradientTextColor)}>{text + " "}</span>
			);

		return splittedText.map((word) => {
			let gradientWord = splittedGradientText.has(word);
			return (
				<span key={word} className={cn("font-semibold", gradientWord && "clip gradient-bright", gradientWord && props.GradientTextColor)}>
					{word + " "}
				</span>
			);
		});
	}

	return React.createElement(props.as ?? "h2", { className: props.className }, convertToGradient(props.text, props.gradientText));
};

export default SemiGradientText;
