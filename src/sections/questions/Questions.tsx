"use client";
import Alert from "@/components/Alert";
import cn from "@/utils/cn";
import { WEB_DEV_QUESTIONS } from "@/utils/questions";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Question = (props: { question: string; options: string[]; onInput: any; selected: string; questionType: "radio" | "text" | "checkboxes" }) => (
	<motion.div initial={{ x: "100%" }} exit={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 0.5 }} className='grid w-full'>
		<h2 className='text-[20px] font-semibold lg:text-[26px]'>{props.question}</h2>
		<div className='mt-10 flex w-full  flex-col items-start  justify-center gap-3 accent-[#936EEB] [&_input]:h-4 [&_input]:w-4'>
			{props.questionType === "radio" ? (
				props.options.map((option: string) => (
					<div
						key={option}
						className={cn(
							"group flex w-full items-center justify-start gap-4 rounded-md border border-dark/[0.15] px-6  py-1.5 transition-colors  duration-200 dark:border-white/10",
							props.selected === option && " border-dark/50 dark:border-white/40"
						)}>
						<div className='relative  flex h-8 w-8 items-center justify-center'>
							<input
								onInput={props.onInput}
								type='radio'
								id={option}
								name='options'
								value={option}
								className='peer z-10 shrink-0 cursor-pointer  ring-white/80 focus-within:ring-1'
							/>
							<div className='before-overlay absolute inset-0 -z-10 rounded-full bg-transparent transition-colors group-hover:bg-gray-66/10 group-hover:peer-checked:!bg-fuchsia-300/30 dark:group-hover:bg-gray-66/50 '></div>
						</div>
						<label htmlFor={option} className='w-full cursor-pointer select-none text-left'>
							{option}
						</label>
					</div>
				))
			) : (
				<div>
					<textarea
						onInput={props.onInput}
						name='text-area'
						id=''
						cols={50}
						rows={5}
						className='glass ml-4 rounded border bg-transparent p-1  outline-2 outline-dark/20 focus-within:outline dark:outline-white/30'></textarea>
				</div>
			)}
		</div>
	</motion.div>
);
const Questions = () => {
	// const ref = useRef<HTMLSpanElement>(null);
	// ref.current.
	const [currentQuestion, setCurrentQuestion] = useState<number>(0);
	const [answers, setAnswers] = useState({});
	const [showAlert, setShowAlert] = useState(false);
	let NoOfQuestions = WEB_DEV_QUESTIONS.length - 1;
	let lastQuestion = currentQuestion === NoOfQuestions;
	let question = WEB_DEV_QUESTIONS[currentQuestion];

	let answerSelected = new Set(Object.keys(answers)).has(question.title);

	function nextQuestion() {
		setCurrentQuestion((prev) => (prev !== NoOfQuestions ? prev + 1 : prev));
	}

	function handleSubmit() {
		console.log("Submitted", answers);
	}
	function showMessage() {
		setShowAlert(true);
	}

	useEffect(() => {
		const interval = setTimeout(() => {
			setShowAlert(false);
		}, 3500);
		return () => clearTimeout(interval);
	}, [showAlert]);
	return (
		<div className={cn(" mt-6 grid w-[min(100%,800px)] ", "place-items-center gap-5")}>
			<AnimatePresence>
				{showAlert && <Alert message='Select one option' className='absolute right-2 top-24 z-10 font-350 lg:top-4' />}
			</AnimatePresence>
			<div className=' overflow-x-hidden max-lg:mx-auto max-lg:w-[calc(100%-3rem)]'>
				<div className='scroll-bar-hide relative mb-10 flex max-w-2xl justify-start overflow-x-scroll  [&>*]:shrink-0'>
					{WEB_DEV_QUESTIONS.map((_, index) => (
						<div key={index} className='flex items-center justify-center overflow-hidden'>
							<div className={cn("glass relative isolate  flex h-8 w-8 items-center justify-center rounded-full")}>
								{index + 1}
								{currentQuestion >= index && (
									<motion.span
										// ref={ref}
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ duration: 0.4, delay: 0.76 }}
										className={cn(
											"absolute inset-0  flex h-full w-full items-center justify-center rounded-full bg-dark text-light  dark:bg-white dark:text-dark"
										)}>
										{index + 1}
									</motion.span>
								)}
							</div>
							{index !== NoOfQuestions && (
								<div className={cn("h-full w-16 bg-transparent")}>
									{currentQuestion > index && (
										<motion.span
											initial={{ scaleX: 0, transformOrigin: "left" }}
											animate={{ scaleX: 1 }}
											transition={{ duration: 0.75 }}
											className=' inline-flex h-0.5 w-16 bg-white'></motion.span>
									)}
								</div>
							)}
						</div>
					))}
				</div>
				<div className={cn("flex gap-8 max-lg:mx-auto max-lg:w-[calc(100%-3rem)] [&>*]:shrink-0 [&>*]:grow-0  [&>*]:basis-full")}>
					<AnimatePresence mode='sync' initial={false}>
						<Question
							onInput={(e: any) => setAnswers((prev) => ({ ...prev, [question.title]: e.target.value }))}
							options={question.options}
							question={question.title}
							key={question.title}
							// @ts-ignore
							questionType={question.field ?? "radio"}
							// @ts-ignore
							selected={answerSelected ? answers[question.title] : ""}
						/>
					</AnimatePresence>
				</div>
			</div>
			<button
				onClick={answerSelected ? (!lastQuestion ? nextQuestion : handleSubmit) : showMessage}
				className={cn(
					"glass mx-auto mb-4 mt-2 appearance-none rounded-md bg-gradient-to-br from-light/80 to-gray/10 px-6 py-2 font-medium outline-1 outline-offset-2 focus-within:outline  focus-within:outline-dark/50 dark:from-dark/70 dark:to-dark/30 dark:focus-within:outline-white/80  lg:mt-10",
					!answerSelected ? "opacity-40" : "opacity-100 "
				)}>
				{lastQuestion ? "Submit" : "Next"}
			</button>
		</div>
	);
};

export default Questions;
