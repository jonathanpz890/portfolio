export const useStyles = () => ({
    projects: {
        width: '100%',
        maxWidth: '1600px',
        margin: 'auto',
        minHeight: '60vh',
        background: '#ffffff',
        padding: '0 10vh 10vh',
        transformStyle: 'preserve-3d',
        perspective: '1000px'
    },
    projectContainer: {
        margin: '20px 0',
        display: 'grid',
        gap: '30px',
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
    }
})