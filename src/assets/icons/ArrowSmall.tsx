import cn from "@/utils/cn";

interface props extends React.SVGProps<SVGSVGElement> {
	direction: "left" | "right" | "up" | "down";
}
function ArrowSmall({ className, direction, ...props }: props) {
	return (
		<svg
			viewBox='0 0 11 10'
			fill='none'
			className={cn(
				direction === "left" && "rotate-180",
				direction === "right" && "rotate-0",
				direction === "up" && "-rotate-90",
				direction === "down" && "rotate-90",
				className
			)}
			{...props}>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M11 4.995L5.487 0l-.465.423 4.694 4.278H0v.598h9.716L5.022 9.577l.465.423L11 4.995z'
				fill='currentColor'
			/>
		</svg>
	);
}

export default ArrowSmall;
