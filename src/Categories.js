import React, { useState } from 'react';

const Categories =()=>{
  const [Categories,setCategories]=useState([
    {CategoryID: 1, CategoryName: Food, categoryImage: <Image url="./images/abc-block.png"/>},
    {CategoryID: 2, CategoryName: Attractions, categoryImage: <Image url="./images/amusement-park.png"/>},
    {CategoryID: 3, CategoryName: GiftCards, categoryImage: <Image url="./images/fast-food.png"/>},
    {CategoryID: 4, CategoryName: Toys, categoryImage: <Image url="./images/giftbox.png"/>}
  ]);
}

export default Categories