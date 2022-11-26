import Main from "../../Layout/Main";
import Login from "../../Pages/AuthenticationPages/LoginPage/Login";
import Register from "../../Pages/AuthenticationPages/RegisterPage/Register";
import Blog from "../../Pages/BlogPage/Blog/Blog";
import Home from "../../Pages/HomePage/Home/Home";
import CategoryProducts from "../../Pages/HomePage/ProductCategories/CategoryProducts/CategoryProducts";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/category/${params.id}`,
                        {
                            headers: {
                                authorization: `bearer ${localStorage.getItem('user-token')}`
                            }
                        }
                    ),
                element: <PrivateRoutes><CategoryProducts></CategoryProducts></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]

    }
])