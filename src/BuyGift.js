import React, { useState } from 'react';
import Button from '@mui/material/Button';

const BuyGift = () => {
    const [whoGetsTheGift, setWhoGetsTheGift] = useState("a friend");
    const [giftRecipient, setGiftRecipient] = useState();
    const [giftSender, setGiftSender] = useState();
    const [giftNote, setGiftNote] = useState();
    return <Button id="BuyGift" variant="contained">Buy Gift</Button>
}

export default BuyGift;