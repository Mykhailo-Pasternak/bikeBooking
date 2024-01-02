import React from 'react';
import { Bike } from '../../App';
import { DeleteButton, ID, Label, Price, Select, StatusAndPrice, StyledBike, StyledBikeList, Title, } from './BikeList.styled';

interface BikeListProps {
    bikes: Bike[];
    onStatusChange: (id: string, newStatus: 'Available' | 'Busy' | 'Unavailable') => void;
    onDelete: (id: string) => void;
}

const BikeList: React.FC<BikeListProps> = ({ bikes, onStatusChange, onDelete }) => {
    const sortedBikes = bikes.sort((a, b) => {
        const statusOrder = { Available: 1, Busy: 2, Unavailable: 3 };
        return statusOrder[a.status] - statusOrder[b.status];
    });

    return (
        <StyledBikeList>
            {sortedBikes.map((bike) => (
                <StyledBike key={bike.id} $status={bike.status}>
                    <Title $status={bike.status}>
                        <strong>{bike.name}</strong> - {bike.type} ({bike.color})
                    </Title>
                    <ID $status={bike.status}>ID: {bike.id}</ID>

                    <StatusAndPrice>
                        <Label>
                            Status:
                            <Select
                                value={bike.status}
                                onChange={(e) => onStatusChange(bike.id, e.target.value as 'Available' | 'Busy' | 'Unavailable')}
                            >
                                <option value="Available">Available</option>
                                <option value="Busy">Busy</option>
                                <option value="Unavailable">Unavailable</option>
                            </Select>
                        </Label>
                        <Price $status={bike.status}>{bike.price} UAH/hr.</Price>
                    </StatusAndPrice>

                    <DeleteButton onClick={() => onDelete(bike.id)}>х</DeleteButton>
                </StyledBike>
            ))}
        </StyledBikeList>

    );
};

export default BikeList;