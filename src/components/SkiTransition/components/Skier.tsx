import { Box } from '@mui/material'
import React from 'react'
import Skier1 from '../../../assets/skiers/skier1.png'
import Skier2 from '../../../assets/skiers/skier2.png'
import Skier3 from '../../../assets/skiers/skier3.png'
import Skier4 from '../../../assets/skiers/skier4.png'
import Skier5 from '../../../assets/skiers/skier5.png'
import Skier6 from '../../../assets/skiers/skier6.png'
import Skier7 from '../../../assets/skiers/skier7.png'
import Skier8 from '../../../assets/skiers/skier8.png'
import Skier9 from '../../../assets/skiers/skier9.png'
import Skier10 from '../../../assets/skiers/skier10.png'
import { animated } from '@react-spring/web'

export const Skier = ({
    index
}: {
    index: number
}) => {
    const skiers = [
        Skier1,
        Skier2,
        Skier3,
        Skier4,
        Skier5,
        Skier6,
        Skier7,
        Skier8,
        Skier9,
        Skier10
    ]
    return (
        <Box
            sx={{
                width: '2vw',
                height: '2vw',
            }}
        >
            <img
                src={skiers[index]}
                style={{
                    width: '2vw',
                    height: '2vw',
                }}
            />
        </Box>
    )
}
