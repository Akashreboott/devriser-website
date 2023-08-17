import cn from "@/utils/cn";

const MenuButton = ({ className, opened, ...props }: any) => {
	let commonClasses = "h-0.5 w-5 rounded-full bg-dark transition-transform duration-300 dark:bg-white";
	return (
		<div className={cn("flex flex-col gap-[5px]", className)} {...props}>
			<span className={cn(commonClasses, "origin-top-right ease-out", opened && "-rotate-45")}></span>
			<span className={cn(commonClasses, "origin-center ease-in-out", opened && "scale-0")}></span>
			<span className={cn(commonClasses, "origin-bottom-right ease-out ", opened && "rotate-45")}></span>
		</div>
	);
};
export default MenuButton;
