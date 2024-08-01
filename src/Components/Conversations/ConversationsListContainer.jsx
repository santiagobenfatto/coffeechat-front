import { Box } from '@mui/material'
import NavBar from '../NavBar/NavBar.jsx'
import ConversationsList from './ConversationsList.jsx'
import { useConver } from '../../Context/ContextProvider.jsx'

const ConversationsListContainer = () => {
    
    const { fetchConvers, convers } = useConver()
    

    
    useEffect(() => {
        
        fetchConvers()
        
    }, []);


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
            <ConversationsList convers={convers}/>
        </Box>
    )
}

export default ConversationsListContainer
