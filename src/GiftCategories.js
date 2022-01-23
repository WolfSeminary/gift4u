import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const GiftCategories = () => {
    const [category, setCategory] = React.useState('');
    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Categories</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={category}
                    label="Categories"
                    onChange={handleChange}
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