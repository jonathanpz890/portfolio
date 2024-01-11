import React, { useEffect, useState } from 'react'
import { TyperProps, useStyle } from '.'
import { Box } from '@mui/material'

export const Typer = ({
    value,
    delay = 0,
}: TyperProps) => {
    const [typedValue, setTypedValue] = useState('')
    const [running, setRunning] = useState(false)
    const [cursorVisibility, setCursorVisibility] = useState(delay ? false : true)
    const [delayStart, setDelayStart] = useState(delay ? true : false)

    const style = useStyle();

    useEffect(() => {
        if (delay) {
            setTimeout(() => {
                setDelayStart(false)
            }, delay)
        }
    }, [delay])
    useEffect(() => {
        if (typedValue !== value && !delayStart) {
            setRunning(true)
            setTimeout(() => {
                const newValue = typedValue + value[typedValue.length]
                setTypedValue(newValue);
            }, 50)
        } else {
            setRunning(false)
        }
    }, [typedValue, running, delayStart, value])
    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;

        if (running) {
            interval = setInterval(() => {
                setCursorVisibility((v) => !v);
            }, 500);
        }

        return () => {
            if (interval) {
                setCursorVisibility(false);
                clearInterval(interval);
            }
        };
    }, [running]);
    return (
        <Box sx={style.typer}>
            {typedValue}
            <span style={{ visibility: cursorVisibility ? 'visible' : 'hidden' }}>|</span>
        </Box>
    )
}
