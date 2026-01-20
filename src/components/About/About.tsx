import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Iphone } from 'react-electronix'
import { useStyles } from '.'
import { DarkModeContext } from '../../Context'
import LinkedInBar from '../../assets/linkedInBar.jpg'
import LinkedInButtons from '../../assets/linkedInButtons.jpg'
import LinkedIn1 from '../../assets/linkedin1.png'
import LinkedIn2 from '../../assets/linkedin2.png'
import { iphoneVhToPx } from '../../utils/vhToPx'


import { motion } from 'framer-motion'

export const About = () => {
    const { darkMode } = useContext(DarkModeContext)
    const style = useStyles({
        darkMode
    })

    return (
        <Box
            sx={style.aboutContainer}
        >
            <Box
                sx={style.about}
            >
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={style.iphoneWrapper as unknown as React.CSSProperties}
                >
                    <Iphone width={iphoneVhToPx(80)}>
                        <Box
                            sx={style.iphoneContent}
                        >
                            <Box
                                component='img'
                                src={LinkedInBar}
                                sx={style.linkedInBar}
                            />
                            <Box sx={{ flex: 1, overflow: 'hidden' }}>
                                <Box component='img' src={LinkedIn1} alt="linkedin1" width='100%' />
                                <Box component='img' src={LinkedIn2} alt="linkedin2" width='100%' />
                            </Box>
                            <Box component='img' src={LinkedInButtons} alt="linkedinbuttons" sx={style.linkedInButtons} />
                        </Box>
                    </Iphone>
                </motion.div>

                <Box sx={style.aboutTextContainer}>
                    <Box sx={style.glassCard}>
                        <Typography
                            component={motion.h2}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            variant='h2'
                            sx={style.aboutTitle}
                        >
                            Greetings, I&apos;m Jonathan
                        </Typography>
                        <Typography
                            component={motion.p}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            variant='body1'
                            sx={style.aboutParagraph}
                        >
                            A <Box component="span" sx={style.highlight}>Full-Stack Developer</Box> driven by a passion for crafting <Box component="span" sx={style.highlight}>stunning, high-performance</Box> web experiences.
                            With a problem-solving mindset and a commitment to excellence, I thrive on turning complex challenges into <Box component="span" sx={style.highlight}>elegant solutions</Box>.
                            <br /><br />
                            As a dedicated autodidact, I am constantly evolving—mastering new technologies and refining my skills to stay at the <Box component="span" sx={style.highlight}>forefront of innovation</Box>.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
