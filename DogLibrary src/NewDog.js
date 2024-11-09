import React, { useState } from "react";
import TextComponent from "./TextComponent";
import { Card, Grid, Container } from "@mui/material";
import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router-dom";

function NewDog({ dogs, setDogs }) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const onNavigateToAllDogs = () => {
        navigate('/');
    };

    const saveDog = () => {
        if (!name.trim() || !image.trim()) {
            alert("Please provide both Breed's name and Image source.");
            return;
        }

        const newDog = {
            id: dogs.length + 1,
            name: name.trim(),
            image: image.trim()
        };
        setDogs([...dogs, newDog]);
        console.log("New Dog added:", newDog);
        onNavigateToAllDogs();
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                    <Card style={{ padding: "20px" }}>
                        <TextComponent 
                            label="Breed's name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                        <TextComponent 
                            label="Image source" 
                            value={image} 
                            onChange={(e) => setImage(e.target.value)} 
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <ButtonComponent label="Save" onOkClick={saveDog} />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <ButtonComponent label="Back" onOkClick={onNavigateToAllDogs} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default NewDog;