import React, { useContext } from "react";
import DogContext from "../Context/DogContext";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Container } from "@mui/material";
import ButtonComponent from "../InputComponents/ButtonComponent";
import DogCard from "../InputComponents/DogCard";

function AllDogs() {
    const navigate = useNavigate();
    const { dogs, deleteDog } = useContext(DogContext);

    const addNewDog = () => {
        navigate('/new');
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">All Dogs</Typography>
                </Grid>
                    {dogs?.map((dog) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={dog.id}>
                        <DogCard dog={dog} deleteDog={deleteDog} />
                    </Grid>
                    ))}
                <Grid item xs={12} style={{ marginTop: "20px" }}>
                    <ButtonComponent label="New Dog" onOkClick={addNewDog} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default AllDogs;
