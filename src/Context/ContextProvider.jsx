import { createContext } from 'react'

const Context = createContext()


const ContextProvider = ({children}) => {
    
    /*
        Eventos para sockets:
        >>sendMessage
        >>receiveMessage
        >>convers (socket.room(converId))
        >>convers (socket.sid = userID) ó sender  
    
    Los contactos se se pasan por http con fetch, sin ws.
        >>('/requests')getRequest    
        >>('/contacts')getContacts
    */
    
    
    // const contextValue = {
    //     getConvers,
    //     getConverMessages,
    //     getContacts,
    //     getRequests
    // }
    
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider

