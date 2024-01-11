import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { Iphone } from 'react-electronix'
import { useStyles } from '.'
import { DarkModeContext } from '../../Context'
import LinkedInBar from '../../assets/linkedInBar.jpg'
import LinkedInButtons from '../../assets/linkedInButtons.jpg'
import LinkedIn1 from '../../assets/linkedin1.png'
import LinkedIn2 from '../../assets/linkedin2.png'
import { iphoneVhToPx } from '../../utils/vhToPx'
import { WaveTransition } from '../WaveTransition/WaveTransition'


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
            <WaveTransition darkMode={darkMode} />
        </Box>
    )
}
