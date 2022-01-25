import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Gift from './Gift';
import { useNavigate } from "react-router-dom";

export default function Gifts({ info }) {

    const [gifts, setGifts] = useState([
        { GiftID: 11, categoryID: 1, giftName: 'Brunch', giftImage: '/img/Brunch.jpg' ,giftPrice:10},
        { GiftID: 12, categoryID: 1, giftName: 'Lunch', giftImage: '/img/Lunch.jpg' ,giftPrice:40},
        { GiftID: 21, categoryID: 2, giftName: 'Zoo', giftImage: '/img/Zoo1.jpg' ,giftPrice:120},
        { GiftID: 22, categoryID: 2, giftName: 'Museum', giftImage: '/img/museun2.jpg' ,giftPrice:70},
        { GiftID: 31, categoryID: 3, giftName: 'Ikea', giftImage: '/img/ikea1.jpg' ,giftPrice:1000},
        { GiftID: 32, categoryID: 3, giftName: 'Laline', giftImage: '/img/laline2.jpg' ,giftPrice:300},
        { GiftID: 41, categoryID: 4, giftName: 'Playmobil', giftImage: '/img/playmobil.jpg' ,giftPrice:450},
        { GiftID: 42, categoryID: 4, giftName: 'Lego', giftImage: '/img/lego.jpg' ,giftPrice:250}
    ]);
    const result =gifts.filter((gift)=>{return gift.categoryID==1});
    setGifts(result);
    const navigate = useNavigate();
    const onGiftClick = (gift) => {
        navigate(`/giftDetailed/${gift.GiftID}`)
    }
    return <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 8 }}>
        {gifts.map((gift, i) => (
            <Grid key={i} item xs={2} sm={4} md={4} onClick={() => onGiftClick(gift)}>
                <Gift info={gift} />
            </Grid>
        ))}
    </Grid>
}