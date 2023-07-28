export interface SectionHeadingProps {
	className?: string;
	title: string;
	gradientText?: string;
	GradientColor?: string;
	FullGradient?: boolean;
	description?: string;
	children?: React.ReactNode;
	as?: string;
	gap?: string;
}

export interface DecoratedBannerProps extends SectionHeadingProps {
	btnText: string;
	HideRings?: true | false;
	BannerColor?: string;
	variant?: "Primary" | "Secondary" | "Outlined";
}

export interface BannerProps {
	heading: string;
	btnText: string;
}
