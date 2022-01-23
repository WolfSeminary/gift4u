import { Grid } from '@mui/material';
import React, { useState } from 'react';

export default function Categories([]) {

    const [list, setList] = useState()
    return <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 8 }}>
        {list.map((cat, i) => (
            <Grid item xs={2} sm={4} md={4}>
                <h1>{cat}</h1>
            </Grid>
        ))}
    </Grid>
}
