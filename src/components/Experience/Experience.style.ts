const boxShadow = '0px 10px 20px #3979ad'
export const useStyles = () => ({
    container: {
        scrollMarginTop: 50,
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#70a7ce',
        zIndex: 3
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        maxWidth: '1600px',
        margin: '0 auto',
        gap: 10,
        padding: '0 10vh',
        paddingBottom: '10vh'
    },
    skillContainer: {
        width: '25vw',
        // margin: '10vh',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 5,
    },
    skillList: {
        boxShadow,
        width: '100%',
        height: '80vh',
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '5vh',
        padding: '1vw',
        // padding: '1vw',
        display: 'flex',
        listStyle: 'none',
        'flex-wrap': 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 'unset'
    },
    skill: {
        fontSize: '1.5vw',
        margin: '0.8vw',
        marginBottom: 'unset',
        background: 'rgba(255, 255, 255, 0.5)',
        padding: '0.8vw',
        borderRadius: '0.8vw'
    },
    experienceContainer: {
        flex: 1,
        // margin: '10vh',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 5
    },
    experienceItem: {
        width: '100%',
        height: '300px',
        padding: '1vw',
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '5vh',
        display: 'flex',
        columnGap: 10,
        boxShadow,
    },
    traitList: {
        listStyle: 'disc inside none',
    }
})