import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

export default function SearchBox ({onChange, ...props}) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }

    return (
        <Grid container columns={12} justifyContent="center" {...props}>
            <Grid item xs={12} sm={6} paddingX={2}>
                <TextField
                    fullWidth
                    variant='outlined'
                    size='small'
                    value={value}
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: <SearchIcon/>
                    }}
                />
            </Grid>
        </Grid>
    )
}
