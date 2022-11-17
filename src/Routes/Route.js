import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Admin from "../pages/Admin/Admin";
import BookingSeat from "../pages/BookingSeat";
import Home from "../pages/Home/Home";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [

            {
                path: '/',
                element: <Home />
            },
            {
                path: '/search',
                element: <BookingSeat />
            },
            {
                path: '/admin',
                element: <Admin />
            },
        ]
    }

])