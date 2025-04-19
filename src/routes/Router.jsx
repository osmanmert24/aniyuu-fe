import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Login from "../Login";

import Register from "../Register";

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
            }
        ]
    }
])

