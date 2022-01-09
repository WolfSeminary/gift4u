import * as React from 'react';
import {Box,TextField} from '@mui/material';
export default function BasicTextFields() {
  return (
    <Box>
       <label>🟠Gift Note</label>
       <br/>
      <TextField id="outlined-basic" property="fullWidth" multiline="enable" variant="outlined"  label="test test test test" />
    </Box>
  );
}