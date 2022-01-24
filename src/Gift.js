import React from 'react';
import { CardActionArea,Card,CardMedia,Typography,CardContent } from '@mui/material';

export default function Gift() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}