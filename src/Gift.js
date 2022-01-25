import React from 'react';
import { CardActionArea, Card, CardMedia, Typography, CardContent, Breadcrumbs} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Gift({ info }) {

  const routing = [
    <Link to="/Categories">Categories</Link>,
    <Link to="/CategoriesPage">{info.categoryName}</Link>,
    <Link to="/Gift">{info.giftName}</Link>
  ];
  return (
    <>    
        <Breadcrumbs separator=">" aria-label="breadcrumbs">
          {routing}
        </Breadcrumbs>

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
    </>
  );
}