export const useStyles = ({
    Background,
    introTextWidth,
    initiated,
    deformIntro,
    darkMode
}: StyleProps) => ({
    intro: {
        top: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        filter: deformIntro ? 'blur(10px)' : '',
        transition: 'background 1s, filter 0.7s',
        textAlign: 'center',
        background: darkMode && !initiated ? '#0e1921' : ''
    },
    introBackground: {
        background: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${Background})`,
        filter: darkMode ? 'saturate(1.5) brightness(0.4)' : '',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        transition: 'opacity 1s, filter 1s',
        opacity: initiated ? 1 : 0,
    },
    introContent: {
        top: '7vh',
        height: '93vh',
        width: '100%',
        maxWidth: '1600px',
        position: 'relative',
        transform: deformIntro ? 'scale(0.5) translateY(-100vh)' : '',
        transition: 'transform 1s',
        transformOrigin: 'center top',
    },
    introTitle: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        rowGap: {
            xs: initiated ? '52vw' : 5,
            sm: 10
        },
        padding: {
            xs: '15vh 5vw',
            sm: '0 5vw'
        },
        transition: 'color 10s, row-gap 1s',
        position: {
            xs: 'absolute',
            sm: 'unset'
        },
    },
    introTitleText: {
        // fontFamily: 'monospace, sans-serif',
        fontSize: {
            xs: '10vw',
            sm: '5vw',
            lg: '80px'
        },
        // height: '40vh',
        width: {
            xs: '100%',
            sm: `${introTextWidth}%`,
        },
        transition: 'width 1s, text-shadow 1s, transform 1s',
        fontWeight: '600',
        color: darkMode ? '#eeeeee' : '#000000',
        '&:nth-of-type(2)': {
            zIndex: 1,
            textShadow: {
                xs: initiated ? `0 -5px 20px ${darkMode ? 'black' : 'rgba(255, 255, 255, 0.5)'}` : '',
                sm: 'unset'
            },
            transform: {
                xs: initiated ? 'scale(1.2)' : '',
                sm: 'unset'
            }
        }
    },
    introMac: {
        position: 'absolute',
        right: {
            xs: initiated ? '50%' : '-100%',
            sm: initiated ? 50 : '-100%'
        },
        top: '50%',
        transform: {
            xs: 'translate(50%, -50%)',
            sm: 'translateY(-50%)'
        },
        transition: 'right 1s'
    }
})

interface StyleProps {
    Background: string;
    introTextWidth: number;
    initiated: boolean;
    deformIntro: boolean;
    darkMode: boolean;
}
