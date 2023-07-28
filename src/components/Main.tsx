import cn from "@/utils/cn";

const Main = ({ children, className, ...props }: any) => {
	return (
		<main
			{...props}
			className={cn(
				"relative mx-auto flex w-full  max-w-[1728px]  flex-col items-center overflow-hidden  pb-24 [grid-area:main] [&>*]:shrink [&>*]:grow-0",
				className
			)}>
			{children}
		</main>
	);
};

export default Main;
