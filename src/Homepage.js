import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  paddingLeft:theme.spacing(9),
  paddingRight:theme.spacing(9),
  textAlign: 'center',
 
  color: theme.palette.text.secondary,
}));

export default function Homepage() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Item><GiftCategories/></Item>
        <Item>{/*<FindGift />*/}</Item>
      </Stack>
    </div>
  );
}