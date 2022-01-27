import React from "react";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import "./WhoGetTheGift.css";

export default function WhoGetTheGift({ onChange, value }) {
  return (
    <>
      <Typography variant="h5">Who Gets TheGift</Typography>
      <ToggleButtonGroup
        color="primary"
        value={value}
        exclusive
        onChange={onChange}
      >
        <ToggleButton id="gr" value="else">
          To someone else
        </ToggleButton>
        <ToggleButton id="or" value="my">
          To myself
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
