function BlogIcon(props) {
	return (
		<svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect x={0.5} y={0.5} width={23} height={22.25} rx={6.5} stroke='currentColor' />
			<rect x={6} y={6.75} width={12} height={1.5} rx={0.75} fill='currentColor' />
			<rect x={11.25} y={11.25} width={6.75} height={1.5} rx={0.75} fill='currentColor' />
			<rect x={6} y={11.25} width={3.75} height={1.5} rx={0.75} fill='currentColor' />
			<rect x={11.25} y={15.75} width={6.75} height={1.5} rx={0.75} fill='currentColor' />
			<rect x={6} y={15.75} width={3.75} height={1.5} rx={0.75} fill='currentColor' />
		</svg>
	);
}

export default BlogIcon;
