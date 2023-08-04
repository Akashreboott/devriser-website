import Image from "next/image";
import illustr from "../../public/assets/images/illustr.svg";
import cn from "@/utils/cn";
import { reverse } from "dns";

const HomeGrid = (props: { children: React.ReactNode; className?: string; reverse?: boolean }) => {
	return (
		<div
			className={cn(
				"layout-1x2  grid grid-cols-1 items-start justify-center gap-5  max-lg:grid-rows-[minmax(200px,450px)_minmax(200px,300px)] lg:grid-cols-[max(400px,50%)_minmax(0,50%)] lg:items-center lg:justify-items-center  lg:gap-4 [&>img+div]:order-2  [&>img]:order-1",
				props.reverse ? "" : "lg:[&>img+div]:order-1 lg:[&>img+div]:mr-auto lg:[&>img]:order-2",
				props.className
			)}>
			<Image
				alt=''
				className={cn(
					"first max-lg:mx-auto max-lg:mb-auto  max-lg:w-[max(360px,65%)]",
					props.reverse ? "justify-self-start lg:ml-auto" : "justify-self-end lg:mr-auto"
				)}
				src={illustr}
			/>
			{props.children}
		</div>
	);
};

export default HomeGrid;
