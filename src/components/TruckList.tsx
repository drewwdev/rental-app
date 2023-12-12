import React, { useEffect, useState } from 'react';
const apiUrl = import.meta.env.VITE_API_URL;

interface Truck {
  _id: string;
  name: string;
  capacity: string;
}

const TruckList: React.FC = () => {
  const [trucks, setTrucks] = useState<Truck[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}/trucks`)
      .then(response => response.json())
      .then(data => setTrucks(data))
      .catch(error => console.error('Error fetching trucks:', error));
  }, []);

  return (
    <ul>
      {trucks.map(truck => (
        <li key={truck._id}>{truck.name} - {truck.capacity}</li>
      ))}
    </ul>
  );
};

export default TruckList;
