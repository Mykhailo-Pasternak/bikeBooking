import React, { useEffect, useState } from 'react';
import BikeForm from './components/form/BikeForm';
import axios from 'axios';
import BikeList from './components/bikeList/BikeList';
import Statistics from './components/statistics/Statistics';
import { StyledApp, StyledBikeList, StyledFormEndStatistics, StyledRoot, Wrapper, } from './app.style';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
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



const App: React.FC = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBikes = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3001/bikes');
      setBikes(response.data);
    } catch (error) {
      setError('Error fetching bikes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBikes();
  }, []);

  const handleSave = async (newBike: Bike) => {
    try {
      const response = await axios.post('http://localhost:3001/add-bike', newBike);
      setBikes((prevBikes) => [...prevBikes, response.data]);
    } catch (error) {
      console.error('Error during POST request:', error);
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'Available' | 'Busy' | 'Unavailable') => {
    try {
      const response = await axios.patch(`http://localhost:3001/update-bike-status/${id}`, { status: newStatus });
      setBikes((prevBikes) => prevBikes.map((bike) => (bike.id === id ? response.data : bike)));
    } catch (error) {
      console.error('Error during PATCH request:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/delete-bike/${id}`);
      setBikes((prevBikes) => prevBikes.filter((bike) => bike.id !== id));
    } catch (error) {
      console.error('Error during DELETE request:', error);
    }
  };

  return (
    <div>
      <Header />
      <StyledApp>
        <Wrapper>
          <StyledBikeList>
            {loading && <div>Loading...</div>}

            {error && <div>{error}</div>}
            {bikes.length > 0 && <BikeList bikes={bikes} onStatusChange={handleStatusChange} onDelete={handleDelete} />}
          </StyledBikeList>
          <StyledFormEndStatistics>
            <BikeForm onSave={handleSave} bikes={bikes} />
            <Statistics bikes={bikes} />
          </StyledFormEndStatistics>
        </Wrapper>
      </StyledApp>
      <Footer />
    </div>
  );
};

export default App;
