import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Gift from "./Gift";
import { useNavigate } from "react-router-dom";

const gifts = [
  {
    GiftID: 11,
    categoryID: 1,
    giftName: "Brunch",
    giftImage: "/images/Brunch.jpg",
    giftPrice: 10,
  },
  {
    GiftID: 12,
    categoryID: 1,
    giftName: "Lunch",
    giftImage: "/images/Lunch.jpg",
    giftPrice: 40,
  },
  {
    GiftID: 21,
    categoryID: 2,
    giftName: "Zoo",
    giftImage: "/images/Zoo1.jpg",
    giftPrice: 120,
  },
  {
    GiftID: 22,
    categoryID: 2,
    giftName: "Museum",
    giftImage: "/images/museun2.jpg",
    giftPrice: 70,
  },
  {
    GiftID: 31,
    categoryID: 3,
    giftName: "Ikea",
    giftImage: "/images/ikea1.jpg",
    giftPrice: 1000,
  },
  {
    GiftID: 32,
    categoryID: 3,
    giftName: "Laline",
    giftImage: "/images/laline2.jpg",
    giftPrice: 300,
  },
  {
    GiftID: 41,
    categoryID: 4,
    giftName: "Playmobil",
    giftImage: "/images/playmobil.jpg",
    giftPrice: 450,
  },
  {
    GiftID: 42,
    categoryID: 4,
    giftName: "Lego",
    giftImage: "/images/lego.jpg",
    giftPrice: 250,
  },
];

export default function Gifts({ categoryId }) {
  const navigate = useNavigate();
  const [filterGifts, setFilterGifts] = useState([]);

  useEffect(() => {
    setFilterGifts(gifts.filter((gift) => gift.categoryID === +categoryId));
  }, [categoryId]);

  const onGiftClick = (gift) => {
    navigate(`/gift/${gift.GiftID}`, { state: gift });
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
    >
      {filterGifts.map((gift, i) => (
        <Grid key={i} item xs={8} sm={4} onClick={() => onGiftClick(gift)}>
          <Gift info={gift} />
        </Grid>
      ))}
    </Grid>
  );
}
