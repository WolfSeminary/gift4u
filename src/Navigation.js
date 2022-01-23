import React from 'react';
import { Breadcrumbs } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import Gifts from './Gifts';

class Navigation extends React.Component {
    render() {
        return <BrowserRouter>
            <Routes>
                <Route path="/Gifts" element={<Gifts />}></Route>
                <Route path="/Categories" element={<Categories />}></Route>
            </Routes>
            <Breadcrumbs separator=">">
                <Link to="/Categories">Categories</Link>
                <Link to="/Gifts">Gifts</Link>
            </Breadcrumbs>
        </BrowserRouter>;
    }
}

export default Navigation;