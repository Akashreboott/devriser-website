import cn from "@/utils/cn";
import React from "react";

const DottedLine = ({
	strokeGap = 6,
	className,
	strokeColor = "#ffffff",
	DashHeight = 5,
	DashWidth = 1.5,
	Height,
}: {
	className?: string;
	strokeGap?: number;
	strokeColor?: string;
	DashHeight: number;
	DashWidth?: number;
	Height: number;
}) => {
	const noOfDashes = Math.ceil(Height / DashHeight + strokeGap);

	return (
		<>
			<div
				style={{
					gap: `${strokeGap}px`,
				}}
				className={cn("flex flex-col gap-1.5", className)}>
				{Array(noOfDashes)
					.fill(Math.random())
					.map((num, index) => (
						<div key={index} className='bg-primary-dark dark:bg-white' style={{ height: `${DashHeight}px`, width: `${DashWidth}px` }}></div>
					))}
			</div>
		</>
	);
};

export default DottedLine;
