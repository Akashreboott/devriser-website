export interface SectionHeadingProps {
	className?: string;
	title: string;
	gradientText?: string;
	description?: string;
	children?: React.ReactNode;
	as?: string;
	gap?: string;
}

export interface DecoratedBannerProps extends SectionHeadingProps {
	btnText: string;
}

export interface BannerProps {
	heading: string;
	btnText: string;
}
