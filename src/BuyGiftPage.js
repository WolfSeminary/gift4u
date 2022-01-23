import React from "react"
import AppBar from './AppBar'
import WhoGetTheGift from './WhoGetTheGift'
import GiftRecipient from './GiftRecipient'
import GiftSender from './GiftSender'
import GiftNote from './GiftNote'

export default BuyGiftPage = () => {
    return (
        <>
            <WhoGetTheGift/>
            <GiftRecipient/>
            <GiftSender/>
            <GiftNote/>
            <AppBar/>
        </>
    )
}
