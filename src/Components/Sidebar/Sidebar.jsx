import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import NavBar from '../NavBar/NavBar.jsx'
import ConversationsList from '../Conversations/ConversationsList.jsx'
import { useConver } from '../../Context/ContextProvider.jsx'

const Sidebar
 = () => {
    
    const { fetchConvers, fetchMessagesByConverId, convers } = useConver()
    const [ converId, setConverId ] = useState(null)
    

    
    useEffect(() => {
        fetchConvers()
    }, []);

    useEffect(() => {
        
        if(converId){
            fetchMessagesByConverId(converId)
        }
        
    }, [converId]);


    return (
        <Box sx={{
            boxSizing: 'border-box',
            backgroundColor: 'primary.main',
            display: 'flex',
            flexDirection: 'column',
            width: '400px',
            height: '100%',
            borderRight: '1px solid',
            borderColor: 'primary.light'
        }}>
            <NavBar />
            
            <ConversationsList convers={convers} onSelectConver={setConverId}/>
        </Box>
    )
}

export default Sidebar

