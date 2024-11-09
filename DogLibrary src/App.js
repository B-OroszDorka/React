import AllDogs from "./AllDogs";
import NewDog from "./NewDog";
import Page404 from "./Page404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DogList from "./Dogs";
import { useState } from "react";

function App() {
  const [dogs, setDogs] = useState(DogList()); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<AllDogs dogs={dogs} setDogs={setDogs}/>}/>
        <Route path="/new" element={<NewDog dogs={dogs} setDogs={setDogs}/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;