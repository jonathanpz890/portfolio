import { Box, Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
import { useStyle } from './Navbar.style';
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { motion, useElementScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { TbBrandLinkedin } from "react-icons/tb";
import { useScroll, animated } from '@react-spring/web';
//@ts-ignore
import Resume from '../../assets/Resume.pdf'

export const Navbar = ({
    refs
}: {
    refs: {
        aboutRef: React.MutableRefObject<HTMLElement | undefined>;
        experienceRef: React.MutableRefObject<HTMLElement | undefined>;
        projectsRef: React.MutableRefObject<HTMLElement | undefined>;
    }
}) => {
    const [navbarOpacity, setNavbarOpacity] = useState(0)
    const [initiated, setInitiated] = useState(false)
    const [ratio, setRatio] = useState(0)
    const style = useStyle({
        navbarOpacity,
        initiated
    })
    const { scrollYProgress } = useScroll()

    // useMotionValueEvent(scrollY, 'change', (latest) => {
    //     setNavbarOpacity(latest / window.innerHeight);
    // })

    useEffect(() => {
        setTimeout(() => {
            setInitiated(true)
        }, 3500)
        setRatio(document.body.scrollHeight / window.innerHeight)
    }, [])

    return (
        <Box sx={style.navbar}>
            <animated.div
                style={{
                    backgroundColor: scrollYProgress.to(val => `rgba(255, 255, 255, ${val * ratio})`),
                    boxShadow: scrollYProgress.to(val => `0 -5px ${(val * ratio * 20) > 20 ? 20 : val * ratio * 20}px #4a94d0`),
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    zIndex: -1,

                }}
            />
            <Box
                width='100%'
                maxWidth='1600px'
                margin='0 auto'
                display='flex'
                justifyContent='space-between'
            >
                <Box sx={style.anchors}>
                    <Button
                        style={{ color: 'black' }}
                        onClick={() => refs.aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
                    >About</Button>
                    <Button
                        style={{ color: 'black' }}
                        onClick={() => refs.experienceRef.current?.scrollIntoView({ behavior: 'smooth' })}
                    >Experience</Button>
                    <Button
                        style={{ color: 'black' }}
                        onClick={() => refs.projectsRef.current?.scrollIntoView({ behavior: 'smooth', })}
                    >Projects</Button>
                </Box>
                <Box>
                    <a
                        href={Resume}
                        download='Jonathan-Perez-resume'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Button style={{ color: 'black' }}>
                            <IoDocumentTextOutline size={30} />
                        </Button>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/jonathanpz'
                        target='_blank'
                    >
                        <Button style={{ color: 'black' }}>
                            <TbBrandLinkedin size={30} />
                        </Button>
                    </a>
                    <a
                        href='https://www.github.com/jonathanpz890'
                        target='_blank'
                    >
                        <Button style={{ color: 'black' }}>
                            <FiGithub size={30} />
                        </Button>
                    </a>
                    <a
                        href='tel:+972508755548'
                    >
                        <Button style={{ color: 'black' }}>
                            <LuPhoneCall size={30} />
                        </Button>
                    </a>
                </Box>
            </Box>
        </Box>
    )
}
