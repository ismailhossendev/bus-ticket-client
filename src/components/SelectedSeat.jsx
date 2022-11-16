import React from 'react';

const SelectedSeat = ({ selectedSeat, setSelectedSeat, trip }) => {
    return (
        <div className="overflow-x-auto">
            <p>Red Color Already Booked </p>
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm text-start">
                <thead>
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Seat
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Bus Type
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Price
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Time
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {
                        selectedSeat.map(seat => <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {seat}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{trip.busType}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{trip.price} BDT</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{trip.schedule}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <div className="flex gap-3 my-3">
                <button onClick={() => setSelectedSeat([])} className='py-1 px-4 bg-rose-500 hover:bg-rose-600 text-white rounded'>Cancel</button>
                <button className='py-1 px-4 bg-yellow-400  text-rose-900 rounded hover:bg-yellow-500'>Confirm</button>
            </div>
        </div>

    );
};

export default SelectedSeat;