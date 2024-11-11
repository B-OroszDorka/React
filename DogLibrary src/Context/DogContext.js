import React, { createContext, useState } from "react";

const DogContext = createContext();

export function DogProvider({ children }) {
    const initialDogs = [
        {
            id: 1,
            name: 'Cane Corso',
            image: 'https://www.zooplus.hu/magazin/wp-content/uploads/2017/03/cane-corso-welpe.jpg'
        },
        {
            id: 2,
            name: 'Hovawart',
            image: 'https://www.azenkutyam.hu/wp-content/uploads/2021/10/gettyimages-530592347-1024x683.jpg'
        }
    ];

    const [dogs, setDogs] = useState(initialDogs);

    const deleteDog = (id) => setDogs((prevDogs) => prevDogs.filter(dog => dog.id !== id));
    const addDog = (dog) => {
        const newId = dogs.length ? Math.max(...dogs.map(d => d.id)) + 1 : 1;
        const newDog = { ...dog, id: newId };
        setDogs((prevDogs) => [...prevDogs, newDog]);
    };
    return (
        <DogContext.Provider value={{ dogs, addDog, deleteDog }}>
            {children}
        </DogContext.Provider>
    );
}

export default DogContext;
