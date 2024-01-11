export const useStyle = ({ 
    darkMode,
    navbarOpacity,
    initiated,
}: {
    darkMode: boolean;
    navbarOpacity: number;
    initiated: boolean;
}) => ({
    navbar: {
        height: '7vh',
        width: '100vw',
        zIndex: 10,
        position: 'fixed',
        top: initiated ? 0 : '-7vh',
        transition: 'top 1s',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
    },
    background: {
        position: 'absolute'
    },
    anchors: {
        display: 'flex',
        columnGap: '10px',

        '& button': {
            transition: 'color 1s',
            color: `${darkMode ? '#eeeeee' : '#000000'} !important`
        }
    },
    iconAnchor: {
        width: {
            xs: '15vw',
            sm: 'unset'
        }
    },
    iconButton: {
        color: darkMode ? '#eeeeee' : '#000000' ,

    }
})