import React from "react";
import { Grid } from "@mui/material";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    CategoryID: 1,
    CategoryName: "Food",
    categoryImage: "./images/abc-block.png",
  },
  {
    CategoryID: 2,
    CategoryName: "Attractions",
    categoryImage: "./images/amusement-park.png",
  },
  {
    CategoryID: 3,
    CategoryName: "GiftCards",
    categoryImage: "./images/fast-food.png",
  },
  {
    CategoryID: 4,
    CategoryName: "Toys",
    categoryImage: "./images/giftbox.png",
  },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 2 }}
      columns={{ xs: 4, sm: 8, md: 8 }}
    >
      {categories.map((cat, i) => (
        <Grid
          key={i}
          item
          xs={2}
          sm={4}
          md={4}
          onClick={() => navigate(`/category/${cat.CategoryID}`)}
        >
          <Category info={cat} />
        </Grid>
      ))}
    </Grid>
  );
}
