import React from "react";

export default function GiftPreview({ info }) {
  return (
    <>
      <h1>{info.giftName}</h1>
      <h3>{info.GiftID}</h3>
      <h3>To: {info.whoGetsTheGift}</h3>
      <img alt="" src={info.giftImage} />
    </>
  );
}
