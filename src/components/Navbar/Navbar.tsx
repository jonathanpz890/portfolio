import { Box, Button, Link, useMediaQuery } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
import { useStyle } from './Navbar.style';
import { FiGithub } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { TbBrandLinkedin } from "react-icons/tb";
import { useScroll, animated } from '@react-spring/web';
//@ts-ignore
import Resume from '../../assets/Resume.pdf'
import { LuCloudSun } from "react-icons/lu";
import { LuCloudMoon } from "react-icons/lu";
import { DarkModeContext } from '../../Context';


export const Navbar = ({
    refs
}: {
    refs: {
        aboutRef: React.MutableRefObject<HTMLElement | undefined>;
        experienceRef: React.MutableRefObject<HTMLElement | undefined>;
        projectsRef: React.MutableRefObject<HTMLElement | undefined>;
    }
}) => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const mobile = useMediaQuery('(max-width: 700px)')

    const [navbarOpacity] = useState(0)
    const [initiated, setInitiated] = useState(false)
    const [ratio, setRatio] = useState(0)
    const style = useStyle({
        darkMode,
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
                    backgroundColor: scrollYProgress.to(val => `rgba(${darkMode ? '12, 21, 27' : '255, 255, 255'}, ${val * ratio})`),
                    boxShadow: darkMode ? '' : scrollYProgress.to(val => `0 -5px ${(val * ratio * 20) > 20 ? 20 : val * ratio * 20}px #4a94d0`),
                    transition: 'background-color 1s',
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
                {!mobile && (
                    <Box sx={style.anchors}>
                        <Button
                            onClick={() => refs.aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
                        >About</Button>
                        <Button
                            onClick={() => refs.experienceRef.current?.scrollIntoView({ behavior: 'smooth' })}
                        >Experience</Button>
                        <Button
                            onClick={() => refs.projectsRef.current?.scrollIntoView({ behavior: 'smooth', })}
                        >Projects</Button>
                    </Box>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        width: mobile ? '100%' : 'unset',
                        justifyContent: mobile ? 'space-between' : ''
                    }}
                >
                    <Link
                        sx={style.iconAnchor}
                        href={Resume}
                        download='Jonathan-Perez-resume'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Button style={style.iconButton}>
                            <IoDocumentTextOutline size={mobile ? 20 : 30} />
                        </Button>
                    </Link>
                    <Link
                        sx={style.iconAnchor}
                        href='https://www.linkedin.com/in/jonathanpz'
                        target='_blank'
                    >
                        <Button style={style.iconButton}>
                            <TbBrandLinkedin size={mobile ? 20 : 30} />
                        </Button>
                    </Link>
                    <Link
                        sx={style.iconAnchor}
                        href='https://www.github.com/jonathanpz890'
                        target='_blank'
                    >
                        <Button style={style.iconButton}>
                            <FiGithub size={mobile ? 20 : 30} />
                        </Button>
                    </Link>
                    <Link
                        sx={style.iconAnchor}
                        href='tel:+972508755548'
                    >
                        <Button style={style.iconButton}>
                            <LuPhoneCall size={mobile ? 20 : 30} />
                        </Button>
                    </Link>
                    <Button
                        style={style.iconButton}
                        onClick={() => {
                            setDarkMode(value => {
                                localStorage.setItem('darkMode', `${!value}`)
                                return !value
                            })
                        }}
                    >
                        {darkMode ? (
                            <LuCloudSun size={mobile ? 20 : 30} />
                        ) : (
                            <LuCloudMoon size={mobile ? 20 : 30} />
                        )}
                    </Button>
                </Box>
            </Box>
        </Box >
    )
}
