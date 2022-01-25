import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Button, Typography, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";

const GiftDetailed = ({info}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Typography component="div">
        <Box sx={{ textAlign: 'right', m: 1 }}>
          <CardHeader title={info.price} /></Box>
      </Typography>
      <CardMedia
        component=""
        height="194"
        image={info.image}
        alt="gift image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">{info.name}
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