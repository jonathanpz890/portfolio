import { Box } from '@mui/material'
import React from 'react'

export const Slope = ({
    position,
    width,
    height,
    screenWidth,
    shadowShape,
    rtl = false
}: {
    position: number;
    width: number;
    height: number;
    screenWidth: number;
    shadowShape?: string;
    rtl?: boolean;
}) => {
    const style = {
        slope: {
            display: 'flex',
            justifyCenter: 'center',
            position: 'absolute',
            bottom: 0,
            left: `${rtl ? 'unset' : `${position}%`}`,
            right: `${!rtl ? 'unset' : `${position}%`}`,
            clipPath: `polygon(${rtl ? '100% 0, 100% 100%, 0 100%' : '0 0, 0 100%, 100% 100%'})`,
            width: `${screenWidth * (width / 20)}px`,
            height: `${screenWidth / 8 * (height / 4)}px`,
            background: '#D7EBFD',
            zIndex: 2
        },
        shadow: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#B0D8FB',
            clipPath: `polygon(${shadowShape})`
}
    }
return (
    <Box sx={style.slope}>
        <Box sx={style.shadow} />
    </Box>
)
}
