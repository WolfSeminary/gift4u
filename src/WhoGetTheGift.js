import React, {useState} from 'react';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import './WhoGetTheGift.css';

export default function WhoGetTheGift(props) {
    const [alignment, setAlignment] = useState('web');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <>
            <Typography>Who Gets TheGift</Typography>
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

