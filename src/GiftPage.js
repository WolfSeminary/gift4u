import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import GiftDetailed from './GiftDetailed'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MainAppBar from './MainAppBar';

const GiftPage = () => {
    <>
        <MainAppBar/>
        <Breadcrumbs>
            <Link to=""></Link>
            <Link to="/categories">Categories</Link>
            <Link to="/gifts">Gifts</Link>
        </Breadcrumbs>
        <GiftDetailed />
    </>
}

export default GiftPage