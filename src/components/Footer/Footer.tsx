import { Box, Button, IconButton, Typography, useMediaQuery } from '@mui/material'
import React, { useContext } from 'react'
import { useStyle } from './Footer.style'
import background from '../../assets/background.jpg';
import { useScroll, animated } from '@react-spring/web';
import { Mac } from 'react-electronix';
import { vwToPx } from '../../utils/vwToPx';
import { SocialButton } from './components/SocialButton';
import { LocalPhone } from '@mui/icons-material';
import { TbBrandGithubFilled } from "react-icons/tb";
import { TfiLinkedin } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { DarkModeContext } from '../../Context';


export const Footer = ({
    refs,
}: {
    refs: {
        aboutRef: React.MutableRefObject<HTMLElement | undefined>;
        experienceRef: React.MutableRefObject<HTMLElement | undefined>;
        projectsRef: React.MutableRefObject<HTMLElement | undefined>;
    }
}) => {
    const mobile = useMediaQuery('(max-width:  900px)')
    const { darkMode } = useContext(DarkModeContext)
    const style = useStyle({
        background,
        darkMode,
        mobile
    })
    const { scrollYProgress, scrollY } = useScroll();

    return (
        <animated.div
            style={{
                ...style.footer,
                position: 'sticky',
                flexDirection: 'column-reverse',
                opacity: scrollY.to(val => {
                    const equation = -(window.innerHeight * 3) + val
                    return (equation > 1 ? 1 : equation < 0 ? 0 : equation)
                })
            }}
        >
            <Box
                sx={style.itemContainer}
            >
                <Box
                    sx={style.leftBox}
                >

                </Box>
                <Box
                    sx={style.middleBox}
                >
                    <Typography
                        variant='h3'
                        textAlign={'center'}
                        fontWeight='500'
                        color={darkMode ? '#eeeeee' : ''}
                    >Jonathan<br />Perez</Typography>
                    <Box
                        display='flex'
                        alignItems='center'
                    >
                        <Button
                            style={style.anchorButton}
                            onClick={() => refs.aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            ABOUT
                        </Button>
                        •
                        <Button
                            style={style.anchorButton}
                            onClick={() => refs.experienceRef.current?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            EXPERIENCE
                        </Button>
                        •
                        <Button
                            style={style.anchorButton}
                            onClick={() => refs.projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            PROJECTS
                        </Button>
                    </Box>
                </Box>
                <Box
                    sx={style.rightBox}
                >
                    <SocialButton
                        text='Phone'
                        icon={<LocalPhone />}
                        color='green'
                        action={'tel:+972508755548'}
                    />
                    <SocialButton
                        text='Email'
                        icon={<MdEmail size={20} />}
                        color='#bd001d'
                        action={'mailto:jonathanpz890@gmail.com'}
                    />
                    <SocialButton
                        text='GitHub'
                        icon={<TbBrandGithubFilled size={25} />}
                        color='#000000'
                        action={'https://github.com/jonathanpz890'}
                    />
                    <SocialButton
                        text='LinkedIn'
                        icon={<TfiLinkedin />}
                        color='#0077B5'
                        action={'https://www.linkedin.com/in/jonathanpz'}
                    />
                    <SocialButton
                        text='Instagram'
                        icon={<FaInstagram />}
                        color='#C13584'
                        action={'https://www.instagram.com/jonathanpz890'}
                    />
                    <SocialButton
                        text='Facebook'
                        icon={<FaFacebookF />}
                        color='#316FF6'
                        action={'https://www.facebook.com/yehonatanpz/'}
                    />
                </Box>
            </Box>
            <Typography 
                variant='body1'
                sx={{
                    width: '100%',
                    textAlign: 'center',
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >© {new Date().getFullYear()} Jonathan Perez. All Rights Reserved.</Typography>
        </animated.div>
    )
}
