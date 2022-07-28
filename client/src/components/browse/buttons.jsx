import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortBy() {
  const [sort, setSort] = React.useState('');

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 100,maxWidth:160 }} size="small">
      <InputLabel id="demo-select-small">Sort</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={sort}
        label="Sort"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Low-High"}>Price Low-High</MenuItem>
        <MenuItem value={"High-Low"}>Price High-Low</MenuItem>
        <MenuItem value={"Recently-Added"}>Recently Added</MenuItem>
      </Select>
    </FormControl>
  );
}
