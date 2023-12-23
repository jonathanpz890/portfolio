export const useStyle = ({ screenWidth, scrollYProgress }: { screenWidth: number; scrollYProgress: number; }) => ({
    skiTransition: {
        width: '100%',
        overflowX: 'hidden',
        height: `${screenWidth / 3.5}px`,
        display: 'flex',
        flexDirection: 'column',
        background: '#B7E7FA'
    },
    mountains: {
        width: '100%',
        flex: 1,
        position: 'relative'
    },
    groundSnow: {
        width: '100%',
        height: '28.57142857%',
        background: 'white',
        zIndex: 3
    },
    ice: {
        position: 'relative',
        backgroundColor: '#EBF3FC',
        width: '100%',
        height: '50%',
        top: '15%',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
    },
    sky: {
        position: 'relative',
        top: -2,
        background: '#70a6ce',
        width: '200vw',
        height: '100%',
        clipPath: 'polygon(100% 0%, 0% 0% , 0.00% 25.07%, 2.00% 23.19%, 4.00% 21.32%, 6.00% 19.52%, 8.00% 17.86%, 10.00% 16.39%, 12.00% 15.16%, 14.00% 14.23%, 16.00% 13.61%, 18.00% 13.35%, 20.00% 13.43%, 22.00% 13.87%, 24.00% 14.64%, 26.00% 15.72%, 28.00% 17.07%, 30.00% 18.64%, 32.00% 20.38%, 34.00% 22.22%, 36.00% 24.10%, 38.00% 25.96%, 40.00% 27.72%, 42.00% 29.32%, 44.00% 30.72%, 46.00% 31.85%, 48.00% 32.68%, 50.00% 33.18%, 52.00% 33.33%, 54.00% 33.13%, 56.00% 32.58%, 58.00% 31.70%, 60.00% 30.53%, 62.00% 29.10%, 64.00% 27.46%, 66.00% 25.68%, 68.00% 23.82%, 70.00% 21.94%, 72.00% 20.11%, 74.00% 18.39%, 76.00% 16.85%, 78.00% 15.54%, 80.00% 14.50%, 82.00% 13.78%, 84.00% 13.40%, 86.00% 13.36%, 88.00% 13.68%, 90.00% 14.35%, 92.00% 15.33%, 94.00% 16.59%, 96.00% 18.09%, 98.00% 19.78%, 100.00% 21.60%);'
    }
})