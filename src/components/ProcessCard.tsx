import cn from "@/utils/cn";
import Image from "next/image";

interface props {
	title: string;
	gradientTitle?: boolean;
	description: string;
	image: any;
	darkImage?: any;
	card?: "left-aligned" | "center-aligned";
	className?: string;
}

const ProcessCard = ({ title, gradientTitle, description, image, darkImage, card, className }: props) => (
	<div
		className={cn(
			"flex flex-col gap-[19px] lg:max-w-[311px]",
			card === "left-aligned" ? "lg:items-start  lg:text-left" : "items-center text-center",
			className
		)}>
		<Image src={image} alt='' className={` ${darkImage ? "hidden dark:block" : ""}`} />
		{darkImage && <Image src={darkImage ?? ""} alt='' className='block dark:hidden' />}
		<h2
			className={cn(
				"max-w-[80%] text-[20px]/[35px] md:text-[24px]/[35px]",
				gradientTitle ? "clip gradient-bright font-semibold lg:min-h-[70px]" : "text-white"
			)}>
			{title}
		</h2>
		<p className={cn("para-text pt-1", "text-primary-dark dark:text-gray")}>{description}</p>
	</div>
);

export default ProcessCard;
