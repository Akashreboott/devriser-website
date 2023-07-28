import cn from "../utils/cn";
interface props {
	variant: "Primary" | "Secondary" | "Outlined";
	text: string;
	type?: "Link" | "Button";
	className?: string;
}

const Button = ({ variant: variant, text, ...props }: props) => {
	const baseClasses = "rounded-lg font-semibold ";
	const primaryClasses = "py-3.5 px-7 primary-btn-color primary-btn-text-color";
	const secondaryClasses = "py-[18px] px-9 bg-secondary-btn-color ";

	return (
		<button className={cn(baseClasses, variant === "Primary" && primaryClasses, variant === "Secondary" && secondaryClasses, props.className)}>
			{variant === "Primary" ? text : <span className='clip secondary-btn-text-color'>{text}</span>}
		</button>
	);
};

export default Button;
