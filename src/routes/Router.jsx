import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Login from "../Login";

import Register from "../Register";
import HomePage from "../pages/HomePage";



export const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout/>,

        children: [

            {
                path: "/login",
                element: <Login/>
            },

            {
                path: "/register",
                element: <Register/>
            },

            {
                path: "/home",
                element: <HomePage/>
            },
        ]
    }
])

