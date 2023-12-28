export const useStyle = ({
    background
}: {
    background: string;
}) => ({
    footer: {
        zIndex: 0,
        height: '450px',
        width: '100%',
        background: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${background})`,        
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
        height: '450px',
        display: 'flex',
        justifyContent: '',
        alignItems: 'center',
        padding: '0 10vh',
        columnGap: 20,
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
        display: 'flex',
        flexDirection: 'column',
        rowGap: 2
    }
})