import React from "react";
import ChevronIcon from "../../public/assets/icons/Chevron";
const Code = (props) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 88 88' fill='none' {...props}>
			<circle cx={44} cy={44} r={44} fill='url(#paint0_radial_5_302490)' />
			<path
				d='M51.646 56l-1.456-1.688L59.087 44 50.19 33.688 51.647 32 62 44 51.646 56zm-14.292 0L27 44l10.354-12 1.456 1.688L29.913 44l8.897 10.312L37.354 56z'
				fill='currentColor'
			/>
			<defs>
				<radialGradient
					id='paint0_radial_5_302490'
					cx={0}
					cy={0}
					r={1}
					gradientUnits='userSpaceOnUse'
					gradientTransform='rotate(91.569 .054 45.104) scale(41.7299)'>
					<stop stopColor='#56D163' stopOpacity={0.67} />
					<stop offset={1} stopColor='#60DC1A' stopOpacity={0} />
				</radialGradient>
			</defs>
		</svg>
	);
};

export default Code;
