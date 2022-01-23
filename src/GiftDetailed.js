import * as React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Button, Typography, Box } from '@mui/material';

const GiftDetailed = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Typography component="div">
        <Box sx={{ textAlign: 'right', m: 1 }}>
          <CardHeader title={props.price} /></Box>
      </Typography>
      <CardMedia
        component=""
        height="194"
        image={props.image}
        alt="gift image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">{props.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" disableElevation>
          CHOOSE
        </Button>
      </CardActions>
    </Card>
  );
}

export default GiftDetailed;