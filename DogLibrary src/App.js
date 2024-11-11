import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllDogs from "./Screens/AllDogs";
import NewDog from "./Screens/NewDog";
import { DogProvider } from "./Context/DogContext";

function App() {
    return (
        <DogProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<AllDogs />} />
                    <Route path="/new" element={<NewDog />} />
                </Routes>
            </Router>
        </DogProvider>
    );
}

export default App;
