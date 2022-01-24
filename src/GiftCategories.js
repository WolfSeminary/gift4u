import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const GiftCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const onSelectedCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Categories</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={selectedCategory}
                    label="Categories"
                    onChange={onSelectedCategoryChange}
                >
                    <MenuItem value={1}>Food</MenuItem>
                    <MenuItem value={2}>Attractions</MenuItem>
                    <MenuItem value={3}>Gift Cards</MenuItem>
                    <MenuItem value={4}>Toys</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
export default GiftCategories;