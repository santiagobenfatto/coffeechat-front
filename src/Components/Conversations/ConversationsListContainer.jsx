import { Box } from '@mui/material'
import NavBar from '../NavBar/NavBar.jsx'
import ConversationsList from './ConversationsList.jsx'

const ConversationsListContainer = () => {
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
            <ConversationsList />
        </Box>
    )
}

export default ConversationsListContainer
