import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import './App.css';
import { Intro } from './components';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects';
import { Box } from '@mui/material';
import { Footer } from './components/Footer/Footer';

const App = () => {
    const [deformIntro, setDeformIntro] = useState(false)
    const [experienceAnimate, setExperienceAnimate] = useState(false)

    const aboutRef = useRef<HTMLElement>();
    const experienceRef = useRef<HTMLElement>();
    const projectsRef = useRef<HTMLElement>();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
    }, [])
    return (
        <>
            <Navbar
                refs={{
                    aboutRef,
                    experienceRef,
                    projectsRef
                }}
            />
            <Intro deformIntro={deformIntro} />
            <Box
                sx={{
                    // scrollMarginTop: 50
                }}
                ref={aboutRef}
            >
                <About />
            </Box>
            <Box
                sx={{
                    scrollMarginTop: '8vh'
                }}
                ref={experienceRef}
            >
                <Experience />
            </Box>
            <Box
                sx={{
                    scrollMarginTop: '9vh'
                }}
                ref={projectsRef}
            >
                <Projects />
            </Box>
            <Footer refs={{
                aboutRef,
                experienceRef,
                projectsRef
            }} />
        </>
    );
}

export default App;