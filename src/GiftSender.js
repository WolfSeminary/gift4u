import React from 'react';
import {Box,TextField} from '@mui/material';
import Label from '@mui/material/FormLabel';

const GiftSender = () => {
  return (
    <>
      <Label>🟠 Who send the gift?</Label>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" variant="outlined" />
      </Box>
    </>
  );
}
export default GiftSender;