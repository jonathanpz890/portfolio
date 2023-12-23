import { Box } from '@mui/material'
import React from 'react'
import Skater1 from '../../../assets/skiers/skier7.png'
import Skater2 from '../../../assets/skiers/skier8.png'
import Skater3 from '../../../assets/skiers/skier9.png'
import Skater4 from '../../../assets/skiers/skier10.png'
import { animated } from '@react-spring/web'

export const Skater = ({
    index
}: {
    index: number
}) => {
    const skaters = [
        Skater1,
        Skater2,
        Skater3,
        Skater4
    ]
    return (
        <Box
            sx={{
                width: '1.5vw',
                height: '3vw',
            }}
        >
            <img
                src={skaters[index]}
                style={{
                    width: '1.5vw',
                    height: '3vw',
                }}
            />
        </Box>
    )
}
