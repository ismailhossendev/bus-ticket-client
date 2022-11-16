import React from 'react';

const BusSeat = ({ bus, selectedSeat, setSelectedSeat }) => {
    const { seatDetails, bookedSeat } = bus;

    return (
        <div className="grid grid-cols-2 gap-10">
            <div className={`grid gap-1 grid-cols-${seatDetails.row === 4 ? 2 : 1}`}>
                {seatDetails.row === 4 &&
                    <div className="text-center">
                        {
                            [...Array(seatDetails.perRow)].map((sea, i) => {
                                let booked = ""
                                let selectedClass = ""
                                const seatNumber = seatDetails.row === 4 ? 1 : 0
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