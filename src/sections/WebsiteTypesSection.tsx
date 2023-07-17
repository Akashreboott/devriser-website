import React from "react";

const WebsiteTypesSection = () => {
	return (
		<section className='grid lg:grid-cols-2 items-center relative pb-[50px]'>
			<div className='w-[246px] aspect-square rounded-full bg-coral/40 blur-[200px] absolute -top-[18%] -right-[5%]'></div>

			<h2 className='primary-heading lg:max-w-[70%] max-lg:max-w-[95%] mx-auto max-lg:text-center'>Types Of Websites We Create With CMS</h2>
			<div className='[&>*]:flex [&>*]:justify-center [&>*]:gap-1 grid gap-6 max-lg:mt-[50px]'>
				<div>
					<div className='btn-outline max-md:rounded-sm [--gradient-border-color:var(--light-gradient-border2)] '>Business website</div>
					<div className='btn-outline max-md:rounded-sm [--gradient-border-color:var(--light-gradient-border2)]'>Business website</div>
					<div className='btn-outline max-md:rounded-sm [--gradient-border-color:var(--light-gradient-border2)]'>Business website</div>
				</div>
				<div className='gap-8'>
					<div className='btn-outline max-md:rounded-sm [--gradient-border-color:var(--light-gradient-border2)] '>Business website</div>
					<div className='btn-outline max-md:rounded-sm [--gradient-border-color:var(--light-gradient-border2)] '>Business website</div>
				</div>
				<div>
					<div className='btn-outline max-md:rounded-sm [--gradient-border-color:var(--light-gradient-border2)] '>Business website</div>
					<div className='btn-outline max-md:rounded-sm [--gradient-border-color:var(--light-gradient-border2)] '>Business website</div>
					<div className='btn-outline max-md:rounded-sm [--gradient-border-color:var(--light-gradient-border2)] '>Business website</div>
				</div>
			</div>
		</section>
	);
};

export default WebsiteTypesSection;
