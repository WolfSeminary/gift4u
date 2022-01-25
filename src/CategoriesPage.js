import React from 'react';
import Categories from './Categories'
import { useNavigate } from "react-router-dom";
import MainAppBar from './MainAppBar';

    

function CategoriesPage() {
    return ( 
        <>
        <MainAppBar/>
        <Categories/>
    </>
     );
}

export default CategoriesPage;