import React, { useState } from 'react';

const Categories = () => {
  const [Categories, setCategories] = useState([
    { CategoryID: 1, CategoryName: 'Food', categoryImage: './images/abc-block.png' },
    { CategoryID: 2, CategoryName: 'Attractions', categoryImage: "./images/amusement-park.png" },
    { CategoryID: 3, CategoryName: 'GiftCards', categoryImage: "./images/fast-food.png" },
    { CategoryID: 4, CategoryName: 'Toys', categoryImage: "./images/giftbox.png" }
  ]);
}

export default Categories