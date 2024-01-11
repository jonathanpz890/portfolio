import { Box, Button, Typography } from '@mui/material';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { Mac } from 'react-electronix';
import ReactPlayer from 'react-player';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { IntroProps, useStyles } from '.';
import { DarkModeContext } from '../../Context';
import RunningCode from '../../assets/Running-code.mov';
import Background from '../../assets/background.jpg';
import { vwToPx } from '../../utils/vwToPx';
import { Typer } from '../Typer';
import { Mouse } from './components';



export const Intro = ({
    deformIntro
}: IntroProps) => {
    const { darkMode } = useContext(DarkModeContext)
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
    const [initiated, setInitiated] = useState<boolean>(false)
    const [introTextWidth, setIntroTextWidth] = useState<number>(100)
    const [macOpen, setMacOpen] = useState<boolean>(false)
    const [scrollHeight, setScrollHeight] = useState(0)
    const [windowResized] = useState(false)

    const style = useStyles({
        darkMode,
        introTextWidth,
        Background,
        initiated,
        deformIntro
    })
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setScrollHeight(latest)
    })

    const initiate = () => {
        setIntroTextWidth(0);
        setInitiated(true);
        setTimeout(() => {
            setMacOpen(true);
            document.body.style.overflow = 'auto'
        }, 200)
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth)
            // setWindowResized(true)
        })
    }, [])
    useEffect(() => {
        setTimeout(() => {
            initiate();
        }, 3500)
    })

    return (
        <motion.div
            style={{
                filter: `blur(${scrollHeight * 20}px)`,
                position: 'sticky',
                top: 0,
                zIndex: -1,
            }}
        >
            <Box sx={style.intro}>
                <Box sx={style.introBackground} />
                <Box sx={style.introContent}>
                    <motion.div
                        style={{
                            height: '100%',
                            scale: 1 + (-scrollHeight / 2),
                            transformOrigin: 'center top'
                        }}
                    >
                        <Box sx={style.introTitle}>
                            <Typography
                                variant='h2'
                                sx={style.introTitleText}
                                fontSize={80}
                                position={'relative'}
                            >
                                <Typer value={'Jonathan Perez'} />
                            </Typography>
                            <Typography
                                variant='h2'
                                sx={style.introTitleText}
                            >
                                <Typer value={'Web Developer'} delay={1500} />
                            </Typography>
                        </Box>
                        <Box
                            sx={style.introMac}
                        >
                            <Mac
                                width={vwToPx(100, screenWidth) < 600 ? vwToPx(75, screenWidth) : vwToPx(50, screenWidth) > 600 ? 600 : vwToPx(50, screenWidth)}
                                animateOpen
                                open={macOpen}
                                startup
                                openAngle={deformIntro ? 90 : scrollHeight * 700}
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
                    </motion.div>
                </Box>
                <Mouse initiated={initiated} />
            </Box>

            <Modal
                isOpen={windowResized}
            >
                <ModalHeader>
                    Window Adjustment
                </ModalHeader>
                <ModalBody>
                    The dimensions of the window appear to have been adjusted. <br />
                    To ensure optimal functionality, reloading the page is required.
                </ModalBody>
                <ModalFooter
                    style={{
                        background: 'rgb(215, 215, 215)'
                    }}
                >
                    <Button
                        variant='contained'
                        onClick={() => window.location.reload()}
                    >
                        Reload
                    </Button>
                </ModalFooter>
            </Modal>
        </motion.div>
    )
}
