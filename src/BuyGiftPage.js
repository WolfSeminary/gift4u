import React, { useState } from "react";
import GiftRecipient from "./GiftRecipient";
import MainAppBar from "./MainAppBar";
import GiftNote from "./GiftNote";
import GiftSender from "./GiftSender";
import WhoGetTheGift from "./WhoGetTheGift";
import BuyGift from "./BuyGift";
import { useLocation } from "react-router";

export default function BuyGiftPage() {
  const location = useLocation();
  const gift = location.state;
  const [whoGetsTheGift, setWhoGetsTheGift] = useState("a friend");
  const [giftRecipient, setGiftRecipient] = useState();
  const [giftSender, setGiftSender] = useState();
  const [giftNote, setGiftNote] = useState();

  const onWhoGetsTheGiftChange = (event) => {
    setWhoGetsTheGift(event.target.value);
  };
  const onGiftRecipientChange = (event) => {
    setGiftRecipient(event.target.value);
  };
  const onGiftSenderChange = (event) => {
    setGiftSender(event.target.value);
  };
  const onGiftNoteChange = (event) => {
    setGiftNote(event.target.value);
  };
  return (
    <>
      <MainAppBar />
      <WhoGetTheGift onChange={onWhoGetsTheGiftChange} value={whoGetsTheGift} />
      <GiftRecipient onChange={onGiftRecipientChange} value={giftRecipient} />
      <GiftSender onChange={onGiftSenderChange} value={giftSender} />
      <GiftNote onChange={onGiftNoteChange} value={giftNote} />
      <BuyGift
        info={{ ...gift, whoGetsTheGift, giftRecipient, giftSender, giftNote }}
      />
    </>
  );
}
