import { Box, List, ListItem, ListItemText, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useStyles } from './Experience.style'
import { motion } from 'framer-motion'
import { ExperienceProps } from '.'
import { SkiTransition } from '../SkiTransition/SkiTransition'
import { DarkModeContext } from '../../Context'

export const Experience = () => {
    const { darkMode } = useContext(DarkModeContext)
    const smallDevice = useMediaQuery('(max-width: 900px')
    const mobile = useMediaQuery('(max-width: 600px')
    const [animate, setAnimate] = useState(false)
    const style = useStyles({ darkMode, smallDevice, mobile })

    const experience = [
        {
            title: 'IDF Spokesperson Unit',
            since: '2020',
            until: '2021',
            jobTitle: 'Full-Stack web developer',
            traits: [
                "Developed and maintained IDFSpokesperson's Archive Website",
                "Contributed to large-scale initiatives for the IDF's main website",
                "Maintained a website for IDF's Infrastructure and Deployment Division",
            ]
        },
        {
            title: 'Velo',
            since: '2021',
            until: '2022',
            jobTitle: 'Full-Stack web developer',
            traits: [
                "Worked on end to end projects",
                "Learned a lot on the fly and implemented in real time",
                "Developed admin panels, landing pages and complex systems with react.js and next.js",
            ]
        },
        {
            title: 'IDF Unit Matzpen (Through IBM & SQLink)',
            since: '2022',
            until: '2023',
            jobTitle: 'Full-Stack web developer',
            traits: [
                "Worked on a platform widely used by divisions and units in the army",
                "Worked in sprints",
                "Conducted thorough code reviews to ensure code quality, adherence to coding standards, and integration of best practices"
            ]
        },
        {
            title: 'Perez Development (Self-employed)',
            since: '2023',
            until: 'Present',
            jobTitle: 'Full-Stack web developer',
            traits: [
                "Working as a freelancer",
                "Developing Front, back and React Native applications",
            ]
        }
    ]
    const skills = {
        html: 'HTML',
        css: 'CSS',
        git: 'Git',
        javaScript: 'JavaScript',
        reactJs: 'React.js',
        nodeJs: 'Node.js',
        nextJs: 'Next.js',
        apis: 'APIs',
        sass: 'SASS',
        microsoftAzure: 'Microsofta Azure ',
        openShift: 'OpenShift ',
        docker: 'Docker',
        sql: 'SQL',
        typescript: 'Typescript',
        redux: 'Redux',
        graphql: 'GraphQL',
        postgraphile: 'Postgraphile',
    }
    return (
        <Box
            sx={style.container}
        >
            <Box sx={style.contentContainer}>
                <Box sx={style.skillContainer}>
                    <Typography
                        variant='h3'
                        fontWeight='600'
                        color={darkMode ? '#eeeeee' : ''}
                        sx={{
                            transition: 'color 1s',
                            fontSize: {
                                xs: '7vw',
                                sm: '4vw',
                                lg: '50px'
                            }
                        }}
                    >Tech Stack</Typography>
                    <Box
                        sx={{
                            position: 'sticky',
                            top: '12.5vh'
                        }}
                    >
                        <motion.ul
                            style={style.skillList}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-150px', once: true }}
                        // variants={{
                        //     hidden: { opacity: 0, scale: 0 },
                        //     visible: {
                        //         opacity: 1,
                        //         scale: 1,
                        //         transition: {
                        //             delayChildren: 0.3,
                        //             staggerChildren: 0.2
                        //         }
                        //     }
                        // }}
                        // transition={{
                        //     delay: 2
                        // }}
                        >
                            {Object.values(skills).map((skill, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ margin: '-150px', once: true }}
                                    style={style.skill}
                                >{skill}</motion.li>
                            ))}
                        </motion.ul>
                    </Box>
                </Box>
                <Box sx={style.experienceContainer}>
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
                    >
                        Experience
                    </Typography>
                    {
                        experience.map((exp) => (
                            <motion.div
                                initial={{ scale: 1 }}
                            >
                                <motion.div
                                    style={{
                                        ...style.experienceItem,
                                        flexDirection: mobile ? 'column' : 'row',
                                    }}
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ margin: '-150px', once: true }}
                                >
                                    <Box
                                        sx={{
                                            width: {
                                                xs: '100%',
                                                sm: '30%'
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant='h6'
                                            sx={{
                                                fontSize: {
                                                    xs: '4vw',
                                                    sm: '2vw',
                                                    lg: '20px'
                                                }
                                            }}
                                        >
                                            {`${exp.since} - ${exp.until}`}
                                        </Typography>
                                        <Typography
                                            variant='h5'
                                            sx={{
                                                fontSize: {
                                                    xs: '4vw',
                                                    sm: '2.25vw',
                                                    lg: '25px'
                                                }
                                            }}
                                        >
                                            {exp.title}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: {
                                                xs: '100%',
                                                sm: '2px'
                                            },
                                            height: {
                                                xs: '2px',
                                                sm: '100%'
                                            },
                                            background: 'black',
                                            margin: {
                                                xs: '1vw 0',
                                                sm: '0 20px'
                                            }
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            width: {
                                                xs: '100%',
                                                sm: '70%'
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant='h5'
                                            sx={{
                                                fontSize: {
                                                    xs: '3.5vw',
                                                    sm: '2.25vw',
                                                    lg: '25px'
                                                }
                                            }}
                                        >{exp.jobTitle}</Typography>
                                        <List
                                            style={style.traitList}
                                        >
                                            {exp.traits.map(trait => (
                                                <ListItemText
                                                    sx={{
                                                        '& span': {
                                                            fontSize: {
                                                                xs: '2.5vw',
                                                                sm: '1.5vw',
                                                                lg: '20px'
                                                            }
                                                        }
                                                    }}
                                                >• {trait}</ListItemText>
                                            ))}
                                        </List>
                                    </Box>
                                </motion.div>
                            </motion.div>
                        ))
                    }
                </Box>
            </Box>
            <SkiTransition />
        </Box >
    )
}