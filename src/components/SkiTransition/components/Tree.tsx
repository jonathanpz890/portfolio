import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { GiPineTree } from "react-icons/gi";

export const Tree = ({
    x,
    y,
    size
}: {
    x: number,
    y: number
    size: number;
}) => {
    const [treeColors] = useState([
        '#9ab6f1',
        '#4F6CA1',
        '#FCFBFC',
    ])
    const [color, setColor] = useState('');

    useEffect(() => {
        // This code will run only once when the component mounts
        const randomColor = treeColors[Math.floor(Math.random() * treeColors.length)];
        setColor(randomColor);
    }, []); // Empty dependency array ensures this runs only on mount


    return (
        <GiPineTree
            color={color}
            size={`${size}vw`}
            style={{
                zIndex: 2,
                position: 'absolute',
                left: `${x}vw`,
                bottom: `${y}vw`,
            }}
        />
    )
}
