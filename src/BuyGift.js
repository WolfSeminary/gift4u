import React, {useState} from 'react';
import Button from '@mui/material/Button';
import GiftPreview from './GiftPreview';

const BuyGift = ({ info }) => {
    const [shouldShowPreview, setShouldShowPreview] = useState(false);
    function onBuyGiftClick() {
        setShouldShowPreview(true);
    }
    return <>
        <Button id="BuyGift" variant="contained" onClick={onBuyGiftClick}>Buy Gift</Button>
        {shouldShowPreview && <GiftPreview info={info} />}
    </>
}

export default BuyGift;