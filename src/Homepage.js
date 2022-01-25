import React from 'react';
import {Paper,Stack} from '@mui/material';
import { styled } from '@mui/material/styles';
import GiftCategories from './GiftCategories';
import FindGift from './FindGift'
import MainAppBar from './MainAppBar';

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
      <MainAppBar/>
      <Stack direction="row" spacing={2}>
        <Item><GiftCategories/></Item>
        <Item><FindGift/></Item>
      </Stack>
    </div>
  );
}