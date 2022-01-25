import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Category from './Category';
import GiftsPage from './GiftsPage';
import { useNavigate } from "react-router-dom";

export default function Categories() {
    const navigate = useNavigate();
    const [Categories, setCategories] = useState([
        { CategoryID: 1, CategoryName: 'Food', categoryImage: './images/abc-block.png' },
        { CategoryID: 2, CategoryName: 'Attractions', categoryImage: "./images/amusement-park.png" },
        { CategoryID: 3, CategoryName: 'GiftCards', categoryImage: "./images/fast-food.png" },
        { CategoryID: 4, CategoryName: 'Toys', categoryImage: "./images/giftbox.png" }
    ]);
    return <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 8 }}>
        {Categories.map((cat, i) => (
            <Grid key={i} item xs={2} sm={4} md={4 }onClick={() => navigate(`/giftspage/${cat.CategoryID}`)}>
                <Category info={cat}/>
            </Grid>
        ))}
    </Grid>
}
