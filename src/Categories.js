import React, { useState } from 'react';
import { Grid } from '@mui/material';

export default function Categories() {

    const [Categories, setCategories] = useState([
        { CategoryID: 1, CategoryName: 'Food', categoryImage: './images/abc-block.png' },
        { CategoryID: 2, CategoryName: 'Attractions', categoryImage: "./images/amusement-park.png" },
        { CategoryID: 3, CategoryName: 'GiftCards', categoryImage: "./images/fast-food.png" },
        { CategoryID: 4, CategoryName: 'Toys', categoryImage: "./images/giftbox.png" }
    ]);
    return <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 8 }}>
        {Categories.map((cat, i) => (
            <Grid item xs={2} sm={4} md={4}>
                <h1>{cat}</h1>
            </Grid>
        ))}
    </Grid>
}
