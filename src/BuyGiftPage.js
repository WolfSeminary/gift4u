import React from "react"
import AppBar from './AppBar'
import WhoGetTheGift from './WhoGetTheGift'
import GiftRecipient from './GiftRecipient'
import GiftSender from './GiftSender'
import GiftNote from './GiftNote'

export default BuyGiftPage = () => {
    const onWhoGetsTheGiftChange = (event) => {
        setWhoGetsTheGift(event.target.value);
    }
    const onGiftRecipientChange = (event) => {
        setGiftRecipient(event.target.value);
    }
    const onGiftSenderChange = (event) => {
        setGiftSender(event.target.value);
    }
    const onGiftNoteChange = (event) => {
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
