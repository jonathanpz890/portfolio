import React, { useEffect, useRef, useState } from 'react'
import { useStyles, AboutProps } from '.'
import { Box, Typography } from '@mui/material'
import { Iphone } from 'react-electronix'
import { vwToPx } from '../../utils/vwToPx'
import LinkedIn1 from '../../assets/linkedin1.png'
import LinkedIn2 from '../../assets/linkedin2.png'
import LinkedInBar from '../../assets/linkedInBar.jpg'
import LinkedInButtons from '../../assets/linkedInButtons.jpg'
import { iphoneVhToPx } from '../../utils/vhToPx'
import { Typer } from '../Typer'
import { IntroductionVideo } from '../IntroductionVideo/IntroductionVideo'
import { WaveTransition } from '../WaveTransition/WaveTransition'


export const About = () => {
    const style = useStyles()
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
    }, [])
    return (
        <Box
            sx={style.aboutContainer}
        >
            <Box
                sx={style.about}
            >
                <Iphone width={iphoneVhToPx(90)}>
                    <Box
                        sx={style.iphoneContent}
                    >
                        <Box
                            component='img'
                            src={LinkedInBar}
                            sx={style.linkedInBar}
                        />
                        <Box component='img' src={LinkedIn1} alt="linkedin1" width='100%' sx=
                            {style.aboutTextContainer} />
                        <Box component='img' src={LinkedIn2} alt="linkedin2" width='100%' sx=
                            {style.aboutTextContainer} />
                        <Box component='img' src={LinkedInButtons} alt="linkedinbuttons" sx=
                            {style.linkedInButtons} />
                    </Box>
                </Iphone>
                {/* <IntroductionVideo /> */}
            </Box>
            <WaveTransition />
        </Box>
    )
}
