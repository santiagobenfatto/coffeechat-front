import { Navigate, Outlet} from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext.jsx'


export const ProtectedRoute = () => {
    const { isConnected } = useAuth()
    
    if(!isConnected) {
        return <Navigate to='/login' /> 
    }

    return <Outlet />

}

