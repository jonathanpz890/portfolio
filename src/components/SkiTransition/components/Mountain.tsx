import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { DarkModeContext } from '../../../Context';

export const Mountain = ({
    position,
    scale,
    screenWidth,
    topSnowShape,
    shadowShape,
    foreground,
    halfForeground
}: {
    position: number;
    scale: number;
    screenWidth: number;
    topSnowShape?: string;
    shadowShape?: string;
    foreground?: boolean;
    halfForeground?: boolean;
}) => {
    const { darkMode } = useContext(DarkModeContext)
    const style = {
        mountain: {
            display: 'flex',
            justifyCenter: 'center',
            position: 'absolute',
            bottom: 0,
            width: `${(screenWidth / 25) * scale}px`,
            height: `${(screenWidth / 50) * scale}px`,
            background: halfForeground ? '#62a5e3' : foreground ? '#89CAF3' : 'linear-gradient(to bottom, #2aa3fa, #827FDF)',
            left: `${position}%`,
            transform: 'translateX(-50%)',
            clipPath: 'polygon(50% 0, 0 100%, 100% 100%)',
            zIndex: 1,
            filter: darkMode ? 'brightness(30%)' : '',
            transition: 'filter 1s'
        },
        topSnow: {
            width: '100%',
            height: '30%',
            background: 'white',
            clipPath: `polygon(${topSnowShape})`
        },
        shadow: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.2)',
            clipPath: `polygon(${shadowShape})`
        }
    }
    return (
        <Box sx={style.mountain}>
            {!foreground && !halfForeground && (
                <>
                    <Box sx={style.topSnow} />
                    <Box sx={style.shadow} />
                </>
            )}
        </Box>
    )
}
