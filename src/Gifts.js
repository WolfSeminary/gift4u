import React, { useState, useParams } from 'react';
import { Grid } from '@mui/material';
import Gift from './Gift';
import { useNavigate } from "react-router-dom"; 

export default function Gifts() {
    const [gifts, setGifts] = useState([
        { GiftID: 11, categoryID: 1, giftName: 'Brunch', giftImage: './public/img/Brunch.jpg' },
        { GiftID: 12, categoryID: 1, giftName: 'Lunch', giftImage: './public/img/Lunch.jpg' },
        { GiftID: 21, categoryID: 2, giftName: 'Zoo', giftImage: './public/img/Zoo1.jpg' },
        { GiftID: 22, categoryID: 2, giftName: 'Museum', giftImage: './public/img/museun2.jpg' },
        { GiftID: 31, categoryID: 3, giftName: 'Ikea', giftImage: './public/img/ikea1.jpg' },
        { GiftID: 32, categoryID: 3, giftName: 'Laline', giftImage: './public/img/laline2.jpg' },
        { GiftID: 41, categoryID: 4, giftName: 'Playmobil', giftImage: './public/img/playmobil.jpg' },
        { GiftID: 42, categoryID: 4, giftName: 'Lego', giftImage: './public/img/lego.jpg' }
    ]);
    const navigate = useNavigate();
    const onGiftClick = ({giftname}) => {
        navigate(`/Gifts/${giftname}`)
    }
    return <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 8 }}>
        {gifts.map((gift, i) => (
            <Grid item xs={2} sm={4} md={4}>
                <Gift onClick={onGiftClick}/>
            </Grid>
        ))}
    </Grid>
}