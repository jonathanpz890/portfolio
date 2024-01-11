
// const boxShadow = '0px 10px 20px black'
export const useStyles = ({
    darkMode,
    smallDevice,
    mobile
}: {
    darkMode: boolean;
    smallDevice: boolean;
    mobile: boolean;
}) => ({
    container: {
        scrollMarginTop: 50,
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: darkMode ? '#101f28' : '#70a7ce',
        transition: 'background-color 1s',
        zIndex: 3
    },
    contentContainer: {
        display: 'flex',
        flexDirection: {
            xs: 'column',
            md: 'row-reverse'
        },
        flexWrap: 'wrap',
        maxWidth: '1600px',
        margin: '0 auto',
        gap: 10,
        padding: {
            xs: '0 7.5vw 7.5vw',
            md: '0 10vh 10vh'
        },
    },
    skillContainer: {
        width: {
            sm: '85%',
            md: '25%'
        },
        // margin: '10vh',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 5,
    },
    skillList: {
        boxShadow: `0px 10px 20px ${darkMode ? '#000000' : '#3979ad'}`,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.5)',
        transition: 'box-shadow 1s',
        borderRadius: '20px',
        padding: '15px',
        // padding: '1vw',
        display: 'flex',
        listStyle: 'none',
        'flex-wrap': 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 'unset',
        gap: '10px'
        
    },
    skill: {
        fontSize: mobile ? '3vw' : smallDevice ? '2vw' : '20px',
        margin: '0.8vw',
        marginBottom: 'unset',
        background: 'rgba(255, 255, 255, 0.5)',
        padding: smallDevice ? '1.2vw' : '0.8vw',
        borderRadius: smallDevice ? '1.2vw' : '10px'
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
        height: mobile ? '' : smallDevice ? '150px' : '300px',
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '20px',
        display: 'flex',
        columnGap: 10,
        transition: 'box-shadow 1s',
        boxShadow: `0px 10px 20px ${darkMode ? '#000000' : '#3979ad'}`,
    },
    traitList: {
        listStyle: 'disc inside none',
    }
})