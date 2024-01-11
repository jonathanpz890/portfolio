export const iphoneVhToPx = (vh: number) => {
    const screenHeight = window.innerHeight * vh / 100;
    return screenHeight * 0.483;
}