import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import './App.css';
import { Intro } from './components';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects';
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { DarkModeContext } from './Context';

const App = () => {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAGKH5wvKbYK2Y9zMMntWipSezcRs-3hrM",
        authDomain: "portfolio-jpz.firebaseapp.com",
        projectId: "portfolio-jpz",
        storageBucket: "portfolio-jpz.appspot.com",
        messagingSenderId: "191328582977",
        appId: "1:191328582977:web:9d6419bcf0d6cdc3a7f5c0",
        measurementId: "G-47TJEM92NT"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);

    const [darkMode, setDarkMode] = useState(false);
    const [deformIntro] = useState(false)

    const aboutRef = useRef<HTMLElement>();
    const experienceRef = useRef<HTMLElement>();
    const projectsRef = useRef<HTMLElement>();

    useEffect(() => {
        //TODO: bring back
        // window.scrollTo({
        //     top: 0,
        //     left: 0,
        // })
    }, [])
    useEffect(() => {
        setDarkMode(localStorage.darkMode === 'true' ? true : false)
    }, [])
    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            <Navbar
                refs={{
                    aboutRef,
                    experienceRef,
                    projectsRef
                }}
            />
            <Intro
                deformIntro={deformIntro}
            />
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
            <Footer
                refs={{
                    aboutRef,
                    experienceRef,
                    projectsRef
                }}
            />
        </DarkModeContext.Provider>
    );
}

export default App;