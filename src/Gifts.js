import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";


export default function Gifts() {
    const [gifts, setgifts] = useState([])
    const navigate = useNavigate();
    const onGiftClick = () => {
        navigate(`/Categories/${id}`)
    }

    return <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 8 }}>
        {gifts.map((gift, i) => (
            <Grid item xs={2} sm={4} md={4}>
                <div onClick={onGiftClick}><Gift /></div>
            </Grid>
        ))}
    </Grid>
}