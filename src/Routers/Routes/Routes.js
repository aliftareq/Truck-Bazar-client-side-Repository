import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import Login from "../../Pages/AuthenticationPages/LoginPage/Login";
import Register from "../../Pages/AuthenticationPages/RegisterPage/Register";
import Blog from "../../Pages/BlogPage/Blog/Blog";
import Alladmin from "../../Pages/DashBoardPage/Alladmin/Alladmin";
import AllBuyers from "../../Pages/DashBoardPage/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/DashBoardPage/AllSellers/AllSellers";
import ReportedItems from "../../Pages/DashBoardPage/ReportedItems/ReportedItems";
import Home from "../../Pages/HomePage/Home/Home";
import CategoryProducts from "../../Pages/HomePage/ProductCategories/CategoryProducts/CategoryProducts";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
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

    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <MyAppointments></MyAppointments>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     loader: ({ params }) => fetch(`https://doctors-portal-server-lyart-eight.vercel.app/booking/${params.id}`),
            //     element: <Payment></Payment>
            // },
            {
                path: '/dashboard',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/all-admin',
                element: <AdminRoute><Alladmin></Alladmin></AdminRoute>
            },
            // {
            //     path: '/dashboard/add-doctor',
            //     element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            // },
            {
                path: '/dashboard/reported-items',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
        ]
    }
])