import React from "react"
import AppBar from './AppBar'
import WhoGetTheGift from './WhoGetTheGift'
import GiftSender from './GiftSender'
import GiftNote from './GiftNote'
import GiftRecipient from "./GiftRecipient "

export default function BuyGiftPage(){
    return (
        <>
            <WhoGetTheGift/>
            <GiftRecipient/>
            <GiftSender/>
            <GiftNote />
            <AppBar />
        </>
    )
}