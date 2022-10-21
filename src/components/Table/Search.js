import React from "react";
import { FormControl, TextField } from '@mui/material';

const Search = ({ handleChange }) => {
    return (
        <div style={{ display: "flex", marginBottom: 2 }}>
            <FormControl fullWidth margin="normal" sx={{ mx: 1 }}>
              <TextField
                name="reported_date"
                type="date"
                onChange={handleChange}
                size="small"
              />
            </FormControl>
            <FormControl fullWidth margin="normal" sx={{ mx: 1 }}>
              <TextField
                name="offence_count"
                type="number"
                onChange={handleChange}
                size="small"
              />
            </FormControl>
        </div>
    )
}

export default Search;