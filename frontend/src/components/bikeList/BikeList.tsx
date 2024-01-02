import React from 'react';
import { Bike } from '../../App';


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
        <>
            <ul>
                {sortedBikes.map((bike) => (
                    <li key={bike.id}>
                        <strong>ID:</strong> {bike.id}, <strong>Name:</strong> {bike.name},{' '}
                        <strong>Type:</strong> {bike.type}, <strong>Status:</strong>
                        <div>
                            <label>
                                Change Status:
                                <select
                                    value={bike.status}
                                    onChange={(e) => onStatusChange(bike.id, e.target.value as 'Available' | 'Busy' | 'Unavailable')}
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

export default BikeList;