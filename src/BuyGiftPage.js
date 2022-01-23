import React from "react"
import AppBar from './AppBar'
import WhoGetTheGift from './WhoGetTheGift'
import GiftRecipient from './GiftRecipient'
import GiftSender from './GiftSender'
import GiftNote from './GiftNote'

export default BuyGiftPage = () => {
    onWhoGetsTheGiftChange(value)
    {
        setWhoGetsTheGift(value);
    }
    onGiftRecipientChange(value)
    {
        setGiftRecipient(value);
    }
    onGiftSenderChange(value)
    {
        setGiftSender(value);
    }
    onGiftNoteChange(value)
    {
        setGiftNote(value);
    }
    return (
        <>
            <WhoGetTheGift onChange={(event) => onWhoGetsTheGiftChange(event)} />
            <GiftRecipient onChange={(event) => onGiftRecipientChange(event)} />
            <GiftSender onChange={(event) => onGiftSenderChange(event)} />
            <GiftNote onChange={(event) => onGiftNoteChange(event)} />
            <AppBar/>
        </>
    )
}
