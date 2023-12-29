import React, { useEffect, useState } from 'react';
import BikeForm from './components/form/BikeForm';
export interface Bike {
  id: string;
  name: string;
  type: string;
  color: string;
  wheelSize: number;
  price: number;
  description: string;
  status: 'Available' | 'Busy' | 'Unavailable'
}

const App: React.FC = () => {
  // const [data, setData] = useState(null)
  const [bikes, setBikes] = useState<Bike[]>([]);
  console.log('bikes:', bikes);

  const [data, setData] = useState("");

  // useEffect(() => {
  //   fetch('/api')
  //     .then(res => res.json())
  //     .then(res => setData(res.message))
  // },
  //   [])

  const handleSave = (newBike: Bike) => {
    setBikes([...bikes, newBike]);
  };

  return (
    <div>
      {/* {!data ? 'Loading...' : data} */}

      <BikeForm onSave={handleSave} bikes={bikes} />

      <h2>Bike List:</h2>
      <ul>
        {bikes.map((bike) => (
          <li key={bike.id}>
            <strong>ID:</strong> {bike.id}, <strong>Name:</strong> {bike.name}, <strong>Type:</strong> {bike.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
