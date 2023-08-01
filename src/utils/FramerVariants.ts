export const opacityAnimVariants = (startingOpacity?: number, endingOpacity?: number) => ({
	hide: { opacity: startingOpacity ?? 0 },
	visible: { opacity: endingOpacity ?? 1 },
});
