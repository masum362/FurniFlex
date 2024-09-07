import App from '@/App';
import Home from '@/pages/home/Home';
import Login from '@/pages/login/Login';
import Products from '@/pages/products/Products';
import SignUp from '@/pages/signUp/SignUp';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        errorElement: <div>Error...</div>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />,
            },

        ],

    },
    {
        path: "/signin",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    }
])