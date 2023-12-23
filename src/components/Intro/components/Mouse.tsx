import { Box } from '@mui/material'
import React from 'react'
import { useStyle } from '.'
import { motion } from 'framer-motion'
import { BsChevronDown } from 'react-icons/bs'

export const Mouse = ({initiated}: {initiated: boolean}) => {
    const style = useStyle({initiated})

    return (
        <motion.div
        >
            <Box sx={style.container}>
                <Box sx={style.mouse}>
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: '8px'
                        }}
                        animate={{
                            y: [0, 10, 10],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                    >
                        <Box sx={style.mouseWheel} />
                    </motion.div>
                </Box>
                <motion.div
                    animate={{
                        y: [0, 10, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2
                    }}
                >
                    <BsChevronDown style={{width: 30, height: 30}} />
                </motion.div>
            </Box>
        </motion.div>
    )
}
