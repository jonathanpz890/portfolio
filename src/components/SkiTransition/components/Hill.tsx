import { Box } from '@mui/material'
import React from 'react'

export const Hill = ({
    position,
    width,
    height,
    screenWidth,
    shadowShape,
}: {
    position: number;
    width: number;
    height: number;
    screenWidth: number;
    shadowShape?: string;
}) => {
    const style = {
        hill: {
            display: 'flex',
            justifyCenter: 'center',
            position: 'absolute',
            bottom: 0,
            left: `${position}%`,
            transform: 'translateX(-50%)',
            clipPath: 'ellipse(50% 100% at 50% 140%)',
            width: `${screenWidth * (width / 10)}px`,
            height: `${screenWidth / 8 * (height / 2)}px`,
            background: '#B0D8FB',
            zIndex: 2
        },
        shadow: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#D7EBFD',
            clipPath: `ellipse(${shadowShape})`
}
    }
return (
    <Box sx={style.hill}>
        <Box sx={style.shadow} />
    </Box>
)
}
