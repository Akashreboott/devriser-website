import React from "react";

const StatsSection = () => {
	const Circle = (props: { CircleWidth?: string; borderWidth?: string; offsetWidth?: string; Value: string }) => (
		<div
			style={
				{
					"--circle-size": "180px",
					"--offsetWidth": "12px",
				} as React.CSSProperties
			}
			className='relative isolate h-[--circle-size] w-[--circle-size]   [&>*]:inset-0'>
			<div className='absolute h-[--circle-size] w-[--circle-size] rounded-full border-2 border-dark bg-body-bg dark:border-white'></div>
			<div
				style={{ backgroundImage: `conic-gradient(#00D085 ${props.Value}, transparent ${props.Value})` }}
				className='absolute  h-[calc(var(--circle-size)+calc(var(--offsetWidth)*2))] w-[calc(var(--circle-size)+calc(var(--offsetWidth)*2))] -translate-x-[--offsetWidth] -translate-y-[--offsetWidth] rounded-full '></div>
			<div className='absolute h-[calc(var(--circle-size)-calc(var(--offsetWidth)*2))] w-[calc(var(--circle-size)-calc(var(--offsetWidth)*2))] translate-x-[--offsetWidth] translate-y-[--offsetWidth] rounded-full  bg-body-bg'></div>
			<div className='absolute z-50 grid h-[--circle-size] w-[--circle-size] place-items-center'>
				<p className='primary-heading !text-dark dark:!text-white'>{props.Value}</p>
			</div>
		</div>
	);

	return (
		<div className='md flex items-center justify-between gap-4 max-lg:flex-col max-lg:gap-24'>
			<div className='flex  items-center justify-center gap-10 max-lg:flex-col max-lg:gap-20'>
				<Circle Value='57%' />
				<p className='max-w-[45%]'>
					57%+ Of Corporate <br className='max-lg:hidden' /> Professionals Face Hurdles In Managing their software
				</p>
			</div>
			<div className='flex  items-center justify-center gap-10 max-lg:flex-col max-lg:gap-20'>
				<Circle Value='47%' />
				<p className='max-w-[45%]'>
					47%+ of businesses <br className='max-lg:hidden' /> struggle with their software performance issues
				</p>
			</div>
		</div>
	);
};

export default StatsSection;
