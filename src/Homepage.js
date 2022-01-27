import React, { useState } from "react";
import { Stack } from "@mui/material";
import GiftCategories from "./GiftCategories";
import FindGift from "./FindGift";
import MainAppBar from "./MainAppBar";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <MainAppBar />
      <Stack direction="row" spacing={2}>
        <GiftCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <FindGift />
      </Stack>
    </>
  );
}
