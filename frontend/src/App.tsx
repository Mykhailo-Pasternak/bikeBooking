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
  status: 'Available' | 'Busy' | 'Unavailable';
}

const BikeList: React.FC<{
  bikes: Bike[];
  onStatusChange: (id: string, newStatus: 'Available' | 'Busy' | 'Unavailable') => void;
  onDelete: (id: string) => void;
}> = ({
  bikes,
  onStatusChange,
  onDelete
}) => {
    const sortedBikes = bikes.sort((a, b) => {
      const statusOrder = { Available: 1, Busy: 2, Unavailable: 3 };
      return statusOrder[a.status] - statusOrder[b.status];
    });

    return (
      <>
        <ul>
          {sortedBikes.map((bike) => (
            <li key={bike.id} >
              <strong>ID:</strong> {bike.id}, <strong>Name:</strong> {bike.name},{' '}
              <strong>Type:</strong> {bike.type}, <strong>Status:</strong>
              <div>
                <label>
                  Change Status:
                  <select
                    value={bike.status}
                    onChange={(e) =>
                      onStatusChange(bike.id, e.target.value as 'Available' | 'Busy' | 'Unavailable')
                    }
                  >
                    <option value="Available">Available</option>
                    <option value="Busy">Busy</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </label>
              </div>
              <span>
                <button onClick={() => onDelete(bike.id)}>Delete</button>
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  };

const App: React.FC = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((res) => {
        setBikes(res);
      });
  }, []);

  const handleSave = (newBike: Bike) => {
    setBikes((prevBikes) => [...prevBikes, newBike]);
  };

  const handleStatusChange = (id: string, newStatus: 'Available' | 'Busy' | 'Unavailable') => {
    setBikes((prevBikes) =>
      prevBikes.map((bike) => (bike.id === id ? { ...bike, status: newStatus } : bike))
    );
  };

  const handleDelete = (id: string) => {
    setBikes((prevBikes) => prevBikes.filter((bike) => bike.id !== id));
  };

  return (
    <div>
      <BikeForm onSave={handleSave} bikes={bikes} />

      {bikes.length > 0 && <BikeList bikes={bikes} onStatusChange={handleStatusChange} onDelete={handleDelete} />}
    </div>
  );
};

export default App;
