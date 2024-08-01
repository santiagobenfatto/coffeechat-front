import { createContext, useContext, useEffect, useState } from 'react'
import { socket } from '../socket/socket.js'


const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const [ isConnected, setIsConnected ] = useState()
    const [ user, setUser ] = useState()

        const connectSocket = () => {
            socket.connect()
        }
    
        const disconnectSocket = () => {
            socket.disconnect()
        }
        
        
    useEffect(() => {

        const onConnection = () => {
            setIsConnected(true)
        }

        const onDisconnection = () => {
            setIsConnected(false)
        }
        
        socket.on('connect', () => {
            onConnection()
        })
        socket.on('disconnect', onDisconnection)
        
        socket.on('userData', (data) => {
            if(data){
            setUser(data)
            }
        })

        return () => {
            socket.off('connect', onConnection)
            socket.off('disconnect', onDisconnection)
            
        };
    }, [isConnected]);


    const contextValue = {
        isConnected,
        connectSocket,
        disconnectSocket,
        user
    }

    return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}


export default AuthProvider