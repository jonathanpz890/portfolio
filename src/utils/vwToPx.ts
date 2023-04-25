export const vwToPx = (vwValue: number) => {
    const screenWidth = window.innerWidth;
    const pxValue = (vwValue * screenWidth) / 100;
    return pxValue;
};