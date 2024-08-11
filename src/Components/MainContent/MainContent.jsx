import { Box } from '@mui/material'
import NavBar from '../NavBar/NavBar.jsx'
import InputArea from '../InputArea/InputArea.jsx'
import MessageContainer from '../MessageContainer/MessageContainer.jsx'

const MainContent = () => {
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
            <MessageContainer />
            <InputArea />
        </Box>
    )
}

export default MainContent
