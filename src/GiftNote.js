import React from 'react';
import { Box, TextField } from '@mui/material';

export default function GiftNote() {
  return (
    <Box>
      <label variant="h1">🟠Gift Note</label>
      <TextField id="outlined-basic" property="fullWidth" multiline="enable" variant="outlined" label="test test test test" />
    </Box>
  );
}
