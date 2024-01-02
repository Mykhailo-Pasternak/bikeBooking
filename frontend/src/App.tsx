import React, { useEffect, useState } from 'react';
import BikeForm from './components/form/BikeForm';
import axios from 'axios';
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

  const fetchBikes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/bikes');
      setBikes(response.data);
    } catch (error) {
      console.error('Error during GET request:', error);
    }
  };

  useEffect(() => {
    fetchBikes();
  }, []);

  const handleSave = async (newBike: Bike) => {
    try {
      const response = await axios.post('http://localhost:3001/add-bike', newBike);
      fetchBikes()
    } catch (error) {
      console.error('Error during POST request:', error);
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'Available' | 'Busy' | 'Unavailable') => {
    try {
      await axios.patch(`http://localhost:3001/update-bike-status/${id}`, { status: newStatus });
      fetchBikes()
    } catch (error) {
      console.error('Error during PATCH request:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/delete-bike/${id}`);
      fetchBikes()
    } catch (error) {
      console.error('Error during DELETE request:', error);
    }
  };

  return (
    <div>
      <BikeForm onSave={handleSave} bikes={bikes} />

      {bikes.length > 0 && <BikeList bikes={bikes} onStatusChange={handleStatusChange} onDelete={handleDelete} />}
    </div>
  );
};

export default App;
