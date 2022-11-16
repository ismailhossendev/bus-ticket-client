import { createBrowserRouter } from "react-router-dom";
import BookingSeat from "../pages/BookingSeat";
import Home from "../pages/Home";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/search',
        element: <BookingSeat />
    },
])