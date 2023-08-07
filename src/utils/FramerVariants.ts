export const opacityAnimVariants = (startingOpacity?: number, endingOpacity?: number) => ({
	hide: { opacity: startingOpacity ?? 0 },
	visible: { opacity: endingOpacity ?? 1 },
});
export const scaleAnimVariants = (startingScale?: number | Array<number>, endingScale?: number) => ({
	hide: { scale: startingScale ?? 0 },
	visible: { scale: typeof startingScale === "object" ? startingScale : endingScale ?? 1 },
});
