import { createContext, useContext, useState } from 'react'

const Context = createContext()


const ContextProvider = ({children}) => {
    const [ convers, setConvers ] = useState({})
    

    const conversURL = 'http://localhost:3001/api/users/user/convers'
    const messagesURL = 'http://localhost:3001/api/convers/conver/messages'

    //funcion para mostrar listado convers

    /*
    funcion para mostrar mensajes de dicha conver 
    _guardar en un conver_state {}
    _si ya existe no fetchear nuevamente.
    
    */
    const fetchConvers = async () => {
        const response = fetch(conversURL, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if(response.status == 200){
            setConvers(response)
            return convers
        }
    }
    
    const getConverMessages = (converId) => {
        return convers.filter( conver => conver.converId == converId)
    }

    const fetchMessagesByConverId = async (converId) => {
        const isConver = getConverMessages(converId)

        if(isConver > 0){
            return isConver
        } else {
            const response = await fetch(messagesURL, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if(response.ok){
                const data = await response.json()
                setConvers(data)
            }
        }
    }

    
    const contextValue = {
        convers,
        fetchConvers,
        fetchMessagesByConverId,
    }
    
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

export const useConver = () => {
    return useContext(Context)
}

export default ContextProvider

