import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import GiftDetailed from "./GiftDetailed";
import MainAppBar from "./MainAppBar";

const categoriesName = {
  1: "Food",
  2: "Attractions",
  3: "Gift Cards",
  4: "Toys",
};

export default function GiftPage() {
  const location = useLocation();
  const gift = location.state;

  const routing = [
    <Link to="/Categories">Categories</Link>,
    <Link to={`/category/${gift.categoryID}`}>
      {categoriesName[gift.categoryID]}
    </Link>,
    <>{gift.giftName}</>,
  ];
  return (
    <>
      <MainAppBar />
      <Breadcrumbs separator=">" aria-label="breadcrumbs">
        {routing}
      </Breadcrumbs>
      <GiftDetailed gift={gift} />
    </>
  );
}
