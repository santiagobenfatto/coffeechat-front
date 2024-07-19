import { Box, IconButton, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const ChatInput = () => {
    return (
        <Box component='form' sx={{
            backgroundColor: 'primary.main',
            boxSizing: 'border-box',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '100%',
            height:'100px'
        }}>
            <TextField maxRows={3}  size='small' placeholder='Escribe un mensaje' focused={false} sx={{
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
            <IconButton sx={{
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
