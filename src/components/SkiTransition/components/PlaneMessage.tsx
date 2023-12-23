import { Box, Typography } from '@mui/material'
import React from 'react'
import Plane1 from '../../../assets/planes/0c58_6smv_230308.png'
import Plane2 from '../../../assets/planes/6sjh_4x55_220416.png'
import Plane3 from '../../../assets/planes/d37h_3jt9_230308.png'
import Plane4 from '../../../assets/planes/ft6b_mjm5_230308.png'
import Plane5 from '../../../assets/planes/pf8t_iyno_230308.png'
import Plane6 from '../../../assets/planes/ppgj_k1lf_220416.png'

export const PlaneMessage = ({
    y,
    rtl,
    message
}: {
    y: number;
    rtl?: boolean;
    message?: string;
}) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: `${y}vw`,
                zIndex: 5,
                transform: !rtl ? `scaleX(-1)` : '',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >
            <img
                src={Plane1}   
                alt={"plane"}
                style={{
                    position: 'relative',
                    width: '10vw',
                    left: '1vw'
                }}
            />
            <Box
                style={{
                    height: '0.1vw',
                    width: '2vw',
                    background: 'white'
                }}
            />
            <Box
                style={{
                    position: 'relative',
                    left: '0.4vw',
                    height: '2vw',
                    width: '2vw',
                    borderLeft: '0.1vw solid white',
                    borderTop: '0.1vw solid white',
                    transform: 'rotate(-45deg)'
                }}
            />
            <Box
                style={{
                    position: 'relative',
                    left: '-0.6vw',
                    height: '2.8vw',
                    minWidth: '5vw',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.7vw',
                    paddingRight: '2vw',
                    clipPath: 'polygon(0 0, 100% 0, calc(100% - 1.5vw) 50%, 100% 100%, 0 100%)',
                    borderBottom: '0.1vw grey solid',
                    whiteSpace: 'nowrap'
                }}
            >
                <span
                    style={{
                        fontSize: '2vw',
                        transform: !rtl ? 'scaleX(-1)' : ''
                    }}
                >
                    {message}
                </span>
            </Box>
        </Box>
    )
}
