
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Trip from '../components/trips';
import { mainContext } from '../contexts/MainContext';


const BookingSeat = () => {
    const [trips, setTrips] = useState([]);
    const { dateFormat: date, } = useContext(mainContext)
    const searchDetails = localStorage.getItem('searchDetails')
    const { origin, destination, busType, busClass } = JSON.parse(searchDetails)
    useEffect(() => {
        fetch(`http://localhost:5000/trips?origin=${origin}&destination=${destination}&busType=${busType}`)
            .then(res => res.json())
            .then(data => {
                setTrips(data)
            })
    }, [origin, destination, busType])


    return (
        <div className='container mx-auto'>
            {trips.length === 0 ? <p className="text-center">No Trips Found on {date}</p> :
                <p>{trips.length} Trip found on {date}</p>
            }
            <div className="grid lg:grid-cols-2 ">
                {
                    trips.map(trip => <Trip trip={trip} date={date} />)
                }
            </div>

        </div>
    );
};

export default BookingSeat;