import { Button } from '@mui/material';

function ButtonComponent({label, color}) {
    return (
          <Button color={color} variant="contained" fullWidth>
            {label}
          </Button>
    );
  }
  
  export default ButtonComponent;