function Menu(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth={2}
			strokeLinecap='round'
			strokeLinejoin='round'
			{...props}>
			<path d='M3 12L21 12' />
			<path d='M3 6L21 6' />
			<path d='M3 18L21 18' />
		</svg>
	);
}

export default Menu;
