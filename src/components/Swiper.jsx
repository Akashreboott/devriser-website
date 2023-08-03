"use client";
import { forwardRef, useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

export const Swiper = forwardRef(function Swiper(props, ref) {
	const { children, ...rest } = props;

	useEffect(() => {
		// Register Swiper web component
		register();

		// pass component props to parameters
		const params = {
			...rest,
		};

		// Assign it to swiper element
		Object.assign(ref.current, params);

		// initialize swiper
		ref.current.initialize();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<swiper-container init='false' ref={ref}>
			{children}
		</swiper-container>
	);
});
export function SwiperSlide(props) {
	const { children, ...rest } = props;

	return <swiper-slide {...rest}>{children}</swiper-slide>;
}
