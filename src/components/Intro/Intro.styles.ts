export const useStyles = ({
    Background,
    introTextWidth,
    initiated,
    deformIntro
}: StyleProps) => ({
    intro: {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        filter: deformIntro ? 'blur(10px)' : '',
        transition: 'background 1s, filter 0.7s',
    },
    introBackground: {
        background: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${Background})`,
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        transition: 'opacity 1s',
        opacity: initiated ? 1 : 0,
    },
    introContent: {
        top: '10vh',
        display: 'flex',
        width: '100%',
        position: 'relative',
        transform: deformIntro ? 'scale(0.7)' : '',
        transition: 'transform 0.7s',
        transformOrigin: 'center top'
    },
    introTitle: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        rowGap: 10,
        padding: '0 5vw'
    },
    introTitleText: {
        fontFamily: 'monospace, sans-serif',
        width: `${introTextWidth}%`,
        transition: 'width 1s',
    },
    introMac: {
        paddingTop: {
            md: '20vh',
            xl: '40vh'
        },
        position: 'absolute',
        right: initiated ? 0 : '-100%',
        top: '50%',
        transform: 'translateY(-50%)',
        transition: 'right 1s'
    }
})

interface StyleProps {
    Background: string;
    introTextWidth: number;
    initiated: boolean;
    deformIntro: boolean;
}
