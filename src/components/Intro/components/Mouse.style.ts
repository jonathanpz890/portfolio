export const useStyle = ({initiated}: {initiated: boolean}) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        bottom: initiated ? '5px' : '-200px',
        transition: 'bottom 1s'
    },
    mouse: {
        position: 'relative',
        width: '30px',
        height: '50px',
        border: '3px solid black',
        borderRadius: '100px',
        display: 'flex',
        justifyContent: 'center'
    },
    mouseWheel: {
        width: '5px',
        height: '5px',
        borderRadius: '3px',
        background: 'black',
        transition: 'top 1s linear'
    }
})