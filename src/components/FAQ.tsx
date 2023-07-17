import Image from "next/image";
import plus from "./../../public/assets/icons/plus.svg";
import minus from "./../../public/assets/icons/minus.svg";

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
				className='flex w-full cursor-pointer select-none justify-between items-center gap-2 py-2 text-lg font-normal  peer-checked:[&>span+span]:!inline-block peer-checked:[&>span:first-of-type]:!hidden'>
				{props.title}
				<span className='shrink-0'>
					<Image src={plus} alt='' />
				</span>
				<span className='hidden shrink-0'>
					<Image src={minus} alt='' />
				</span>
			</label>
			<div className='grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 peer-checked:[grid-template-rows:1.2fr]'>
				<p className='overflow-hidden opacity-75 max-sm:text-[18px]/[28px] text-slate-gray '>{props.content}</p>
			</div>
			<div
				className='pointer-events-none absolute h-full w-full border-b-2 dark:border-[#A6A6A6] border-dark-gray  peer-checked:ring-zinc-300 dark:ring-zinc-800 peer-checked:dark:ring-zinc-500'
				aria-hidden='true'
			/>
		</div>
	);
};

export default FAQ;
