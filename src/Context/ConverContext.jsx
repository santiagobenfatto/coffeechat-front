

/*
======================== DEPRECATED ========================
*/


// import { createContext, useContext, useState } from 'react'
// import config from '../../config.js'

// const Context = createContext()


// const ConverContext = ({children}) => {
//     const [ convers, setConvers ] = useState([])
//     const [ converId, setConverId ] = useState(null)
//     const [ searcher, setSearcher ] = useState('convers')
    
//     const conversURL = config.converURL
//     const messagesURL = config.messagesURL

//     const handleSearcher = (prop) => {
//         setSearcher(prop)
//     }

//     const fetchConvers = async () => {
//         try {
//             const response = await fetch(conversURL, {
//                 method: 'GET',
//                 credentials: 'include',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 }
//             })
//             if(response.ok){
//                 const data = await response.json()
//                 setConvers(data)
//                 return convers
//             } else {
//                 setConvers([])
//             }
//         } catch (error) {
//             console.log(error)
//         }
     
//     }
    
//     const fetchMessagesByConverId = async (converId) => {
//         try {
//             const existingConver = convers.find( conver => conver.converId == converId)

//         if(existingConver && existingConver.messages &&  existingConver.length > 0){
//             return existingConver.messages
//         } else {
//             const response = await fetch(messagesURL, {
//                 method: 'GET',
//                 credentials: 'include',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 }
//             })
//             if(response.ok){
//                 const data = await response.json()
//                 setConverId(converId)
//                 setConvers((prevConvers) => {
//                     prevConvers.map( conver => 
//                         conver.conver_id == converId
//                         ? {...conver, messages: data.messages}
//                         : conver
//                     )
//                 })
//             }
//         }
//         } catch (error) {
//             console.log(error)
//         }
//     }
    
//     const contextValue = {
//         convers,
//         converId,
//         searcher,
//         fetchConvers,
//         handleSearcher,
//         fetchMessagesByConverId,
//     }
    
    
//     const contextValue = {}
    
//     return (
//         <Context.Provider value={contextValue}>
//             {children}
//         </Context.Provider>
//     );
// }

// export const useConver = () => {
//     return useContext(Context)
// }

// export default ConverContext

