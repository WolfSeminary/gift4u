import React from 'react';

export default function Category({ info }) {

    return (<>
        <h1>{info.CategoryName}</h1>
        <img src={info.categoryImage} />
    </>)
}

