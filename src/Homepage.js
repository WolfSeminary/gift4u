import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import GiftCategories from './GiftCategories';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  paddingLeft:theme.spacing(9),
  paddingRight:theme.spacing(9),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HomePage() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Item><GiftCategories/></Item>
        <Item>{/*Add <FindGift /> component here*/}</Item>
      </Stack>
    </div>
  );
}