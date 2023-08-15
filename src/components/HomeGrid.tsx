import Image from "next/image";
import illustr from "../../public/assets/images/illustration.svg";
import Stars from "../../public/assets/images/Group-726.png";
import cn from "@/utils/cn";
import MotionComponent from "./MotionComponent";

const HomeGrid = (props: { children: React.ReactNode; className?: string; reverse?: boolean }) => {
	let positions = {
		1: { normal: "bottom-0 left-0", opposite: "top-0 right-0" },
		2: { normal: "top-0 left-0", opposite: "bottom-0 right-0" },
		3: { normal: "bottom-2 left-2", opposite: " top-2 right-2" },
		4: { normal: "top-2 left-2", opposite: "bottom-2 right-2" },
		5: { normal: "bottom-3 left-3", opposite: "top-3 right-3 " },
		6: { normal: "top-3 left-3", opposite: "bottom-3 right-3" },
		7: { normal: "-bottom-3 -left-3", opposite: "-top-3 -right-3" },
		8: { normal: "-top-3 -left-3", opposite: "-bottom-3 -right-3 " },
	};
	return (
		<div
			className={cn(
				"grid grid-cols-1 items-start justify-center gap-5   lg:grid-cols-[max(400px,50%)_minmax(0,50%)] lg:items-center lg:justify-items-center  lg:gap-4 [&>img+div]:order-2  [&>img]:order-1",
				props.reverse ? "" : "lg:[&>img+div]:order-1 lg:[&>img+div]:mr-auto lg:[&>img]:order-2",
				props.className
			)}>
			{/* ILLUSTRATION */}
			<MotionComponent
				as='div'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ amount: 0.4, once: true }}
				className={cn(
					"first relative max-lg:mx-auto max-lg:mb-auto  max-lg:w-[max(360px,65%)]",
					props.reverse ? "justify-self-start lg:ml-auto" : "justify-self-end lg:mr-auto"
				)}>
				<Image alt='' className='h-full w-full scale-[1.2]' src={illustr} />
				<Image
					alt=''
					data-hide-in-light='true'
					className={cn("absolute h-[40%] w-[40%] object-contain", props.reverse ? positions[1].normal : positions[2].normal)}
					src={Stars}
				/>
				<Image
					data-hide-in-light='true'
					alt=''
					className={cn("absolute h-[40%] w-[40%] object-contain", props.reverse ? positions[1].opposite : positions[2].opposite)}
					src={Stars}
				/>
			</MotionComponent>

			{/* CONTENT */}
			<div className='relative grid place-items-center'>
				<Image
					data-hide-in-light='true'
					alt=''
					className={cn("absolute  h-3/4 w-3/4 object-contain opacity-60", props.reverse ? positions[3].normal : positions[3].opposite)}
					src={Stars}
				/>
				{props.children}
			</div>
		</div>
	);
};

export default HomeGrid;
