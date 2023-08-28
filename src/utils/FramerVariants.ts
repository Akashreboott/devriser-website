export const opacityAnimVariants = (startingOpacity?: number, endingOpacity?: number) => ({
  hide: { opacity: startingOpacity ?? 0 },
  visible: { opacity: endingOpacity ?? 1 },
});
export const slideVerticallyVariants = (startingPosition?: number | string, endingPosition?: number | string) => ({
  hide: { y: startingPosition, opacity: 0 },
  visible: { y: endingPosition, opacity: 1 },
});
export const scaleAnimVariants = (startingScale?: number | Array<number>, endingScale?: number) => ({
  hide: { scale: startingScale ?? 0 },
  visible: { scale: typeof startingScale === "object" ? startingScale : endingScale ?? 1 },
});
export const slideCrossVariants = (
  startingXY_Values: number | string | Array<number | string>,
  endingXY_Values: number | string | Array<number | string>
) => {
  let initial;

  if (typeof startingXY_Values === "number") {
    initial = { x: startingXY_Values, y: startingXY_Values };
  } else {
    initial = { x: startingXY_Values[0], y: startingXY_Values[1] };
  }
  let end;
  if (typeof endingXY_Values === "number") {
    end = { x: endingXY_Values, y: endingXY_Values };
  } else {
    end = { x: endingXY_Values[0], y: endingXY_Values[1] };
  }

  return {
    hide: initial,
    visible: end,
  };
};

const FramerProps = (props: any) => ({ initial: "hide", animate: "visible", exit: "hide", variants: props });
export default FramerProps;
