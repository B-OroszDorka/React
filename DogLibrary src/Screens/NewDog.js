import React, { useState, useContext } from "react";
import DogContext from "../Context/DogContext";
import TextComponent from "../TextComponent";
import { Card, Grid, Container } from "@mui/material";
import ButtonComponent from "../InputComponents/ButtonComponent";
import { useNavigate } from "react-router-dom";

function NewDog() {
    const navigate = useNavigate();
    const { addDog } = useContext(DogContext);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const saveDog = () => {
        if (!name.trim() || !image.trim()) {
            alert("Please provide both Breed's name and Image source.");
            return;
        }

        addDog({ name: name.trim(), image: image.trim() });
        navigate('/');
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                    <ButtonComponent label="Save" onOkClick={saveDog} />
                </Grid>
                <Grid item xs={12}>
                    <ButtonComponent label="Back" onOkClick={() => navigate('/')} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default NewDog;
