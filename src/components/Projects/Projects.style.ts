export const useStyles = ({
    darkMode
}: {
    darkMode: boolean;
}) => ({
    projects: {
        zIndex: 1,
        position: 'relative',
        width: '100%',
        margin: 'auto',
        minHeight: '60vh',
        backgroundColor: darkMode ? 'rgb(76.5, 76.5, 76.5)' : '#ffffff',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        boxShadow: '0 -50px 30px 60px black',
        transition: 'background-color 1s'
    },
    projectContainer: {
        margin: '20px 0',
        display: 'grid',
        gap: '30px',
        gridTemplateColumns: {
            xs: '1fr 1fr',
            md: '1fr 1fr 1fr 1fr'
        }
    },
    sizeController: {
        maxWidth: '1600px',
        padding: {
            xs: '0 7.5vw 7.5vw',
            md: '0 10vh 10vh'
        },
        margin: 'auto'
    }
})