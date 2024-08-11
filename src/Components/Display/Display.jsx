import { Container } from '@mui/material'
import MainContent from '../MainContent/MainContent.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'


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
            <Sidebar />
            <MainContent />
          </Container>
    )
}

export default Display
