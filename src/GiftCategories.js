import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GiftCategories() {
  const [category , setCategory ] = React.useState('');

  const onSelectedCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 140 }}>
        <InputLabel id="demo-simple-select-helper-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
          label="category"
          onChange={onSelectedCategoryChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>category1</MenuItem>
          <MenuItem value={20}>category2</MenuItem>
          <MenuItem value={30}>category3</MenuItem>
        </Select>
      </FormControl>
 
    </div>
  );
}
