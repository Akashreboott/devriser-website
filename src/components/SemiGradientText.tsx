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
	style?: React.CSSProperties;
}

// const SemiGradientText = (props: SemiGradientTextProps) => {
// 	function convertToGradient(text: string, gradientText: string = "") {
// 		const splittedText = text.split(" ");
// 		const splittedGradientText = new Set(gradientText.split(" "));

// 		if (props.FullGradient)
// 			return (
// 				<span className={cn("font-semibold", gradientText && "clip gradient-bright", gradientText && props.GradientTextColor)}>{text + " "}</span>
// 			);

// 		return splittedText.map((word) => {
// 			let gradientWord = splittedGradientText.has(word);
// 			return (
// 				<span
// 					// initial={{ opacity: 0 }}
// 					// whileInView={{ opacity: 1, transition: { duration: 1 } }}
// 					// viewport={{ margin: "100px 0px" }}
// 					// as='span'
// 					key={word}
// 					className={cn("font-semibold", gradientWord && "clip gradient-bright", gradientWord && props.GradientTextColor)}>
// 					{word + " "}
// 				</span>
// 			);
// 		});
// 	}
const SemiGradientText = (props: SemiGradientTextProps) => {
	function convertToGradient(text: string, gradientText: string = "") {
		if (!props.gradientText) return <span className={cn("font-semibold")}>{text + " "}</span>;

		if (props.FullGradient)
			return (
				<span
					className={cn(
						"font-semibold",
						gradientText && "clip",
						gradientText && !props.GradientTextColor ? "gradient-bright" : gradientText && props.GradientTextColor
					)}>
					{text + " "}
				</span>
			);

		let trimmedText = text.trim();
		const index = trimmedText.indexOf(gradientText);
		const lastIndex = index + gradientText.length;
		const newArr = [trimmedText.slice(0, index).trim(), trimmedText.slice(index, lastIndex + 1).trim(), trimmedText.slice(lastIndex).trim()];

		const splittedGradientText = gradientText.trim();

		return newArr.map((word) => {
			let gradientWord = splittedGradientText === word;

			return (
				<span
					// initial={{ opacity: 0 }}
					// whileInView={{ opacity: 1, transition: { duration: 1 } }}
					// viewport={{ margin: "100px 0px" }}
					// as='span'
					key={word}
					className={cn(
						"font-semibold",
						gradientWord && "clip ",
						gradientWord && !props.GradientTextColor ? "gradient-bright" : gradientWord && props.GradientTextColor
					)}>
					{word + " "}
				</span>
			);
		});
	}

	return React.createElement(props.as ?? "h2", { className: props.className, style: props.style }, convertToGradient(props.text, props.gradientText));
};

export default SemiGradientText;
