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

      // login, register ve home sayfaları
      { path: "login",    element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "home",     element: <HomePage /> },

      // Bilinmeyen herhangi bir yol da /home’a
      { path: "*", element: <Navigate to="/home" replace /> },
    ],
  },
]);
