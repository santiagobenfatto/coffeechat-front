import { useEffect, useState } from 'react'
import { useConver } from '../../Context/ContextProvider.jsx'
import MessageList from './MessageList.jsx'
import { Box } from '@mui/material'

const MessageContainer = () => {
    //consumir datos del usuario para pasarlo por props.
    const { convers, converId } = useConver()
    const [ messages, setMessages ] = useState([])

    useEffect(() => {
        if(Array.isArray(convers)){
            const selectedConver = convers.find((conver) => conver.conver_id === converId)
            setMessages(selectedConver && Array.isArray(selectedConver.messages) ? selectedConver.messages : [])
        } else{
            setMessages([])
        }
        
    }, [convers, converId])
    /*
    MESSAGES ES UN ARRAY DE MENSAJES, FALTA UN MAP EN ALGUN LADO.
    */
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
