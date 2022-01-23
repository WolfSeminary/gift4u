import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';

export default function GiftNote(props) {
  const [giftNote, setGiftNote] = useState(props.GiftNote);
  return (
    <Box>
      <label variant="h1">🟠giftNote</label>
      <TextField id="outlined-basic" property="fullWidth" multiline="enable" variant="outlined" label="test test test test" />
    </Box>
  );
}
