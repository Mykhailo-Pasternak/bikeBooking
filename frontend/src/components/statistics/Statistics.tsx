import React from 'react';
import { Bike } from '../../App';
import { StyledStatistics, SubTitle, Title } from './statistics.styled';
interface StatisticsProps {
    bikes: Bike[];
}

const Statistics: React.FC<StatisticsProps> = ({ bikes }) => {
    const totalBikes = bikes.length;
    const availableBikes = bikes.filter((bike) => bike.status === 'Available').length;
    const busyBikes = bikes.filter((bike) => bike.status === 'Busy').length;
    const averageCost = bikes.length > 0 ? bikes.reduce((sum, bike) => sum + bike.price, 0) / bikes.length : 0;

    return (
        <StyledStatistics>
            <Title>STATISTICS</Title>
            <SubTitle>Total Bikes: <strong>{totalBikes}</strong></SubTitle>
            <SubTitle>Available Bikes:<strong>{availableBikes}</strong> </SubTitle>
            <SubTitle>Busy Bikes: <strong>{busyBikes}</strong></SubTitle>
            <SubTitle>Average Bike Cost: <strong>{averageCost.toFixed(2)} </strong>UAH/hr.</SubTitle>
        </StyledStatistics>
    );
};

export default Statistics;
