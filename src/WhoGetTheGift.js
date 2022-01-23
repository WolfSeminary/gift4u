import * as React from 'react';
import {ToggleButton, ToggleButtonGroup, Typography} from '@mui/material';
import './WhoGetTheGift.css';

export default function WhoGetTheGift() {
    const [alignment, setAlignment] = React.useState('web');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <>
            <Typography>Who gets the gift?</Typography>
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

