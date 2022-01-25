import React from 'react';
import { Breadcrumbs } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import Gifts from './Gifts';
import BuyGift from './BuyGift';
import HomePage from './Homepage';

class Navigation extends React.Component {
    render() {
        return <BrowserRouter>
            <Routes>
                <Route path="/gifts" element={<Gifts />}></Route>
                <Route path="/categories" element={<Categories />}></Route>
                <Route path="/buyGift" element={<BuyGift />}></Route>
            </Routes>
            {/* <Breadcrumbs separator=">">
                <Link to="/categories">Categories</Link>
                <Link to="/gifts">Gifts</Link>
            </Breadcrumbs> */}
        </BrowserRouter>;
    }
}

export default Navigation;