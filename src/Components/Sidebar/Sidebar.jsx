import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useConver } from '../../Context/ConverContext.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import Contacts from '../Contacts/Contacts.jsx'
import SearchContainer from '../SearchMenu/SearchContainer.jsx'
import ConversationsList from '../Conversations/ConversationsList.jsx'

const Sidebar = () => {
    
    const { fetchConvers, fetchMessagesByConverId, convers, searcher } = useConver()
    const [ converId, setConverId ] = useState(null)

    const component = {
        convers: <ConversationsList convers={convers} onSelectConver={setConverId}/>,
        contacts: <Contacts />
    }
    console.log(searcher)//'onClick' no string

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
            <SearchContainer />
            {component[searcher]}
        </Box>
    )
}

export default Sidebar

