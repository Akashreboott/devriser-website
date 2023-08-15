import React from "react";
import MotionComponent from "./MotionComponent";
import cn from "@/utils/cn";
interface props {
	question: string;
	options: string[];
	onInput: any;
	selected: string;
	questionType: "radio" | "text" | "checkbox";
}

const Question = (props: props) => (
	<MotionComponent
		initial={{ opacity: 0 }}
		exit={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.3 }}
		className={cn("mx-auto grid [&>*]:mx-auto [&>*]:w-[calc(100%-3rem)]", "md:text-[12px] ")}>
		<h2 className='w-full text-[18px] font-semibold md:text-[20px] lg:text-[26px]'>{props.question}</h2>

		<div className='mt-10 flex w-full flex-col items-start justify-center  gap-3 accent-[#936EEB] [&_input]:h-4 [&_input]:w-4 [&_label]:text-p14 md:[&_label]:text-p16'>
			{/* RADIO */}
			{props.questionType === "radio" &&
				props.options.map((option: string) => {
					if (option)
						return (
							<div
								key={option}
								className={cn(
									"group flex w-full items-center justify-start gap-4 rounded-md border border-dark/[0.15] px-6  py-1.5 transition-colors  duration-200 dark:border-white/10",
									props.selected === option && " border-dark/50 dark:border-white/40"
								)}>
								<div className='relative  flex h-8 w-8 items-center justify-center'>
									<input
										onChange={props.onInput}
										type='radio'
										id={option}
										name='options'
										value={option}
										checked={option === props.selected}
										className='peer z-10 h-4 w-4 shrink-0 cursor-pointer'
									/>
									<div className='before-overlay absolute  -z-10 h-8 w-8 rounded-full bg-transparent transition-colors group-hover:bg-gray-66/10 group-hover:peer-checked:!bg-fuchsia-300/30 dark:group-hover:bg-gray-66/50 '></div>
								</div>
								<label htmlFor={option} className='w-full cursor-pointer select-none text-left'>
									{option}
								</label>
							</div>
						);
				})}

			{/* TEXT-AREA */}
			{props.questionType === "text" && (
				<div className='w-full'>
					<textarea
						onChange={props.onInput}
						placeholder='Type your requirements'
						name='text-area'
						id=''
						value={props.selected}
						className='glass mb-2  h-[150%] w-full resize-none rounded border bg-transparent p-3 text-p14  outline-2 outline-dark/20 focus-within:outline dark:outline-white/30'></textarea>
				</div>
			)}

			{/* CHECKBOXES */}
			{props.questionType === "checkbox" &&
				props.options.map((option: string) => (
					<div
						key={option}
						className={cn(
							"group flex w-full items-center justify-start gap-4 rounded-md border border-dark/[0.15] px-6  py-1.5 transition-colors  duration-200 dark:border-white/10",
							props.selected.includes(option) && "border-dark/50 dark:border-white/40"
						)}>
						<div className='relative  flex h-8 w-8 items-center justify-center'>
							<input
								onChange={props.onInput}
								type='checkbox'
								multiple={true}
								id={option}
								name='options'
								value={option}
								checked={props.selected.includes(option)}
								className='peer z-10 shrink-0 cursor-pointer  '
							/>
							<div className='before-overlay absolute -z-10 h-8 w-8 rounded-full bg-transparent transition-colors group-hover:bg-gray-66/10 group-hover:peer-checked:!bg-fuchsia-300/30 dark:group-hover:bg-gray-66/50 '></div>
						</div>
						<label htmlFor={option} className='w-full cursor-pointer select-none text-left'>
							{option}
						</label>
					</div>
				))}
		</div>
	</MotionComponent>
);
export default Question;
