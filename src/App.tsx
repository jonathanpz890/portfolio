import React, { useRef, useState } from 'react';
import 'swiper/css';
import './App.css';
import { Intro } from './components';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects';
import { Box } from '@mui/material';

const App = () => {
    const [deformIntro, setDeformIntro] = useState(false)
    const [experienceAnimate, setExperienceAnimate] = useState(false)

    const aboutRef = useRef<HTMLElement>();
    const experienceRef = useRef<HTMLElement>();
    const projectsRef = useRef<HTMLElement>();

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
                style={{
                    // scrollMarginTop: 50
                }}
                ref={aboutRef}
            >
                <About />
            </Box>
            <Box
                ref={experienceRef}
            >
                <Experience />
            </Box>
            <Box
                style={{
                    scrollMarginTop: 75
                }}
                ref={projectsRef}
            >
                <Projects />
            </Box>
        </>
    );
}

export default App;