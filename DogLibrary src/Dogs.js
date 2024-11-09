import { useState } from "react";

function DogList() {
    const InitialDogs = [
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
  
    const [dogs, setDogs] = useState(InitialDogs);
    return dogs;
  }
  
  export default DogList;
  