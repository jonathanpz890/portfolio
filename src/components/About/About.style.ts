export const useStyles = ({
    darkMode
}: {
    darkMode: boolean
}) => ({
    aboutContainer: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: darkMode ? '#315a75' : '#cce0f0',
        transition: 'background-color 1s'
    },
    about: {
        maxWidth: '1600px',
        display: 'flex',
        justifyContent: {
            xs: 'center'
        },
        padding: {
            xs: '5vw',
            sm: '10vh'
        },
        columnGap: '2.5vh',
        margin: 'auto'
    },
    iphoneContent: {
        backgroundColor: '#cce0f0',
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    linkedInBar: {
        width: '100%',
        position: 'sticky',
        top: '0'
    },
    linkedInButtons: {
        position: 'sticky',
        bottom: '0'
    },
    aboutTextContainer: {

    },
    aboutText: {
        // fontFamily: 'monospace, sans-serif'
    }
})