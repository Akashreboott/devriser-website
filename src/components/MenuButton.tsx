import cn from "@/utils/cn";

const MenuButton = ({ className, opened, ...props }: any) => {
	return (
		<div className={cn("flex flex-col gap-[5px]", className)} {...props}>
			<span
				className={cn("h-0.5 w-5 origin-top-right rounded-full bg-white transition-transform duration-300 ease-out", opened && "-rotate-45")}></span>
			<span className={cn("h-0.5 w-5 origin-center rounded-full bg-white transition-transform duration-300 ease-in-out", opened && "scale-0")}></span>
			<span
				className={cn(
					"h-0.5 w-5 origin-bottom-right rounded-full bg-white transition-transform duration-300 ease-out",
					opened && "rotate-45"
				)}></span>
		</div>
	);
};
export default MenuButton;
