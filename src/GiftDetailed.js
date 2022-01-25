import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Button, Typography, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const GiftDetailed = () => {
  const navigate = useNavigate();
  const {gift} = useParams();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Typography component="div">
        <Box sx={{ textAlign: 'right', m: 1 }}>
          <CardHeader title={gift} /></Box>
      </Typography>
      <CardMedia
        component=""
        height="194"
        image={gift.giftImage}
        alt="gift image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">{gift.giftName}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button onClick={() => navigate('/buygift')} variant="contained" disableElevation>
          CHOOSE
        </Button>
      </CardActions>
    </Card>
  );
}

export default GiftDetailed