import { Box, Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { DarkModeContext } from '../../../Context';

export const SocialButton = ({
    text,
    icon,
    color,
    action
}: {
    text: string;
    icon: React.ReactNode;
    color: string;
    action: string;
}) => {
    const { darkMode } = useContext(DarkModeContext);
    const style = useStyle({
        color,
        darkMode
    })

    return (
        <a
            href={action}
            style={style.anchor}
            target='_blank'
        >
            <Button
                sx={style.socialButton}
                variant='contained'
            >
                <Box
                    sx={style.iconContainer}
                >
                    {icon}
                </Box>
                <Typography
                    sx={style.text}
                    variant='inherit'
                >{text}</Typography>
            </Button>
        </a>
    )
}

const useStyle = ({
    color,
    darkMode
}: {
    color: string;
    darkMode: boolean;
}) => ({
    anchor: {
        textDecoration: 'none'
    },
    socialButton: {
        borderRadius: '100px',
        width: '100%',
        backgroundColor: darkMode ? '#101f28' : '#ffffff',
        color: darkMode ? '#eeeeee' : 'black',
        display: 'flex',
        columnGap: 1,
        padding: '5px 10px 5px 5px',
        '&:hover': {
            background: darkMode ? '#193849' : '#eeeeee'
        }
    },
    iconContainer: {
        width: 35,
        height: 35,
        backgroundColor: color,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    text: {
        flex: 1
    }
})