import { Card, CardActions, CardContent, Typography, CardMedia } from '@mui/material';
import ButtonComponent from './ButtonComponent';

function CardComponent({ number, src }) {
  return (
    <Card elevation={4}>
      <CardMedia component="img" image={src} height="140" />
      <CardContent>
        <Typography variant="h5">Interesting Photo {number}</Typography>
      </CardContent>
      <CardActions>
        <ButtonComponent label="DETAILS" color="primary" variant="contained" fullWidth/>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
