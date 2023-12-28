export const useStyles = () => ({
    projects: {
        zIndex: 1,
        position: 'relative',
        width: '100%',
        margin: 'auto',
        minHeight: '60vh',
        background: '#ffffff',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        boxShadow: '0 -50px 30px 60px black'
    },
    projectContainer: {
        margin: '20px 0',
        display: 'grid',
        gap: '30px',
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
    },
    sizeController: {
        maxWidth: '1600px',
        padding: '0 10vh 10vh',
        margin: 'auto'
    }
})