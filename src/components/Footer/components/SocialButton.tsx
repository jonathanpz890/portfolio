import { Box, Button, Typography } from '@mui/material'
import React from 'react'

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
    const style = useStyle({
        color
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
    color
}: {
    color: string;
}) => ({
    anchor: {
        textDecoration: 'none'
    },
    socialButton: {
        borderRadius: '100px',
        width: '100%',
        backgroundColor: '#ffffff',
        color: 'black',
        display: 'flex',
        columnGap: 1,
        padding: '5px 10px 5px 5px',
        '&:hover': {
            background: '#eeeeee'
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