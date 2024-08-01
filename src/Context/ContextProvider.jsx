import { createContext, useContext, useState } from 'react'

const Context = createContext()


const ContextProvider = ({children}) => {
    const [ convers, setConvers ] = useState({})
    

    const conversURL = 'http://localhost:3001/api/users/user/convers'
    const messagesURL = 'http://localhost:3001/api/convers/conver/messages'


    const fetchConvers = async () => {
        try {
            const response = fetch(conversURL, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if(response.status.ok){
                setConvers(response)
                return convers
            }       
        } catch (error) {
            console.log(error)
        }
     
    }
    
    
    const fetchMessagesByConverId = async (converId) => {

        try {
            const existingConver = convers.filter( conver => conver.converId == converId)

        if(existingConver && existingConver.messages &&  existingConver.lentgh > 0){
            return existingConver.messages
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
                setConvers((prevConvers) => {
                    prevConvers.map( conver => 
                        conver.conver_id == converId
                        ? {...conver, messages: data.messages}
                        : conver
                    )
                })
            }
        }
        } catch (error) {
            console.log(error)
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

