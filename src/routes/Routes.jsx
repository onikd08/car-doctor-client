import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import MyBookings from "../pages/MyBookings/MyBookings";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myBookings/",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/book/service/:id",
        element: <BookService></BookService>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/services/${params.id}`),
      },
    ],
  },
]);

export default routes;
