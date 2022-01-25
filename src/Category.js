import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Category({ info }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={info.categoryImage}
        alt={info.categoryImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.CategoryName}
        </Typography>
      </CardContent>
    </Card>
  );
}
