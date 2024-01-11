import { Box } from '@mui/material'
import { animated, useScroll } from '@react-spring/web'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { DarkModeContext } from '../../Context'
import { useScrollDirection } from '../../utils/useDetectScrollDirection'
import { useStyle } from './SkiTransition.style'
import { Hill } from './components/Hill'
import { Mountain } from './components/Mountain'
import { PlaneMessage } from './components/PlaneMessage'
import { Skater } from './components/Skater'
import { Skier } from './components/Skier'
import { Slope } from './components/Slope'
import { Tree } from './components/Tree'

export const SkiTransition = () => {
    const { darkMode } = useContext(DarkModeContext)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [screenScroll, setScreenScroll] = useState(window.innerWidth)
    const [offsetTop, setOffsetTop] = useState(0)
    const [planeMessages] = useState([
        'ANIMATIONS!',
        'MORE ANIMATIONS!',
        'THIS IS MOSTLY CODE!',
        'SCROLL ANIMATIONS ARE MY SPECIALTY',
        'I MISSED A SNOWBOARDING TRIP :(',
        'YOU SHOULD TRY DARK MODE',
        'FIND ALL THE EASTER EGGS TO WIN A PRIZE!!'
    ])

    const scrollDirection = useScrollDirection()
    const style = useStyle({
        screenWidth,
        darkMode
    })
    const skiTransitionRef = useRef<HTMLElement | null>(null)
    const { scrollYProgress } = useScroll({
        config: {
            tension: 0
        }
    })

    useEffect(() => {
        window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
    }, [])
    useEffect(() => {
        const sky = skiTransitionRef?.current?.getBoundingClientRect();
        if (!sky) { return }
        setOffsetTop((sky.top + window.scrollY) - window.innerHeight)
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        setScreenScroll(height)
    }, [])
    return (
        <Box sx={style.skiTransition} ref={skiTransitionRef}>
            <animated.div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    left: scrollYProgress.to(val => {
                        const y = offsetTop - (val * (screenScroll - window.innerHeight))
                        const vwRatio = (window.innerHeight + 50) / 100
                        return `${y / vwRatio > 0 ? 0 : y / vwRatio < -100 ? -100 : y / vwRatio}vw`
                    }),
                }}
            >
                <Box sx={style.sky} />
            </animated.div>
            <Box sx={style.mountains}>
                {/* Hills slopes and trees */}
                <Slope
                    height={3}
                    position={0}
                    screenWidth={screenWidth}
                    width={7.5}
                    shadowShape={'0% 0%, 0 100%, 50% 100%'}
                />
                {!darkMode && (
                    <animated.div
                        style={{
                            position: 'absolute',
                            width: '2vw',
                            height: '2vw',
                            transform: `rotate(13deg) ${scrollDirection === 'up' ? 'scaleX(-1)' : ''}`,
                            left: scrollYProgress.to(val => {
                                const y = -offsetTop + (val * (screenScroll - window.innerHeight))
                                const vwRatio = (window.innerHeight + 50) / 20
                                const finalRatio = y / vwRatio + 10;
                                return `${finalRatio < 10 ? 10 : finalRatio > 50 ? 50 : finalRatio}vw`
                            }),
                            bottom: scrollYProgress.to(val => {
                                const y = offsetTop - (val * (screenScroll - window.innerHeight))
                                const vwRatio = (window.innerHeight + 50) / 5
                                const finalRatio = y / vwRatio + 6.5;
                                return `${finalRatio < 0 ? 0 : finalRatio > 6 ? 6 : finalRatio}vw`
                            }),
                            zIndex: 2
                        }}
                    >
                        <Skier index={2} />
                    </animated.div>
                )}
                <Slope
                    rtl
                    height={3}
                    position={0}
                    screenWidth={screenWidth}
                    width={3.5}
                    shadowShape={'0% 0%, 0 100%, 50% 100%'}
                />
                {!darkMode && (
                    <animated.div
                        style={{
                            position: 'absolute',
                            width: '2vw',
                            height: '2vw',
                            transform: scrollDirection === 'up' ? (
                                'rotate(-8deg)'
                            ) : (
                                `rotate(-48deg) scaleX(-1)`
                            ),
                            left: scrollYProgress.to(val => {
                                const y = offsetTop - (val * (screenScroll - window.innerHeight))
                                const vwRatio = (window.innerHeight + 50) / 7
                                const finalRatio = y / vwRatio + 98
                                return `${finalRatio < 10 ? 10 : finalRatio > 98 ? 98 : finalRatio}vw`
                            }),
                            bottom: scrollYProgress.to(val => {
                                const y = offsetTop - (val * (screenScroll - window.innerHeight))
                                const vwRatio = (window.innerHeight + 50) / 3.675
                                const finalRatio = y / vwRatio + 8.5;
                                return `${finalRatio < 0 ? 0 : finalRatio > 8.5 ? 8.5 : finalRatio}vw`
                            }),
                            zIndex: 2
                        }}
                    >
                        <Skier index={4} />
                    </animated.div>
                )}
                <Hill
                    position={85}
                    width={1.5}
                    height={1.5}
                    screenWidth={screenWidth}
                    shadowShape={'50% 50% at 900% 50%'}
                />
                <Hill
                    position={70}
                    width={2.5}
                    height={2.2}
                    screenWidth={screenWidth}
                    shadowShape={'50% 70% at 70% 35%'}
                />
                {!darkMode && (
                    <animated.div
                        style={{
                            position: 'absolute',
                            width: '2vw',
                            height: '2vw',
                            transform: scrollDirection === 'up' ? (
                                'rotate(-50deg) scaleX(-1)'
                            ) : (
                                'rotate(-20deg)'
                            ),
                            left: scrollYProgress.to(val => {
                                const y = offsetTop - (val * (screenScroll - window.innerHeight))
                                const vwRatio = (window.innerHeight + 50) / 10
                                const finalRatio = y / vwRatio + 70;
                                return `${finalRatio < 40 ? 40 : finalRatio > 70 ? 70 : finalRatio}vw`
                            }),
                            bottom: scrollYProgress.to(val => {
                                const y = offsetTop - (val * (screenScroll - window.innerHeight))
                                const vwRatio = (window.innerHeight + 50) / 5
                                const finalRatio = y / vwRatio + 7;
                                return `${finalRatio < 0 ? 0 : finalRatio > 7 ? 7 : finalRatio}vw`
                            }),
                            zIndex: 2
                        }}
                    >
                        <Skier index={1} />
                    </animated.div>
                )}
                {/* Trees! */}
                <Tree x={-3} y={-1} size={5} />
                <Tree x={0} y={-1} size={3} />
                <Tree x={1} y={-1} size={4} />
                <Tree x={3.5} y={-1} size={3} />
                <Tree x={2.5} y={-1} size={3} />
                <Tree x={5} y={-1} size={3} />
                <Tree x={6} y={-1} size={4} />
                <Tree x={7.5} y={-1} size={3} />
                <Tree x={8.5} y={-1} size={5} />
                <Tree x={11} y={-1} size={3} />
                <Tree x={12.5} y={-1} size={4} />
                <Tree x={14.5} y={-1} size={5} />
                <Tree x={17} y={-1} size={3} />
                <Tree x={18} y={-1} size={5} />
                <Tree x={19.5} y={-1} size={4} />
                <Tree x={20.5} y={-1} size={5} />
                <Tree x={22} y={-1} size={2} />

                <Tree x={37} y={6} size={2} />
                <Tree x={38} y={6} size={3} />
                <Tree x={40} y={6.5} size={4} />
                <Tree x={42} y={6.5} size={3} />
                <Tree x={43} y={6.5} size={4} />
                <Tree x={45.35} y={6.75} size={2} />
                <Tree x={46} y={7} size={2} />
                <Tree x={46.5} y={7} size={3} />
                <Tree x={48} y={6.5} size={2} />
                <Tree x={49} y={6.25} size={3} />
                <Tree x={50} y={6} size={4} />
                <Tree x={52.5} y={6} size={2} />
                <Tree x={53} y={4.75} size={3} />
                <Tree x={54} y={5.5} size={3} />
                <Tree x={56} y={5} size={2} />
                <Tree x={57} y={4.5} size={3} />
                <Tree x={58.5} y={4} size={2} />
                <Tree x={59.5} y={2.5} size={4} />
                <Tree x={61} y={2} size={3} />
                <Tree x={62} y={1} size={4} />
                <Tree x={63.5} y={-0.5} size={4} />
                <Tree x={62.75} y={0} size={3} />

                <Tree x={82.5} y={1.5} size={3} />
                <Tree x={83.5} y={1.6} size={3.5} />
                <Tree x={85} y={1.7} size={2.5} />
                <Tree x={86.5} y={1.7} size={2} />
                <Tree x={87} y={1.8} size={3.5} />
                <Tree x={89} y={1.9} size={3} />
                <Tree x={90.5} y={2} size={2} />
                <Tree x={91} y={2} size={3.5} />
                <Tree x={92} y={2.1} size={4} />
                <Tree x={93.5} y={2.2} size={2.5} />
                <Tree x={94} y={2.3} size={2} />
                <Tree x={94.5} y={2.4} size={3} />
                <Tree x={96} y={2.5} size={2} />
                <Tree x={97} y={2.6} size={3} />
                <Tree x={98} y={2.7} size={3.5} />
                {/* </Trees! */}
                <Slope
                    rtl
                    height={1.2}
                    position={0}
                    screenWidth={screenWidth}
                    width={7}
                />
                <Hill
                    position={45}
                    width={4.5}
                    height={2}
                    screenWidth={screenWidth}
                    shadowShape={'70% 70% at 70% 35%'}
                />
                {!darkMode && (
                    <>
                        <animated.div
                            style={{
                                position: 'absolute',
                                width: '2vw',
                                height: '2vw',
                                transform: `rotate(20deg) ${scrollDirection === 'up' ? '' : 'scaleX(-1)'}`,
                                left: scrollYProgress.to(val => {
                                    const y = -offsetTop + (val * (screenScroll - window.innerHeight))
                                    const vwRatio = (window.innerHeight + 50) / 5
                                    const finalRatio = y / vwRatio + 45;
                                    return `${finalRatio < 45 ? 45 : finalRatio > 60 ? 60 : finalRatio}vw`
                                }),
                                bottom: scrollYProgress.to(val => {
                                    const y = offsetTop - (val * (screenScroll - window.innerHeight))
                                    const vwRatio = (window.innerHeight + 50) / 2
                                    const finalRatio = y / vwRatio + 7;
                                    return `${finalRatio < 0 ? 0 : finalRatio > 7 ? 7 : finalRatio}vw`
                                }),
                                zIndex: 5
                            }}
                        >
                            <Skier index={0} />
                        </animated.div>
                        <animated.div
                            style={{
                                position: 'absolute',
                                width: '2vw',
                                height: '2vw',
                                transform: scrollDirection === 'up' ? (
                                    'rotate(-20deg)'
                                ) : (
                                    'rotate(-40deg) scaleX(-1)'
                                ),
                                left: scrollYProgress.to(val => {
                                    const y = offsetTop - (val * (screenScroll - window.innerHeight))
                                    const vwRatio = (window.innerHeight + 50) / 6
                                    const finalRatio = y / vwRatio + 35;
                                    return `${finalRatio < 10 ? 10 : finalRatio > 40 ? 40 : finalRatio}vw`
                                }),
                                bottom: scrollYProgress.to(val => {
                                    const y = offsetTop - (val * (screenScroll - window.innerHeight))
                                    const vwRatio = (window.innerHeight + 50) / 3
                                    const finalRatio = y / vwRatio + 5;
                                    return `${finalRatio < 0 ? 0 : finalRatio > 5 ? 5 : finalRatio}vw`
                                }),
                                zIndex: 5
                            }}
                        >
                            <Skier index={5} />
                        </animated.div>
                    </>
                )}

                {/* Mountains - from foreground to front */}
                <Mountain
                    position={15}
                    scale={8}
                    screenWidth={screenWidth}
                    foreground
                />
                <Mountain
                    position={32.5}
                    scale={5}
                    screenWidth={screenWidth}
                    foreground
                />
                <Mountain
                    position={67}
                    scale={6}
                    screenWidth={screenWidth}
                    foreground
                />
                <Mountain
                    position={83}
                    scale={5}
                    screenWidth={screenWidth}
                    foreground
                />
                <Mountain
                    position={90}
                    scale={6.5}
                    screenWidth={screenWidth}
                    halfForeground
                />
                <Mountain
                    position={25}
                    scale={6}
                    screenWidth={screenWidth}
                    topSnowShape='50% 0, 35% 100%, 42% 75%, 42.5% 90%, 47% 65%, 48% 100%, 51% 70%, 57% 100%, 56% 60% , 65% 100%'
                    shadowShape='0 0, 50% 0, 38% 50%, 52% 45%  , 50% 100%, 0 100%'
                />
                <Mountain
                    position={75}
                    scale={8}
                    screenWidth={screenWidth}
                    topSnowShape='50% 0, 35% 100%, 42% 75%, 42.5% 90%, 47% 65%, 48% 100%, 51% 70%, 57% 100%, 56% 60% , 65% 100%'
                    shadowShape='0 0, 50% 0, 38% 50%, 52% 45%  , 50% 100%, 0 100%'
                />
                <Mountain
                    position={50}
                    scale={11}
                    screenWidth={screenWidth}
                    topSnowShape='50% 0, 35% 100%, 42% 75%, 42.5% 90%, 47% 65%, 48% 100%, 51% 70%, 57% 100%, 56% 60% , 65% 100%'
                    shadowShape='0 0, 50% 0, 38% 50%, 52% 45%  , 50% 100%, 0 100%'
                />
                <animated.div
                    style={{
                        position: 'absolute',
                        //-20 - 50
                        // left: '-20vw',
                        left: scrollYProgress.to(val => {
                            const y = -offsetTop + (val * (screenScroll - window.innerHeight))
                            const vwRatio = (window.innerHeight + 50) / 30
                            return `${y / vwRatio < -20 ? -20 : y / vwRatio > 70 ? 70 : y / vwRatio}vw`
                        })
                    }}

                >
                    {!darkMode && (
                        <PlaneMessage
                            rtl={scrollDirection === 'up'}
                            message={planeMessages[Math.floor(Math.random() * planeMessages.length)]}
                            y={17}
                        />
                    )}
                </animated.div>
                {!darkMode && (
                    <>
                        <animated.div
                            style={{
                                position: 'absolute',
                                width: '1.5vw',
                                height: '3vw',
                                transform: scrollDirection === 'up' ? 'scaleX(-1)' : '',
                                left: scrollYProgress.to(val => {
                                    const y = -offsetTop + (val * (screenScroll - window.innerHeight))
                                    const vwRatio = (window.innerHeight + 50) / 5
                                    const finalRatio = y / vwRatio + 80;
                                    return `${finalRatio < 80 ? 80 : finalRatio > 100 ? 100 : finalRatio}vw`
                                }),
                                bottom: '-2vw',
                                zIndex: 5
                            }}
                        >
                            <Skater index={0} />
                        </animated.div>
                        <animated.div
                            style={{
                                position: 'absolute',
                                width: '1.5vw',
                                height: '3vw',
                                transform: scrollDirection === 'up' ? '' : 'scaleX(-1)',
                                left: scrollYProgress.to(val => {
                                    const y = offsetTop - (val * (screenScroll - window.innerHeight))
                                    const vwRatio = (window.innerHeight + 50) / 2
                                    const finalRatio = y / vwRatio + 80;
                                    return `${finalRatio > 80 ? 80 : finalRatio < 60 ? 60 : finalRatio}vw`
                                }),
                                bottom: '-2vw',
                                zIndex: 5
                            }}
                        >
                            <Skater index={1} />
                        </animated.div>
                        <animated.div
                            style={{
                                position: 'absolute',
                                width: '1.5vw',
                                height: '3vw',
                                transform: scrollDirection === 'up' ? '' : 'scaleX(-1)',
                                left: scrollYProgress.to(val => {
                                    const y = offsetTop - (val * (screenScroll - window.innerHeight))
                                    const vwRatio = (window.innerHeight + 50) / 3
                                    const finalRatio = y / vwRatio + 90;
                                    return `${finalRatio > 90 ? 90 : finalRatio < 60 ? 60 : finalRatio}vw`
                                }),
                                bottom: '-3vw',
                                zIndex: 5
                            }}
                        >
                            <Skater index={2} />
                        </animated.div>
                        <animated.div
                            style={{
                                position: 'absolute',
                                width: '1.5vw',
                                height: '3vw',
                                transform: scrollDirection === 'up' ? '' : 'scaleX(-1)',
                                left: scrollYProgress.to(val => {
                                    const y = offsetTop - (val * (screenScroll - window.innerHeight))
                                    const vwRatio = (window.innerHeight + 50) / 2
                                    const finalRatio = y / vwRatio + 80.5;
                                    return `${finalRatio > 80.5 ? 80.5 : finalRatio < 60 ? 60 : finalRatio}vw`
                                }),
                                bottom: '-2.5vw',
                                zIndex: 5
                            }}
                        >
                            <Skater index={3} />
                        </animated.div>
                        <animated.div
                            style={{
                                position: 'absolute',
                                width: '1.5vw',
                                height: '3vw',
                                transform: scrollDirection === 'up' ? 'scaleX(-1)' : '',
                                left: scrollYProgress.to(val => {
                                    const y = -offsetTop + (val * (screenScroll - window.innerHeight))
                                    const vwRatio = (window.innerHeight + 50) / 2
                                    const finalRatio = y / vwRatio + 40;
                                    return `${finalRatio < 40 ? 40 : finalRatio > 60 ? 60 : finalRatio}vw`
                                }),
                                bottom: '-1.75vw',
                                zIndex: 5
                            }}
                        >
                            <Skater index={2} />
                        </animated.div>
                    </>
                )}
            </Box>
            <Box sx={style.groundSnow}>
                <Box sx={style.ice} />
            </Box>
        </Box>
    )
}
