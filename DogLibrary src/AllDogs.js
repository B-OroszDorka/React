import React from "react";
import DogCard from "./DogCard";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Container } from "@mui/material";
import ButtonComponent from "./ButtonComponent";

function AllDogs({ dogs, setDogs }) {
    const navigate = useNavigate();

    const deleteDog = (id) => {
        setDogs(dogs.filter(dog => dog.id !== id));
    };

    const addNewDog = () => {
        navigate('/new');
    };

    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">All Dogs</Typography>
                </Grid>
                {dogs?.map((dog) => (
                    <DogCard dog={dog} key={dog.id} deleteDog={deleteDog} />
                ))}
                <Grid item xs={12} style={{ marginTop: "20px" }}>
                    <ButtonComponent label='New Dog' onOkClick={addNewDog} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default AllDogs;