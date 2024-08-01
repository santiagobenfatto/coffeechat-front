import { Container } from '@mui/material'
import ChatContainer from '../Chat/ChatContainer.jsx'
import ConversationsListContainer from '../Conversations/ConversationsListContainer.jsx'


const Display = () => {
    
  return (
        <Container disableGutters maxWidth='xl' sx={{
            boxSizing: 'border-box',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'secondary.dark',
            width: '100%',
            height: '100%',
            maxHeight: '100%'
          }}>
            <ConversationsListContainer />
            <ChatContainer />
          </Container>
    )
}

export default Display
