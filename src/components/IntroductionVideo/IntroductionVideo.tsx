import { Box, Typography } from '@mui/material'
import React from 'react'
import { Typer } from '../Typer'
import { useStyle } from './IntroductionVide.style'
// import { ContinuousTyper } from '../ContinuousTyper'
import { motion } from 'framer-motion'

export const IntroductionVideo = () => {
    const style = useStyle()

    return (
        <Box sx={style.container}>
            {/* <ContinuousTyper values={[
                "Hey!, I'm Jonathan", 
                "I'm a web developer!",
                "I possess extensive experience and proficiency in a diverse array of cutting-edge development technologies, including:",
                "React",
                "Node.js",
                "HTML & CSS",
                "JavaScript & Typescript",
                "MongoDB",
                "SQL",
                "And more!",
                "I am passionate about creating remarkable UIs, captivating animations, and delivering visually stunning web designs that leave a lasting impression",
                "I have a solid foundation based on a few years of valuable work experience",
                "I have a strong inclination towards problem-solving and possess exceptional self-learning skills, allowing me to continuously adapt, grow, and overcome challenges in the ever-evolving field of web development",
                "By the way",
                "This has all been code :)"
            ]} /> */}
            {/* <motion.h2
                initial={{
                    scale: 0,
                    rotate: 180
                }}
                animate={{

                }}
            >
                Hello
            </motion.h2> */}
        </Box>
    )
}
