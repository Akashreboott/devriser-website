function ContactIcon(props) {
	return (
		<svg width={26} height={22} viewBox='0 0 26 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M22.307 20.21l-.07-.038a13.996 13.996 0 00-6.773-1.748H4.534c-3.231 0-3.68-1.936-3.5-2.904V5.02c0-3.037 2.334-3.946 3.5-4.02H21.23C24.246 1 25 3.085 25 4.127v16.084c0 1.43-1.795.595-2.693 0z'
				stroke='currentColor'
			/>
			<circle cx={9} cy={10} r={1} fill='currentColor' />
			<circle cx={13} cy={10} r={1} fill='currentColor' />
			<circle cx={17} cy={10} r={1} fill='currentColor' />
		</svg>
	);
}

export default ContactIcon;
