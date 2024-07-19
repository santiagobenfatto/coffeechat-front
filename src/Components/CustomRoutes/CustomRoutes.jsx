import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProtectedRoute } from '../ProtectedRoutes/ProtectedRoute.jsx'
import { useAuth } from '../../Context/AuthContext.jsx'
import LoginFormContainer from '../LoginForm/LoginFormContainer.jsx'
import RegisterFormContainer from '../Register/RegisterFormContainer.jsx'
import Display from '../Display/Display.jsx'

const CustomRoutes = () => {
    const { isConnected } = useAuth()

    const publicRoutes = [
        {
            path:'/login',
            element: <LoginFormContainer />
        },
        {
            path:'/register',
            element: <RegisterFormContainer />
        },
        {
            path:'*',
            element: <LoginFormContainer />
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