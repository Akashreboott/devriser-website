function AboutIcon(props) {
	return (
		<svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g stroke='currentColor'>
				<circle cx={12} cy={12} r={11.5} />
				<circle cx={12} cy={11} r={3.5} />
				<path d='M5 20.998c.082-1.208.737-2.986 2.702-2.986h7.86c1.064-.12 2.742.007 2.938 3.486' />
			</g>
		</svg>
	);
}

export default AboutIcon;
