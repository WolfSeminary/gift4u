import  React,{useState} from 'react';
import {ToggleButton, ToggleButtonGroup, Typography} from '@mui/material';
import './WhoGetTheGift.css';
import { useState } from 'react';

export default function WhoGetTheGift(props) {
    const [whoGetsTheGift,setWhoGetsTheGift]= useState(props.WhoGetsTheGift);
    const [alignment, setAlignment] = useState('web');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <>
            <Typography>whoGetsTheGift</Typography>
            <br />
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton id="gr" value="web">To someone else</ToggleButton>
                <ToggleButton id="or" value="android">To myself</ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}

