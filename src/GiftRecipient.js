import React from "react";
import { TextField } from "@mui/material";

export default function GiftRecipient({ onChange, value }) {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      label="Gift Recipient"
      onChange={onChange}
      value={value}
    />
  );
}
