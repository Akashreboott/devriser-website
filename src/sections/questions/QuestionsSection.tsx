"use client";
import Alert from "@/components/Alert";
import Question from "@/components/Question";
import cn from "@/utils/cn";
import { Question as QInterface } from "@/utils/questions-data";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
interface props {
	QUESTIONS: QInterface[];
	className?: string;
	redirectTo?: [string, string];
	closeModal?: () => void;
}

const QuestionsSection = ({ QUESTIONS, ...props }: props) => {
	const [currentQuestion, setCurrentQuestion] = useState<number>(0);
	const [answers, setAnswers] = useState<any>({});
	const [showAlert, setShowAlert] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	let NoOfQuestions = QUESTIONS.length - 1;
	let lastQuestion = currentQuestion === NoOfQuestions;
	let firstQuestion = currentQuestion === 0;
	let question = QUESTIONS[currentQuestion];
	let answersSet = new Set(Object.keys(answers));

	let answerSelected = answersSet.has(question.title);

	function nextQuestion() {
		setCurrentQuestion((prev) => (prev !== NoOfQuestions ? prev + 1 : prev));
	}
	function prevQuestion() {
		setCurrentQuestion((prev) => (prev !== 0 ? prev - 1 : prev));
	}

	function handleSelect(e: any) {
		let value = e.target.value;

		if (question.field === "checkbox") {
			return setAnswers((prev: any) => {
				let checkedOptions: string[] = prev[question.title];

				if (checkedOptions?.includes(value)) return { ...prev, [question.title]: checkedOptions.filter((option) => option !== value) };
				return { ...prev, [question.title]: checkedOptions ? [...checkedOptions, value] : [value] };
			});
		}

		return setAnswers((prev: any) => ({ ...prev, [question.title]: value }));
	}

	function handleSubmit() {
		// @ts-ignore
		if (QUESTIONS.length !== Object.keys(answers).length) {
			return showMessage();
		}
		console.log("Submitted", answers);
		setSubmitted(true);
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

	const ThankYou = () => (
		<div className='grid h-fit place-items-center  gap-10'>
			<h2 className='primary-heading'>Thank You</h2>
			{props.closeModal && (
				<button
					onClick={props.closeModal}
					className={cn(
						"glass mb-4 mt-2 appearance-none rounded-md bg-gradient-to-br from-light/80 to-gray/10 px-6 py-2 font-medium outline-1 outline-offset-2 focus-within:outline  focus-within:outline-dark/50 dark:from-dark/70 dark:to-dark/30 dark:focus-within:outline-white/80  lg:mt-10"
					)}>
					Close
				</button>
			)}
			{props.redirectTo && (
				<Link
					href={props.redirectTo[0]}
					onClick={props.closeModal}
					className={cn(
						"glass mb-4 mt-2 appearance-none rounded-md bg-gradient-to-br from-light/80 to-gray/10 px-6 py-2 font-medium outline-1 outline-offset-2 focus-within:outline  focus-within:outline-dark/50 dark:from-dark/70 dark:to-dark/30 dark:focus-within:outline-white/80  lg:mt-10"
					)}>
					{props.redirectTo[1]}
				</Link>
			)}
		</div>
	);

	return (
		<div className={cn("isolate mt-6 grid w-[min(100%,900px)] px-3", "place-items-center gap-5 overflow-x-hidden", props.className)}>
			<AnimatePresence>
				{showAlert && <Alert message='Select one option' className='absolute right-2 top-24 z-50 font-350 backdrop-brightness-0 lg:top-4' />}
			</AnimatePresence>
			{/* NUMBERS */}
			{!submitted && (
				<div className='scroll-bar-hide relative isolate  mb-10 flex max-w-3xl  justify-start overflow-x-auto max-md:justify-self-start md:justify-center  [&>*]:shrink-0'>
					{QUESTIONS.map((question, index) => (
						<div onClick={() => setCurrentQuestion(index)} key={index} className='flex items-center justify-center overflow-hidden text-[10px]'>
							{/* DOT */}
							<div
								className={cn(
									"glass relative isolate flex h-6 w-6 cursor-pointer items-center justify-center rounded-full  border border-dark/50 dark:border-white/10",
									!answersSet.has(question.title) && currentQuestion > index && "border-red-600 dark:border-red-400"
								)}>
								{index + 1}
								{/* OVERLAY DOT */}
								{answersSet.has(question.title) &&
									//@ts-ignore
									Object.keys(answers).includes(question.title) && (
										<motion.span
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{ duration: 0.4, delay: 0.76 }}
											className={cn(
												"absolute inset-0  flex h-full w-full items-center justify-center rounded-full border border-dark/50 bg-dark text-light dark:border-white  dark:bg-white dark:text-dark"
											)}>
											{index + 1}
										</motion.span>
									)}
							</div>
							{/* LINE */}
							{index !== NoOfQuestions && (
								<div className={cn("relative isolate flex h-full w-10 items-center justify-center")}>
									{index !== QUESTIONS.length - 1 && (
										<span className='absolute left-0 top-[calc(50%-0.125rem/2)] -z-10 inline-flex h-0.5  w-10 bg-gray/50 dark:bg-gray/[0.25]'></span>
									)}
									{currentQuestion > index &&
										//@ts-ignore
										Object.keys(answers).includes(question.title) && (
											<motion.span
												initial={{ scaleX: 0, transformOrigin: "left" }}
												animate={{ scaleX: 1 }}
												transition={{ duration: 0.75 }}
												className=' inline-flex h-0.5 w-10 bg-white'></motion.span>
										)}
								</div>
							)}
						</div>
					))}
				</div>
			)}
			{/* QUESTIONS */}
			<div className={cn("max-lg:mx-auto")}>
				<div className={cn("mx-auto flex w-[min(100%,800px)] gap-8 max-lg:mx-auto  [&>*]:shrink-0 [&>*]:grow-0  [&>*]:basis-full")}>
					<AnimatePresence mode='wait' initial={false}>
						{!submitted && (
							<Question
								onInput={handleSelect}
								options={question.options}
								question={question.title}
								key={question.title}
								// @ts-ignore
								questionType={question.field ?? "radio"}
								// @ts-ignore
								selected={answerSelected ? answers[question.title] : ""}
							/>
						)}

						{submitted && <ThankYou />}
					</AnimatePresence>
				</div>
			</div>
			{/* BUTTONS */}
			{!submitted && (
				<div className=' mt-4 flex w-[min(100%,800px)] items-center justify-between [&>*]:mx-6'>
					<button
						disabled={firstQuestion}
						onClick={prevQuestion}
						className={cn(
							"glass mb-4 mt-2 appearance-none rounded-md bg-gradient-to-br from-light/80 to-gray/10 px-6 py-2 font-medium outline-1 outline-offset-2 focus-within:outline  focus-within:outline-dark/50 dark:from-dark/70 dark:to-dark/30 dark:focus-within:outline-white/80  lg:mt-10",
							firstQuestion ? "opacity-40" : "opacity-100 "
						)}>
						Prev
					</button>
					<button
						onClick={answerSelected ? (!lastQuestion ? nextQuestion : handleSubmit) : showMessage}
						className={cn(
							"glass mb-4 mt-2 appearance-none rounded-md bg-gradient-to-br from-light/80 to-gray/10 px-6 py-2 font-medium outline-1 outline-offset-2 focus-within:outline  focus-within:outline-dark/50 dark:from-dark/70 dark:to-dark/30 dark:focus-within:outline-white/80  lg:mt-10",
							!answerSelected ? "opacity-40" : "opacity-100 "
						)}>
						{lastQuestion ? "Submit" : "Next"}
					</button>
				</div>
			)}
		</div>
	);
};

export default QuestionsSection;
