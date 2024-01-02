import React from 'react';
import { Bike } from '../../App';

interface StatisticsProps {
    bikes: Bike[];
}

const Statistics: React.FC<StatisticsProps> = ({ bikes }) => {
    const totalBikes = bikes.length;
    const availableBikes = bikes.filter((bike) => bike.status === 'Available').length;
    const busyBikes = bikes.filter((bike) => bike.status === 'Busy').length;
    const averageCost = bikes.length > 0 ? bikes.reduce((sum, bike) => sum + bike.price, 0) / bikes.length : 0;

    return (
        <div>
            <p>Total Bikes: {totalBikes}</p>
            <p>Available Bikes: {availableBikes}</p>
            <p>Busy Bikes: {busyBikes}</p>
            <p>Average Bike Cost: {averageCost.toFixed(2)}</p>
        </div>
    );
};

export default Statistics;
