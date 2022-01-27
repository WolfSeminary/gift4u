import React from "react";
import {
  CardActionArea,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";

export default function Gift({info}) {
  return (
    <Card sx={{ maxWidth: 345 ,margin:'auto'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.giftImage}
          alt={info.giftName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.giftName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
