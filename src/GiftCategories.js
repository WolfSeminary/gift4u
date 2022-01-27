import React from "react";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";

export default function GiftCategories({
  selectedCategory,
  setSelectedCategory,
}) {
  const onSelectedCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Categories</InputLabel>
      <Select
        value={selectedCategory}
        label="Categories"
        onChange={onSelectedCategoryChange}
      >
        <MenuItem value={1}>Food</MenuItem>
        <MenuItem value={2}>Attractions</MenuItem>
        <MenuItem value={3}>Gift Cards</MenuItem>
        <MenuItem value={4}>Toys</MenuItem>
      </Select>
    </FormControl>
  );
}
