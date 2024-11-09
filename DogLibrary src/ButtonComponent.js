import { Button } from "@mui/material";

function ButtonComponent({ label, onOkClick }) {
    return (
        <Button variant="contained" onClick={onOkClick} fullWidth>
            {label}
        </Button>
    );
}

export default ButtonComponent;
