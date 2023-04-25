import { Box, Typography } from '@mui/material';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { IntroProps, useStyles } from '.';
import { Typer } from '../Typer';
import Background from '../../assets/background.jpg'
import RunningCode from '../../assets/Running-code.mov'
import { Mac } from 'react-device-display';
import ReactPlayer from 'react-player';
import { vwToPx } from '../../utils/vwToPx';

export const Intro = ({
    deformIntro
}: IntroProps) => {
    const [initiated, setInitiated] = useState(false)
    const [introTextWidth, setIntroTextWidth] = useState(100)
    const [macWidth, setMacWidth] = useState(0)
    const [macOpen, setMacOpen] = useState(false)

    const style = useStyles({ 
        introTextWidth,
        Background,
        initiated,
        deformIntro
    })
    
    const initiate = () => {
        setIntroTextWidth(0);
        setInitiated(true);
        setTimeout(() => {
            setMacOpen(true);
        }, 200)
    }

    useEffect(() => {
        if (deformIntro) {
        }
    }, [deformIntro])
    useEffect(() => {
        setTimeout(() => {
            initiate();
        }, 3500)   

    })

    return (
        <Box>
            <Box sx={style.intro}>
                <Box sx={style.introBackground} />
                <Box sx={style.introContent}>
                    <Box sx={style.introTitle}>
                        <Typography 
                            variant='h2' 
                            sx={style.introTitleText}
                            fontSize={80}
                            >
                            <Typer value={'Jonathan Perez'} />
                        </Typography>
                        <Typography 
                            variant='h2' 
                            sx={style.introTitleText}
                            fontSize={60}
                        >
                            <Typer value={'Web Developer'} delay={1500} />
                        </Typography>
                    </Box>
                    <Box 
                        sx={style.introMac}
                    >
                        <Mac
                            width={vwToPx(40)}
                            animateOpen
                            open={macOpen}
                            startup
                            openAngle={deformIntro ? 90 : 0}
                        >
                            <ReactPlayer 
                                url={RunningCode} 
                                width='100%' 
                                height='100%' 
                                playing={true}
                                volume={0}
                                muted
                                loop
                            />
                        </Mac>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
