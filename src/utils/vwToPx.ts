export const vwToPx = (vwValue: number, screenWidth: number) => {
    const pxValue = (vwValue * screenWidth) / 100;
    return pxValue;
};