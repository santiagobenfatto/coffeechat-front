import { useState } from 'react'
import { socket } from '../../socket/socket'
import SendIcon from '@mui/icons-material/Send'
import { Box, IconButton, TextField } from '@mui/material'
//import { useConver } from '../../Context/ContextProvider.jsx'

//Pasar info a través de props
const ChatInput = () => {

    const [ message, setMessage ] = useState({
        sender: '',
        receiver: '',
        converId: '',
        text: '',
        date: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(message){
            socket.emit('privateMessage', message)
            //Clean fields
            setMessage({
                sender: '',
                receiver: '',
                converId: '',
                text: '',
                date: ''
            })
        }
    }

    const handleChange = (e) => {
        setMessage(prevMessage => ({
            ...prevMessage,  // Mantén el resto de las propiedades
            text: e.target.value  // Actualiza solo el texto
        }))
    }


    return (
        <Box 
            component='form'
            onSubmit={handleSubmit}
            sx={{
                backgroundColor: 'primary.main',
                boxSizing: 'border-box',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                width: '100%',
                height:'100px'
            }}>
            <TextField
                maxRows={3}
                size='small'
                placeholder='Escribe un mensaje'
                focused={false}
                type='text'
                value={message.text}
                onChange={() => handleChange}
                sx={{
                    backgroundColor: 'primary.light',
                    opacity: '0.8',
                    width: '100%',
                    border: 'none',
                    borderRadius: 2,
                    marginLeft: '20px',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                        border: 'none',
                        },
                        '&:hover fieldset': {
                        border: 'none',
                        },
                        '&.Mui-focused fieldset': {
                        border: 'none',
                        }
                    }
                }} />
            <IconButton
                type='submit'
                sx={{
                    color: 'secondary.main',
                    rotate: '-45deg',
                    mx: '8px',
                    ':hover': {
                        backgroundColor: 'primary.light'
                    }
            }}>
                <SendIcon />
            </IconButton>
        </Box>
    )
}

export default ChatInput
