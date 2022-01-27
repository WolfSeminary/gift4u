import React, { useState } from "react";
import Button from "@mui/material/Button";
import GiftPreview from "./GiftPreview";

export default function BuyGift({ info }) {
  const [shouldShowPreview, setShouldShowPreview] = useState(false);
  function onBuyGiftClick() {
    setShouldShowPreview(!shouldShowPreview);
  }

  return (
    <>
      <Button id="BuyGift" variant="contained" onClick={onBuyGiftClick}>
        Buy Gift
      </Button>
      {shouldShowPreview && <GiftPreview info={info} />}
    </>
  );
}
