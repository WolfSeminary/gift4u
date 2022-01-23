import React from "react"
import AppBar from './AppBar'
import WhoGetTheGift from './WhoGetTheGift'
import GiftRecipient from './GiftRecipient'
import GiftSender from './GiftSender'
import GiftNote from './GiftNote'

export default BuyGiftPage = () => {
    onWhoGetsTheGiftChange(event)
    {
        setWhoGetsTheGift(event.target.value);
    }
    onGiftRecipientChange(event)
    {
        setGiftRecipient(event.target.value);
    }
    onGiftSenderChange(event)
    {
        setGiftSender(event.target.value);
    }
    onGiftNoteChange(event)
    {
        setGiftNote(event.target.value);
    }
    return (
        <>
            <WhoGetTheGift onChange={onWhoGetsTheGiftChange} />
            <GiftRecipient onChange={onGiftRecipientChange} />
            <GiftSender onChange={onGiftSenderChange} />
            <GiftNote onChange={onGiftNoteChange} />
            <AppBar />
        </>
    )
}


