import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Trip from '../components/trips';


const BookingSeat = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch('trips.json')
            .then(res => res.json())
            .then(data => {
                setTrips(data)
            })
    }, [])


    return (
        <div className='container mx-auto'>
            <div className="px-10">
                {
                    trips.map(trip => <Trip trip={trip} />)
                }
            </div>

        </div>
    );
};

export default BookingSeat;