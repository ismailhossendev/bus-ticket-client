
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Trip from '../components/trips';
import { mainContext } from '../contexts/MainContext';


const BookingSeat = () => {
    const [trips, setTrips] = useState([]);
    const { dateFormat: date } = useContext(mainContext)

    useEffect(() => {
        fetch(`http://localhost:5000/trips?date=${date}`)
            .then(res => res.json())
            .then(data => {
                setTrips(data)
            })
    }, [date])


    return (
        <div className='container mx-auto'>
            <p>{date}</p>
            <div className="px-10">
                {
                    trips.map(trip => <Trip trip={trip} date={date} />)
                }
            </div>

        </div>
    );
};

export default BookingSeat;