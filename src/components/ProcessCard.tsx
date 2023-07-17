import Image from "next/image";

interface props {
	title: string;
	description: string;
	image: any;
	darkImage?: any;
	card?: "left-aligned" | "center-aligned";
}

const ProcessCard = (props: props) => (
	<div
		className={`flex flex-col gap-[19px] lg:max-w-[311px] items-center text-center ${
			props.card === "left-aligned" ? "lg:items-start  lg:text-left" : ""
		}`}>
		<Image src={props.image} alt='' className={` ${props.darkImage ? "dark:block hidden" : ""}`} />
		{props.darkImage && <Image src={props.darkImage ?? ""} alt='' className='block dark:hidden' />}
		<h2
			className={`md:text-[24px]/[52px] text-[20px]/[52px] text-white${
				props.card === "left-aligned" ? " clip  pink-gradient-bright font-semibold lg:min-h-[104px]" : ""
			}`}>
			{props.title}
		</h2>
		<p className={`para-text pt-1 ${props.card === "left-aligned" ? "dark:text-white text-primary-dark" : "text-white dark:text-gray"}`}>
			{props.description}
		</p>
	</div>
);

export default ProcessCard;
