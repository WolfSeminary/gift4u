import React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box,Toolbar,Typography} from '@mui/material';

export default function MainAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gite Me - Your gifts store
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
