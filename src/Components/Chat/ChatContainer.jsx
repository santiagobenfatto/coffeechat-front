import { Box } from '@mui/material'
import NavBar from '../NavBar/NavBar.jsx'
import { SVGCoffeeBg } from '../../assets/SVGbackground.js'
import ChatInput from './ChatInput.jsx'
import ChatMessagesContainer from '../ChatMessages/ChatMessagesContainer.jsx'

const ChatContainer = () => {
    return (
        <Box sx={{
            boxSizing: 'border-box',
            //backgroundImage: `url(${SVGCoffeeBg})`,
            backgroundColor: 'primary.light',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: '100%',
        }}>
            <NavBar isChat/>
            <ChatMessagesContainer />
            <ChatInput />
        </Box>
    )
}

export default ChatContainer
