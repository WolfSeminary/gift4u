import React, { useState } from "react"
import AppBar from './AppBar'
import WhoGetTheGift from './WhoGetTheGift'
import GiftRecipient from './GiftRecipient'
import GiftSender from './GiftSender'
import GiftNote from './GiftNote'

export default BuyGiftPage = () => {
    const [whoGetsTheGift, setWhoGetsTheGift] = useState("a friend");
    const [giftRecipient, setGiftRecipient] = useState();
    const [giftSender, setGiftSender] = useState();
    const [giftNote, setGiftNote] = useState();
    return (
        <>
            <WhoGetTheGift />
            <GiftRecipient />
            <GiftSender />
            <GiftNote />
            <AppBar />
        </>
    )
}