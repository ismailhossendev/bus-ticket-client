import { format } from 'date-fns';
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
        <div className="p-6 py-12  my-5 rounded bg-gray-400 text-gray-900" bis_skin_checked="1">
            <div className="container mx-auto" bis_skin_checked="1">
                <div className="flex flex-col lg:flex-row items-center justify-between" bis_skin_checked="1">
                    <div className="">
                        <p>{trip.name}</p>
                        <p>{trip.origin} To {trip.destination}</p>
                    </div>
                    <div className="space-x-2 text-center py-2 lg:py-0" bis_skin_checked="1">
                        <p>Bus Type:{trip.busType}</p>

                    </div>
                    <button onClick={() => setOpen(!open)} className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block hover:bg-gray-500 bg-gray-50 text-gray-900 border-gray-400">{open ? "Close " : "View Seats"}</button>
                </div>
            </div>
            {open &&
                <div className="grid lg:grid-cols-2 my-10">
                    <div className="lg:w-72 h-max border border-black mx-auto p-2">
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