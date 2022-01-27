import React from "react";
import { Box, TextField } from "@mui/material";
import Label from "@mui/material/FormLabel";

export default function GiftSender({ onChange, value }) {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Who send the gift?"
          onChange={onChange}
          value={value}
        />
      </Box>
    </>
  );
}
