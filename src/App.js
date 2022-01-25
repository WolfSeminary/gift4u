import { AppBar, Breadcrumbs } from '@mui/material';
import React from 'react';
import MainAppBar from './MainAppBar';
import Navigation from './Navigation';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import Gifts from './Gifts';
import BuyGift from './BuyGift';
import HomePage from './Homepage';
import GiftsPage from './GiftsPage';
import CategoriesPage from './CategoriesPage';
import GiftDetailed from './GiftDetailed';

function App() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/gifts" element={<Gifts />}></Route>
                <Route path="/giftsPage/:cat" element={<GiftsPage />}></Route>
                <Route path="/categories" element={<CategoriesPage />}></Route>
                <Route path="/buyGift" element={<BuyGift />}></Route>
                <Route path="/giftDetailed/:gift" element={<GiftDetailed />}></Route>
                <Route path="" element={<HomePage />}></Route>
            </Routes>
            <Breadcrumbs>
                <Link to=""></Link>
                {/* <Link to="/categories">Categories</Link>
                <Link to="/gifts">Gifts</Link> */}
            </Breadcrumbs>
        </BrowserRouter>
    </>);
}

export default App;