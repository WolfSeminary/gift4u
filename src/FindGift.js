import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const FindGift = () => {
    let navigate = useNavigate();
    return <Button onClick={()=>navigate('/categories')} variant="contained">Find a Gift</Button>
}

export default FindGift;