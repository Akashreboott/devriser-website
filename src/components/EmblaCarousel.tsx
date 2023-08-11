"use client";
import cn from "@/utils/cn";
import { WEB_DEV_QUESTIONS } from "@/utils/questions";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect, useState } from "react";

const Question = (props: { question: string; options: string[] }) => (
	<div className='grid w-full'>
		<h2 className='text-[26px] font-semibold'>{props.question}</h2>
		<div className='mt-10 flex w-full  flex-col items-start  justify-center gap-3 accent-[#936EEB] [&_input]:h-4 [&_input]:w-4'>
			{props.options.map((option: string) => (
				<div
					key={option}
					className='group flex w-full items-center justify-start gap-4 rounded-md border  border-dark/20 px-6  py-1.5 dark:border-white/10'>
					<div className='relative  flex h-8 w-8 items-center justify-center'>
						<input
							type='radio'
							id={option}
							name='options'
							value={option}
							className='peer z-10 shrink-0 cursor-pointer  ring-white/80 focus-within:ring-1'
						/>
						<div className='before-overlay absolute inset-0 -z-10 rounded-full bg-transparent transition-colors group-hover:bg-gray-66/50 group-hover:peer-checked:!bg-fuchsia-300/30 '></div>
					</div>
					<label htmlFor={option} className='cursor-pointer select-none'>
						{option}
					</label>
				</div>
			))}
		</div>
	</div>
);

const EmblaCarousel = (props: { children?: React.ReactNode; className?: string }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel();
	const [currentQuestion, setCurrentQuestion] = useState<number>(1);
	const [last, setLast] = useState(false);
	let NoOfQuestions = WEB_DEV_QUESTIONS.length;
	let lastQuestion = currentQuestion === NoOfQuestions;

	console.log(last);
	function slideNext() {
		setCurrentQuestion((prev) => (prev !== NoOfQuestions ? prev + 1 : prev));
		emblaApi?.scrollNext();
		setLast(emblaApi?.canScrollNext() ?? true);
	}

	function handleSubmit() {
		console.log("Submitted");
	}
	// console.log(realnumber);
	useEffect(() => {
		if (emblaApi) {
			console.log(emblaApi);
		}
	}, [emblaApi]);

	return (
		<>
			<div className='h-[calc(100%+2rem)] overflow-hidden' ref={emblaRef}>
				<div className={cn("flex  gap-8 [&>*]:shrink-0 [&>*]:grow-0  [&>*]:basis-full", props.className)}>
					{WEB_DEV_QUESTIONS.map(({ options, title }) => (
						<Question options={options} question={title} key={title} />
					))}
				</div>
			</div>
			<button
				onClick={!lastQuestion ? slideNext : handleSubmit}
				className='glass mx-auto mt-10 appearance-none rounded-md bg-gradient-to-br from-dark/70 to-dark/30 px-6 py-2 font-medium  outline-1 outline-offset-2 focus-within:outline  focus-within:outline-white/80 '>
				{!lastQuestion ? "Submit" : "Next"}
			</button>
		</>
	);
};

export default EmblaCarousel;
