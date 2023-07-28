import Plus from "./../../public/assets/icons/Plus";
import Minus from "./../../public/assets/icons/Minus";

interface props {
	title: string;
	content: string;
}
const FAQ = (props: props) => {
	return (
		<div className='relative grid w-full rounded-md px-4 py-2 '>
			<input className='peer hidden appearance-none' aria-hidden='true' type='checkbox' name='faq' id={`${props.title}id`} />
			<label
				htmlFor={`${props.title}id`}
				className='flex w-full cursor-pointer items-center justify-between gap-2 py-2 text-left text-lg font-normal  peer-checked:[&>span+span]:!inline-block peer-checked:[&>span:first-of-type]:!hidden'>
				{props.title}
				<span className='shrink-0'>
					<Plus className='h-5 w-5 text-toggle-icon-color' />
				</span>
				<span className='hidden shrink-0'>
					<Minus className='h-5 w-5 text-toggle-icon-color' />
				</span>
			</label>
			<div className='grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 peer-checked:[grid-template-rows:1.2fr]'>
				<p className='overflow-hidden text-left font-350 text-slate-gray opacity-75 max-md:leading-7 '>{props.content}</p>
			</div>
			<div
				className='pointer-events-none absolute h-full w-full border-b-2 border-dark-gray peer-checked:ring-zinc-300  dark:border-[#A6A6A6] dark:ring-zinc-800 peer-checked:dark:ring-zinc-500'
				aria-hidden='true'
			/>
		</div>
	);
};

export default FAQ;
