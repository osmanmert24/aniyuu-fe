import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../MainLayout";
import Login from "../Login";
import Register from "../Register";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // “/” geldiğinde /home’a yönlendir
      { index: true, element: <Navigate to="/home" replace /> },

<<<<<<< HEAD
      // login, register ve home sayfaları
      { path: "login",    element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "home",     element: <HomePage /> },
=======
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
                path: "/",
                element: <HomePage/>
            },
        ]
    }
])
>>>>>>> 663491c5a05cc72b91304b1a254917b1fb107d58

      // Bilinmeyen herhangi bir yol da /home’a
      { path: "*", element: <Navigate to="/home" replace /> },
    ],
  },
]);
