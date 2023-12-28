import { Box, Typography } from '@mui/material';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { IntroProps, useStyles } from '.';
import { Typer } from '../Typer';
import Background from '../../assets/background.jpg'
import RunningCode from '../../assets/Running-code.mov'
import { Mac } from 'react-electronix';
import ReactPlayer from 'react-player';
import { vwToPx } from '../../utils/vwToPx';
import { Mouse } from './components';
import { motion, useMotionValueEvent, useScroll, useTransform, useViewportScroll } from 'framer-motion';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Button } from '@mui/material';



export const Intro = ({
    deformIntro
}: IntroProps) => {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
    const [initiated, setInitiated] = useState<boolean>(false)
    const [introTextWidth, setIntroTextWidth] = useState<number>(100)
    const [macWidth, setMacWidth] = useState<number>(0)
    const [macOpen, setMacOpen] = useState<boolean>(false)
    const [scrollHeight, setScrollHeight] = useState(0)
    const [windowResized, setWindowResized] = useState(false)

    const style = useStyles({
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
        if (deformIntro) {
        }
    }, [deformIntro])
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
                                {/* <motion.div
                                    style={{
                                        position: 'absolute',
                                        top: '120px',
                                        left: '300px',
                                        transformOrigin: '50% 50%',
                                        zIndex: 10,
                                    }}
                                    initial={{
                                        rotate: 10,
                                        scale: 100,
                                        opacity: 0
                                    }}
                                    animate={{ 
                                        transition: {
                                            delay: 5,
                                            duration: 0.2,
                                            ease: 'linear'
                                        },
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                >
                                    <span
                                        style={{
                                            border: '0.5rem solid',
                                            borderLeft: 0,
                                            borderRight: 0,
                                            WebkitMaskImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png)',
                                            WebkitMaskSize: '944px 604px',
                                            color: '#b32431',
                                            lineHeight: 1
                                        }}
                                    >2.0</span>
                                </motion.div> */}
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
                                // width={vwToPx(45, screenWidth)}
                                width={600}
                                animateOpen
                                open={macOpen}
                                startup
                                openAngle={deformIntro ? 90 : scrollHeight * 300}
                                //@ts-ignore
                                perspective={120}
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
