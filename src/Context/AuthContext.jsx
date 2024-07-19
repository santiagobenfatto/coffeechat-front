import { createContext, useContext, useEffect, useState } from 'react'
import { socket } from '../socket/socket.js'


const AuthContext = createContext()


const AuthProvider = ({children}) => {
    
    const [ isConnected, setIsConnected ] = useState(socket.connected)
    
        //Socket connection
        const connectSocket = () => {
            socket.connect()
            console.log(socket)
        }
    
        const disconnectSocket = () => {
            socket.disconnect()
        }

        const checkSession = async () => {
            let URL = 'http://localhost:3001/api/users/user/check'
            if(!isConnected){
                //funcion en el servidor que verifique el request.
                const response = await fetch(URL, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                if(response.status === 200){
                        navigate('/display')
                        connectSocket()
                }
            }
        }


    useEffect(() => {

        const onConnection = () => {
            setIsConnected(true)
        }

        const onDisconnection = () => {
            setIsConnected(false)
        }
        
        socket.on('connect', onConnection)
        socket.on('disconnect', onDisconnection)
        
        return () => {
            socket.off('connect', onConnection)
            socket.off('disconnect', onDisconnection)
            
        };
    }, [isConnected]);



  
    const contextValue = {
        isConnected,
        connectSocket,
        disconnectSocket,
        checkSession
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