import React from "react";
import { Box, TextField } from "@mui/material";

export default function GiftNote({ onChange, value }) {
  return (
    <Box>
      <TextField
        property="fullWidth"
        multiline
        rows={4}
        label="Gift Note"
        onChange={onChange}
        value={value}
      />
    </Box>
  );
}
