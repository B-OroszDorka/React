import { TextField, MenuItem } from "@mui/material";

function SelectComponent({ names, label }) {

    return (
            <TextField
                select
                label={label}
            >
                {names.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
    )
}

export default SelectComponent;
