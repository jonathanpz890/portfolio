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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const App = () => {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyB1s4AjlQmei6XXU5E_-MLAhAReP50CJls",
        authDomain: "test-43d00.firebaseapp.com",
        projectId: "test-43d00",
        storageBucket: "test-43d00.appspot.com",
        messagingSenderId: "976269096203",
        appId: "1:976269096203:web:55802c55fc591734db1e0e",
        measurementId: "G-TDWNJ1BT6Y"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    
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