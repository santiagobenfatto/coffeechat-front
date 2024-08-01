import { useState } from 'react'
import { Box } from '@mui/material'
import ChatMessages from './ChatMessages.jsx'

const ChatMessagesContainer = () => {
    const [isUser, setIsUser] = useState(false)

        
    return (
        <Box sx={{
            backgroundColor: 'primary.light',
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end'
        }}>
            <ChatMessages messages={messages}/>
            
        </Box>
    );
}

export default ChatMessagesContainer;
