import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProtectedRoute } from '../ProtectedRoutes/ProtectedRoute.jsx'
import { useAuth } from '../../Context/AuthContext.jsx'
import LoginContainer from '../Login/LoginContainer.jsx'
import RegisterContainer from '../Register/RegisterContainer.jsx'
import Display from '../Display/Display.jsx'

const CustomRoutes = () => {
    const { isConnected } = useAuth()

    const publicRoutes = [
        {
            path:'/login',
            element: <LoginContainer />
        },
        {
            path:'/register',
            element: <RegisterContainer />
        },
        {
            path:'*',
            element: <LoginContainer />
        }

    ]

    const privateRoutes = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children:[
                {
                    path:'/display',
                    element: <Display />
                }
            ]
        }
    ]


    const router = createBrowserRouter([
        ...(isConnected ? privateRoutes : []),
        ...publicRoutes
    ])

    return <RouterProvider router={router} />
}

export default CustomRoutes