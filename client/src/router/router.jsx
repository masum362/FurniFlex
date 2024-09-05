import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path:"",
        element:<div>Home</div>,
        errorElement:<div>Error...</div>,
        children:[
            {
                path:"/",
                element:<div>Home</div>,
            },
            {
                path:"/login",
                element:<div>Login</div>,
            },
            {
                path:"/signup",
                element:<div>Sign Up</div>,
            }
        ]
    }
])