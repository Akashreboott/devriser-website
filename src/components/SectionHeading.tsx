interface props {
	className?: string;
	title: string;
	description?: string;
	children?: React.ReactNode;
}

const SectionHeading = (props: props) => {
	return (
		<div className={`flex flex-col text-center max-w-[85%] max-md:max-w-[95%] mx-auto ${props.className ?? ""} `}>
			<h2 className='primary-heading'>{props.title}</h2>
			<p className='text-basic dark:text-gray text-primary-dark mb-6 '>{props.description}</p>
			{props.children}
		</div>
	);
};

export default SectionHeading;
