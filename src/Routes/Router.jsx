import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Meals from './../pages/Meals';
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import SingleMeal from "../pages/SingleMeal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
        {
            path:"/",
            element: <Home></Home>,
        }, 
        {
            path:"/meals",
            element: <Meals></Meals>,
        }, 
        {
            path:"/meals/:id",
            element: <SingleMeal></SingleMeal>,
        }, 
        {
            path:"/category",
            element: <Category></Category>,
        }, 
        {
            path:"/login",
            element: <Login></Login>,
        }, 
        {
            path:"/signup",
            element: <SignUp></SignUp>,
        }, 
        
    ]
  },
]);
