import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../MainLayout";
import Login from "../Login";
import Register from "../Register";
import HomePage from "../pages/HomePage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // “/” geldiğinde /home’a yönlendir
   

      // login, register ve home sayfaları
      { path: "login",    element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "/",     element: <HomePage /> },
      { path: "/home",     element: <Home /> },

      // Bilinmeyen herhangi bir yol da /home’a
      { path: "*", element: <Navigate to="/home" replace /> },
    ],
  },
]);
