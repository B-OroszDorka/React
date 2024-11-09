import React from "react";
import { TextField } from "@mui/material";

function TextComponent({ label, value, onChange }) {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            fullWidth
            variant="outlined"
        />
    );
}

export default TextComponent;
