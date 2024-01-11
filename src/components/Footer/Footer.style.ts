export const useStyle = ({
    background,
    darkMode,
    mobile
}: {
    background: string;
    darkMode: boolean;
    mobile: boolean;
}) => ({
    footer: {
        zIndex: 0,
        height: mobile ? '' : '450px',
        width: '100%',
        background: `linear-gradient(rgba(${darkMode ? '0, 0, 0' : '255, 255, 255'}, 0.4), rgba(${darkMode ? '0, 0, 0' : '255, 255, 255'}, 0.4)), url(${background})`,        
        backgroundSize: '50%',
        bottom: 0,
        boxShadow: `
            inset 50px 0 30px -50px black,
            inset -50px 0 30px -50px black
        `,
        display: 'flex'
    },
    itemContainer: {
        width: '100%',
        height: mobile ? '' : '450px',
        display: 'flex',
        flexDirection: {
            xs: 'column',
            md: 'row'
        },
        justifyContent: '',
        alignItems: 'center',
        padding: {
            xs: '0 7.5vw',
            md: '0 10vh'
        },
        columnGap: 20,
        rowGap: 5,
        '> *': {
            flex: 1
        }
    },
    middleBox: {
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    leftBox: {

    },
    rightBox: {
        width: {
            xs: '100%',

        },
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
        rowGap: 2
    },
    anchorButton: {
        color: darkMode ? '#eeeeee' : 'black',
        transition: 'color 1s'
    }
})