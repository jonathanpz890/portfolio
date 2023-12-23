import React, { useEffect, useState } from 'react'
import { ContinuousTyperProps, useStyle } from '.'
import { Box } from '@mui/material'

export const ContinwuousTyper = ({
    values,
    delay = 0,
}: ContinuousTyperProps) => {
    const [typedValue, setTypedValue] = useState('')
    const [valueIndex, setValueIndex] = useState(0)
    const [running, setRunning] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [cursorVisibility, setCursorVisibility] = useState(delay ? false : true)
    const [delayStart, setDelayStart] = useState(delay ? true : false)
    const [done, setDone] = useState(false)

    const style = useStyle();

    useEffect(() => {
        //Line deleting
        if (!deleting) { return }
        const interval = setInterval(() => {
            setTypedValue(prevValue => prevValue.slice(0, -2));
        }, 25);

        if (valueIndex === values.length - 1 ) {
            setRunning(false);
            setDeleting(false);
            setDone(true);
            return
        }
        if (typedValue === '') {
            setValueIndex(prevValue => prevValue + 1)
            setDeleting(false);
        }
        return () => {
            clearInterval(interval);
        };
    }, [typedValue, deleting]);

    useEffect(() => {
        //Delay clearing
        if (delay) {
            setTimeout(() => {
                setDelayStart(false)
            }, delay)
        }
    }, [delay])
    useEffect(() => {
        //Value typing
        if (deleting || done) { return }
        if (typedValue !== values[valueIndex] && !delayStart) {
            setRunning(true)
            setTimeout(() => {
                const newValue = typedValue + values[valueIndex][typedValue.length]
                setTypedValue(newValue);
            }, 50)
        } else {
            setRunning(false)
            setTimeout(() => {
                setDeleting(true)
            }, 1500)
        }
    }, [typedValue, running, delayStart, deleting, valueIndex])
    useEffect(() => {
        //Cursor flashing
        let interval: NodeJS.Timer;

        interval = setInterval(() => {
            setCursorVisibility((v) => !v);
        }, 500);

        // return () => {
        //     if (interval) {
        //         setCursorVisibility(false);
        //         clearInterval(interval);
        //     }
        // };
    }, [running]);
    return (
        <Box sx={style.typer}>
            {typedValue}
            <span style={{ visibility: cursorVisibility ? 'visible' : 'hidden' }}>|</span>
        </Box>
    )
}
