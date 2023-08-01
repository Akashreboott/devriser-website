import cn from "@/utils/cn";
import React from "react";

const WebsiteTypesSection = () => {
	return (
		<section className='relative mx-3 my-20 grid items-center pb-[50px] lg:grid-cols-2'>
			<div className='absolute -right-[5%] -top-[18%] aspect-square w-[246px] rounded-full bg-coral/40 blur-[200px]'></div>

			<h2 className='primary-heading mx-auto max-lg:max-w-[95%] max-lg:text-center lg:max-w-[70%]'>Types Of Websites We Create With CMS</h2>
			<div className='grid gap-6 max-lg:mt-[50px] [&>*]:flex [&>*]:justify-center [&>*]:gap-3.5'>
				<div>
					<div
						className={cn(
							"btn-outline px-1 text-center text-[18px] [--gradient-border-color:var(--light-gradient-border2)] max-md:rounded-sm md:px-4 "
						)}>
						Business website
					</div>
					<div
						className={cn(
							"btn-outline px-1 text-center text-[18px] [--gradient-border-color:var(--light-gradient-border2)] max-md:rounded-sm md:px-4"
						)}>
						Business website
					</div>
					<div
						className={cn(
							"btn-outline px-1 text-center text-[18px] [--gradient-border-color:var(--light-gradient-border2)] max-md:rounded-sm md:px-4"
						)}>
						Business website
					</div>
				</div>
				<div className='gap-8'>
					<div
						className={cn(
							"btn-outline grow-0 px-1 text-center text-[18px]  [--gradient-border-color:var(--light-gradient-border2)] max-md:rounded-sm md:px-4 "
						)}>
						Business website
					</div>
					<div
						className={cn(
							"btn-outline grow-0 px-1 text-center text-[18px]  [--gradient-border-color:var(--light-gradient-border2)] max-md:rounded-sm md:px-4 "
						)}>
						Business website
					</div>
				</div>
				<div>
					<div
						className={cn(
							"btn-outline px-1 text-center text-[18px] [--gradient-border-color:var(--light-gradient-border2)] max-md:rounded-sm md:px-4 "
						)}>
						Business website
					</div>
					<div
						className={cn(
							"btn-outline px-1 text-center text-[18px] [--gradient-border-color:var(--light-gradient-border2)] max-md:rounded-sm md:px-4 "
						)}>
						Business website
					</div>
					<div
						className={cn(
							"btn-outline px-1 text-center text-[18px] [--gradient-border-color:var(--light-gradient-border2)] max-md:rounded-sm md:px-4 "
						)}>
						Business website
					</div>
				</div>
			</div>
		</section>
	);
};

export default WebsiteTypesSection;
