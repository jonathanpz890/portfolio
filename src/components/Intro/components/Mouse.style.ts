export const useStyle = ({
    initiated,
    darkMode
}: {
    initiated: boolean;
    darkMode: boolean;
}) => ({
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
        border: `3px solid`,
        color:  darkMode ? '#eeeeee' : '#000000',
        transition: 'color 1s',
        borderRadius: '100px',
        display: 'flex',
        justifyContent: 'center',
    },
    mouseWheel: {
        width: '5px',
        height: '5px',
        borderRadius: '3px',
        background: darkMode ? '#eeeeee' : '#000000',
        transition: 'top 1s linear, color 1s'
    }
})