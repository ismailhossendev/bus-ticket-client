
import React, { useEffect } from 'react';
import { useState } from 'react';

const BusSeat = ({ bus, date, selectedSeat, setSelectedSeat, refresh }) => {
    const [trip, setTrip] = useState({})
    const { seatDetails } = bus;
    useEffect(() => {
        fetch(`http://localhost:5000/view-seats?date=${date}&tripId=${bus._id}`)
            .then(res => res.json())
            .then(data => {
                setTrip(data)
            })
    }, [date, bus, refresh])
    const bookedSeat = trip.bookedSeat
    if (!bookedSeat) {
        return
    }
    return (
        <div className="grid grid-cols-2 gap-10">
            <div className={`grid gap-1 grid-cols-${seatDetails?.row === 4 ? 2 : 1}`}>
                {seatDetails?.row === 4 &&
                    <div className="text-center">
                        {
                            [...Array(seatDetails.perRow)].map((sea, i) => {
                                let booked = ""
                                let selectedClass = ""
                                const seatNumber = seatDetails?.row === 4 ? 1 : 0
                                const thisSeat = (String.fromCharCode(i + 97) + seatNumber).toUpperCase()
                                bookedSeat.forEach(element => {
                                    if (element === thisSeat) {
                                        booked = "booked"
                                    }
                                });
                                selectedSeat.forEach(element => {
                                    if (element === thisSeat) {
                                        selectedClass = "bg-indigo-500 text-white"
                                    }
                                });
                                return <button
                                    disabled={booked}
                                    onClick={() => setSelectedSeat([...selectedSeat, thisSeat])}
                                    className={`border ${selectedClass} border-black block w-full hover:bg-gray-500 disabled:bg-red-500 disabled:cursor-not-allowed p-2`}>
                                    {thisSeat}
                                </button>
                            })
                        }
                    </div>
                }
                <div className="text-center">
                    {
                        [...Array(seatDetails.perRow)].map((sea, i) => {
                            let booked = ""
                            let selectedClass = ""
                            const seatNumber = seatDetails.row === 4 ? 2 : 1
                            const thisSeat = (String.fromCharCode(i + 97) + seatNumber).toUpperCase()
                            bookedSeat.forEach(element => {
                                if (element === thisSeat) {
                                    booked = "booked"
                                }
                            });
                            selectedSeat.forEach(element => {
                                if (element === thisSeat) {
                                    selectedClass = "bg-indigo-500 text-white"
                                }
                            });
                            return <button
                                disabled={booked}
                                onClick={() => setSelectedSeat([...selectedSeat, thisSeat])}
                                className={`border ${selectedClass} border-black block w-full hover:bg-gray-500 disabled:bg-red-500 disabled:cursor-not-allowed p-2`}>
                                {thisSeat}
                            </button>
                        })
                    }
                </div>
            </div>
            <div className="grid grid-cols-2 gap-1">
                <div className="">
                    {
                        [...Array(seatDetails.perRow)].map((sea, i) => {
                            let booked = ""
                            let selectedClass = ""
                            const seatNumber = seatDetails.row === 4 ? 3 : 2
                            const thisSeat = (String.fromCharCode(i + 97) + seatNumber).toUpperCase()
                            bookedSeat.forEach(element => {
                                if (element === thisSeat) {
                                    booked = "booked"
                                }
                            });

                            selectedSeat.forEach(element => {
                                if (element === thisSeat) {
                                    selectedClass = "bg-indigo-500 text-white"
                                }
                            });
                            return <button
                                disabled={booked}
                                onClick={() => setSelectedSeat([...selectedSeat, thisSeat])}
                                className={`border ${selectedClass} border-black block w-full hover:bg-gray-500 disabled:bg-red-500 disabled:cursor-not-allowed p-2`}>
                                {thisSeat}
                            </button>
                        })
                    }
                </div>
                <div className="">
                    {
                        [...Array(seatDetails.perRow)].map((sea, i) => {
                            let booked = ""
                            let selectedClass = ""
                            const seatNumber = seatDetails.row === 4 ? 4 : 3
                            const thisSeat = (String.fromCharCode(i + 97) + seatNumber).toUpperCase()
                            bookedSeat.forEach(element => {
                                if (element === thisSeat) {
                                    booked = "booked"
                                }
                            });

                            selectedSeat.forEach(element => {
                                if (element === thisSeat) {
                                    selectedClass = "bg-indigo-500 text-white"
                                }
                            });
                            return <button
                                disabled={booked}
                                onClick={() => setSelectedSeat([...selectedSeat, thisSeat])}
                                className={`border ${selectedClass} border-black block w-full hover:bg-gray-500 disabled:bg-red-500 disabled:cursor-not-allowed p-2`}>
                                {thisSeat}
                            </button>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default BusSeat;