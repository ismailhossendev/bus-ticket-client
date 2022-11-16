import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';


export const mainContext = createContext();
const MainContext = ({ children }) => {
    const [date, setDate] = useState(new Date());
    const dateFormat = format(date, "PP")


    const value = { date, setDate, dateFormat }
    return (
        <mainContext.Provider value={value}>
            {children}
        </mainContext.Provider>
    );
};

export default MainContext;