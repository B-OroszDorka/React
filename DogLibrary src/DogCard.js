import { Card, CardContent, CardMedia, Typography, Grid, CardActions } from "@mui/material";
import ButtonComponent from "./ButtonComponent";

function DogCard({ dog, deleteDog }) {
    return (
        <Grid item xs={12} md={4} lg={3}>
            <Card>
                <CardMedia component="img" image={dog?.image} height="150" />
                <CardContent>
                    <Typography variant={"h5"}>{dog?.name}</Typography>
                </CardContent>
                <CardActions>
                    <ButtonComponent label="Delete" onOkClick={() => deleteDog(dog?.id)} />
                </CardActions>
            </Card>
        </Grid>
    );
}

export default DogCard;
