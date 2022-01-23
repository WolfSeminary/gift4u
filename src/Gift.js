import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Gift() {
 
  const [gifts, setGifts] = React.useState([
    { GiftID: 11, categoryID: 1, giftName: 'Brunch', giftImage: './public/img/Brunch.jpg' },
    { GiftID: 12, categoryID: 1, giftName: 'Lunch', giftImage: './public/img/Lunch.jpg' },
    { GiftID: 21, categoryID: 2, giftName: 'Zoo', giftImage: './public/img/Zoo1.jpg' },
    { GiftID: 22, categoryID: 2, giftName: 'Museum', giftImage: './public/img/museun2.jpg' },
    { GiftID: 31, categoryID: 3, giftName: 'Ikea', giftImage: './public/img/ikea1.jpg' },
    { GiftID: 32, categoryID: 3, giftName: 'Laline', giftImage: './public/img/laline2.jpg' },
    { GiftID: 41, categoryID: 4, giftName: 'Playmobil', giftImage: './public/img/playmobil.jpg' },
    { GiftID: 42, categoryID: 4, giftName: 'Lego', giftImage: './public/img/lego.jpg' }
  ]);

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