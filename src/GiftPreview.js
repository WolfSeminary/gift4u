import React from 'react';

const GiftPreview = ({ info }) => {
    return (<>
        <h1>{info.giftName}</h1>
        <h3>{info.GiftID}</h3>
        <img src={info.giftImage} />
    </>
    )
}

export default GiftPreview;