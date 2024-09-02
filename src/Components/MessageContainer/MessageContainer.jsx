import { useEffect, useState } from 'react'
import MessageList from './MessageList.jsx'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'

const MessageContainer = ({converID}) => {
    
    
    const conver = useSelector((state) => 
        state.messages.conversations.find(conver => conver.converID == converID) )
    const messages = conver ? conver.text : []
    

    return (
        <Box sx={{
            backgroundColor: 'primary.light',
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end'
        }}>
            <MessageList messages={messages} />
        </Box>
    )
}

export default MessageContainer
