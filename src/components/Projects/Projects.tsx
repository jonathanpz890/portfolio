import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { DarkModeContext } from '../../Context'
import ArchiveIcon from '../../assets/icons/archive.png'
import BangoIcon from '../../assets/icons/bango.png'
import MenuMapperIcon from '../../assets/icons/menu-mapper.png'
import PortfolioIcon from '../../assets/icons/portfolio.png'
import ReactDynamixIcon from '../../assets/icons/react-dynamix.png'
import ReactElectronixIcon from '../../assets/icons/react-electronix.png'
import ReactMechanixUIIcons from '../../assets/icons/react-mechanix-ui.png'
import Archive1 from '../../assets/project-card-images/archive1.png'
import Archive2 from '../../assets/project-card-images/archive2.png'
import Bango1 from '../../assets/project-card-images/bango1.png'
import Bango2 from '../../assets/project-card-images/bango2.png'
import Bango3 from '../../assets/project-card-images/bango3.png'
import Bango4 from '../../assets/project-card-images/bango4.png'
import Portfolio1 from '../../assets/project-card-images/portfolio1.png'
import Portfolio2 from '../../assets/project-card-images/portfolio2.png'
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
            title: 'IDF Archive',
            subtitle: 'The official Archive Website of the IDF Spokesperson\'s Unit serves as a comprehensive repository, housing thousands of images captured by the unit\'s photographers. This digital archive offers a unique visual record, chronicling various aspects of the Israeli Defense Forces. However, it\'s important to note that this project has since been discontinued, and as a result, there is a possibility that the website may no longer be accessible.',
            url: 'https://archive.idf-spokesperson.com/',
            icon: ArchiveIcon,
            images: [Archive1, Archive2]
        },
        {
            id: '2',
            title: 'Bango',
            subtitle: 'A platform that allows users to create their own custom bingo experiences. Users can design bingo cards with unique properties and themes, offering a personalized twist on the traditional game. It\'s designed for flexibility and creativity, enabling players to tailor the game to their specific interests or event themes.',
            url: 'https://bango.jonathanpz.com',
            icon: BangoIcon,
            images: [Bango1, Bango2, Bango3, Bango4]
        },
        {
            id: '3',
            title: 'Portfolio',
            subtitle: 'This very website!!\nA vibrant and interactive showcase of my professional journey, skills, and projects. This site is meticulously crafted to not only display my work but to also provide an engaging user experience through captivating animations and a sleek, modern design.',
            url: 'https://jonathanpz.com',
            icon: PortfolioIcon,
            images: [Portfolio1, Portfolio2]
        },
        {
            id: '4',
            title: 'React ElectroniX',
            subtitle: 'React ElectroniX is a React library designed to visually simulate the appearance of devices like iPhones and Macbooks (more in the future) within a React application in pure HTML(JSX) and CSS! It provides custom components that accurately represent these devices, designed with high percision to replicate the device realisticly, complete with adjustable properties such as dimensions and animations. And running off of pure HTML&CSS only means no image loading time. The library includes the Mac component, which mimics a Macbook with customizable features like open/closed state, startup animation, etc. The Iphone component, allows for width adjustment and screen content display as well. Ideal for developers looking to add device-specific UI elements to their React projects, this library is available under the MIT License and can be easily installed via npm.',
            url: 'https://www.npmjs.com/package/react-electronix',
            icon: ReactElectronixIcon,
            images: [ReactElectronix1, ReactElectronix2],
            package: true
        },
        {
            id: '5',
            title: 'MenuMapper',
            subtitle: 'A cook book on steroids. \nNot too much more I can say. \nUnder construction, stay tuned.',
            icon: MenuMapperIcon,
            package: true,
            comingSoon: true
        },
        {
            id: '6',
            title: 'React DynamiX',
            subtitle: 'An animation library for react, fully packed with the best hooks for easy and fast animaitons. \nNot yet out, still working on it. \nComing out soon I hope :*',
            icon: ReactDynamixIcon,
            package: true,
            comingSoon: true
        },
        {
            id: '7',
            title: 'React MechaniX UI',
            subtitle: 'A UI component library for building simple web interfaces that look great.',
            icon: ReactMechanixUIIcons,
            package: true,
            comingSoon: true
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
                                xs: '7vw'
                            }
                        }}
                    >Projects</Typography>
                    <Box sx={style.projectContainer}>
                        {projects.map(project => (
                            <ProjectCard project={project} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
