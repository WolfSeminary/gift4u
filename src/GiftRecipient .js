
import React from 'react';
import {Box,TextField} from '@mui/material';
import Label from '@mui/material/FormLabel';

function GiftRecipient() {
  return (
    <>
      <Label>Gift Recipient</Label>
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

export default GiftRecipient;