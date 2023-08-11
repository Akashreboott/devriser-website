import cn from "@/utils/cn";
import MotionComponent from "./MotionComponent";

const Main = ({ children, className, ...props }: any) => {
	return (
		<MotionComponent
			as='main'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			exit={{ opacity: 0, x: 20 }}
			{...props}
			className={cn(
				"mx-auto flex w-[calc(100%+var(--extra-width))] max-w-[1728px]  flex-col items-center  overflow-hidden  pb-24 [--extra-width:0px] [grid-area:main]  lg:-translate-x-[--extra-width] lg:[--extra-width:1.5px] [&>*]:grow-0 [&>]:shrink",
				className
			)}>
			{children}
		</MotionComponent>
	);
};

export default Main;
