import { Card, CardContent, CardMedia, Typography, CardActions } from "@mui/material";
import ButtonComponent from "./ButtonComponent";

function DogCard({ dog, deleteDog }) {
    return (
        <Card>
            <CardMedia component="img" image={dog?.image} height="150" />
            <CardContent>
                <Typography variant={"h5"}>{dog?.name}</Typography>
            </CardContent>
            <CardActions>
                <ButtonComponent label="Delete" onOkClick={() => deleteDog(dog?.id)} />
            </CardActions>
        </Card>
    );
}

export default DogCard;
