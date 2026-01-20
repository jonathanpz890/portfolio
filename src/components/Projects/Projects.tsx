import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { DarkModeContext } from '../../Context'
import BangoIcon from '../../assets/icons/bango.png'
import ReactElectronixIcon from '../../assets/icons/react-electronix.png'
import MnemonixIcon from '../../assets/icons/mnemonix.png'
import Bango1 from '../../assets/project-card-images/bango1.png'
import Bango2 from '../../assets/project-card-images/bango2.png'
import Bango3 from '../../assets/project-card-images/bango3.png'
import Bango4 from '../../assets/project-card-images/bango4.png'
import ReactElectronix1 from '../../assets/project-card-images/react-electronix1.png'
import ReactElectronix2 from '../../assets/project-card-images/react-electronix2.png'
import { useStyles } from './Projects.style'
import { ProjectCard } from './components/ProjectCard'

export const Projects = () => {
    const { darkMode } = useContext(DarkModeContext)
    const style = useStyles({ darkMode })

    const projects = [
        {
            id: '1',
            title: 'Bango',
            subtitle: 'A platform that allows users to create their own custom bingo experiences. Users can design bingo cards with unique properties and themes, offering a personalized twist on the traditional game. It\'s designed for flexibility and creativity, enabling players to tailor the game to their specific interests or event themes.',
            url: 'https://bango.jonathanpz.com',
            icon: BangoIcon,
            images: [Bango1, Bango2, Bango3, Bango4]
        },
        {
            id: '2',
            title: 'React ElectroniX',
            subtitle: 'React ElectroniX is a React library designed to visually simulate the appearance of devices like iPhones and Macbooks (more in the future) within a React application in pure HTML(JSX) and CSS! It provides custom components that accurately represent these devices, designed with high percision to replicate the device realisticly, complete with adjustable properties such as dimensions and animations. And running off of pure HTML&CSS only means no image loading time. The library includes the Mac component, which mimics a Macbook with customizable features like open/closed state, startup animation, etc. The Iphone component, allows for width adjustment and screen content display as well. Ideal for developers looking to add device-specific UI elements to their React projects, this library is available under the MIT License and can be easily installed via npm.',
            url: 'https://www.npmjs.com/package/react-electronix',
            icon: ReactElectronixIcon,
            images: [ReactElectronix1, ReactElectronix2],
            package: true
        },
        {
            id: '3',
            title: 'Mnemonix',
            subtitle: 'A light-weight utility toolkit for Node.js and TypeScript, focused on smart, developer-friendly logging and diagnostics. Mnemonix gives you beautiful logs, stack-aware insights, execution timers, memory tracking, and event loop monitoring — with zero setup.',
            url: 'https://www.npmjs.com/package/mnemonix',
            icon: MnemonixIcon,
            package: true
        },
    ]
    return (
        <Box
            sx={{
                background: darkMode ? 'black' : 'white',
            }}
        >
            <Box sx={style.projects}>
                <Box sx={style.sizeController}>
                    <Typography
                        variant='h3'
                        fontWeight={600}
                        color={darkMode ? '#eeeeee' : ''}
                        sx={{
                            transition: 'color 1s',
                            fontSize: {
                                xs: '7vw',
                                sm: '4vw',
                                lg: '50px'
                            }
                        }}
                    >Projects</Typography>
                    <Box sx={style.projectContainer}>
                        {projects.map((project, index) => (
                            <ProjectCard project={project} key={index} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
