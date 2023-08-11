import Plus from "./../../public/assets/icons/Plus";
import Minus from "./../../public/assets/icons/Minus";

interface props {
	question: string;
	answer: string;
}
const FAQ = (props: props) => {
	return (
		<div className='relative grid w-full rounded-md px-4 py-2 '>
			<input className='peer hidden appearance-none' aria-hidden='true' type='checkbox' name='faq' id={`${props.question}id`} />

			<label
				htmlFor={`${props.question}id`}
				className='flex w-full cursor-pointer select-none items-center justify-between gap-2 py-2 text-left text-lg font-normal max-md:text-base  peer-checked:[&>span+span]:!inline-block peer-checked:[&>span:first-of-type]:!hidden'>
				{props.question}
				<span className='mb-auto shrink-0'>
					<Plus className='h-5 w-5 text-toggle-icon-color' />
				</span>
				<span className='mb-auto hidden shrink-0'>
					<Minus className='h-5 w-5 text-toggle-icon-color' />
				</span>
			</label>
			<div className='grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 peer-checked:[grid-template-rows:1.2fr]'>
				<p className='overflow-hidden text-left font-350  opacity-75 max-md:leading-7'>{props.answer}</p>
			</div>
			<div
				className='pointer-events-none absolute h-full w-full border-b-2 border-dark-gray peer-checked:ring-zinc-300  dark:border-[#A6A6A6] dark:ring-zinc-800 peer-checked:dark:ring-zinc-500'
				aria-hidden='true'
			/>
		</div>
	);
};

export default FAQ;
