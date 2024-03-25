import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Category from "../pages/Category";

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
            path:"/menu",
            element: <Menu></Menu>,
        }, 
        {
            path:"/category",
            element: <Category></Category>,
        }, 
    ]
  },
]);
