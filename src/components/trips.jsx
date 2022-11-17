import React from 'react';
import { useState } from 'react';
import BusSeat from '../pages/BusSeat';
import SelectedSeat from './SelectedSeat';

const Trip = ({ trip, date }) => {
    const [open, setOpen] = useState(false);
    const [selectedSeat, setSelectedSeat] = useState([]);
    const [refresh, setRefresh] = useState(true);

    const handleBooking = () => {
        if (!selectedSeat.length) {
            alert('Please select a seat');
            return;
        }
        const booking = {
            tripId: trip._id,
            seat: selectedSeat,
            bookingDate: date
        };


        fetch('http://localhost:5000/bookSeat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                setRefresh(!refresh)
                setSelectedSeat([]);

            })
    }



    return (
        <div className="lg:p-6 rounded text-gray-900">
            <div className="flex  gap-5 rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img alt="Home" src={trip.image} className="h-56 w-full rounded-md object-cover" />
                <div className="mt-2 text-start">
                    <dl className='text-start'>
                        <div>
                            <dt className="sr-only">Price</dt>
                            <dd className="text-sm text-gray-500">Fare: {trip.price} BDT</dd>
                        </div>
                        <div>
                            <dt className="sr-only">Address</dt>
                            <dd className="font-medium">{trip?.name}</dd>
                        </div>
                    </dl>
                    <div className="mt-6  lg:grid lg:grid-cols-2 flex flex-col  gap-8 text-xs space-x-5 ">
                        <div className="">
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                <svg className="h-4 w-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                </svg>
                                <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p className="text-gray-500">From</p>
                                    <p className="font-medium">{trip.origin}</p>
                                </div>
                            </div>
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                <svg className="h-4 w-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p className="text-gray-500">To</p>
                                    <p className="font-medium">{trip.destination}</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                <svg className="h-4 w-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                                <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p className="text-gray-500">Bus Type</p>
                                    <p className="font-medium">{trip.busType}</p>
                                </div>
                            </div>
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                <svg className="h-4 w-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                                <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p className="text-gray-500">Seat Type</p>
                                    <p className="font-medium">{trip.busClass}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setOpen(!open)} className="btn  btn-primary w-full mt-9 ">{open ? "Close " : "View Seats"}</button>
                </div>
            </div>
            {open &&
                <div className="grid lg:grid-cols-2 my-10">
                    <div className="lg:w-72 w-full border border-black mx-auto p-2">
                        <BusSeat
                            refresh={refresh}
                            bus={trip}
                            date={date}
                            selectedSeat={selectedSeat}
                            setSelectedSeat={setSelectedSeat}
                        />
                    </div>
                    <SelectedSeat
                        selectedSeat={selectedSeat}
                        handleBooking={handleBooking}
                        trip={trip}
                        setSelectedSeat={setSelectedSeat}
                    />
                </div>
            }
        </div>
    );
};

export default Trip;