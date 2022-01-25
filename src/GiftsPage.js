import React from "react"
import Gifts from "./Gifts"
import MainAppBar from "./MainAppBar";
import { useParams } from "react-router-dom";

export default function GiftsPage() {
    const info=useParams();
    return (
        <>
            <MainAppBar/>
            <Gifts info={info}/>
        </>
    );
}